'use strict'

import { Professional } from '../../../models/'
import FindAndCountAll from '../../utils/FindAndCountAll'
import validate from '../../utils/YupValidate'
import { handlerServiceError, makeErrorValidation } from '../../utils/ErrorHandler'
import Messages from '../../utils/Messages'
import Sequelize from 'sequelize'
import ProfessionService from '../Profession/ProfessionService'
import ProfessionalValidation from "./ProfessionalValidation";

const { Op } = Sequelize

export default {
  /**
   * @param {number} id
   * @returns {Promise<Professional || void>}
   */
  async findOne (id) {
    try {
      const foundProfessional = await Professional.findOne({
        where: {
          id
        }
      })

      if (!foundProfessional) {
        return Promise.reject(makeErrorValidation('id', Messages.notFound, 404))
      }

      return foundProfessional
    } catch (error) {
      return handlerServiceError(error)
    }
  },

  /**
   * @param {Professional} professional
   * @returns {Promise<Professional || void>}
   */
  async create (professional) {
    try {
      await validate(ProfessionalValidation.create, professional)

      const foundExistingEmail = await Professional.findOne({
        where: {
          email: {
            [Op.iLike]: `%${professional.email}%`
          }
        }
      })

      if (foundExistingEmail) {
        return Promise.reject(makeErrorValidation('email', Messages.already, 409))
      }

      return await Professional.create(professional)
    } catch (error) {
      return handlerServiceError(error)
    }
  },

  /**
   * @param params
   * @returns {Promise<{pages: number, count: number, pageSize: number, page: number, items: M[]}|void>}
   */
  async find (params) {
    try {
      const {
        page = 0,
        ignorePagination = false,
        email = null
      } = params

      const queryOptions = {
        where: {}
      }

      if (email) {
        queryOptions.where.email = {
          [Op.iLike]: `%${email}%`
        }
      }

      return await FindAndCountAll(Professional, queryOptions, page, ignorePagination)
    } catch (error) {
      return handlerServiceError(error)
    }
  },

  /**
   * @param {Professional} professional
   * @param {number} id
   * @returns {Promise<*>}
   */
  async update (professional, id) {
    await validate(ProfessionalValidation.update, professional)

    try {
      const foundExistingEmail = await Professional.findOne({
        where: {
          email: {
            [Op.iLike]: `%${professional.email}%`
          },
          id: {
            [Op.not]: id
          }
        }
      })

      if (foundExistingEmail) {
        return Promise.reject(makeErrorValidation('email', Messages.already, 409))
      }

      await Professional.update({
        ...professional
      }, {
        where: {
          id
        }
      })

      return this.findOne(id)
    } catch (error) {
      return handlerServiceError(error)
    }
  },
}
