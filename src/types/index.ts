export interface GetProductResponse {
    products: Product[];
    total: number;
    skip: number;
    limit: number;
}

export interface Product {
    id: number;
    title: string;
    status: boolean;
}

export type ProductForm = Omit<Product,'id'>

export interface LoginForm {
    email: string;
    password: string;
}

export interface LoginResponse {
    // email: string;
    // firstName: string;
    // lastName: string;
    // username: string;
    token: string;
}

export interface RegisForm {
    name: string;
    email   : string;
    password: string;
}

export interface RegisResponse {
    id: string;
    name: string;
    email: string;
    password: string;
    updated_at: string;
    created_at: string;
}