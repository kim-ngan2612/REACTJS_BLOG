
import "./topbar.css"

export default function TopBar() {
    return (
        <div className= "top">
            <div className="topLeft">
            <i className="topIcon fab fa-facebook"></i>
            <i className="topIcon fab fa-instagram"></i>
            <i className="topIcon fab fa-twitter"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className= "topListItem">HOME</li>
                    <li className= "topListItem">ABOUT</li>
                    <li className= "topListItem">CONTACT</li>
                    <li className= "topListItem">WRITE</li>
                    <li className= "topListItem">LOGOUT</li>
                </ul>
            </div>
            <div className="topRight">
                <img 
                className="topImg"
                src="https://i.pinimg.com/originals/06/72/98/0672986f877f7e4974c443228e795e46.jpg"
                 alt="" />
                 <i className=" topSearchIcon fas fa-search"></i>
            </div>
        </div>
    )
}

