import * as yup from 'yup'

export default {
  create: yup.object().shape({
    description: yup.string().required().max(60),
  }),
  update: yup.object().shape({
    description: yup.string().required().max(60),
  })
}
