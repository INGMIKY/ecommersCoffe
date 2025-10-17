import { useEffect, useState } from "react"

export const useGetProductBySlug = (slug: string | string[] | undefined) => {
    const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/products?filters[slug][$eq]=${slug}&populate=*`;
        const [result, setResult] = useState(null)
        const [loading, setLoading] = useState(true)
        const [error, setError] = useState('')
    
    
        const getCategories = async () => {
            try{
                const res = await fetch(url);
                if(!res.ok) throw new Error('Error al consultar las categorias');
                const json = await res.json();
                setResult(json.data);
                setLoading(false);
            }catch(error:any){
                setError(error);
                setLoading(false);
            }
        }
    
        useEffect(()=>{
            getCategories();
        },[url])

    return {result, loading, error}
}