import React from 'react';
import Tweet from './Tweet';

const TwitterFeed = (props) => {
  // getting the data 
  // passed from main.js
  const tweetData = props.data;
  // console.log(`props.data from TwitterFeed.js:\n${tweetData}`);
  // tweetData.forEach((tweet, index) => {
    // console.log(`Tweet[${index}] ID => ${tweet.id_str}`)
  // });

  // map over each individual 
  // object from tweetData 
  const tweets = tweetData.map((tweet) => {
    // create a tweet component
    // and pass it the currently
    // mapped tweet data
    return <Tweet 
      post={tweet}
      key={tweet.id_str}
    />
  });
  return(
    <div className='tweets'>
      {tweets}
    </div>
  )
};

export default TwitterFeed;
