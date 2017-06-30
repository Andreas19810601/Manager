import React from 'react';
import FlashMessage from './FlashMessage';
import { connect } from 'react-redux'
import {deleteFlashMessage} from './actions'
import { createSelector, createStructuredSelector } from 'reselect';

class FlashMessageList extends React.Component {
    
    render() {
        const message = <FlashMessage key={this.props.message.id} message={this.props.message.text} deleteFlashMessage={deleteFlashMessage} />;
        return (
            <div>
                {message}
            </div>
        );
    }
}

const makeSelectMessage = () => createSelector(
    (state) => {return state.get('login')},
    (state) => {return state.get('message')}
);

// (state) => {
//         //console.log('2', state)
//         return state.get('user');
//     }

const mapStateToProps = createStructuredSelector({
    message: makeSelectMessage()
});

export default connect(mapStateToProps, {deleteFlashMessage})(FlashMessageList);