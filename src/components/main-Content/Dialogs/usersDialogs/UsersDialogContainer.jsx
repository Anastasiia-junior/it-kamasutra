import UsersDialogs from "./UsersDialogs";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
    return {
        dialogsData: state.dialogsPage.dialogsData
    }
}

const UsersDialogsContainer = connect(mapStateToProps)(UsersDialogs);

export default UsersDialogsContainer; 