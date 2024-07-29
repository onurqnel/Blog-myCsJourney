import React from "react";
import PropTypes from "prop-types";

const sizeClasses = {
  small: "h-24 w-24",
  medium: "h-36 w-36",
};

const ProfilePicture = ({ size, className = "", ...props }) => {
  const sizeClass = sizeClasses[size] || sizeClasses.small;

  return (
    <div className={`my-14 ${className}`}>
      <img
        className={`${sizeClass} rounded-full`}
        src="OnurOnel.jpeg"
        alt="Onur Onel"
        {...props}
      />
    </div>
  );
};

ProfilePicture.propTypes = {
  size: PropTypes.oneOf(["small", "medium"]).isRequired,
  className: PropTypes.string,
};

export default ProfilePicture;
