

import React from 'react';
import { FormattedMessage } from 'react-intl';

class Statistiken extends React.Component {
    
constructor(props) {
        super(props)
        this.state = {
            statistic: props.initialStatistics,
        };
       // setInterval(this.tick.bind(this), 5000);    
}
  render() {

    return (
      <div>
        <p><strong>Statistik:</strong><br/>
        last30days: <br/>
        Schreibgeschwindigkeit: {this.state.statistic.writespeed}<br/>
        Pausen: {this.state.statistic.break}<br/>
        Anmerkungen: {this.state.statistic.remarks}<br/>
        Total Statistik: {this.state.statistic.totalStatistics}</p>
      </div>
    );
}
}

export default Statistiken;