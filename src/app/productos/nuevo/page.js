'use client';
import {useState} from 'react'

export default function NuevoProductoPage(){
    /* const [contador, setcontador] = useState(2)
    const aumentarContador = ()=>{
        console.log(contador+1)
        setcontador(contador+1)
    } */
   const [nombre, setNombre] = useState('')
   const [precio, setPrecio] = useState('')
   const [sku, setSku] = useState('')
   const [stock, setStock] = useState('')
   const [msg, setMsg] = useState('')
    
     const  crear = async (evt) =>{
        evt.preventDefault()

        try{
            const API = process.env.NEXT_PUBLIC_API_URL
            const token = localStorage.getItem('token')//el localStorage no funciona si no esta dentro de una funcion a
            const res = await fetch(`${API}/productos`, 
            {
                method:'POST', 
                headers:{
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({
                    nombre, 
                    precio: Number(precio),
                    sku,
                    stock:Number(stock)
                })
            })

            const data= await res.json().catch(()=>({}))
            if(!res.ok){
                setMsg(data.Error || "Error al crear producto")
                return;
            }

            setMsg('Producto creado')
            setNombre('')
            setPrecio('')
            setSku('')
            setStock('')
        }catch(er){
            console.error(er)
        }
    }
    return(
        <main className='flex flex-col'>
            {/* <p className='text-red-500'>{contador}</p>
            <button 
                className='border-2 w-40 hover:forced-colors:bg-green-500 hover:focus' 
                onClick={aumentarContador}>
                    Aumentar
            </button> */}
            <form onSubmit={crear}>
                <div>
                    <input
                    placeholder='Nombre'
                    value={nombre}
                    onChange={(e)=>setNombre(e.target.value)}
                    className='border-2'
                    />
                </div>
                <div>
                    <input
                        placeholder='Precio'
                        value={precio}
                        onChange={(e)=>setPrecio(e.target.value)}
                        className='border-2'
                        />
                </div>
                <div>
                    <input
                        placeholder='SKU'
                        value={sku}
                        onChange={(e)=>setSku(e.target.value)}
                        className='border-2'
                        />
                </div>
                <div>
                    <input
                        placeholder='Stock'
                        value={stock}
                        onChange={(e)=>setStock(e.target.value)}
                        className='border-2'
                        />
                </div>
                <button className='cursor-pointer hover:bg-amber-300 border-2' >Crear</button>
            </form>
            {msg && <p>{msg}</p>}
        </main>
    )
}