import React from "react";

const Profile = ({ img, bio }) => {
  return (
    <div>
      <img src={img} />
      <p>{bio}</p>
    </div>
  );
};

export default Profile;
