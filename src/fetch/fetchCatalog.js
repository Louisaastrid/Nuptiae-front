const baseUrlApi =
  process.env.REACT_APP_BASE_URL_API || "https://nuptiaeback.azurewebsites.net/api/v1/Catalog";
const responseToJson = (response) => response.json();

export default function fetchCatalogNuptiae(route) {
  return () => {
    return fetch(`${baseUrlApi}${route}`).then(responseToJson);
  };
}

