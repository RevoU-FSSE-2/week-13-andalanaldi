import { ProductForm as ProductFormProps } from "../../types"
import { ProductForm } from "../../components"
import { useNavigate } from "react-router-dom"

const ProductNew = () => {

    const navigate = useNavigate()

    const onSubmit = async (values: ProductFormProps) => {
        try {
            const fetching = await fetch('https://dummyjson.com/products/add', {
                method: 'POST',
                headers: { 
                    'Content-Type': 'application/json', 
                    Authorization: `Bearer ${localStorage.getItem('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJhdHVueTAiLCJlbWFpbCI6ImF0dW55MEBzb2h1LmNvbSIsImZpcnN0TmFtZSI6IlRlcnJ5IiwibGFzdE5hbWUiOiJNZWRodXJzdCIsImdlbmRlciI6Im1hbGUiLCJpbWFnZSI6Imh0dHBzOi8vcm9ib2hhc2gub3JnL2hpY3ZlbGRpY3RhLnBuZyIsImlhdCI6MTY5NTQyMjQzOCwiZXhwIjoxNjk1NDI2MDM4fQ.f2wJhbc3zfW08D5LjXcaM4sAgkzqL-h-a61pQ3ioLC0')}`
                    // 'authToken'
                },
                body: JSON.stringify(values)
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