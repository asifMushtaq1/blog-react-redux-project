import React,{useEffect} from 'react'
import {connect} from 'react-redux';
import {fetchUser} from '../actions/index';

const UserHeader = ({fetchUser,userId,users}) => {
  useEffect( () => {
    fetchUser(userId);
  },[fetchUser]);
console.log(users);

  //const user = users.find((user) => user.id === userId);
  //if (!user) { return null;}
  return (
  <div className="header">{users.name}</div>
  )
}
const mapStateToProps =  (state,ownProps) => {
  return {
    users : state.users
  }
}
export default connect(mapStateToProps, {fetchUser})(UserHeader);