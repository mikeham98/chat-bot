import React from 'react';
import {connect} from 'react-redux';
import MessageForm from '../../../components/Toolbar/Message/MessageForm';
import {sendMessage} from '../../../actions/toolbar/index.actions';

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        sendMessage: (message, callback) => {
            dispatch(sendMessage(ownProps.conversationId, message, callback))
        }
    };
};

export default connect(undefined, mapDispatchToProps)(MessageForm);