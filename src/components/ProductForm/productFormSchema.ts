import * as yup from 'yup'

export const initialValues = {
    title: '',
    price: 0,
    brand: '',
    category: '',
}

export const validationSchema = yup.object({
    title: yup.string().required(),
    price: yup.number().min(1).required(),
    brand: yup.string().required(),
    category: yup.string().required()
})