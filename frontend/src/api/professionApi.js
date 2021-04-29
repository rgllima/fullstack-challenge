import axios from '../config/axiosConfig';

const localPath = '/profession'

export const find = (filters = {}) => axios.get(localPath,{ params: filters })

export const create = (profession) => axios.post(localPath, profession)

export const update = ({ id, ...profession }) => axios.put(`${localPath}/${id}`, profession)
