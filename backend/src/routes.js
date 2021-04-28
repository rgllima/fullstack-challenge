"use strict"

import ProfessionRoute from './api/v1/Profession/ProfessionRoute'

function routes (app) {
  app.use('/profession', ProfessionRoute)

  return app
}

export default routes
