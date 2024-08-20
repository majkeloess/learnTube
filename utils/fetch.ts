import axios from "axios";

const KEY = process.env.YOUTUBE_API_KEY;
const sortBy = ["dateDes", "dateAsc", "viewCount"];

const fetchVideo = async (query: string, n: number, sort: string) => {
  if (sort == "dateAsc" || sort == "dateDes") {
  }

  const res = await axios.get("https://www.googleapis.com/youtube/v3/search", {
    params: {
      part: "snippet",
      q: query,
      type: "video",
      key: KEY,
      maxResults: n,
      order: sort,
    },
  });

  return res.data.items;
};

async function test() {
  const data = await fetchVideo("react", 20, sortBy[2]);
  console.log(data);
}

test();
