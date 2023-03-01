import React from 'react'
import Banner from '../components/Banner/Banner'
//import CoinsTable from "../components/CoinsTable";
//import CircleLoader from "react-spinners/CircleLoader";

const Home = (props) => {

console.log("In Home", props.trendingData);
console.log("In Home", props.coinListData);

  return (
    <>
      <Banner data={props.trendingData} /> 
      {/* <CoinsTable data={props.coinListData} /> */}
    </>
  )
}

export default Home