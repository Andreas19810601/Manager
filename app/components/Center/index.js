/*

import React from 'react';
import { FormattedMessage } from 'react-intl';

class Center extends React.Component { // eslint-disable-line react/prefer-stateless-function
    
    constructor(props){
            super();
            this.state = {
                correntTime: new Date().toLocaleTimeString()
            };
            setInterval(this.tick.bind(this), 1000);
        }
  render() {
    return (
      <div>
        <p>HALLO du Da !!!</p>
      </div>
    );
  }
}

export default Center;
*/    
    

    import React from "react";
    import { FormattedMessage } from 'react-intl';


    class Center extends React.Component{
    
        constructor(props){
            super();
            this.state = {
                age: 3,
                correntTime: new Date().toLocaleTimeString()
            };
            //setInterval(this.tick.bind(this), 1000);
        }
        
        welcome(props) {
            return <h1>Hello, {props.name}</h1>;
        }
        
        tick() {
            this.setState({
                correntTime: new Date().toLocaleTimeString()
            });
        }
        
 
        
        render(){
            return (
                <div>
                    <h2>It is {this.state.correntTime}.</h2>
                    <p> Hier ist die Zeit!</p>
                </div>
            );    
        }
        
    
    }
    
    export default Center;