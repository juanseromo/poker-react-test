import React, {useEffect, useState} from 'react';
import Table from './components/Table';
import './App.css';
import axios from "axios";
import {fetchTablesData, saveCommunityCards} from "./redux/actions";
import {useSelector, shallowEqual, useDispatch } from "react-redux";
import {tableDefault} from "./data/tableDefault";

function App () {
    const url = 'https://storage.googleapis.com/replaypoker-dummy-api/tables/8.json';
    const dispatch = useDispatch();
    const tablesData = useSelector((state) => state.tablesData, shallowEqual);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(()=> {
        const fetchData = () => {
            axios.get(url)
                .then(response => {
                    dispatch(fetchTablesData(response.data));
                    dispatch(saveCommunityCards(response.data.currentHand.communityCards));
                })
                .catch(e => {
                    setErrorMessage(e.message);
                    return e;
                })
        };
        fetchData();
    }, [url] );

    return (
      <div className="App">
        <Table table={tablesData} />
      </div>
    );
}
App.defaultProps = {
    table: tableDefault,
};
export default App;
