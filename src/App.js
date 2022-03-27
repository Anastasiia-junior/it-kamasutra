import './App.css';
import Header from './components/Header/header';
import Main from './components/main-Content/Main';



const App = (props) => {
  return (
    
      <div className='main-wrapper'>
        <Header />
        <Main dialogsData={props.dialogsData} messagesData={props.messagesData} createMessage={props.createMessage}/>
      </div>
    

  );
}




export default App;
