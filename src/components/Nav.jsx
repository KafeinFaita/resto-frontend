import { NavLink } from "react-router-dom";

const links = [
    { url: "", text: "Home" },
    { url: "menu", text: "Menu" },
    { url: "gallery", text: "Gallery" },
    { url: "about", text: "About Us" },
    { url: "contact", text: "Contact Us" },
]
const Nav = () => {
    return (
        <nav className="py-5 px-5 flex justify-between">
            <div className="text-2xl font-bold">My Restaurant</div>

            <div>
                {links.map(link => {
                    return (
                        <NavLink to={link.url} className="pl-5">{link.text}</NavLink>
                    )
                })}
            </div>
        </nav>
    )
}

export default Nav;