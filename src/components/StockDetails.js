import React from 'react';
import LineGraph from './LineGraph'

import '../Styles/StockDetails.css'

class StockDetails extends React.Component {
    render(){
        if(this.props.stock !== null && this.props.stock.earnings !== undefined){
            return(
                <div>
                    <h2>{this.props.stock.symbol}</h2>
                    <h3>{this.props.stock.price.longName}</h3>
                    <p>{this.props.stock.price.regularMarketPrice.fmt}</p>
                    <p>{this.props.stock.price.currency}</p>
                    <p>{this.props.stock.price.exchangeName}</p>
                    <div className="chart-size">
                        <LineGraph
                            data={this.props.stock.earnings.earningsChart.quarterly}
                        />
                    </div>
                </div>
            )
        }
        return(
            <div>
                <p>No stock with that ticker was found or the ticker was not a stock.</p>
            </div>
        )
    }
};

export default StockDetails;