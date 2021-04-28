export const handlerControllerError = (res, error) => {
  console.log(error)
  if (error.message || error.name === 'ValidationError') {
    return res.status(error.status ? error.status : 422).json(error)
  } else {
    res.status(error.status || 500).json(error)
  }
}

export const handlerServiceError = (error) => {
  console.error('handlerErrorService', error)

  const internalError = {
    message: error.message || 'Internal server error.',
    status: error.status || 500,
    details: error
  }

  if ((error && error.name === 'ValidationError') || error.field) {
    throw {
      status: error.status || 422,
      message: error.message,
      field: error.path || error.field
    }
  }

  if ((error && error.name === 'SequelizeUniqueConstraintError') && error.errors.length > 0) {
    throw {
      status: 422,
      message: error.errors[0].message || error.message || '',
      field: error.errors[0].path || ''
    }
  }

  throw internalError
}

export function makeErrorValidation (field, message, status = 400) {
  return {
    name: 'ValidationError',
    field,
    message,
    status
  }
}
