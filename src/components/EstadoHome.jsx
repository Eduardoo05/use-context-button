import { useContext } from "react"
import { DataContext } from "../contexts/dataContext"

export const EstadoHome = () => {

  const contextData = useContext(DataContext)

  return (
    <>
    <div>EstadoHome: {contextData}</div>
    </>
  )
}

