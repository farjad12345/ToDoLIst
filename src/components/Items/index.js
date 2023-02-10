import "./style.css"
import Item from "../Item"
function Iteams({datas}) {

    return (
        <div className="Items">
            {datas.map((data) =>
                <Item data={data} key={data.id}  />
            )}
        </div>
    )
}
export default Iteams