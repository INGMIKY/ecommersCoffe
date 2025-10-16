import { ResultFilterTypes } from "@/types/filters";
import { useEffect, useState } from "react";

export function useGetProductField(){
    const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}`;
            const [result, setResult] = useState<ResultFilterTypes | null>(null)
            const [loading, setLoading] = useState(true)
            const [error, setError] = useState('')
        
        
            const getCategories = async () => {
                try{
                    const res = await fetch(`${url}/api/content-type-builder/content-types/api::product.product`);
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