/*
 * FeaturePage
 *
 * List all the features
 */
import React from 'react';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { browserHistory, Router, Route, Link, withRouter } from 'react-router';
import { connect } from 'react-redux'
import H1 from 'components/H1';
import messages from './messages';
import List from './List';
import ListItem from './ListItem';
import ListItemTitle from './ListItemTitle';
import { Col } from 'react-bootstrap';
import { createSelector, createStructuredSelector } from 'reselect';
import FlashMessageList from 'containers/Login/flashMessagelist';
//import { addFlashMessages } from './actions';

class FeaturePage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    
        super(props)
        
        this.state = {
            message: "Hallo hier ist der erste text"
        };
        
    }
    

  // Since state and props are static,
  // there's no need to re-render this component
  shouldComponentUpdate() {
    return false;
  }
  render() {
    
    return (
      <div>
        <Helmet
          title="Feature Page"
          meta={[
            { name: 'description', content: 'Feature page of React.js Boilerplate application' },
          ]}
        />
        <div>
          <div className="container">


            <nav className="navbar navbar-default">
              <div className="container-fluid">
                <div className="navbar-header">
                  <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                  </button>
                  <a className="navbar-brand" href="#">Webmanager</a>
                </div>
                <div id="navbar" className="navbar-collapse collapse">
                  <ul className="nav navbar-nav">
                    <li className="active"><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                    <li className="dropdown">
                      <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span className="caret"></span></a>
                      <ul className="dropdown-menu">
                        <li><a href="#">Action</a></li>
                        <li><a href="#">Another action</a></li>
                        <li><a href="#">Something else here</a></li>
                        <li role="separator" className="divider"></li>
                        <li className="dropdown-header">Nav header</li>
                        <li><a href="#">Separated link</a></li>
                        <li><a href="#">One more separated link</a></li>
                      </ul>
                    </li>
                  </ul>
                  <ul className="nav navbar-nav navbar-right">
                    <li className="active"><a href="./">Default <span className="sr-only">(current)</span></a></li>
                    <li><a href="../navbar-static-top/">Static top</a></li>
                    <li><a href="../navbar-fixed-top/">Fixed top</a></li>
                  </ul>
                </div>
              </div>
            </nav>

            {/*<div className="jumbotron">
          <h1>Navbar example</h1>
          <p>This example is a quick exercise to illustrate how the default, static navbar and fixed to top navbar work. It includes the responsive CSS and HTML, so it also adapts to your viewport and device.</p>
          <p>
            <a className="btn btn-lg btn-primary" href="../../components/navbar" role="button">View navbar docs &raquo;</a>
          </p>
        </div>*/}

          </div>
        </div>

        <div>
          <Col xs={4} md={2} >
            <style>{"\
                .center{\
                  text-align: center;\
                  color: white;\
                }\
              "}</style>
              <style>{"\
                .chat{\
                  text-align: center;\
                  border-style: solid;\
                  color: #ec4017;\
                  position: absolute;\
                  padding-top: 50px;\
    padding-right: 100%;\
    padding-bottom: 20px;\
    padding-left: 80px;\
                }\
              "}</style>
              <style>{"\
                .links{\
                  text-align: left;\
                  color: #ec4017;\
                }\
              "}</style>
              <style>{"\
                .rechts{\
                  text-align: right;\
                  color: #000000;\
                }\
              "}</style>

            <form className='center' style={{ backgroundColor: "#ec4017" }}>
              <p >Kunde</p>
              <p >-Bilder</p>
              <p >-Profil Infos</p>
              <p >-Infobox</p>
              <p >zum bearbeiten</p>
              <p ></p>
              <p >Details zum</p>
              <p >Chatverhalten</p>
              <p >Registrierdatum</p>
              <p >Besuchsaktivität</p>
              <p >Portal</p>
              <p >Chatter</p>
              <p >etc</p>
              <p ></p>
              <p ></p>
              <p ></p>
              <p >s</p>
              <p >Portal</p>
              <p >Chatter</p>
              <p >etc</p>
              <p ></p>
              <p ></p>
              <p ></p>
              <p >s</p>
              <p >Portal</p>
              <p >Chatter</p>
              <p >etc</p>
              <p ></p>
              <p ></p>
              <p ></p>
              <p >s</p>
            </form>
          </Col>
          <Col xs={10} md={8} >
            <form className='chat col-sm-12' style={{ backgroundColor: "#feffc8" }}>
              <div>
               <p className='links'>Hi, wie geht es Dir?</p>
               <p className='rechts'>Mir geht es gut, danke.</p>
               <p className='links'>Blablabla</p>
               <p className='links'>Blablabla</p>
               <p className='rechts'>Hier ist das Wetter super :D</p>
               <p className='links'>Hi, wie geht es Dir?</p>
               <p className='rechts'>Mir geht es gut, danke.</p>
               <p className='links'>Blablabla</p>
               <p className='links'>Blablabla</p>
               <p className='rechts'>Hier ist das Wetter super :D</p>
               <p className='links'>Hi, wie geht es Dir?</p>
               <p className='rechts'>Mir geht es gut, danke.</p>
               <p className='links'>Blablabla</p>
               <p className='links'>Blablabla</p>
               <p className='rechts'>Hier ist das Wetter super :D</p>
               </div>
            </form>
          </Col>
          <Col xs={4} md={2}>
             <form className='center bottom-align-text' style={{ backgroundColor: "#ec4017" }}>
              <p >Moderator</p>
              <p >{this.props.user.displayName}</p>
              <p >-Bilder</p>
              <p >-Profil Infos</p>
              <p >zum bearbeiten</p>
              <p >Chatverhalten</p>
              <p >für den</p>
              <p >nächsten Chatter</p>
              
              <p >etc</p>
              <p ></p>
              <p >etc</p>
              <p >etc</p>
              <p >etc</p>
            </form>
          </Col>
        </div>
        <div>
          <Col xs={4} md={2} >
            <style>{"\
                .center{\
                  text-align: center;\
                  color: white;\
                }\
              "}</style>
            <form className='center' >
            </form>
          </Col>
          <Col xs={10} md={8} >
            <form>
                <textarea type='text' className="form-control" id="usr" />
            </form>
          </Col>
          <Col xs={4} md={2}>
            <form className='center' >
              
            </form>
          </Col>
          <Col xs={4} md={2} >
            <style>{"\
                .center{\
                  text-align: center;\
                  color: white;\
                }\
              "}</style>
            <form className='center' >
            </form>
          </Col>
          <Col xs={10} md={8} >
            <form>
                <FlashMessageList />
            </form>
          </Col>
          <Col xs={4} md={2}>
            <form className='center' >
              
            </form>
          </Col>
        </div>
      </div>
    );
  }
}

const makeSelectUser = () => createSelector(
  (state) => state.get('login'),
  (state) => state.get('user')
);

// const makeSelectorFlashMessage = () => createSelector(
//   (state) => state.get('flashMessage')
// );

const mapStateToProps = createStructuredSelector({
  user: makeSelectUser(),
  //flashMassage : makeSelectorFlashMessage()
});

export default withRouter(connect(mapStateToProps)(FeaturePage))