import { ProductForm } from "../../components"
import { ProductForm as ProductFormProps, Product } from "../../types"
import { useNavigate, useParams } from "react-router-dom"
import { useCallback, useEffect, useState } from "react";

const ProductEdit = () => {

    const navigate = useNavigate();
    const [product, setProduct] = useState<Product>()

    const { id } = useParams();

    const getProduct = useCallback(
        async () => {
            const fetching = await fetch(`https://mock-api.arikmpt.com/api/category/bb75cd96-1395-4241-91f3-9ad863de8f71/${id}`)
            const response: Product = await fetching.json();
    
            setProduct(response)
        },
        [id]
    )

    useEffect(
        () => {
            getProduct()
        },
        [getProduct]
    )

    const onSubmit = async (values: ProductFormProps) => {
        try {
            const fetching = await fetch(`https://mock-api.arikmpt.com/api/category/update/${id}`, {
                method: 'PUT',
                headers: { 
                    'Content-Type': 'application/json', 
                    Authorization: `Bearer ${localStorage.getItem('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImM5OTNlMmU3LWRiMzMtNGY3Mi04N2IzLWU4ODFhYjdkZjNlYSIsImlhdCI6MTY5NTQzNTkwOCwiZXhwIjoxNjk1NDU3NTA4fQ.4tE8CWS56MD37TfRuLmtjFfVe3xwEx7V6gAbrjtdSuU')}`
                    // 'authToken'
                },
                body: JSON.stringify({
                    "id": "bb75cd96-1395-4241-91f3-9ad863de8f71",
                    "name": "mock category",
                    "is_active" : false,
                    ...values,
                }),
            })
            await fetching.json()
            navigate('/product')
        } catch (error) {
            alert(error)
        }
    }

    if(product) {
        return <ProductForm onSubmit={onSubmit} product={product}/>
    }

    return null
}

export default ProductEdit