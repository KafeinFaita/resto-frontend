import headerBg from "../../assets/header.jpg";

const Header = () => {
    return (
        <div 
            className="h-screen bg-cover bg-center bg-black"
            style={{backgroundImage: `url(${headerBg})`}}
        >
            <div className="w-full h-full flex flex-col justify-center items-center">
                <p className="text-white text-2xl pb-4">Welcome To</p>
                <h1 className="text-6xl font-extrabold text-white">RESTAURANT</h1>
            </div>
            
        </div>
    )
}

export default Header;