const linkedin_article_1 = <a href='https://www.linkedin.com/pulse/first-tech-internship-takeways-andrew-growney/'>Linkedin Article</a>
const subSections = [
    {
        left:{
            type: "title-subtitle",
            title: "3.83",
            subtitle: "GPA",
        },
        right: {
            type: "list",
            list: [
                "EECS 678: Operating Systems",
                "EECS 662: Programming Languages",
                "EECS 645: Computer Architecture",
                "PHSX 511: Quantum Mechanics",
                "EECS 581: Computer Science Senior Design",
                "EECS 560: Data Structures",
                "EECS 510: Intro to Theory of Computing",
                "EECS 448: Software Engineering I",
            ]
        },
        style: {
            height: '20em'
        }
    },
    {
        left: {
            type: "photo",
            source: "/../img/cerner.jpg",

        },
        right: {
            type: "title-text",
            title: "Software Engineer Internship, Cerner Corporation",
            text: ["Uplifted components to utilize Fusion UI framework based off react. Used a Jira and Git workflow utilizing Jenkins for continuous deployment. The internship experience at Cerner gave me a great feel for the software engineering industry. My ",
                linkedin_article_1,    
                " notes the biggest takeaways from this internship."
            ]
        },
        style: {
            height: '50em'
        }
    }
]

class SubsectionObject extends React.Component{

    constructor(props){
        super(props);
        this.type = this.props.subObject.type;
    }

    render(){
        if(this.type == 'title-subtitle'){
            return(<div className='subsection-title-subtitle'>
                <h3 className='title'>{this.props.subObject.title}</h3>
                <h6 className='subtitle'>{this.props.subObject.subtitle}</h6>
            </div>)
        }else if(this.type === 'photo'){
            return (<div className='subsection-photo'><img src={this.props.subObject.source} /></div>)
        }else if(this.type === 'list'){
            return (<div className='subsection-list'>{this.props.subObject.list.map((el) => (<li>{el}</li>))}</div>)
        }else if(this.type === 'title-text'){
            return(<div className='subsection-title-text'>
                <h3 className='title'>{this.props.subObject.title}</h3>
                <p>{this.props.subObject.text.map( (el) => <span>{el}</span>)}</p>
            </div>)
        }else{
            return(<div>Invalid</div>)
        }
    }
}


class Subsection extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
        <div className='subsection' style={this.props.section.style}>
            <div className='sub-left'><SubsectionObject subObject={this.props.section.left}/></div>
            <div className='sub-right'><SubsectionObject subObject={this.props.section.right}/></div>
        </div>)
    }
}

class Header extends React.Component{
    constructor(props){
        super(props);
        this.state = { isTop: true };
        this.onScroll = this.onScroll.bind(this);
    }
      
    componentDidMount() {
        document.addEventListener('scroll', () => {
        const isTop = (screen.width <= 480) ? (window.scrollY < 150) : (window.scrollY < 250);
        if (isTop !== this.state.isTop) {
                  this.onScroll(isTop);
        }
        });
    }
      
    onScroll(isTop) {
        this.setState({ isTop });
    }

    render(){
        return this.state.isTop ?
        (<div className='header-expanded'>
                <h3 id='name'>
                    <span id='first_name'>Andrew</span>
                    <br></br>
                    <span id='last_name'>Growney</span>
                    <br></br>
                    <span id='job'>Software Engineering</span>
                </h3>
                <img id='pro_pic' src='/../img/pro_pic.jpg' />
        </div>)
        : (<div className='header-collapsed'>
            <h3 id='name'>
                <span id='first_name'>Andrew</span> <span id='last_name'>Growney</span>
                <br></br>
                <span id='job'>Software Engineering</span>
            </h3>
        </div>)
    }
}

class Main extends React.Component{

        constructor(props){
            super(props);
            this.state = { isTop: true };
            this.onScroll = this.onScroll.bind(this);
        }
          
        componentDidMount() {
            document.addEventListener('scroll', () => {
                const isTop = (screen.width <= 480) ? (window.scrollY < 5) : (window.scrollY < 250);
                if (isTop !== this.state.isTop) {
                      this.onScroll(isTop);
            }
            });
        }
          
        onScroll(isTop) {
            this.setState({ isTop });
        }
    render(){
        return this.state.isTop ? 
        (
            <div className='main-expanded'>{subSections.map((element) => <Subsection section={element} />)}</div>
        ):(
            <div className='main-collapsed'>{subSections.map((element) => <Subsection section={element} />)}</div>
        )
    }
}
class AboutMe extends React.Component{
    
    render(){
        return (
            <div>
                <Header />
                <Main />
            </div>
        )
    }
}

ReactDOM.render(<AboutMe />,document.getElementById('root'));
