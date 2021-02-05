import React from 'react';

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
                    <div>
                        <label>Enter a Stock Ticker </label>
                        <input type="text" value={this.state.term} onChange={(e) => { this.setState({ term: e.target.value }) }} />
                    </div>
                </form>
            </div>
        )
    }
};

export default SearchBar;