import React, {Component} from "react";
import "./App.css";
import HeaderContainer from "./components/Header/HeaderContainer";
import Navbar from "./components/Navbar/Navbar";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import { Route, withRouter} from "react-router-dom"
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import LoginPage from "./components/Login/Login";
import { connect } from "react-redux";
import { compose } from "redux";
import { initializeApp } from "./redux/app-reducer";


class App extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    return (<div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
        <div className="app-wrapper-content">
          <Route path='/dialogs' 
                 render={() => <DialogsContainer />} />
          <Route path='/profile/:userId?' 
                 render={() => <ProfileContainer />} />

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

export default compose(
   withRouter, 
   connect(null, {initializeApp}))(App);
