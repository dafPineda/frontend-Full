'use client'
import { useEffect, useState } from 'react'
import {API} from '@/confing'

export default function PrivadoPage() {
  const [data, setData ] = useState({})

  useEffect(() => {
    (
      async () => {
      const token = localStorage.getItem('token');
      //const API = process.env.NEXT_PUBLIC_API_URL
      const res = await fetch(`${API}/private`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      const result = await res.json();
      setData(result)
      }
    )();
    
  }, [])

  return (
    <main className="p-4">
      <pre>{data}</pre>
    </main>
  );
}

