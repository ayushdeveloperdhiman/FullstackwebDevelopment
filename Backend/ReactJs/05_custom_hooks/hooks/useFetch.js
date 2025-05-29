import {useState, useEffect} from 'react';

const useFetch = (url) => {
    console.log(url);
    
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error,setError] = useState(null);

    useEffect(()=>{
        const fetchData = async ()=>{
            try {
                const res = await fetch(url);
                if(!res.ok){
                    throw new Error(`Error:${res.statusText}`)
                }
                const result = await res.json();
                setData(result);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    },[url])
  return {data,loading,error};
}

export default useFetch