import React from "react";
import "./Styles/user.css";

const User = ({ name, phone, email, picture, location }) => {
  return (
    <article className="user">
      <img src={picture.medium} alt="user-img" className="user-img" />
      <div className="user-info">
        <span className="name">
          Name: <p>{name.first}</p> <p>{name.last}</p>
        </span>
        <span> </span>
        <span>City: {location.city} </span>
        <span>Email: {email} </span>
        <span>Phone: {phone}</span>
      </div>
    </article>
  );
};

export default User;
