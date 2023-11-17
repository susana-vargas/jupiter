import axios from 'axios'
const url = 'http://localhost:3001/users'

const getAll = () => {
  const request = axios.get(url)
  const nonExisting = {
    id: 10000,
    content:'This user is not saved to server',
    important: true,
  }
  return request.then(response => response.data.concat(nonExisting))
}

const create = newUser => {
  const request = axios.post(url, newUser)
  return request.then(response =>  {
    console.log(response.data)
    return response.data
  })
}

const update = (id, newUser) => {
  const request = axios.put(`${url}/${id}`, newUser)
  return request.then(response => response.data)
}

const delet = (id, newUser) => {
  const request = axios.delete(`${url}/${id}`,newUser)
  return request.then(response => response.data)
}

export const userService = { getAll, create, update, delet };
