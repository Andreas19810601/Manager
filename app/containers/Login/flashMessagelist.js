import React from 'react';
import FlashMessage from './FlashMessage';
import { connect } from 'react-redux'
import {deleteFlashMessage} from './actions'
import { createSelector, createStructuredSelector } from 'reselect';


/*const todoItems = todos.map((todo, index) =>
  // Only do this if items have no stable IDs
  <li key={index}>
    {todo.text}
  </li>
);*/

class FlashMessageList extends React.Component {
    
    render() {
        // const message = this.props.message.map(message => <FlashMessage key={this.props.message.id} message={this.props.message.text} />);
        const message = <FlashMessage key={this.props.message.id} message={this.props.message.text} deleteFlashMessage={deleteFlashMessage} />;
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

export default connect(mapStateToProps, {deleteFlashMessage})(FlashMessageList);