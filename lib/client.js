import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "gfk1v3jh",
  dataset: "production",
  apiVersion: "2023-04-15",
  useCdn: true,
  token: process.env.NEXT_PUBLIC_TOKEN,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
