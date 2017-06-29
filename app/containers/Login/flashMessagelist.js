import React from 'react';
import FlashMessage from './FlashMessage';
import { connect } from 'react-redux'
import deleteFlashMessage from './FlashMessage'
import { createSelector, createStructuredSelector } from 'reselect';


/*const todoItems = todos.map((todo, index) =>
  // Only do this if items have no stable IDs
  <li key={index}>
    {todo.text}
  </li>
);*/

class FlashMessageList extends React.Component {
    
    render() {
        console.log(this.props.message);
        console.log(this.props.message.id);
        // const message = this.props.message.map(message => <FlashMessage key={this.props.message.id} message={this.props.message.text} />);
        const message = <FlashMessage key={this.props.message.id} message={this.props.message.text} />;
        return (
            <div>
                {message}
            </div>
        );
    }
}

const makeSelectMessage = () => createSelector(
    (state) => state.get('login'),
    (state) => state.get('message')
);

(state) => {
        //console.log('2', state)
        return state.get('user');
    }

const mapStateToProps = createStructuredSelector({
    message: makeSelectMessage()
});

export default connect(mapStateToProps)(FlashMessageList);