
export default function Footer(props){
    const{showSidebar, handleToggleSidebar, Data} = props
    return(
        <footer>
            <div className="bgGradient"></div>
             <div>
                {/* <h2>Pluto's dramatic sunset landscape</h2> */}
                <h1>Bryan's APOD</h1>
                <h2>{Data?.title}</h2>
            </div>
            <button onClick={handleToggleSidebar}>
                 <i className="fa-regular fa-circle-question"></i>
            </button>
        </footer> 
    )
}