'use strict'

import service from './ProfessionalService'
import { handlerControllerError } from '../../utils/ErrorHandler'

export default {
  async create (req, res) {
    const data = req.body

    try {
      const professional = await service.create(data)
      return res.send(professional)
    } catch (error) {
      return handlerControllerError(res, error)
    }
  },

  async getAll (req, res) {
    try {
      const queryParams = req.query
      const professionals = await service.find(queryParams)
      return res.send(professionals)
    } catch (error) {
      return handlerControllerError(res, error)
    }
  },

  async getOne (req, res) {
    try {
      const professional = await service.findOne(req.params?.id)
      return res.send(professional)
    } catch (error) {
      return handlerControllerError(res, error)
    }
  },

  async update (req, res) {
    try {
      const professional = await service.update(req.body, req.params.id)
      return res.send(professional)
    } catch (error) {
      return handlerControllerError(res, error)
    }
  }
}
