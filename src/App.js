import React, {Component, useEffect, useState} from 'react';
import {seatShape, tableShape} from './types';

import Table from './components/Table';
//import useFetchTables from './data/useFetchTables'

import './App.css';
import axios from "axios";
import {fetchTablesData} from "./redux/actions";
import {useSelector, shallowEqual, useDispatch } from "react-redux";

function App ({table}){
    const url = 'https://storage.googleapis.com/replaypoker-dummy-api/tables/3.json';
    const dispatch = useDispatch();
    const tablesData = useSelector((state) => state.tablesData, shallowEqual)
    const [errorMessage, setErrorMessage] = useState('');
    const [tablesInfo, setTablesInfo] = useState({})

    console.log(tablesData)
    // Object.values(tablesData).seats.push({
    //              "id": 2,
    //              "state": "available"
    //          },)

    // charlie is not playing
    // thousand separator

    useEffect(()=> {
        let tablesSeats = {}
        // tablesSeats.seats[4] = {
        //                  "id": 2,
        //                  "state": "available"
        //              }
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
export default App;
