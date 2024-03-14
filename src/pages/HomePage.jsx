
import { useNavigate } from "react-router-dom"
import { EstadoHome } from "../components/EstadoHome"



export const HomePage = () => {

    const navegador = useNavigate()

    function handleNavigate(){
        navegador('/result')
    }
    
  return (
    <>
    <div>
        <div>HomePage</div>
        <EstadoHome />
        <input type="button" onClick={handleNavigate} value='Send to Result Page'/>
    </div>
    </>
  )
}
