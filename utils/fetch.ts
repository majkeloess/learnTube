import axios from "axios";

const KEY = "AIzaSyCgNgEgB2dnu_JgQFtHp2pmDqrErn_dd9E";

//to się przyda do modala
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

  return sort != "dateAsc" ? res.data.items : res.data.items.reverse();
};

const fetchDetails = async (id: string) => {
  const res = await axios.get("https://www.googleapis.com/youtube/v3/videos", {
    params: {
      part: "snippet,contentDetails,statistics",
      id: id,
      key: KEY,
    },
  });

  return res.data.items[0];
};

// NA PRZYSZŁOŚĆ PAMIĘTAJ O ZMIANIE ENDPOINTU:DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// async function test() {
//   //const data = await fetchVideo("react", 20, sortBy[2]);
//   const data2 = await fetchDetails("0yORLdaSEXg");
//   console.log(data2);
// }

// test();

export { sortBy, fetchVideo, fetchDetails };
