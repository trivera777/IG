import { Avatar } from "@material-ui/core";
import React from "react";
import { useUserCardStyles } from "../../styles";

function UserCard({ user }) {
  const classes = useUserCardStyles();
  const { username } = user 

  return (
    <div className={classes.wrapper} >
      <Link to={`/${username}`}>
      <Avatar 
        src={profile_image}
        alt="User avatar"
        className={classes.avatar}
      />
      </Link>
    </div>
  )
}

export default UserCard;
