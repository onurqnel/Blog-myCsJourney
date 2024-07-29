import React from "react";
import { Link } from "react-router-dom";
import ProfilePicture from "../layout/ProfilePicture";

const SubProfilePicture = () => {
  return (
    <Link to="/">
      <ProfilePicture size="small" />
    </Link>
  );
};

export default SubProfilePicture;
