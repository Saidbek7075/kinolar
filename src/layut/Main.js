import React from "react";
import Kinolar from "../componetis/Kinolar";
import Loading from "../componetis/Loading";
import Search from "../componetis/Search";

export default class Main extends React.Component{
    state={
        movies: [],
        loader: true
    }

    componentDidMount(){
        fetch('http://www.omdbapi.com/?apikey=8c03acc4&s=Spider man')
        .then(response=> response.json())
        .then(data=> this.setState({movies: data.Search, loader: false}))
      }
    
      componentDidUpdate(){
    
        console.log(this.state.movies);
      }

      qidiruv=(txt)=>{
        fetch(`http://www.omdbapi.com/?apikey=8c03acc4&s=${txt}`)
        .then(response=> response.json())
        .then(data=> this.setState({movies: data.Search}))
      }


      render(){
        return(
            <div className="container content" >
                <Search searchMovie={this.qidiruv} />
                {this.state.movies.length ? <Kinolar films={this.state.movies} /> : <Loading />}
            </div>
        )
      }
}