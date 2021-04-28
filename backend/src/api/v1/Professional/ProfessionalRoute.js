'use strict'

import * as express from 'express'
import controller from './ProfessionalController'

export default express
  .Router()
  .get('/:id', controller.getOne)
  .get('/', controller.getAll)
  .post('/', controller.create)
  .put('/:id', controller.update)
