import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { getUserProfile } from "../../redux/profile-reducer";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import {
  getStatus,
  updateStatus
} from "../../redux/profile-reducer";


class ProfileContainer extends React.Component {
  
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if(!userId) {
      userId = this.props.authorizedUserId; // 27619
      if(!userId) {
        this.props.history.push("/login");
      }
    }
    this.props.getUserProfile(userId);
    this.props.getStatus(userId);
  }
  
  render() {
    // console.log('RENDER PROFILE');
    return (
        <Profile {...this.props} 
        profile={this.props.profile} 
        status={this.props.status } 
        updateStatus = {this.props.updateStatus} />
    )
  }
}

let mapStateToProps = (state) => {
  // console.log('maStateToProps PROFILE');
  return({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  authorizedUserId: state.auth.userId,
  isAuth: state.auth.isAuth
});
}

export default compose(
  connect(mapStateToProps, {getUserProfile, getStatus, updateStatus }),
  withRouter
)(ProfileContainer);






