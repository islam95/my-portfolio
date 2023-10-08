import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const sanityClient = createClient({
  projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
  token: process.env.REACT_APP_SANITY_TOKEN,
  dataset: 'production',
  apiVersion: '2023-10-07',
  useCdn: false,
});

const builder = imageUrlBuilder(sanityClient);

export const urlFor = (source) => builder.image(source);
