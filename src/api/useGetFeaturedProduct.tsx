import { useEffect, useState } from "react";


export function useGetFeaturedProduct() {
    const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/Api/products?populate=*&filters[isFeatured][$eq]=true`;
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');


    const fetchData = async() =>{
        try{
            const res = await fetch(url);
            if(!res.ok){
                throw new Error('Error en la petición'); 
            } 
            const json = await res.json();
            setResult(json.data);
            setLoading(false);

        }catch(error: any){
            setError(error);
            setLoading(false);
        }
    }

    useEffect(()=>{
        fetchData();
    },[url])

    return {result, loading, error};
}
