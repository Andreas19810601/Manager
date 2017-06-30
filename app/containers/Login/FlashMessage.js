import React from 'react';
import classnames from 'classnames';
import {connect} from 'react-redux';
import { createSelector, createStructuredSelector } from 'reselect';

class FlashMessage extends React.Component {
    constructor(props) {
        super(props);
    }

    huhu(){
        //this.props.deleteFlashMessage(this.props.message.id);
        dispatch(addFlashMessage({
                        type: 'success',
                        text: "huhuasdasfsdf sgdsgfsdg dhsdhfh st"
                    }));
    }

    render() {
        const {id,type,text} = this.props.message;
        return (
            <div className={classnames('alert',{
                'alert-success': type === 'success',
                'alert-danger': type === 'error'
            })}>
                <button onClick={this.huhu} className='close'><span>&times;</span></button>
                {text}
            </div>
        );
    }
}

// FlashMessage.propTypes = {
//     messages: React.PropTypes.object.isRequired,
//     deleteFlashMessage: React.PropTypes.func.isRequired,
// }

// function mapStateToProps(state) {
//     return {
//         messages: state.flashMessage
//     }
// }


const makeSelectMessage = () => createSelector(
    (state) => {return state.get('login')},
    (state) => {return state.get('message')}
);

const mapStateToProps = createStructuredSelector({
    message: makeSelectMessage()
});

export default connect(mapStateToProps)(FlashMessage);








