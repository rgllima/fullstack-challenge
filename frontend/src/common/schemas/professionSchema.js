import * as Yup from 'yup';

export const professionSchema = Yup.object().shape({
  description: Yup.string().required('Descrição é obrigatório'),
  active: Yup.boolean()
});
