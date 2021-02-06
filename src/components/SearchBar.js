import React from 'react';
//import '../Styles/StockDetails.css';

class SearchBar extends React.Component {
    constructor(props){
        super(props);
        this.state = { term : '' };
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onFormSubmit(event){
        event.preventDefault();
        this.props.onSubmit(this.state.term);
    }

    render(){
        return(
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <div className="align-elements-same-line">
                        <p>Enter a Stock Ticker </p>
                        <input className="searchbar" type="text" value={this.state.term} onChange={(e) => { this.setState({ term: e.target.value }) }} />
                    </div>
                </form>
            </div>
        )
    }
};

export default SearchBar;