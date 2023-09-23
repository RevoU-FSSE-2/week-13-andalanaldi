import { LoginForm as LoginFormProps, LoginResponse } from "../../types"
import { LoginForm } from "../../components"

const Login = () => {

    const onSubmit = async (data: LoginFormProps) => {
        const fetching = await fetch('https://mock-api.arikmpt.com/api/user/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
        const response: LoginResponse = await fetching.json()
        if(response) {
            localStorage.setItem('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImM5OTNlMmU3LWRiMzMtNGY3Mi04N2IzLWU4ODFhYjdkZjNlYSIsImlhdCI6MTY5NTQzNTkwOCwiZXhwIjoxNjk1NDU3NTA4fQ.4tE8CWS56MD37TfRuLmtjFfVe3xwEx7V6gAbrjtdSuU', response.token)
            // 'token'
            window.location.replace('/')
        }
    }

    return (
        <LoginForm onSubmit={onSubmit}/>
    )
}

export default Login