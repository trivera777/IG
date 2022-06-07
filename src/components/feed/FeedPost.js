import React from "react";
import { useFeedPostStyles } from "../../styles";
import UserCard from "../shared/UserCard";
import { MoreIcon } from '../../icons'

function FeedPost({ post }) {
  const classes = useFeedPostStyles();
  const { media } = post

  return (
    <>
    <article className={classes.article}>
      <div className={classes.postHeader}>
        <UserCard />
        <MoreIcon className={classes.moreIcon} />
      </div>
      <div>
        <img src={media} alt="Post Media" className={classes.image} />
      </div>
      <div className={classes.postButtonsWrapper} >
        <div className={classes.postButtons}>

        </div>
      </div>

      </article>
    </>
  )
  }

export default FeedPost;
