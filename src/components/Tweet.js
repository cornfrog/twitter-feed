import React from "react"

const Tweet = (props) => {
  // getting tweet post
  // data from TwitterFeed.js
  const post = props.post;

  console.log(`Current Tweet id_str: ${post.id_str}`);
  return (
    <div>Tweet Component</div>
  )
};

export default Tweet;
