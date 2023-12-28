We've acquired some real data from the Twitter Streaming API. Using React, let's create a Twitter feed to display this data. The finished website should look like this:

![Twitter Feed 1][twitter-feed-1]

## Setup

From your challenges directory, run the following:

```no-highlight
et get twitter-feed
cd twitter-feed
yarn install
yarn run dev:client
```

If you go to [localhost:8080][localhost-8080], the page will display nothing, and the console will show no errors. You'll find the data for your application in `src/constants/data.js`. **DO NOT MODIFY** this data.

## Deliverables & Pro Tips

Read through **all expectations and the tips below** _before_ getting started!

- To complete this challenge, you should **not** have to create additional components. Currently, we have an empty `TwitterFeed` component and a `Tweet` component and that's all you need to create a functioning application.

- Start by looking over the provided data and make sure you understand the data structure. We can see that our `data` constant is being handed down as **props** to `TwitterFeed` from our `main.js` file. We want to render a Tweet component for each given tweet in `props.data`.

- You should note that tweets with images contain an object which possesses a `media_url` and a `display_url`. The `media_url` is the URL to the image, so use this URL to display the image in your application. The `display_url` is a URL found in the tweet `text`. Make sure you remove the `display_url` from the tweet `text` before displaying it in your application.

- [Foundation][foundation] and [Font Awesome][font-awesome] are available and already set up for you to use via a CDN. Rejoice! **Be sure to note we're using Font Awesome version 5.11.2** as the syntax between Font Awesome versions differs!

### Core Steps

1. By mapping over the tweets provided in data, the finished application should contain a collection of `Tweet` components, one for each tweet. Make sure you import `Tweet` into `TwitterFeed`!
2. Each `Tweet` should include the user's profile picture (try using an `img` tag!), name, username, tweet content, and the "reply", "retweet", "like", and "more" icons, with numbers of retweets and favorites next to those icons. **Don't worry about the date for now.**
3. You can render the icons using `FontAwesome`, which has already been made available to you within this app. (Check out the `<head>` tag in your `index.html` file) You can render icons using an `i` tag with a particular class, as displayed on each of the pages linked to below. **Use the HTML version of the icons, not React.**
4. When clicking on the [reply icon][fa-reply], an alert box should pop up with the text "reply". (There is no correlating data for this icon - just have it display.)
5. When clicking on the [retweet icon][fa-retweet], an alert box should pop up with the text "retweet".
6. When clicking on the [like icon][fa-heart], an alert box should pop up with the text "like".
7. When clicking on the [more icon][fa-ellipsis-h], an alert box should pop up with the text "more".
8. When the tweet object's `like` property is `true`, then the like icon should be red.
9. When the tweet object's `retweeted` property is `true`, then the retweet icon should be green.

### Bonus Steps

1. We want to add the date into the tweet. Take a look at the documentation for JS's [Date object][javascript-date], and don't forget about [parseInt()][javascript-parseint] if you need to convert strings to integers!
2. If the tweet includes a media entity, remove the corresponding `display_url` from the tweet `text` and instead, show the image in the tweet. **Your app will now look different than the sample image provided**
3. Front-end developers style their applications. You're a front-end developer. Therefore, you must style your application so it matches the mock-up.

[fa-heart]: https://fontawesome.com/v5/icons/heart?s=solid&f=classic
[fa-retweet]: https://fontawesome.com/v5/icons/retweet?s=solid&f=classic
[fa-ellipsis-h]: https://fontawesome.com/v5/icons/ellipsis-h?s=solid&f=classic
[fa-reply]: https://fontawesome.com/v5/icons/reply?s=solid&f=classic
[font-awesome]: https://fontawesome.com/v5/search?o=r&m=free
[foundation]: http://foundation.zurb.com/
[localhost-8080]: http://localhost:8080
[twitter-feed-1]: https://s3.amazonaws.com/horizon-production/images/twitter-feed-1.png
[javascript-date]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
[javascript-parseint]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt
