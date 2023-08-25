import { AxiosError, AxiosResponse } from "axios";
import { useState } from "react";

type Resource<T,D> = (data?: any) =>  Promise<AxiosResponse<T, D>>

const useResource = <T, D>(resource: Resource<T, D>) => {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<AxiosError | null>(null);

    const getResource = async () => {
        try {
            setLoading(true);
            const { data } = await resource();
            if(data){
                setError(null);
                setData(data)
            }
        } catch (e)  {
            setError(e as AxiosError);
        } finally {
            setLoading(false)
        }
    }

    return {
        data,
        loading,
        getResource,
        error,
    }
};

export default useResource;