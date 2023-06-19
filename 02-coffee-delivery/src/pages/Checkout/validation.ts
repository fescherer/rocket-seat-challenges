import * as yup from 'yup'

export type FormValidation = yup.InferType<typeof schema>

export const schema = yup
  .object({
    zip: yup.string().required('Campo obrigatório'),
    street: yup.string().required('Campo obrigatório'),
    number: yup.number().required('Campo obrigatório'),
    complement: yup.string().required('Campo obrigatório'),
    neighborhood: yup.string().required('Campo obrigatório'),
    city: yup.string().required('Campo obrigatório'),
    state: yup.string().required('Campo obrigatório'),
    payment: yup.string().required('Campo obrigatório')
  })
  .required()
