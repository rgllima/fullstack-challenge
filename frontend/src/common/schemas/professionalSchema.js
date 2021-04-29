import * as Yup from 'yup';

export const professionalSchema = Yup.object().shape({
  name: Yup.string().required('Nome é obrigatório'),
  email: Yup.string().required('E-mail é obrigatório'),
  phone: Yup.string().min(15, 'Digite um telefone válido'),
  professionId: Yup.number().required("Profissão é obrigatória"),
  active: Yup.boolean()
});
