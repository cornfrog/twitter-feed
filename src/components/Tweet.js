import React from "react"

const Tweet = (props) => {
  // getting tweet post
  // data from TwitterFeed.js
  const post = props.post;

  // console.log(`Current Tweet id_str: ${post.id_str}`);
  // console.log(`Current Tweet Poster: ${post.user.name} => ${post.user.screen_name}`)

  // converted the timestamp_ms to an actual Date object
  // after Date is created convert Date Object to string
  const postDate = new Date(parseInt(post.timestamp_ms)).toDateString();
  // convert string to an array
  // and index each based on space (' ')
  const dateArray = postDate.split(' ');
  const postMonth = dateArray[1];
  const postDay = dateArray[2]
  const tweetDate = `${postMonth} ${postDay}`


  //getting tweet media section
  const tweetMedia = post.entities.media;
  let mediaData = ""
  //if the tweet HAS elements in its entities.media array
  if (tweetMedia !== undefined) {
    // map through each media element
    mediaData = tweetMedia.map((mediaElements) => {
      // create an image with that media's url
      return <img key={mediaElements.display_url} src={mediaElements.media_url} />
    })
  }

  let liked = ""
  if(post.liked){
    liked = "liked"
  }

  let retweeted = ""
  if(post.retweeted){
    retweeted = "retweeted"
  }

  const replyButtonClicked = () => {
    alert(`Reply!`)
  }

  const retweetButtonClicked = () => {
    alert(`Retweet!`)
  }

  const likeButtonClicked = () => {
    alert(`Liked!`)
  }


  const moreButtonClicked = () => {
    alert(`More!`)
  }

  return (
    <div className="parent-element-for-tweet-component">
      <div className="profile-picture-section">
        <img src={post.user.profile_image_url} className="profile-pic" />
      </div>
      <div className="tweet-data">
        <p className="tweet-poster-data"><span className="poster-name">{post.user.name}</span> <span className="poster-screen-name">{post.user.screen_name}</span> <span className="tweet-date">{tweetDate}</span></p>
        <div className="tweet-content">
          <p className="tweet-text">{post.text}</p>
          <p>{mediaData}</p>
        </div>
        <div className="tweet-interactions">
          <button className="reply-button" onClick={replyButtonClicked}><i className="fas fa-reply"></i></button>
          <button className={retweeted} onClick={retweetButtonClicked}><i className="fas fa-retweet"></i> {post.retweet_count}</button>
          <button className={liked} onClick={likeButtonClicked}><i className="fas fa-heart"></i> {post.favorite_count}</button>
          <button className="more-button" onClick={moreButtonClicked}><i className="fas fa-ellipsis-h"></i></button>
        </div>
      </div>
    </div>
  )
};

export default Tweet;
