import "./style.css"

function Item({ data }) {


    return (
        <div  className="parent-item">
            <div className="item">{data.text}</div>
            <button  className="butten-items"><p>x</p></button>
        </div>
    )
}
export default Item 