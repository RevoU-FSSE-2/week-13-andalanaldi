import { Button, Card, Input, Typography } from "antd"
import { useFormik } from "formik"
import { Product, ProductForm as ProductFormProps } from "../../types"
import { initialValues, validationSchema } from "./productFormSchema"

interface Props {
    onSubmit: (values: ProductFormProps) => void
    product?: Product
}

const ProductForm = ({ onSubmit, product } : Props) => {

    const handleSubmit = (values: ProductFormProps) => {
        onSubmit(values)
    }

    const formMik = useFormik({
        initialValues: product ?? initialValues,
        onSubmit: handleSubmit,
        validationSchema: validationSchema
    })

    return (
        <Card title={"Product Form"} bordered style={{ width: 350 }}>
            <form onSubmit={formMik.handleSubmit}>
                <div>
                    <Typography.Paragraph>{'Product Name'}</Typography.Paragraph>
                    <Input name={'title'}
                        value={formMik.values.title} 
                        onChange={formMik.handleChange('title')}
                        status={formMik.errors.title && 'error'}
                    />
                    {formMik.errors.title && (
                        <Typography.Paragraph>{formMik.errors.title}</Typography.Paragraph>
                    )}
                </div>
                <div>
                    <Typography.Paragraph>{'Product Price'}</Typography.Paragraph>
                    <Input name={'price'}
                        value={formMik.values.price} 
                        onChange={formMik.handleChange('price')}
                        status={formMik.errors.price && 'error'}
                    />
                    {formMik.errors.price && (
                        <Typography.Paragraph>{formMik.errors.price}</Typography.Paragraph>
                    )}
                </div>
                <div>
                    <Typography.Paragraph>{'Product Brand'}</Typography.Paragraph>
                    <Input name={'brand'}
                        value={formMik.values.brand} 
                        onChange={formMik.handleChange('brand')}
                        status={formMik.errors.price && 'error'}
                    />
                    {formMik.errors.brand && (
                        <Typography.Paragraph>{formMik.errors.brand}</Typography.Paragraph>
                    )}
                </div>
                <div>
                    <Typography.Paragraph>{'Product Category'}</Typography.Paragraph>
                    <Input name={'category'}
                        value={formMik.values.category} 
                        onChange={formMik.handleChange('category')}
                        status={formMik.errors.category && 'error'}
                    />
                    {formMik.errors.category && (
                        <Typography.Paragraph>{formMik.errors.category}</Typography.Paragraph>
                    )}
                </div>
                <Button type={'primary'} htmlType={"submit"}>Submit</Button>
            </form>
        </Card>
    )
}

export default ProductForm