import api from '../utils/api';

export const getReportList = () => {
  return api('/v1/reports')
    .then(res =>  res.json())
    .catch(err => {
      console.warn({err})
      throw err;
    })
}

export const getReportData = (key, pageNumber, pageSize) => {
  let url = `/v1/reports/${encodeURI(key)}`;
  if (pageNumber && pageSize) {
    url = `${url}?pageNumber=${pageNumber}&pageSize=${pageSize}`;
  }
  return api(url)
    .then(res => res.json())
    .catch(err => {
      console.warn({err})
      throw err;
    })
}

export const createOrganization = (ownerSub, name, address1, address2, phone) => {
  return api('/v1/organizations', {
    method: 'POST',
    body: { name, ownerSub, address1, address2, phone }
  })
  .then(res => res.json())
  .catch(err => {
    console.warn({err});
    throw err;
  })
}

export const getOrganization = () => {
  return api('/v1/organizations')
    .then(res => res.json())
    .catch(err => {
      console.warn({err});
      throw err;
    });
}