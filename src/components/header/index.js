import "./style.css"
function Header({text}) {
    return (
        <div className="Header-box">
            <p className="Header-box-tag-P">{text}</p>
        </div>
    )
}
export default Header