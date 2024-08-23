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

export const getPopularity = async (id: string) => {
  const res = await fetchDetails(id);
  if (res) {
    const popularity = Number(res.statistics.viewCount);
    return popularity;
  } else {
    return 0;
  }
};
