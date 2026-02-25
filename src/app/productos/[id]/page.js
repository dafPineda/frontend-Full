import {API} from '@/confing'
async function getProductoId(id){
    //const API = process.env.NEXT_PUBLIC_API_URL
    const res = await fetch(`${API}/productos/${id}`)
    if(!res.ok){
        throw new Error('Error de servicio')
    }
    return res.json()
}
export default async function ProdcutoPage(  {params}){
     const parametros = (await params)
     const id = parametros.id

     const producto = await getProductoId(id)
     console.log(producto)

     return(
        <main>
            {}
            <h1>{producto.nombre}</h1>
            <p className="text-sm text-gray-400 ml-4">${producto.precio}</p>
            <p className="text-sm text-gray-400 ml-4">Cantidad:{producto.stock}</p>
        </main>
     )
}