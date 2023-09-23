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
                    Authorization: `Bearer ${localStorage.getItem('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjhjNzFlNjY5LTM4ZGYtNGRkNy04NDYwLTc4ODc2ZmM0NTNjOSIsImlhdCI6MTY4NjY3MzQzOSwiZXhwIjoxNjg2Njk1MDM5fQ.IKZrgbPGEYULE_G7E8vopOMDmnCLxZaFKuArnXkcL6U')}`
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