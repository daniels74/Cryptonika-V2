import React from 'react';
import { Routes, Route} from 'react-router-dom'
import './App.css';
import Navbar from "./components/Navbar/Navbar"
import Home from "./pages/Home"
import Visuals from './pages/Visuals'
import Insights from "./pages/Insights"
import CoinPage from "./pages/CoinPage"
import {makeStyles} from "@material-ui/core"

import {useDispatch, useSelector} from 'react-redux';
import {getTrending} from "./redux/reducers/trendingSlice"
import {getAllCoins} from "./redux/reducers/allCoinsSlice"

const useStyles = makeStyles(() => ({
  App: {
    backgroundColor: "#14161a",
    color: "white",
    minHeight: "100vh",
  },
}));

function App() {
  const classes = useStyles();

  const dispatch = useDispatch();
  //--------Get data-----------------------------
  const  trending  = useSelector((state) => state.trending);
  const  allCoins  = useSelector((state) => state.allCoins);
  React.useEffect(() => {
    dispatch(getTrending());
    dispatch(getAllCoins());
  }, [dispatch]);
  
  console.log("In App-trending", trending);

  const trendingData = Object.values(trending)
  
  console.log("In App-trendingData", trendingData)
  
  const coinList = Object.values(allCoins)
  console.log("In App", coinList)

  return (
    <>
      <div className={classes.App}>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={Object.keys(allCoins).length ? <Home trendingData={trendingData} coinListData={coinList}/> : <p>Loading...</p>} />
          <Route exact path="/Visuals" element={<Visuals/>}/>
          <Route exact path="/Insights" element={<Insights/>}/>
          <Route exact path="/coins/:id" element={<CoinPage/>}/>
        </Routes>
      </div>
    </>
  );
}

export default App;
