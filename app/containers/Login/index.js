/*
 * Login
 *
 * List all the features
 */
import React from 'react';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { requestJsonPost } from 'containers/App/functions';
import H1 from 'components/H1';
import Chattername from 'components/Chattername';
import { browserHistory, Router, Route, Link, withRouter } from 'react-router'
import { connect } from 'react-redux'
import { setUser, addFlashMessage } from './actions'
import { createSelector, createStructuredSelector } from 'reselect';
import FlashMessageList from './flashMessagelist';
//import {reducers} from 'components/Chattername';

/*
requestJsonPost('/api/user').then(
    dispatch(res.user)
)
*/

/*
if state.user == null
    returtn <div>bist nicht eingeloggt, wirst auf /login weitergeleitet in 5 sec.</div>
*/
/*this.props.addFlashMessage({
    type:'succes',
    text:'sag mal was'
})*/
class Login extends React.Component { // eslint-disable-line react/prefer-stateless-function
    constructor(props) {
        super(props)

        this.state = {

            infotext: '',
            writtenText: [],
            webs: '',
            status: '',
            username: '',
            password: '',
        };
        // setInterval(this.tick.bind(this), 5000);    
        //this.handleChangeInfotext = this.handleChangeInfotext.bind(this);
        //this.handleSubmitInfotext = this.handleSubmitInfotext.bind(this);
        this.updateWrittenText = this.updateWrittenText.bind(this);


    }

    handleChangeUsername = (event) => {
        this.setState({ username: event.target.value.substr(0, 255) })
    }

    handleChangePassword = (event) => {
        this.setState({ password: event.target.value.substr(0, 255) })
    }

    handleSubmitLogin = (event) => {
        event.preventDefault();
        this.updateWrittenText(this.state.username);
        this.updateWrittenText(this.state.password);
        console.log(this.state.username + ' ' + this.state.password);
        this.getData();
    }

    getData = () => {
        const dispatch = this.props.dispatch;

        fetch('/api/login', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: this.state.username, password: this.state.password
            })
        })
            .then(function (res) { return res.json(); })
            .then(function (res) {
                if (res.successful) {
                    dispatch(setUser(res.user));
                    dispatch(addFlashMessage({
                        type: 'success',
                        text: "huhu erfolgreich eingeloggt"
                    }));
                    // dispatch(addFlashMessage({
                    //     type: 'error',
                    //     text: "Falsch eingeloggt"
                    // }));
                    //redirect
                    //browserHistory.push('/features');
                } else {

                    console.log("If ist falsch")
                }
            })

    }





    /* 
        getData = () => {
        console.log(1);
        fetch('/api/login', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: this.state.username, password: this.state.password
            })
        })
        .then(function (res) { return res.text(); }).then(function (res) { console.log(res) })

    }


    requestJsonPost('/api/login', this.state.username, this.state.password)
    */


    updateWrittenText(text) {
        let arr = this.state.writtenText;
        arr.push(text);
        this.setState({ writtenText: arr });
        this.setState({ infotext: '' })
    }

    // Since state and props are static,
    // there's no need to re-render this component
    //  shouldComponentUpdate() {
    //    return false;
    // }

    render() {
        return (
            <div className="container">
                <Helmet
                    title="Feature Page"
                    meta={[
                        { name: 'description', content: 'Feature page of React.js Boilerplate application' },
                    ]}
                />
                <style>{"\
                .center{\
                  text-align: center;\
                  color: black;\
                }\
              "}</style>
                <form className='center' onSubmit={this.handleSubmitLogin}>

                    <h2 className="form-signin-heading">Bitte melde dich an</h2>
                    <label htmlFor="usr">
                        <input type="text" id="usr" className="form-control" placeholder="Email-Adresse" value={this.state.username} onChange={this.handleChangeUsername} />
                    </label>
                    <br />

                    <label htmlFor="pwd">
                        <input type="password" id="eingabefeldPasswort" className="form-control" placeholder="Passwort" required value={this.state.password} onChange={this.handleChangePassword} />
                    </label>
                    <br />
                    <input type="submit" className="btn btn-primary" value="Anmelden" />

                    {this.props.user && <div>
                        <span>Benutzer:</span> {this.props.user.displayName}
                    </div>}
                    <FlashMessageList />
                </form>
            </div>
        );
    }
}

// Login.propTypes = {
//     addFlashMessage: React.PropTypes.func.isRequired
// }



const makeSelectUser = () => createSelector(
    (state) => {
        //console.log('1', state)
        return state.get('login');
    },
    (state) => {
        //console.log('2', state)
        return state.get('user');
    }
);

const mapStateToProps = createStructuredSelector({
    user: makeSelectUser()
});

export default withRouter(connect(mapStateToProps)(Login))
