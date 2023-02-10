import "./style.css"

function Button({ text, classBtn }) {


    return (
        <button  className={`footer__button  ${classBtn}`}>
            {text}
        </button>
    )
}
export default Button