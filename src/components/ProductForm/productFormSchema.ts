import * as yup from 'yup'

export const initialValues = {
    title: '',
    status: false,
}

export const validationSchema = yup.object({
    title: yup.string().required(),
    status: yup.boolean().required(),
})