import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import NavbarContainer from './components/Navbar/NavbarContainer';
import Profile from './components/Profile/Profile';
import Footer from './components/Footer/Footer';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { BrowserRouter, Route } from 'react-router-dom'
import DialogsContainer from './components/Dialogs/DialogsContainer';


function App(props) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        {<NavbarContainer store={props.store} />}
        <div className="app-wrapper-content">
          {/* <Route path="/profile" component={Profile} /> */}
          {/* <Route path="/dialogs" component={Dialogs} /> */}
          <Route path="/profile" render={() => <Profile store={props.store} />} />
          <Route path="/dialogs" render={() => <DialogsContainer store={props.store} />} />
          <Route path="/news" component={News} />
          <Route path="/music" component={Music} />
          <Route path="/settings" component={Settings} />
          <Route path="/" exact render={() => <Profile store={props.store} />} />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
