import CreateMessage from "./CreateMessage";
import { connect } from "react-redux";
import {updateTextMessageActionCreator, sendMessageActionCreator } from '../../../../../redux/State';

const mapStateToProps = (state) => {
    return {
        message: state.dialogsPage.message
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateTextInput: (text) => {
            dispatch(updateTextMessageActionCreator(text))
        },
        sendMessage: () => {
            dispatch(sendMessageActionCreator())
        }
    }
}

const CreateMessageContainer = connect(mapStateToProps, mapDispatchToProps)(CreateMessage);

export default CreateMessageContainer; 