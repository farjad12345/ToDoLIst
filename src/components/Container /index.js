import "./style.css"
import Header from "../header"
import Iteams from "../Items"
import Actions from "../Actions "
import { datas, headerTitle, buttenText } from "../../Text "
function Container () {

    return (
        <div className="Container ">
            <Header text={headerTitle } />  
            <Iteams datas={datas} />
            <Actions buttenText={buttenText } />
    </div>
    )
}
export default Container 