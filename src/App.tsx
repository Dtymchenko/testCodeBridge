import React from 'react';
import { Route, Routes } from "react-router-dom";
import './App.scss';
import {Box} from '@material-ui/core'
import Main from './pages/Main'
import NotFound from './pages/NotFound';

function App() {
  return (
    <Box className='wrapper'>
      <Routes>
        <Route index element={<Main/>} />
        {/* <Route
          index
          element={
            isLoading ? (
              tempArr.map((item, i) => <Loader key={i} />)
            ) : (
              <JobBoard
                items={items}
                currentItems={currentItems}
                getTimePassed={getTimePassed}
                today={today}
                itemsPerPage={itemsPerPage}
                setCurrentItems={setCurrentItems}
                setItemId={setItemId}
              />
            )
          }
        /> */}
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
