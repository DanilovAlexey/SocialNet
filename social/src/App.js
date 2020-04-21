import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Footer from './components/Footer/Footer';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { BrowserRouter, Route } from 'react-router-dom'


function App(props) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar state={props.state.sideBar} />
        <div className="app-wrapper-content">
          {/* <Route path="/profile" component={Profile} /> */}
          {/* <Route path="/dialogs" component={Dialogs} /> */}
          <Route path="/profile" render={() => <Profile state={props.state.profilePage} dispatch={props.dispatch} />} />
          <Route path="/dialogs" render={() => <Dialogs state={props.state.dialogsPage} dispatch={props.dispatch} />} />
          <Route path="/news" component={News} />
          <Route path="/music" component={Music} />
          <Route path="/settings" component={Settings} />
          <Route path="/" exact render={() => <Profile state={props.state.profilePage} dispatch={props.dispatch} />} />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
