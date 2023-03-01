import { makeStyles } from "@material-ui/core";
import React from "react";
import { useState } from "react";
import CircleLoader from "react-spinners/CircleLoader";
import AliceCarousel from "react-alice-carousel";
import { Link } from "react-router-dom";
//import { CryptoState } from "../../CryptoContext";
import { numberWithCommas } from "../CoinsTable";

const Carousel = (props) => {
  const [trending, setTrending] = useState([]);
  //const { currency, symbol } = CryptoState();
  const symbol = "$";

  //---------------DATA ACCESS-----------------
  React.useEffect(() => {
    setTrending(props.data);
  }, [props.data]);

  //---------------------STYLES-----------------

  const useStyles = makeStyles((theme) => ({
    carousel: {
      height: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    },
    carouselItem: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      cursor: "pointer",
      textTransform: "uppercase",
      color: "white",
    }
  }));

  const classes = useStyles();

  //--------------organize items-------------------
  const items = trending.map((coin) => {
    let profit = coin?.price_change_percentage_24h >= 0;
    console.log("In carousel: coin : ", coin);

    return (
      <Link className={classes.carouselItem} to={`/coins/${coin.id}`}>
        <img
          src={coin?.image}
          alt={coin.name}
          height="80"
          style={{ marginBottom: 10 }}
        />
        <span>
          {coin?.symbol}
          &nbsp;
          <span
            style={{
              color: profit > 0 ? "rgb(14, 203, 129)" : "red",
              fontWeight: 500,
            }}
          >
            {profit && "+"}
            {coin?.price_change_percentage_24h?.toFixed(2)}%
          </span>
        </span>
        <span style={{ fontSize: 22, fontWeight: 500 }}>
          {symbol} {numberWithCommas(coin?.current_price.toFixed(2))}
        </span>
      </Link>
    );
  });

  console.log("Carousel items: ", items);
  
  //How will it show?
  const responsive = {
    0: {
      items: 2,
    },
    512: {
      items: 4,
    },
  };

  return (
    <div className={classes.carousel}>
      {trending.length !== 0 ? (
        <AliceCarousel
          mouseTracking
          infinite
          autoPlayInterval={1000}
          animationDuration={1500}
          disableDotsControls
          disableButtonsControls
          responsive={responsive}
          items={items}
          autoPlay
        />
      ) : (
          <CircleLoader color="#00FFCC" size={150} />
      )}
    </div>
  );
};

export default Carousel;
