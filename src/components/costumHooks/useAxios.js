import { useState, useEffect } from "react";
import axios from "axios";


const useAxios = (url) => {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();

    useEffect(() => {
        axios(url)
        .then((response) => setData(response.data))
        .catch(() => setError("Something went wrong... "))
        .finally(() => setLoading(false))
    }, [url]);

    return { data, loading, error }
}

export default useAxios;