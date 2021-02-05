import React from 'react';

const StockDetails = (props) => {
    if(props.stock !== null){
        return(
            <div>
                <p>{props.stock.symbol}</p>
                <p>{props.stock.price.regularMarketPrice.fmt}</p>
            </div>
        )
    }
    return(
        <div>
            <p>No stock with that ticker was found.</p>
        </div>
    )
};

export default StockDetails;