import {API} from '@/confing'
export async function getProductos(){
    //const API = process.env.NEXT_PUBLIC_API_URL lo movimos a src
    const res = await fetch(`${API}/productos`)
    if(!res.ok){
        throw new Error('Error en la base')
    }
    return res.json()
}