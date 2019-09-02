import React, {Component} from 'react';
// it's just an alias for `withSoundCloudAudio` but makes code clearer
// the list of available icons
// some track meta information
import { Icon } from 'antd'
class Player extends Component {
    state = {
        progress: 0,
    };

    componentDidMount() {
        this.audio = new Audio();
        this.audio.src = this.props.src;
        this.audio.ontimeupdate = this.onProgress;
        this.audio.oncanplay = this.onCanPlay;
    }

    onClickPlay = () => {
        this.audio.play()
        console.dir(this.audio);
        
    }

    onClickPause = () => {
        this.audio.pause()
        
    }

    onProgress = () => {
        this.setState({ currentTime:this.audio.currentTime });
        console.log(this.state);
    }

    onCanPlay = () => {
        this.setState({ duration: this.audio.duration })
    }



    render() {
        const {currentTime, duration} = this.state;
        const progress = (currentTime * 100) / duration;
        let time = (currentTime/60) ;
        console.log(progress)
        return (
            <>
                <button className = "play" onClick={this.onClickPlay}
                >
                  
                  <Icon type="play-circle" theme="filled" />
          
                </button>

                <button className = "pause" onClick = {this.onClickPause}>
                <Icon type="pause-circle" />
                 
                    Pause

                </button>
                <br/>
                <progress value={progress} max={100} />
                <p style={{color: 'white'}}>{(time || 0).toFixed(2)} / {(duration || 0).toFixed(2)}</p>
            </>
        );
    }
};


export default Player;