import { Auth } from 'aws-amplify';
import { v4 as uuidv4 } from 'uuid';
const baseFetch = async (url, options = {}) => {
  const { headers = {}, body = null } = options;
  const bearerToken = await getBearerToken();

  if (bearerToken) {
    headers.Authorization = `Bearer ${bearerToken}`;
  }

  if (body) {
    options.body = JSON.stringify(body);
  }

  const option_headers = {
    accept: 'application/json',
    'content-type': 'application/json',
    ...headers,
    'x-request-id': uuidv4()
  }

  const req = new Request(url, {
    ...options,
    headers: new Headers(option_headers)
  });

  return fetch(req).then(res => {
    if (!res.ok) {
      throw Error(res.statusText);
    }
    return res;
  })
}

const baseUrl = window && window._env_ ? window._env_.API_BASE_URL : 'https://localhost:44329'; //TODO: Figure this out

export default function api(url, options) {
  return baseFetch(`${baseUrl}/api${url}`, options);
}

async function getBearerToken() {
  try {
    const session = await Auth.currentSession();
    const idToken = session.getIdToken();
    return idToken.getJwtToken();
  } catch (error) {
    return undefined;
  }
}