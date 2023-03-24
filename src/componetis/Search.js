import React from 'react';

export default class Search extends React.Component{
    state={
        search: ''
    }

    componentDidUpdate(){
        console.log(this.state.search);
    }
    hendleKey=(e)=>{
        if(e.key==='Enter'){
            this.props.searchMovie(this.state.search)
        }
    }

    render(){
        return(
        <div className="row">
            <div className="input-field col s12">
             <input id="search" type="search" className="validate" onChange={(e)=>{
                this.setState({search: e.target.value})
             }} onKeyDown={this.hendleKey} />
            <label for="search">Search</label>
            </div>
      </div>
        )
    }
}