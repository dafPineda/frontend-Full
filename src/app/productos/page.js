import {getProductos} from "../utils/api/getProdcutos";
import Link from 'next/link'

export default async function Productos(){
    const productos = await getProductos()
    {console.log(productos)} /* Con este desde consola verificas que si traer los elementos */
    return(
        <main class="p-4">
            <h1 className="text-2xl font-bold">Productos</h1>
            {productos.length === 0 && <p>No hay productos</p>}

            <ul class="list-disc"> {/* El list disc pone los puntos a los productos */}
                {productos.map((producto)=>( /* Por cada uno de los elementos mostrara los que esta dentor de los parentesis */
                    <li className="flex flex-row bg-green-900 w-auto m-2" key={producto.id}> 
                        <Link href={`/productos/${producto.id}`}>
                            <p>{producto.nombre} </p>
                            <span className="text-sm text-gray-400 ml-4">--{producto.precio}</span>
                        </Link>
                    </li>
                ))}
            </ul>
            <p>Hi</p>

        </main>
    )
}