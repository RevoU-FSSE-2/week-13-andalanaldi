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
                    Authorization: `Bearer ${localStorage.getItem('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImM5OTNlMmU3LWRiMzMtNGY3Mi04N2IzLWU4ODFhYjdkZjNlYSIsImlhdCI6MTY5NTQzNTkwOCwiZXhwIjoxNjk1NDU3NTA4fQ.4tE8CWS56MD37TfRuLmtjFfVe3xwEx7V6gAbrjtdSuU')}`
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