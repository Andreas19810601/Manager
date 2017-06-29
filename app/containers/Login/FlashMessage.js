import React from 'react';
import classnames from 'classnames';
import {connect} from 'react-redux';
import { createSelector, createStructuredSelector } from 'reselect';

class FlashMessage extends React.Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    onClick(){
        this.props.deleteFlashMessage(this.props.message.id);
    }

    // onClick() {
    //     this.props.deleteFlashMessage(this.props.message.id);
    // }  onClick={this.onClick}<div className={classnames('alert', {
            //     'alert-success': type === 'success',
            //     'alert-danger': type === 'error'
            // })}>    
             //   <button  className='close'><span>&times;</span></button>

    render() {
        const id = this.props.message.id;
        const type = this.props.message.type;
        const text = this.props.message.text;
        return (
            <div className={classnames('alert',{
                'alert-success': type === 'success',
                'alert-danger': type === 'error'
            })}>
                <button onClick={this.onClick} className='close'><span>&times;</span></button>
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
    (state) => state.get('login'),
    (state) => state.get('message')
);

const mapStateToProps = createStructuredSelector({
    message: makeSelectMessage()
});

export default connect(mapStateToProps)(FlashMessage);








