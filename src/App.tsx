import React from 'react';
import axios from 'axios';
import { Route, Routes } from "react-router-dom";
import './App.scss';
import {Box} from '@material-ui/core'
import Loader from './components/Loader/Loader';
import Main from './pages/Main'
import NotFound from './pages/NotFound';
import {IItem} from './components/interface'
import { RootState } from './components/redux/store';
import { useDispatch, useSelector } from "react-redux";
import {
  setItems,
  setIsLoadingFalse,
} from "./components/redux/slices/mainSlice";
import Detail from './pages/Detail';
import { API_ADDRESS } from './API/API';



function App() {

  const dispatch = useDispatch()
  const loading = useSelector((state:RootState) => state.main.isLoading)

React.useEffect(() => {
  const getData = async () => {
    try {
      const response = await axios.get(API_ADDRESS)
      console.log(response.data)
      dispatch(setItems(response.data))
    }   catch (error:any) {
      alert(error.message)
      console.log(error.message)
  }    finally {
    dispatch(setIsLoadingFalse())
    }
  }
  getData();
}, [])

  return (
    <Box className='wrapper'>
      <Routes>
        <Route index element={
        loading? <Loader /> : <Main/>
        } />
        <Route
          path="/articles/:id"
          element={
            <Detail/>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Box>
  );
}

export default App;
