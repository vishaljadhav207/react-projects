import React, { useContext } from "react";
import UserContext from "../context/UserContext";

function Profile() {
  //take a data
  const { user } = useContext(UserContext);
  if (!user) return <div>Please Login First</div>;

  return <div>Welcome :{user.username}</div>;
}

export default Profile;
