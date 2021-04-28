import * as yup from 'yup'

export default {
  create: yup.object().shape({
    name: yup.string().required().max(60),
    email: yup.string().required().max(60),
    phone: yup.string().nullable().max(60),
    professionId: yup.number().required(),
  }),
  update: yup.object().shape({
    name: yup.string().required().max(60),
    email: yup.string().required().max(60),
    phone: yup.string().nullable().max(60),
    professionId: yup.number().required(),
  })
}
