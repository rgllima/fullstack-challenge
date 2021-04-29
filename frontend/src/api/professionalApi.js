import axios from '../config/axiosConfig';

const localPath = '/professional'

export const find = () => axios.get(localPath)

export const create = (professional) => axios.post(localPath, professional)

export const update = ({ id, ...professional }) => axios.put(`${localPath}/${id}`, professional)
