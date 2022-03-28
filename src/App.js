import React, {useEffect, useState} from 'react';
import {tableShape} from './types';
import Table from './components/Table';
import './App.css';
import axios from "axios";
import {fetchTablesData} from "./redux/actions";
import {useSelector, shallowEqual, useDispatch } from "react-redux";

function App ({table}){
    const url = 'https://storage.googleapis.com/replaypoker-dummy-api/tables/5.json';
    const dispatch = useDispatch();
    const tablesData = useSelector((state) => state.tablesData, shallowEqual)
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(()=> {
        const fetchData = () => {
            axios.get(url)
                .then(response => {
                    return dispatch(fetchTablesData(response.data));
                })
                .catch(e => {
                    setErrorMessage(e.message);
                    return e
                })
        }
        fetchData()
    }, [url] )


  return (
      <div className="App">
        <Table table={tablesData} />
      </div>
  );
}

App.propTypes = {
    table: tableShape.isRequired,
}
export default App;
