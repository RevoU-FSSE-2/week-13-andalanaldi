import { RegisForm as RegisFormProps, RegisResponse } from "../../types"
import { RegisForm } from "../../components"

const Regis = () => {

    const onSubmit = async (data: RegisFormProps) => {
        const fetching = await fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
        const response: RegisResponse = await fetching.json()
        if(response) {
            localStorage.setItem('token', response.token)
            window.location.replace('/')
        }
    }

    return (
        <RegisForm onSubmit={onSubmit}/>
    )
}

export default Regis