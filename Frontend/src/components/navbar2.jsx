import "../CSS/navabar2.css";
import Logo from "../assets/yajveer-logo.jpg";
import { useSelector } from "react-redux";
import { Link } from "react-router";
import { useNavigate } from "react-router";
export default function Navbar2() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/');  
  };

  const { data: products } = useSelector((state) => state.cart);
  return (
    <>
      <nav className="Navbar2">
        <div className="logo" onClick={handleClick} style={{ cursor: 'pointer' }}>
          <img src={Logo} alt="Yajveer" />
        </div>
        <div className="search">
          <div className="s1">
            <div className="list">
              <div className="title">
                <p>
                  All Categories{" "}
                  <i
                    className="bi bi-caret-down-fill"
                    style={{ fontSize: "1rem" }}
                  ></i>
                </p>
              </div>
              <div className="Menulist">
                {products &&
                  products.map((item) => (
                    <p key={item._id}>
                      <Link
                        to={`/product/${item._id}`}
                        style={{ textDecoration: "none", color: "inherit" }}
                      >
                        {item.productName}
                      </Link>
                    </p>
                  ))}
              </div>
            </div>
            <div className="content">
              <div className="input">
                <input type="text" placeholder="Search For the Product" />
              </div>
              <div className="s2">
                <div className="con">
                  <i className="bi bi-search fs-1"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="addtocart">
          <div className="like">
            <i className="bi bi-heart" style={{ color: "white" }}></i>
            <p>Wishlist</p>
          </div>
          <div className="add">
            <i className="bi bi-cart-plus" style={{ color: "white" }}></i>
            <p>Cart</p>
          </div>
        </div>
      </nav>
    </>
  );
}
