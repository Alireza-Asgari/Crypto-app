import React from 'react';
import styles from "./Coin.module.css";
const coin = ({name,image,symbol,price,priceChange,marketCap}) => {
    return (
        <div className={styles.container}>
            <img className={styles.image} src={image} alt='coin' />
            <span className={styles.name}>{name}</span>
            <span className={styles.symbol}>{symbol.toUpperCase()}</span>
            <span className={styles.currentPrice}> $ {price.toLocaleString()}</span>
            <span className={ priceChange > 0 ? styles.greenPriceChange : styles.redPriceChange }>{priceChange}</span>
            <span> $ {marketCap.toLocaleString()}</span>
        </div>
    );
};

export default coin;