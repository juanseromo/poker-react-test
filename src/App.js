import React, {Component, useEffect, useState} from 'react';
import {seatShape, tableShape} from './types';

import Table from './components/Table';
//import useFetchTables from './data/useFetchTables'

import './App.css';
import axios from "axios";
import {fetchTablesData} from "./redux/actions";
import {useSelector, shallowEqual, useDispatch } from "react-redux";

function App ({table}){
    const url = 'https://storage.googleapis.com/replaypoker-dummy-api/tables/1.json';
    const dispatch = useDispatch();
    const tablesData = useSelector((state) => state.tablesData, shallowEqual)
    const [errorMessage, setErrorMessage] = useState('');
    const [tablesInfo, setTablesInfo] = useState({})


    useEffect(()=> {
        const fetchData = () => {
            axios.get(url)
                .then(response => {
                    dispatch(fetchTablesData(response.data));
                })
                .catch(e => {
                    setErrorMessage(e.message);
                    return e
                })
        }
        fetchData()
    }, [url] )


  /*  useEffect(()=> {
        console.log(tablesData)

        setTablesInfo(tablesData)
    },[tablesData])
*/
  return (
      <div className="App">
        <Table table={tablesData} />
      </div>
  );

}
/*
class App extends Component {

  static propTypes = {
    table: tableShape.isRequired,
  }

  render() {
    const { table } = this.props;

    return (
      <div className="App">
        <Table table={table} />
      </div>
    );
  }
}*/

export default App;
