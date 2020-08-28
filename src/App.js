import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialog from "./components/Dialog/Dialog";
import {Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";




const App = (props) => {


  return (
        <div className="app-wrapper">
          <Header/>
          <Navbar/>
          <div className="app-wrapper-content">
            <Route exact path='/dialogs' render={ () => <Dialog
                state={props.state.dialogsPage}
            />}/>

            <Route exact path='/profile' render={ () => <Profile
                profilePage={props.state.profilePage}
                disPatch={props.disPatch}
            />}/>

                <Route exact path='/news' component={News}/>
            <Route exact path='/music' component={Music}/>
            <Route exact path='/settings' component={Settings}/>
          </div>
        </div>
  );
}

export default App;
