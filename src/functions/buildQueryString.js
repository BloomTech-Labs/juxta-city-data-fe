export const buildQueryString = (url, queryParameters) => {
  url += `?`;

  for (const key in queryParameters) {
    url += `&${key}=${queryParameters[key]}`;
  }

  return url;
};
