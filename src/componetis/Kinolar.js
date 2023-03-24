import Kino from './Kino'

export default function Kinolar(props){
    const {films=[]} = props
    return(
        <div className="films" >
            {films.map((itme)=>(
              <Kino key={itme.imdbID} {...itme} />
        ))}
        </div>
    )
}