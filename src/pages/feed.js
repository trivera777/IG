import React from "react";
import { useFeedPageStyles } from "../styles";
import FeedPost from '../components/feed/FeedPost'
import Layout from '../components/shared/Layout'
import { defaultPost } from '../data'

function FeedPage() {
  const classes = useFeedPageStyles();

  return <Layout>
    <div className={classes.container}>
      <div>
        {Array.from({ length: 5 }, () => defaultPost).map(post => (
          <FeedPost />
        ))}
      </div>
    </div>
  </Layout>;
}

export default FeedPage;
