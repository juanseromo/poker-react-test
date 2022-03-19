import React, {useEffect, useState} from "react";
import axios from "axios";
import {fetchTablesData} from "../redux/actions";
import { useDispatch, useSelector, shallowEqual } from "react-redux";

const useFetchTables = (url) => {
    const dispatch = useDispatch();

    const [dataResponse, setDataResponse] = useState(null)
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(()=> {
        axios.get(url)
            .then(response => {
                dispatch(fetchTablesData());
                setDataResponse(response.data);
            })
            .catch(e => {
                setErrorMessage(e.message);
                return e
            })
    }, [url] )

    return { dataResponse }
}

export default useFetchTables;