
export default function Kino(props){
    const {Title, Year, imdbID, Type, Poster} = props
    return(
        <div key={imdbID} className="card" >
    <div className="card-image waves-effect waves-block waves-light">

      <img className="activator" src={Poster} />

    </div>
    <div className="">
      <span className="card-title activator grey-text text-darken-4"> {Title} <i className="material-icons right"> {Type} </i></span>
      <b>{Year}</b>
    </div>
    </div>
    )
}