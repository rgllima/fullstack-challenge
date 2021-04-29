"use strict"

import ProfessionRoute from './api/v1/Profession/ProfessionRoute'
import ProfessionalRoute from './api/v1/Professional/ProfessionalRoute'

function routes (app) {
  app.use('/profession', ProfessionRoute)
  app.use('/professional', ProfessionalRoute)

  return app
}

export default routes
