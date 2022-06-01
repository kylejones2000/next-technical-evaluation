const API_ADDRESS = 'http://localhost:8080/https://itunes.apple.com/search';

async function queryApi(searchTerms: string[], offset: number, limit: number) {
  const queryString = `?offset=${offset}&limit=${limit}&term=${searchTerms.join('&')}`;
  const response = await fetch(`${API_ADDRESS}${queryString}`);
  const data = await response.json();
  return data;
}

export default queryApi;
