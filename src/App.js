import React, {useEffect, useState} from 'react';
import Table from './components/Table';
import './App.css';
import axios from "axios";
import {fetchTablesData} from "./redux/actions";
import {useSelector, shallowEqual, useDispatch } from "react-redux";
import {tableDefault} from "./data/tableDefault";

function App () {
    const url = 'https://storage.googleapis.com/replaypoker-dummy-api/tables/6.json';
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

App.defaultProps = {
    table: tableDefault,
}
export default App;
