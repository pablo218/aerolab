import { useCallback, useState } from "react";
import { useMountedRef } from './useMountedRef';


export const useRequest = (request)=>{

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false)

    const isMounted = useMountedRef();

    const sendRequest = useCallback((payload)=>{
        setLoading(true);
        request(payload)
        .then(response => {
            if(isMounted.current) {
                console.log('hook', response.data)
                setData(response.data);
                setError(null)
                setLoading(false)
            }
        })
        .catch(error => {
            if(isMounted.current) {
                setError(error)
                setLoading(false)
            }
        })
    }, [request])

    return {data, loading, sendRequest, error}
}
