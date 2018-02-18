import React from "react";
import Profile from "./Profile";

const ProfileList = ({ users }) => {
  return (
    <div>
      {users.map((user) => {
        <Profile img={user.img} bio={user.bio} />
      })}
    </div>
  );
};

export default ProfileList;
