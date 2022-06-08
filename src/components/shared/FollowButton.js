import React from "react";
import { useFollowButtonStyles } from "../../styles";
import { Button } from "@material-ui/core";

function FollowButton({ side }) {
  const classes = useFollowButtonStyles({ side });
  const [isFollowing, setFollowing] = React.useState(false);
  const followButton = (
    <Button
      variant={side ? "text" : "contained"}
      color="primary"
      className={classes.button}
      onClick={() => setFollowing(true)}
      fullWidth
    >
      Follow
    </Button>
  );

  return <div>FollowButton</div>;
}

export default FollowButton;
