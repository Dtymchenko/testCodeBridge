import React from 'react';
import axios from 'axios';
import { Route, Routes } from "react-router-dom";
import './App.scss';
import {Box} from '@material-ui/core'
import Main from './pages/Main'
import NotFound from './pages/NotFound';
import {IItem} from './components/interface'
import { useSelector, useDispatch } from "react-redux";
import {
  setItems,
  setIsLoadingFalse,
} from "./components/redux/slices/mainSlice";



function App() {

  const [items, setItems] = React.useState<IItem[]>([])
  const [loading, setLoading] = React.useState(true)

React.useEffect(() => {
  const getData = async () => {
    try {
      const response = await axios.get<IItem[]>('https://api.spaceflightnewsapi.net/v3/articles')
      setItems(response.data)
    }   catch (error:any) {
      alert(error.message)
      console.log(error.message)
  }    finally {
    setLoading(false)
    }
  }
  getData();
}, [])

console.log(items)

  return (
    <Box className='wrapper'>
      <Routes>
        <Route index element={
        loading? <div className='loader'>Loading...</div> : <Main/>
        } />
        
        {/* <Route
          path="/detail"
          element={
            <JobDetail
              getTimePassed={getTimePassed}
              today={today}
              items={items}
              itemId={itemId}
            />
          }
        /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Box>
  );
}

export default App;
