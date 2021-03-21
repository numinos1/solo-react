import axios from 'axios';

/**
 * Fetch People from API
 *
 * @param      {Object}   arg1           The argument 1
 * @param      {<type>}   arg1.queryKey  The query parameters
 * @return     {Promise}  {Array of results}
 */
export default async function fetchPeople({ queryKey }) {
  const [listType, stateCode] = queryKey;

  if (!listType || !stateCode) {
    return [];
  }
  try {
    const result = await axios.get(`http://localhost:3030/${listType}/${stateCode}`);

    return result.data.results;
  }
  catch {
    throw new Error('Make sure the local express proxy server is running. Execute "yarn serve" from the command line.');
  }
}
