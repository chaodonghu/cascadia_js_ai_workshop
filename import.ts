import tweets from "./tweets.json";

async function sendToAstra() {
  const arrayOfTweets =
    tweets.data.search_by_raw_query.search_timeline.timeline.instructions[0]
      .entries;

  console.log(
    arrayOfTweets.map((t) => {
      const id =
        t.content.itemContent?.tweet_results.result.legacy.id_str ?? "";
      const date =
        t.content.itemContent?.tweet_results.result.legacy.created_at ?? "";
      const text =
        t.content.itemContent?.tweet_results.result.legacy.full_text ?? "";

      return {
        id,
        date,
        text,
      };
    })
  );
}

sendToAstra();
