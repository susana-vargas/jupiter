import axios from 'axios'
const url = 'http://localhost:3001/api/companies'
// const url = 

const getAll = () => {
  const request = axios.get(url)
  const nonExisting = {
    id: 10000,
    content:'This company is not saved to server',
    important: true,
  }
  return request.then(response => response.data.concat(nonExisting))
}

const create = newCompany => {
  const request = axios.post(url, newCompany)
  return request.then(response => response.data)
}

const update = (id, newCompany) => {
  const request = axios.put(`${url}/${id}`, newCompany)
  return request.then(response => response.data)
}

const delet = (id, newCompany) => {
  const request = axios.delete(`${url}/${id}`, newCompany)
  return request.then(response => response.data)
}

export const companyCervice = { getAll, create, update, delet };


