import { Header } from "./Header"
import{Outlet} from 'react-router-dom'
export const SharedLayout = ()=>{
    return(
        <div>
      <Header/>
      <Outlet/>
      </div>
    )
}