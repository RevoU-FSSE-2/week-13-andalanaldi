import { LoginForm as LoginFormProps, LoginResponse } from "../../types"
import { LoginForm } from "../../components"

const Login = () => {

    const onSubmit = async (data: LoginFormProps) => {
        const fetching = await fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
        const response: LoginResponse = await fetching.json()
        if(response) {
            localStorage.setItem('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJhdHVueTAiLCJlbWFpbCI6ImF0dW55MEBzb2h1LmNvbSIsImZpcnN0TmFtZSI6IlRlcnJ5IiwibGFzdE5hbWUiOiJNZWRodXJzdCIsImdlbmRlciI6Im1hbGUiLCJpbWFnZSI6Imh0dHBzOi8vcm9ib2hhc2gub3JnL2hpY3ZlbGRpY3RhLnBuZyIsImlhdCI6MTY5NTQyMjQzOCwiZXhwIjoxNjk1NDI2MDM4fQ.f2wJhbc3zfW08D5LjXcaM4sAgkzqL-h-a61pQ3ioLC0', response.token)
            // 'token'
            window.location.replace('/')
        }
    }

    return (
        <LoginForm onSubmit={onSubmit}/>
    )
}

export default Login