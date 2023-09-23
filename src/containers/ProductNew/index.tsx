import { ProductForm as ProductFormProps } from "../../types"
import { ProductForm } from "../../components"
import { useNavigate } from "react-router-dom"

const ProductNew = () => {

    const navigate = useNavigate()

    const onSubmit = async (values: ProductFormProps) => {
        try {
            const fetching = await fetch('https://mock-api.arikmpt.com/api/category/create', {
                method: 'POST',
                headers: { 
                    'Content-Type': 'application/json', 
                    Authorization: `Bearer ${localStorage.getItem('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjhjNzFlNjY5LTM4ZGYtNGRkNy04NDYwLTc4ODc2ZmM0NTNjOSIsImlhdCI6MTY4NjY3MzQzOSwiZXhwIjoxNjg2Njk1MDM5fQ.IKZrgbPGEYULE_G7E8vopOMDmnCLxZaFKuArnXkcL6U')}`
                    // 'authToken'
                },
                body: JSON.stringify({
                    "name": "mock category",
                    ...values,
                }),
            })
            await fetching.json()
            navigate('/product')
        } catch (error) {
            alert(error)
        }
    }

    return (
        <ProductForm onSubmit={onSubmit}/>
    )
}

export default ProductNew