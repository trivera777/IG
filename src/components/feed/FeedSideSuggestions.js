import { Typography } from "@material-ui/core";
import React from "react";
import { useFeedSideSuggestionsStyles } from "../../styles";
import { Paper } from "@material-ui/core";

function FeedSideSuggestions() {
  const classes =  useFeedSideSuggestionsStyles();

  return (
    <article className={classes.article}>
      <Paper className={classes.paper}>
        <Typography
        color="textSecondary"
        variant="subtitle2"
        component="h2"
        align="left"
        gutterBottom
        className={classes.typography}
        >
          Suggestions For You
        </Typography>
      </Paper>
    </article>
  )
}

export default FeedSideSuggestions;
