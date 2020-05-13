import React from 'react';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import NavbarContainer from './components/Navbar/NavbarContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import Footer from './components/Footer/Footer';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { BrowserRouter, Route, withRouter } from 'react-router-dom'
import Login from './components/Login/Login';
import { initializeApp } from './redux/appReducer'
import { connect } from 'react-redux'
import { compose } from 'redux';
import Preloader from './components/common/Preloader/Preloader';
import store from './redux/redux-store'
import { Provider } from 'react-redux'
import withSuspense from './components/hoc/withSuspense';


const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp()
  }

  render() {
    
    if (!this.props.initialized)
    {return <Preloader />}

    return (  
        <div className="app-wrapper">
          <HeaderContainer />
          {<NavbarContainer />}
          <div className="app-wrapper-content">
            {/* <Route path="/profile" component={Profile} /> */}
            {/* <Route path="/dialogs" component={Dialogs} /> */}
            <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
            <Route path="/dialogs" render={withSuspense(DialogsContainer)} />
            <Route path="/users" render={withSuspense(UsersContainer)}/>
            <Route path="/news" component={News} />
            <Route path="/music" component={Music} />
            <Route path="/settings" component={Settings} />
            <Route path="/login" component={() => <Login />} />
            <Route path="/" exact render={() => <ProfileContainer />} />
          </div>
          <Footer />
        </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

const AppContainer = compose(
    withRouter,
    connect(mapStateToProps, { initializeApp }))(App);


const SamuraiJSApp = (props) => {
  return   <React.StrictMode>
  <Provider store={store}>
    <BrowserRouter>
      <AppContainer />
    </BrowserRouter>
  </Provider>
</React.StrictMode>
}

export default SamuraiJSApp