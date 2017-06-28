import React from 'react';
import { FormattedMessage } from 'react-intl';
import { applyMiddleware, combineReducers, createStore } from "redux";
import { isFSA } from 'flux-standard-action';
//import logger from "redux-logger";
//import { createLogger } from 'redux-logger';

class Chattername extends React.Component {



	constructor(props) {
		super(props)
		
		this.state = {
			chatname: props.initialChatname
		};

		const CHANGE_NAME = {
			type: 'CHANGE_NAME',
			payload: "Will"
		}

		const CHANGE_AGE = {
			type: 'CHANGE_AGE',
			payload: '35'
		}

		const userReducer = (state = {}, action) => {
			switch (action.type) {
				case "CHANGE_NAME": {
					state = { ...state, name: action.payload }
					break;
				}
				case "CHANGE_AGE": {
					state = { ...state, age: action.payload }
					break;
				}
			}
			return state;
		}

		const tweetsReducer = (state = [], action) => {
			return state;
		}
		


		const reducers = combineReducers({
			user: userReducer,
			tweets: tweetsReducer,
		})

		const middleware = applyMiddleware()

		const store = createStore(reducers);

		store.subscribe(() => {
			console.log("store change", store.getState())
		})

		store.dispatch(CHANGE_NAME)
		store.dispatch(CHANGE_AGE)
		store.dispatch({ type: "CHANGE_AGE", payload: 36 })

	}

	render() {

		return (
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
				<div>
					<p><strong>Chattername:</strong> {this.state.chatname}</p>
				</div>
			</div>
		);
	}
}

export default Chattername;