
 const baseUrlApi =
    process.env.REACT_APP_BASE_URL_API || `https://nuptiaeback.azurewebsites.net/api/v1`;
export default function fatchCatalogPaginated(page) {
    return ()=>{ return fetch(`${baseUrlApi}/Catalog?pageNum=`+page).then((response) => response.json());} 
}
