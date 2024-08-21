import axios from "axios";
import { searchResultSchema, videoResultSchema } from "./validation";

const KEY = "AIzaSyCgNgEgB2dnu_JgQFtHp2pmDqrErn_dd9E";

const sortBy = ["dateDes", "dateAsc", "viewCount"];

const fetchVideo = async (query: string, n: number, sort: string) => {
  const res = await axios.get("https://www.googleapis.com/youtube/v3/search", {
    params: {
      part: "snippet",
      q: query,
      type: "video",
      key: KEY,
      maxResults: n,
      order: sort == "viewCount" ? sort : "date",
    },
  });

  const validatedData = searchResultSchema.safeParse(res.data);

  if (validatedData.success) {
    return sort != "dateAsc"
      ? validatedData.data.items
      : validatedData.data.items.reverse();
  } else {
    return null;
  }
};

const fetchDetails = async (id: string) => {
  const res = await axios.get("https://www.googleapis.com/youtube/v3/videos", {
    params: {
      part: "snippet,contentDetails,statistics",
      id: id,
      key: KEY,
    },
  });

  console.log(res.data.items);
  const validatedData = videoResultSchema.safeParse(res.data.items);
  console.log(validatedData.error);
  return validatedData.success ? validatedData.data[0] : null;
};

async function test() {
  //const data = await fetchVideo("react", 2, sortBy[2]);
  const data = await fetchDetails("0yORLdaSEXg");
  console.log(data);
}

test();

export { sortBy, fetchVideo, fetchDetails };
