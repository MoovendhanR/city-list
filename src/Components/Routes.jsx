import { Route,Routes} from "react-router-dom"
import { AddCity } from "./AddCity"
import { AddCountry } from "./AddCountry"
import { HomePage } from "./HomePage"

export const  AllRoutes=()=>{
return(
    <>
    <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/add-country" element={<AddCountry/>}></Route>
        <Route path="/add-city" element={<AddCity/>}></Route>
    </Routes>
    </>
)
}