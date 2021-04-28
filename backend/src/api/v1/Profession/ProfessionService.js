'use strict'

import { Profession } from '../../../models/'
import FindAndCountAll from '../../utils/FindAndCountAll'
import validate from '../../utils/YupValidate'
import { handlerServiceError, makeErrorValidation } from '../../utils/ErrorHandler'
import Messages from '../../utils/Messages'
import ProfessionValidation from './ProfessionValidation'
import Sequelize from 'sequelize'

const { Op } = Sequelize

export default {
  /**
   * @param {number} id
   * @returns {Promise<Profession || void>}
   */
  async findOne (id) {
    try {
      const foundProfession = await Profession.findOne({
        where: {
          id
        }
      })

      if (!foundProfession) {
        return Promise.reject(makeErrorValidation('id', Messages.notFound, 404))
      }

      return foundProfession
    } catch (error) {
      return handlerServiceError(error)
    }
  },

  /**
   * @param {Profession} profession
   * @returns {Promise<Profession || void>}
   */
  async create (profession) {
    try {
      await validate(ProfessionValidation.create, profession)

      const foundExistingDescription = await Profession.findOne({
        where: {
          description: {
            [Op.iLike]: `%${profession.description}%`
          }
        }
      })

      if (foundExistingDescription) {
        return Promise.reject(makeErrorValidation('description', Messages.already, 409))
      }

      return await Profession.create(profession)
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
        description = null
      } = params

      const queryOptions = {
        where: {}
      }

      if (description) {
        queryOptions.where.description = {
          [Op.iLike]: `%${description}%`
        }
      }

      return await FindAndCountAll(Profession, queryOptions, page, ignorePagination)
    } catch (error) {
      return handlerServiceError(error)
    }
  },

  /**
   * @param {Profession} profession
   * @param {number} id
   * @returns {Promise<*>}
   */
  async update (profession, id) {
    await validate(ProfessionValidation.update, profession)

    try {
      const foundExistingDescription = await Profession.findOne({
        where: {
          description: {
            [Op.iLike]: `%${profession.description}%`
          },
          id: {
            [Op.not]: id
          }
        }
      })

      if (foundExistingDescription) {
        return Promise.reject(makeErrorValidation('description', Messages.already, 409))
      }

      await Profession.update({
        ...profession
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
