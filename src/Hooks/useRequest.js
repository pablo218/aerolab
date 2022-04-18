import { useCallback, useState } from "react";
import { useMountedRef } from './useMountedRef';


export const useRequest = (request, onSucess, onerror)=>{

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false)

    const isMounted = useMountedRef();

    const sendRequest = useCallback((payload)=>{
        setLoading(true);
        request(payload)
        .then(response => {
            if(isMounted.current) {
                setData(response.data);
                setError(null)
                onSucess(response.data)
                setLoading(false)
            }
        })
        .catch(error => {
            if(isMounted.current) {
                setError(error)
                setLoading(false)
                onerror()
            }
        })
    }, [request])

    return {data, loading, sendRequest, error}
}
