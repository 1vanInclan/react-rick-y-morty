import { useEffect, useState } from "react";


export const UseFetch = (url) => {

    const [page, setPage] = useState(1)

    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: null
    })

    const getFetch = async() => {

        setState({
            ...state,
            isLoading: true,
        });

        const resp = await fetch(url+page);
        const data = await resp.json();

        setState({
            data : data.results,
            isLoading: false,
            hasError: null,
        })
    }

  
    useEffect(() => {

        getFetch();

    }, [page])
    


    return {
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError,
        page,
        setPage
    };
}

