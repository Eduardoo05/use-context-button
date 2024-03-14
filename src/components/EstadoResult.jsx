import { useContext } from "react"
import { DataContext } from "../contexts/dataContext"

export const EstadoResult = () => {

  const [contexData, setContextData] = useContext(DataContext)

  return (
    <>
      <div>EstadoResult: {contexData}</div>
      <input type="button" onClick={()=>setContextData(contexData + 1)} value='Sumar'/>
    </>
  )
}
