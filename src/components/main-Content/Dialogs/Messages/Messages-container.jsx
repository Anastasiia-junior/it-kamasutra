import Messages from './Messages';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
    return {
        messagesData: state.dialogsPage.messagesData
    }
};


const MessagesContainer = connect(mapStateToProps)(Messages);

export default MessagesContainer;