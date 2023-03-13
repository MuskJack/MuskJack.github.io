import { makeStyles } from "@material-ui/core";
import axios from "axios";
import { useEffect, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import { Link } from "react-router-dom";
import { TrendingCoins } from "../../config/api";
import { CryptoState } from "../../CryptoContext";
import { numberWithCommas } from "../CoinsTable";
import usdt from "../tokens/usdt.png";
import usdc from "../tokens/usdc.png";
import busd from "../tokens/busd.png";

const Carousel = () => {
  const [trending, setTrending] = useState([]);
  const { currency, symbol } = CryptoState();

  const fetchTrendingCoins = async () => {
    const { data } = await axios.get(TrendingCoins(currency));

    console.log(data);
    setTrending(data);
  };

  useEffect(() => {
    fetchTrendingCoins();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currency]);

  const useStyles = makeStyles((theme) => ({
    carousel: {
      height: "50%",
      display: "flex",
      alignItems: "center",
    },
    carouselItem: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      cursor: "pointer",
      textTransform: "uppercase",
      color: "white",
    },
  }));

  const classes = useStyles();

  // let test = [{"id":"bitcoin","symbol":"btc","name":"Bitcoin","image":"https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579"},
  // {"id":"ethereum","symbol":"eth","name":"Ethereum","image":"https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880"}]
  let test = [{"name": "USDT", "image": usdt, "buy_price": "BUY 7.78", "sell_price": "SELL 7.88"},
{"name": "USDC", "image": usdc, "buy_price": "BUY 7.78", "sell_price": "SELL 7.88"},
{"name": "BUSD", "image": busd, "buy_price": "BUY 7.74", "sell_price": "SELL 7.84"}]

  const items = test.map((test) => {
    // let profit = coin?.price_change_percentage_24h >= 0;

    return (
      <Link className={classes.carouselItem} to={`/`}>
        <img
          // src={coin?.image}
          src={test?.image}
          // alt={coin.name}
          alt = {test.name}
          height="80"
          style={{ marginBottom: 10 }}
        />

        <span>
          {test?.name}
          {/* &nbsp; */}
          {/* <span
            style={{
              color: profit > 0 ? "rgb(14, 203, 129)" : "red",
              fontWeight: 500,
            }}
          >
            {profit && "+"}
            {coin?.price_change_percentage_24h?.toFixed(2)}%
          </span> */}
         
        </span>

        &nbsp;
        <span 
        style={{
          backgroundColor: "green",
          fontWeight: 800,
        }}>
        
            {test.buy_price}
          </span>
        
          &nbsp;
        <span 
        style={{
          backgroundColor: "red",
          fontWeight: 800,
        }}>
        
            {test.sell_price}
          </span>

        {/* <span style={{ fontSize: 22, fontWeight: 500 }}>
         {symbol} {numberWithCommas(coin?.current_price.toFixed(2))}
        </span> */}
      </Link>
    );
  });

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
      <AliceCarousel
        mouseTracking
        infinite
        autoPlayInterval={1000}
        animationDuration={2500}
        disableDotsControls
        disableButtonsControls
        responsive={responsive}
        items={items}
        autoPlay
      />
    </div>
  );
};

export default Carousel;
