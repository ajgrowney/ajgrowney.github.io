class Track extends React.Component{
    constructor(props){
        super(props);
        this.track = this.props.song.track;
        this.key = this.props.id;

    }
    componentWillReceiveProps(newProps){
        this.track = newProps.song.track;
        this.key = newProps.key;
    }
    render(){
        return(
            <button onClick={this.props.onClick} className="track-button">
                {this.track.track_name}
                <br></br>
                By: {this.track.artist_name}
            </button>
        )
    }
}


class LyricsDisplay extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            songs: this.props.songs,
            view: this.props.view
        }
        this.handleClick = this.props.handler;
    }

    componentWillReceiveProps(newProps){
        this.setState({
            songs: newProps.songs,
            view: newProps.view
        })
    }

    render(){
        if(this.state.view == "list"){
            return(<div>{this.state.songs.map((song) => <Track onClick={() => this.handleClick(song.track.track_id)} key={song.track.track_id} id={song.track.track_id} song={song} />)}</div>)
        }else if(this.state.view == "track"){
            return(<div className="lyrics_view">{this.state.songs}</div>)
        }else{
            return(<div></div>)
        }

    }
}

class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.handleClick = this.props.handler;
    }

    render(){
        return(
        <form action="javascript:void(0)" id="searchArea" onSubmit={() => this.handleClick(this.refs.trackSearch.value, this.refs.artistSearch.value)}>
            <div className="form-element">Song: <input type="text" ref="trackSearch" placeholder="Type a Track" /></div>
            <div className="form-element">Artist: <input type="text" ref="artistSearch" placeholder="Type an Artist" /></div>
            <br />
            <input value="Get Me My Lyrics" type="submit"/>
        </form>
        )


    }
}

const GetAPIKey = () => new Promise( (resolve) =>{resolve(
    swal({
        title: "MusixMatch API",
        text: "Enter your musixmatch api key: ",
        content: "input",
        button: true
    })
)});

class MainApp extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            songs: [],
            lyrics_view: undefined
        }

        GetAPIKey().then((response) => {console.log(response); this.apikey = response});
    }


    searchArtistTrack(track, artist){
        const self = this;
        $.ajax({
            type: "GET",
            data: {
                apikey: this.apikey,
                q_track: track,
                q_artist: artist,
                f_has_lyrics: 1,
                s_artist_rating: "asc",
                format:"jsonp",
                callback:"callback"
            },
            url: "http://api.musixmatch.com/ws/1.1/track.search",
            dataType: "jsonp",
            jsonpCallback: 'callback',
            contentType: 'application/json',
            success: function(data) {
                self.setState({
                    songs: data.message.body.track_list,
                    lyrics_view: "list"
                }) 
            },
            error: function(jqXHR, textStatus, errorThrown) {
                console.log(jqXHR);
                console.log(textStatus);
                console.log(errorThrown);
            }    
        });
    }
    getTrackById(track_id){
        const self = this;
        $.ajax({
            type: "GET",
            data: {
                apikey: this.apikey,
                track_id,
                format:"jsonp",
                callback:"callback"
            },
            url: "http://api.musixmatch.com/ws/1.1/track.lyrics.get",
            dataType: "jsonp",
            jsonpCallback: 'callback',
            contentType: 'application/json',
            success: function(data) {
                self.setState({
                    songs: data.message.body.lyrics.lyrics_body,
                    lyrics_view: "track"
                }) 
            },
            error: function(jqXHR, textStatus, errorThrown) {
                console.log(jqXHR);
                console.log(textStatus);
                console.log(errorThrown);
            }    
        });   
    }




    render() {
        return (
            <div>
                <SearchBar handler={this.searchArtistTrack.bind(this)} />
                <LyricsDisplay handler={this.getTrackById.bind(this)} view={this.state.lyrics_view} songs={this.state.songs}/>
            </div>
        );
    }
}

ReactDOM.render(<MainApp />,document.getElementById('root'));
