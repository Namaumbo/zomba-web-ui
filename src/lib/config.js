const API_KEY = import.meta.env.VITE_STRAPI_TOKEN;

export const config = {
  headers: {
    Authorization: `Bearer ${API_KEY}`,
  },
};
