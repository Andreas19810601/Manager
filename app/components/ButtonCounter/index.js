import React from "react";
import { FormattedMessage } from 'react-intl';


let ButtonCounter = React.createClass({

  add: function () {
    this.props.incCounter(1)
  },

  render: function () {
    return (
      <div>
        {this.props.asd}
        <button onClick={this.add}>
          +
        </button>
      </div>
    );
  }
});
export default ButtonCounter;

