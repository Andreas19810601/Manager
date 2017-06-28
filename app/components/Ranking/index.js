import React from 'react';
import { FormattedMessage } from 'react-intl';
import Ausgabe from './Ausgabe';

class Ranking extends React.Component {
    
constructor(props) {
        super(props)
        this.state = {
            rankers: props.initialRankers
        };
        setInterval(this.newRanks.bind(this), 5000);    
}


newRanks() {
        this.setState({
            rankers:  
    [{
        id: 0,
        name: "HAHA"
      },{
        id: 1,
        name: "HAHA"
      },{
        id: 2,
        name: "Admi"
      },{
        id: 3,
        name: "Memberasd"
      },{
        id: 4,
        name: "sadfsg"
      }]

        });
}

  render() {

    return (
      <div>
        <p><strong>Ranking:</strong></p>
        {this.state.rankers.map((rankers) => {
            return <Ausgabe ausgabe={rankers} key={rankers.id}/>
        })}
      </div>
    );
  }
}

export default Ranking;