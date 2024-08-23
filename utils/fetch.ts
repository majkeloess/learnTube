import axios from "axios";
import { searchResultSchema, videoResultSchema } from "./validation";
import { sortType } from "./types";

const KEY = process.env.EXPO_PUBLIC_YOUTUBE;
//const KEY = "AIzaSyDqxYtzmd8CXp5V-PPdLISFxzro-nJYih0";

const sortBy: sortType[] = ["dateDes", "dateAsc", "viewCount"];

const fetchVideo = async (query: string, n: number) => {
  const res = await axios.get("https://www.googleapis.com/youtube/v3/search", {
    params: {
      part: "snippet",
      q: query,
      type: "video",
      key: KEY,
      maxResults: n,
    },
  });

  const validatedData = searchResultSchema.safeParse(res.data);
  //console.log(validatedData.error);

  if (validatedData.success) {
    return validatedData.data.items;
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

  const validatedData = videoResultSchema.safeParse(res.data.items);
  //console.log(validatedData.error);
  return validatedData.success ? validatedData.data[0] : null;
};

// async function test() {
//   const data = await fetchVideo("React Native", 5);
//   const data = await fetchDetails("0yORLdaSEXg");
//   console.log(data);
// }
//
//test();

export { sortBy, fetchVideo, fetchDetails };
