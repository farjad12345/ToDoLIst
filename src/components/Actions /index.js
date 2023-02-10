import "./style.css"
import Button from "../Button"
function Actions({ buttenText }) {
    return (
        <div className="footer ">
            {buttenText.map((eachBTN) => 
             
                <Button key={eachBTN.id} text={eachBTN.text} classBtn={eachBTN.class} />
            
            )}
        </div>
    )
}
export default Actions 