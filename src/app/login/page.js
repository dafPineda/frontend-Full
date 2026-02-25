'use client'
import {useState} from 'react'
import {API} from '@/confing'

export default function LoginPage(){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState("")
    const [msg, SetMsg] = useState('')

    const login = async (env) =>{
        env.preventDefault()
        //const API = process.env.NEXT_PUBLIC_API_URL
        const res = await fetch(`${API}/login`, {
            method:'POST',
            headers:{
                'Content-type': 'application/json'
            },
            body:JSON.stringify({
                email, 
                password
            })
        })
        const data = await res.json()

        if(!res.ok) {
            SetMsg(data.error || 'Error')
            return
        }

        localStorage.setItem('token', data.token)
        SetMsg('Login correcto')
    }


    return(
        <main>
            <h1>Login</h1>
            <form className='flex flex-col' onSubmit={login}>
                <input value={email} placeholder='Email' onChange={(e) => setEmail(e.target.value)}/>
                <input value={password} placeholder='Password' onChange={(e) => setPassword(e.target.value)}/>
                <button type='sumbit' className='border cursor-pointer'>Entrar</button>
            </form>
            {msg && <p>{ msg }</p>}
        </main>
    )
}