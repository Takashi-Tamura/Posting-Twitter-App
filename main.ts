import Twitter from "twitter";
const Twitter = require("twitter")

//初期化
const client = new Twitter({
  consumer_key: "f9yw0PpP5gEJURWmCuDcGzQ5G",
  consumer_secret: "3AztcxRm3sOCUh2GUzw6zG11RUeonus7lTSjWAMHdFC1f3Not7",
  access_token_key: "1340167868499914752-cSqow64hWTs5pqCNN6MzladJwNo4fL",
  access_token_secret: "zhxsySOMN5ajb03aRMnIjQJ0QPWrbGwi2haG0lH4h7bwA"
});

//文字のツイート
async function tweet(text: string) {
  const tweet = await client.post("statuses/update", { status: text });
}

tweet("ツイートテスト").then();