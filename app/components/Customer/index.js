import React from 'react';
import { FormattedMessage } from 'react-intl';
import WrittenText from './WrittenText';

class Customer extends React.Component {
    
constructor(props) {
        super(props)
        this.state = {
            customer: props.initialCustomer,
            customerBehavior: props.initialCustomerBehavior,
            infotext:'',
            writtenText: [],
        };
       // setInterval(this.tick.bind(this), 5000);    
       //this.handleChangeInfotext = this.handleChangeInfotext.bind(this);
       this.handleSubmitInfotext = this.handleSubmitInfotext.bind(this);
       this.updateWrittenText = this.updateWrittenText.bind(this);
}

handleChangeInfotext = (event) => {
  this.setState({infotext: event.target.value.substr(0,255)})
}

handleSubmitInfotext(event){
  //alert("Folgende Nachricht wurde abgesendet: " + this.state.infotext);
  event.preventDefault();
  this.updateWrittenText(this.state.infotext);
}

updateWrittenText(text){
  let arr = this.state.writtenText;
  arr.push(text);
  this.setState({writtenText:arr});
  this.setState({infotext:''})
}

updateSubmits(text, i){
  return(
    <div>
      <WrittenText key={i} initialInputText={text}/>
    </div>
  );}

  render() {
    return (
      <div>
        <p><strong>Kunde:</strong> {this.state.customer.customerName}<br/>
        Bilder: {this.state.customer.pictures}<br/>
        Info: {this.state.customer.infos}<br/>
        Infobox: {this.state.customer.infobox}</p>
        <form onSubmit={this.handleSubmitInfotext}>
            <label>
                Infotext: 
                <input type='text' 
                  value={this.state.infotext}
                  onChange={this.handleChangeInfotext}
                  />
            </label>
            <input type="submit" className="btn btn-primary" value="Submit" />
        </form>
        <br/>
        <div>
          {this.state.writtenText.map(this.updateSubmits)}
        </div>
        <p>
        Zum bearbeiten: {this.state.customer.toEdit}<br/>
        Portalverhalten von {this.state.customer.customerName}:<br/>
        Registrierungsdatum: {this.state.customerBehavior.customerRegDate}<br/>
        Aktivität der letzten sieben Tage: {this.state.customerBehavior.cutomerActivity}<br/>
        Anzahl der vom Kunden aktiven Chats: {this.state.customerActivChats}<br/>
        </p>
      </div>
    );
  }
}
export default Customer;