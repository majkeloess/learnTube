import { z } from "zod";

const videoSearchSchema = z.object({
  kind: z.string(),
  etag: z.string(),
  id: z.object({
    kind: z.string(),
    videoId: z.string(),
  }),
  snippet: z.object({
    publishedAt: z.string(),
    channelId: z.string(),
    title: z.string(),
    description: z.string(),
    thumbnails: z.object({
      medium: z.object({
        url: z.string().url(),
        width: z.number(),
        height: z.number(),
      }),
    }),
    channelTitle: z.string(),
    liveBroadcastContent: z.string(),
    publishTime: z.string(),
  }),
});

const searchResultSchema = z.object({
  items: z.array(videoSearchSchema),
});

// to i tak zwraca tablicę nawet jak jes jeden

const videoDetailsSchema = z.object({
  kind: z.string(),
  etag: z.string(),
  id: z.string(),
  snippet: z.object({
    publishedAt: z.string(),
    channelId: z.string(),
    title: z.string(),
    description: z.string(),
    thumbnails: z.object({
      medium: z.object({
        url: z.string().url(),
        width: z.number(),
        height: z.number(),
      }),
    }),
    channelTitle: z.string(),
    liveBroadcastContent: z.string(),
  }),
});

const videoResultSchema = z.array(videoDetailsSchema);
export {
  videoDetailsSchema,
  videoSearchSchema,
  searchResultSchema,
  videoResultSchema,
};
