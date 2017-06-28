import React from 'react';
import { FormattedMessage } from 'react-intl';

class Ausgabe extends React.Component {
    
constructor(props) {
        super(props)      
}

  render() {
    return (
      <div>
        <li>{this.props.ausgabe.name} {this.props.ausgabe.id}</li>
      </div>
    );
  }
}

export default Ausgabe;