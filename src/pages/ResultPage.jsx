import { useNavigate } from "react-router-dom"
import { EstadoResult } from "../components/EstadoResult"


export const ResultPage = () => {

    const navegador = useNavigate()

    function handleNavigate(){
        navegador('/')
    }
  return (
        <>
            <div>Result page</div>
            <EstadoResult />
            <input type="button" onClick={handleNavigate} value='Send to Home Page'/>
        </>
  )
}
