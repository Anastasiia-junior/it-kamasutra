import './App.css';
import Header from './components/Header/header';
import Main from './components/main-Content/Main';



const App = (props) => {
  
  return (
    
      <div className='main-wrapper'>
        <Header />
        <Main 
          state = {props.state}
          dispatch = {props.dispatch}
          />
      </div>
    

  );
}




export default App;
