import React, {Component, Suspense} from "react";
import "./App.css";
import HeaderContainer from "./components/Header/HeaderContainer";
import Navbar from "./components/Navbar/Navbar";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import { Route, withRouter} from "react-router-dom"
import UsersContainer from "./components/Users/UsersContainer";
import LoginPage from "./components/Login/Login";
import { connect } from "react-redux";
import { compose } from "redux";
import { initializeApp } from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";

//import DialogsContainer from "./components/Dialogs/DialogsContainer";
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));


// import ProfileContainer from "./components/Profile/ProfileContainer";


class App extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized) {
    return <Preloader />
    }

    return (<div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
        <div className="app-wrapper-content">
          <Route path='/dialogs' 
                 render={() => { 
                  return  <Suspense fallback={<div>Loading...</div>}>
                  <DialogsContainer />
                  </Suspense> 
                 }} />
                 
          <Route path='/profile/:userId?' 
                 render={() =>{
                  return <Suspense fallback={<div>Loading...</div>}>
                  <ProfileContainer /> 
                  </Suspense> 
                }} />

          <Route path='/users' 
                 render={() => <UsersContainer />} />

          <Route path='/login' 
                 render={() => <LoginPage />} />

          <Route path='/news' component={News} />
          <Route path='/music' component={Music} />
          <Route path='/settings' component={Settings} />
        </div>
      </div>);
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

export default compose(
   withRouter, 
   connect(mapStateToProps, {initializeApp}))(App);
