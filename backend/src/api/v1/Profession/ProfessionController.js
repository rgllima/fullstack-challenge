'use strict'

import service from './ProfessionService'
import { handlerControllerError } from '../../utils/ErrorHandler'

export default {
  async create (req, res) {
    const data = req.body

    try {
      const profession = await service.create(data)
      return res.send(profession)
    } catch (error) {
      return handlerControllerError(res, error)
    }
  },

  async getAll (req, res) {
    try {
      const queryParams = req.query
      const professions = await service.find(queryParams)
      return res.send(professions)
    } catch (error) {
      return handlerControllerError(res, error)
    }
  },

  async getOne (req, res) {
    try {
      const profession = await service.findOne(req.params?.id)
      return res.send(profession)
    } catch (error) {
      return handlerControllerError(res, error)
    }
  },

  async update (req, res) {
    try {
      const profession = await service.update(req.body, req.params.id)
      return res.send(profession)
    } catch (error) {
      return handlerControllerError(res, error)
    }
  }
}
