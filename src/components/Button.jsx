const Button = ({text, color}) => {
    return (
        <p className={`p-3 border-2 border-gray-400 inline-block ${color && color === "white" ? "text-white" : ""}`}>{text}</p>
    )
}

export default Button;