import React from 'react';
import SearchBar from './SearchBar';
import StockDetails from './StockDetails';

import yahoo from '../api/YahooFinance';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = { details : null };
        this.onSearchSubmit = this.onSearchSubmit.bind(this);
    }

    async onSearchSubmit(ticker){
        await yahoo.get('https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-financials', {
            params: { symbol: ticker, region: 'US' }
        }).then(response => {
            console.log(response.data);
            this.setState({ details: response.data });
        }).catch(err => {
            if (err.response) {
                console.log(err.response);
            } else if (err.request) {
                console.log(err.request);
            } else {
                console.log(err);
            }
        });
    }

    render(){
        if(this.state.details === null){
            return(
                <div>
                    <SearchBar onSubmit={this.onSearchSubmit}/>
                </div>
            )
        }
        
        return(
            <div>
                <SearchBar onSubmit={this.onSearchSubmit}/>
                <StockDetails stock={this.state.details ? this.state.details : null} />
            </div>
        )
    }
};

export default App;