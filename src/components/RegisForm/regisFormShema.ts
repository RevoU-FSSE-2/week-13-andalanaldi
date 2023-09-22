import * as yup from 'yup'

export const initialValues = {
    username: '',
    email   : '',
    password: ''
}

export const validationSchema = yup.object({
    username: yup.string().required(),
    email   : yup.string().email().required(),
    password: yup.string().required()
})