import { fetchDetails } from "./fetch";
import { VideoSearchType } from "./types";

export const latestCompare = (a: VideoSearchType, b: VideoSearchType) => {
  const aDate = new Date(a.snippet.publishedAt);
  const bDate = new Date(b.snippet.publishedAt);

  return aDate > bDate ? 1 : aDate == bDate ? 0 : -1;
};

export const oldestCompare = (a: VideoSearchType, b: VideoSearchType) => {
  const aDate = new Date(a.snippet.publishedAt);
  const bDate = new Date(b.snippet.publishedAt);

  return aDate < bDate ? 1 : aDate == bDate ? 0 : -1;
};

export const popularityCompare = (a: VideoSearchType, b: VideoSearchType) => {
  let aViews = 0;
  let bViews = 0;
  const asyn = async () => {
    aViews = await getPopularity(a.id.videoId);
    bViews = await getPopularity(b.id.videoId);
  };

  asyn();

  return aViews - bViews;
};

const getPopularity = async (id: string) => {
  const res = await fetchDetails(id);
  if (res) {
    const popularity = Number(res.statistics.viewCount);
    return popularity;
  } else {
    return 0;
  }
};

//  "publishedAt": "2020-06-05T16:09:01Z",
