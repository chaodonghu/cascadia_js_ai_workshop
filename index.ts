import { writeFile } from "fs/promises";

export const main = async () => {
  await fetch(
    "https://x.com/i/api/graphql/TQmyZ_haUqANuyBcFBLkUw/SearchTimeline?variables=%7B%22rawQuery%22%3A%22from%3Anbaontnt%22%2C%22count%22%3A20%2C%22querySource%22%3A%22typeahead_click%22%2C%22product%22%3A%22Top%22%7D&features=%7B%22rweb_tipjar_consumption_enabled%22%3Atrue%2C%22responsive_web_graphql_exclude_directive_enabled%22%3Atrue%2C%22verified_phone_label_enabled%22%3Afalse%2C%22creator_subscriptions_tweet_preview_api_enabled%22%3Atrue%2C%22responsive_web_graphql_timeline_navigation_enabled%22%3Atrue%2C%22responsive_web_graphql_skip_user_profile_image_extensions_enabled%22%3Afalse%2C%22communities_web_enable_tweet_community_results_fetch%22%3Atrue%2C%22c9s_tweet_anatomy_moderator_badge_enabled%22%3Atrue%2C%22articles_preview_enabled%22%3Atrue%2C%22tweetypie_unmention_optimization_enabled%22%3Atrue%2C%22responsive_web_edit_tweet_api_enabled%22%3Atrue%2C%22graphql_is_translatable_rweb_tweet_is_translatable_enabled%22%3Atrue%2C%22view_counts_everywhere_api_enabled%22%3Atrue%2C%22longform_notetweets_consumption_enabled%22%3Atrue%2C%22responsive_web_twitter_article_tweet_consumption_enabled%22%3Atrue%2C%22tweet_awards_web_tipping_enabled%22%3Afalse%2C%22creator_subscriptions_quote_tweet_preview_enabled%22%3Afalse%2C%22freedom_of_speech_not_reach_fetch_enabled%22%3Atrue%2C%22standardized_nudges_misinfo%22%3Atrue%2C%22tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled%22%3Atrue%2C%22rweb_video_timestamps_enabled%22%3Atrue%2C%22longform_notetweets_rich_text_read_enabled%22%3Atrue%2C%22longform_notetweets_inline_media_enabled%22%3Atrue%2C%22responsive_web_enhance_cards_enabled%22%3Afalse%7D",
    {
      headers: {
        accept: "*/*",
        "accept-language": "en-US,en;q=0.9",
        authorization:
          "Bearer AAAAAAAAAAAAAAAAAAAAANRILgAAAAAAnNwIzUejRCOuH5E6I8xnZz4puTs%3D1Zv7ttfk8LF81IUq16cHjhLTvJu4FA33AGWWjCpTnA",
        "content-type": "application/json",
        priority: "u=1, i",
        "sec-ch-ua":
          '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"macOS"',
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        "x-client-transaction-id":
          "HSfENETsmpwbN7AFPvMZa6eClgRNdwQfeAGWPTU65oYrxJ1rVIf7gH4elMVN53+p6cFBOx8i1DvKSbEciFFlC8QfSmpuHg",
        "x-client-uuid": "958fdef0-a395-4303-aaf5-723dafef5bcc",
        "x-csrf-token":
          "38d41e496b6c91b3ac55b79017781ac223bda028537333865d638365456a52a7554b5ad9232955f036dfdc957a34cd95459d1f699173d819cbab97040c720f0c6546ed7676ef43f2851c1d70d933aa4a",
        "x-twitter-active-user": "yes",
        "x-twitter-auth-type": "OAuth2Session",
        "x-twitter-client-language": "en",
        cookie:
          'guest_id=v1%3A171884136469232667; night_mode=2; guest_id_marketing=v1%3A171884136469232667; guest_id_ads=v1%3A171884136469232667; external_referer=padhuUp37zjgzgv1mFWxJ12Ozwit7owX|0|ziZgIoZIK4nlMKUVLq9KcnBFms0d9TqBqrE%2FyjvSFlFJR45yIlYF%2Bw%3D%3D; gt=1804210432842096752; g_state={"i_l":0}; kdt=KHWFg4E3HbTRipYN3GVvNDvZXWUeJRBRnfK4rRjv; auth_token=7715839dbf4b11e2808bd346a8887b7d4baa547b; ct0=38d41e496b6c91b3ac55b79017781ac223bda028537333865d638365456a52a7554b5ad9232955f036dfdc957a34cd95459d1f699173d819cbab97040c720f0c6546ed7676ef43f2851c1d70d933aa4a; att=1-uhPoE0dje1DehL29HHC3UyiTAOiOvNb0cf6m7XH4; lang=en; twid=u%3D298940916; personalization_id="v1_dA/XicNRFUISvazaYktZAA=="',
        Referer:
          "https://x.com/search?q=from%3Anbaontnt&src=typeahead_click&f=top",
        "Referrer-Policy": "strict-origin-when-cross-origin",
      },
      body: null,
      method: "GET",
    }
  )
    .then((response) => response.json())
    // console.dir is used to display the JSON object in the console
    // .then((json) => console.dir(json, { depth: Infinity }));
    .then((response) =>
      writeFile("./tweets.json", JSON.stringify(response, null, 2), "utf-8")
    );
};

await main();
