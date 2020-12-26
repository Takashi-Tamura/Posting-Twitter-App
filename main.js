import Twitter from "twitter"

const client = new Twitter({
  consumer_key: "f9yw0PpP5gEJURWmCuDcGzQ5G",
  consumer_secret: "3AztcxRm3sOCUh2GUzw6zG11RUeonus7lTSjWAMHdFC1f3Not7",
  access_token_key: "1340167868499914752-cSqow64hWTs5pqCNN6MzladJwNo4fL",
  access_token_secret: "zhxsySOMN5ajb03aRMnIjQJ0QPWrbGwi2haG0lH4h7bwA",
})

const params = {screen_name: "nodejs"};
client.get("statuses/user_timeline", params, function(error, tweets, response) {
  if (!error) {
    console.log(tweets);
  }
});

client.post("status/update", {status: "ツイートテスト"}, function(error, tweet, response) {
  if (!error) {
    console.log(tweet);
  } else {
    console.log("error");
  }
});
