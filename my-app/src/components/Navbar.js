import logo from "../favicon.ico"
export default function Navbar(){
    return(
        <div className="navbar">
            <div className="logo">
                <img src={logo}  
                />
                <h3>React Facts</h3>
            </div>
            <h4>React Course project goes here</h4>
        </div>
    )
}
