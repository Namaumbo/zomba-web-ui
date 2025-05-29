const STRAPI_URL = import.meta.env.VITE_STRAPI_URL;
const STRAPI_API_TOKEN = import.meta.env.VITE_STRAPI_TOKEN;

const articlesUrl = "articles";
const eventsUrl = "events";

export const getAllArticles = async () => {
  const fullUrl = `${STRAPI_URL}/api/${articlesUrl}?populate=*`;
  const response = await fetch(fullUrl, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${STRAPI_API_TOKEN}`,
    },
  });
  const data = await response.json();
  return data;
};

export const getArticle = async (slug) => {
  const fullUrl = `${STRAPI_URL}/api/${articlesUrl}?filters[slug][$eq]=${slug}&populate=*`;
  const response = await fetch(fullUrl, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${STRAPI_API_TOKEN}`,
    },
  });
  const data = await response.json();
  return data;
};

export const getEvents = async () => {
  const fullUrl = `${STRAPI_URL}/api/${eventsUrl}?populate=*`;
  const response = await fetch(fullUrl, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${STRAPI_API_TOKEN}`,
    },
  });
  const data = await response.json();
  return data
};
