export default function Sidebar(props){
const{showSidebar, handleToggleSidebar, Data} = props

    return(
        <div className="Sidebar">
            <div onClick={handleToggleSidebar} className="bgOverlay"></div>
            <div className="SidebarContents">
                {/* <h2>Pluto's dramatic sunset landscape</h2> */}
                <h2>{Data?.title}</h2>
                <div className="Description">
                    <div className="DescriptionContainer"></div>
                    {/* <p className="DescriptionTitle">Description</p> */}
                    <p className="DescriptionTitle">{Data?.date}</p>
                    {/* <p>The image captures a breathtaking sunset on Pluto, showcasing its frozen, alien landscape. The distant sun casts a soft, cold light over the icy surface, illuminating the terrain in hues of purple, pink, and blue. The ground is marked by deep craters, jagged mountains, and expansive frozen plains. Towering ice formations and distant hills create an eerie, otherworldly view under a star-filled sky. The atmosphere is thin, allowing for a clear view of distant celestial bodies, while the serene and mysterious ambiance captures the distant and isolated beauty of Pluto.</p> */}
                    <p>{Data?.explanation}</p>
                </div>
                <button onClick={handleToggleSidebar}
                ><i className="fa-solid fa-arrow-right"></i></button>
            </div>
            
        </div>
    )
}