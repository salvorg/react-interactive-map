import React from 'react';
import Map from "./pages/Map";
import {Route, Routes} from "react-router-dom";
function App() {
  return (
    <>
      <Routes>
        path="/pscenters"
        <Route
          index
          element={
            <>
            </>
          }
        />
        <Route
          path="/map"
          element={
            <>
              <Map />
            </>
          }
        />
        {/*<Route*/}
        {/*  path="/test"*/}
        {/*  element={*/}
        {/*    <>*/}
        {/*      <PageTitle title="Testing"/>*/}
        {/*      <Test/>*/}
        {/*    </>*/}
        {/*  }*/}
        {/*/>*/}
      </Routes>
    </>
  );
}

export default App;
