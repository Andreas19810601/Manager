    import React from "react";
    import { FormattedMessage } from 'react-intl';


    class WrittenText extends React.Component{
    
        constructor(props){
            super(props);
            this.state = {
            };
            //setInterval(this.tick.bind(this), 1000);
        }

        render(){
            return (
                <ul>
                    <li>{this.props.initialInputText}</li>
                </ul>
            );    
        }
        
    
    }
    
    export default WrittenText;