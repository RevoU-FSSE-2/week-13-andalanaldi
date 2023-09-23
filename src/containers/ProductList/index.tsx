import { ColumnsType } from 'antd/es/table';
import { useEffect, useState, useRef  } from 'react';
import { ProductList as ProductListComponent } from '../../components'
import { Product, GetProductResponse } from '../../types';
import { Button } from 'antd'
import { useNavigate } from 'react-router-dom';

const ProductList = () => {

    const [products, setProducts] = useState<Product[]>([]);
    const navigate = useNavigate();

    const getProductList = async () => {
        const token = localStorage.getItem('authToken');
        console.log("Auth Token:", token);
        try {
            const fetching = await fetch('https://mock-api.arikmpt.com/api/category', { 
                headers: { 
                    'Content-Type': 'application/json', 
                    Authorization: `Bearer ${localStorage.getItem('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjhjNzFlNjY5LTM4ZGYtNGRkNy04NDYwLTc4ODc2ZmM0NTNjOSIsImlhdCI6MTY4NjY3MzQzOSwiZXhwIjoxNjg2Njk1MDM5fQ.IKZrgbPGEYULE_G7E8vopOMDmnCLxZaFKuArnXkcL6U')}`
                },
            })
            const response: GetProductResponse = await fetching.json();
            setProducts(response.products ?? []); 
        } catch (error) {
            alert(error);
        }
    }


    // Create a ref for handleNavigate
    const handleNavigateRef = useRef<(path: string) => void>((path: string) => {
        navigate(path);
    });

    // Extract the function from the ref
    const handleNavigate = handleNavigateRef.current;


    useEffect(() => {

        const token = localStorage.getItem('authToken');
        if(!token) {
            handleNavigate('/Product'); 
            return;
        }
            getProductList();
        }, [handleNavigate]);

    const removeProduct = async (id: number) => {
        try {
            const fetching = await fetch(`https://mock-api.arikmpt.com/api/category/34506582-54ef-4997-ad9b-1d05b716023c/${id}`, {
                method: 'DELETE',
                headers: { 
                    'Content-Type': 'application/json', 
                    Authorization: `Bearer ${localStorage.getItem('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImM5OTNlMmU3LWRiMzMtNGY3Mi04N2IzLWU4ODFhYjdkZjNlYSIsImlhdCI6MTY5NTQzNTkwOCwiZXhwIjoxNjk1NDU3NTA4fQ.4tE8CWS56MD37TfRuLmtjFfVe3xwEx7V6gAbrjtdSuU')}`
                    // 'authToken'
                },
            })

            const response = await fetching.json()

            if(response) {
                //cara pertama panggil api lagi
                // getProductList()

                //cara kedua
                setProducts((products) => products.filter((product) => product.id !== id))
            }
        } catch (error) {
            alert(error)
        }
    }

    const columns: ColumnsType<Product> = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',        
        },
        {
            title: 'Name',
            dataIndex: 'title',
            key: 'title',        
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
              <>
                <Button type={'default'} onClick={() => navigate(`/product/${record.id}`)}>Detail</Button>
                <Button type={'primary'} onClick={() => navigate(`/product/edit/${record.id}`)}>Edit</Button>
                <Button type={'primary'} color={'red'} onClick={() => removeProduct(record.id) }>Delete</Button>
              </>
            ),
        },
    ];

    return (
        <>
            <h3>Product List</h3>
            <Button type={'primary'} onClick={() => navigate('/product/new')}>Add New Product</Button>
            <ProductListComponent columns={columns} data={products}/>
        </>
    )
}

export default ProductList