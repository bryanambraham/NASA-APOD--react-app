export default function Main(props){
    const{Data} = props
    return(
        <div className="imgContainer">
           <img src={Data?.hdurl} alt={Data?.title || `bg-img`} className="bgImage" />
        </div>
    )
}