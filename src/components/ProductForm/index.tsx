import { Button, Card, Input, Select, Typography } from "antd"
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

    const statusOptions = [
        { value: true, label: 'Active' },
        { value: false, label: 'Inactive' },
    ];

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
                    <Typography.Paragraph>{'Product Status'}</Typography.Paragraph>
                    <Select 
                        // name={'status'}
                        value={formMik.values.status} 
                        onChange={(value) => formMik.setFieldValue('status', value)}
                        status={formMik.errors.status ? 'error' : undefined}
                    >
                        {statusOptions.map((option) => (
                            <Select.Option key={String(option.value)} value={option.value}>
                                {option.label}
                            </Select.Option>
                        ))}
                    </Select>

                    {formMik.errors.status && (
                        <Typography.Paragraph>{formMik.errors.status}</Typography.Paragraph>
                    )}
                </div>
                <Button type={'primary'} htmlType={"submit"}>Submit</Button>
            </form>
        </Card>
    )
}

export default ProductForm