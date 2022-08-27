import React, {Component} from 'react';
import Track from './Track';
import './Main.scss';

class Participant extends Component {
    constructor(props) {
        super(props);
      
        const existingPublications = Array.from(this.props.participant.tracks.values());
        const existingTracks = existingPublications.map(publication => publication.track);
        const nonNullTracks = existingTracks.filter(track => track !== null)
      
        this.state = {
          tracks: nonNullTracks
        }
    }

    componentDidMount() {
        if (!this.props.localParticipant) {
          this.props.participant.on('trackSubscribed', track => this.addTrack(track));
        }
    }

    addTrack(track) {
        this.setState({
          tracks: [...this.state.tracks, track]
        });
    }
      
    render() {
        return ( 
          <div className="participant" id={this.props.participant.identity}>
            <div className="identity">{ this.props.participant.identity}</div>
            { 
              this.state.tracks.map(track => 
                <Track key={track} filter={this.state.filter} track={track}/>)
            }
          </div>
        );
    }


}

export default Participant;