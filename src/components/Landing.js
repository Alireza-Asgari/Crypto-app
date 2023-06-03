import React, { useEffect, useState } from 'react';
import Coin from './Coin';
import Loader from './Loader';
import { getCoin } from '../services/api';
import styles from "./Landing.module.css";
const Landing = () => {
    const [coins,setCoins] = useState([]);
    const [searched,setSearch] = useState("");
    useEffect(()=>{
        const fetchApi = async ()=>{
            const data = await getCoin();
            setCoins(data);
            console.log(data);
        }
        fetchApi();
    },[])

    const searchHandeler = event =>{
        setSearch(event.target.value);
    }
    const searchedCoin = coins.filter(coin => coin.name.toLowerCase().includes(searched.toLowerCase()));
    return (
        <>
            <input className={styles.input} type='text' placeholder='Search' value={searched} onChange={searchHandeler} />
            {
                coins.length ?
                <div className={styles.coinContainer}>
                    {searchedCoin.map(coin => <Coin 
                                        key={coin.id}
                                        name={coin.name}
                                        image={coin.image}
                                        symbol={coin.symbol}
                                        price={coin.current_price}
                                        priceChange={coin.price_change_percentage_24h}
                                        marketCap={coin.market_cap}

                                        />)}
                </div>:
                <Loader />
            }
        </>
    );
};

export default Landing;