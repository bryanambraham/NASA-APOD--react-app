import { useEffect, useState } from "react"
import Footer from "./components/Footer"
import Main from "./components/Main"
import Sidebar from "./components/Sidebar"

function App() {
  const[Data,setData] = useState(null)
  // const[Loading,setLoading] = useState(false)
  const[showSidebar, setSidebar] = useState(false)

  function handleToggleSidebar(){ // ini function untuk interaksi ikonnya
    setSidebar(!showSidebar) //set menjadi negasi tahap awal, cth dari false jadi true
  }

  useEffect(() => {
    async function fetchAPIData(){
      const NASA_KEY = import.meta.env.VITE_NASA_API_KEY
      const url = 'https://api.nasa.gov/planetary/apod' + 
      `?api_key=${NASA_KEY}`

      const today = (new Date()).toDateString() //21-26 untuk bikin cache nya
      const localKey = `NASA-${today}`
      if (localStorage.getItem(localKey)){
        const apiData = JSON.parse(localStorage.getItem(localKey))
        setData(apiData)
        console.log('Fetched from cache today!')
        return
      }
      localStorage.clear()

      try{
        const res = await fetch(url)
        const apiData = await res.json()
        localStorage.setItem(localKey, JSON.stringify(apiData))
        setData(apiData)
        console.log('Fetched from API today!')
      }catch(err){
        console.log(err.message)
      }
    }
    fetchAPIData() //dimatiin pas mau bikin Loading
  }, []) //kalo[] berarti artinya jalanin fungsi useEffect tiap kali page-nya laod

  return (
    <>
      {Data ? (<Main Data={Data} />) : ( //ini conditional logic
        <div className="LoadingState">
          <i className="fa-solid fa-gear"></i>
        </div>
      )}
      
      {showSidebar &&( //ini artinya kalau showSidebar = true, berarti kalo aktif
        <Sidebar Data={Data} handleToggleSidebar={handleToggleSidebar}/>
      )}
      {Data && (
        <Footer Data={Data} handleToggleSidebar={handleToggleSidebar}/>
        )}
    </>
  )
}

export default App
