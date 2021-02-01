import {Link,BrowserRouter as Router} from "react-router-dom"
function Header(props){
    return(
        <div>
          
            <nav className="nav">
                <Link className="link" to="/">Trang chủ</Link>
                <Link className="link" to="/cart">Giỏ hàng</Link>
                <Link className="link" to="/about">Giới thiệu</Link>
                <Link className="link" to="/contact">Liên hệ</Link>
                <Link className="link floatRight" to="/register">Đăng ký</Link>
                <Link className="link floatRight" to="/login">Đăng nhập</Link>
            </nav>
        
        </div>
    )
}
export default Header