import React from 'react';
import { FormattedMessage } from 'react-intl';

class Moderator extends React.Component {
    
constructor(props) {
        super(props)
        this.state = {
            moderator: props.initialModerator
        };   
}

  render() {

    return (
      <div>
        <p><strong>Moderator:</strong> {this.state.moderator.moderatorName}<br/>
        Bilder: {this.state.moderator.picturesModerator}<br/>
        Infos: {this.state.moderator.infosModerator}<br/>
        InfoBox: {this.state.moderator.infoboxModerator}<br/>
        
        </p>
      </div>
    );
  }
}
export default Moderator;