/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import Header from 'components/Header';
import Footer from 'components/Footer';
import Center from 'components/Center';
import ButtonCounter from 'components/ButtonCounter';
import withProgressBar from 'components/ProgressBar';
import Ranking from 'components/Ranking';
import Chattername from 'components/Chattername';
import Statistiken from 'components/Statistiken';
import Customer from 'components/Customer';
import Moderator from 'components/Moderator';

const AppWrapper = styled.div`
  max-width: calc(768px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
`;

//Array ranked users
let initialRankers = 
    [
      { id: 1, name: "Hugo" },
      { id: 2, name: "Admin"},
      { id: 3, name: "Member"}
    ];
//Dashboard Moderator Chatname and statistic together?
let initialChatname= "TestChatName";

//Dashboard Moderator statistic
let statistics = {
  writespeed: 5,
  break: 4,
  remarks: "nichts besonderes",
  totalStatistics: "total"
};

//Moderator Kude
let initialCustomer = {
  customerName: "namePlaceholder",
  pictures: "picPlaceholder",
  infos: "infoPlaceholder",
  infobox: "somethingPlaceholder",
  toEdit: "schomethingToEdit"
};
//Moderator Kude Verhalten
let initialCustomerBehavior={
  customerRegDate: "DateFormat",
  customerActivity: "Berechnung 24/7", 
  customerActivChats: "Wieviele Chats sind < x Date"
};
//Moderator Moderator
let initialModerator = {
  moderatorName: "ModeratorName",
  picturesModerator: "picModeratorPlaceholder",
  infosModerator: "infosModeratorPlaceholder",
  infoboxModerator: "infoboxModeratorPlaceholder"
};




export class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0,
            rankers: initialRankers,
            chatname: initialChatname,
            statistics: statistics,
            customer: initialCustomer,
            moderator: initialModerator,
            customerBeavior: initialCustomerBehavior,
        }
    }

    render() {
      return (
        <AppWrapper>
          <Helmet titleTemplate="%s - Webmanager" defaultTitle="Webmanager"/>
          <Center />
          <ButtonCounter incCounter={value => {this.setState({count: this.state.count + value,})}}/>
          <div>
            {this.state.count}
          </div> 
          <Ranking initialRankers={this.state.rankers}/>
          <Chattername initialChatname={this.state.chatname}/>
          <Statistiken initialStatistics={this.state.statistics}/>
          <Customer initialCustomer={this.state.customer} initialCustomerBehavior={this.state.customerBeavior}/>
          <Moderator initialModerator={this.state.moderator}/>
        </AppWrapper>
      );
    }
}

App.propTypes = {
  children: React.PropTypes.node,
};

export default withProgressBar(App);
