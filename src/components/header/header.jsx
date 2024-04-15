import { useContext } from "react";
import "./header.scss";
import { ContextJsx } from "../../context/context";

export default function Header() {
  const { setWidth, cart } = useContext(ContextJsx);

  const cartValue = cart.length;

  return (
    <div className="cont-header">
      <div className="header-title">
        <h1>MKS </h1>
        <span>Sistemas</span>
      </div>
      <div className="cont-button">
        <button
          onClick={() => {
            setWidth("486px");
          }}
        >
          <div>
            <ion-icon name="cart-outline"></ion-icon>
          </div>
          <span>{cartValue}</span>
        </button>
      </div>
    </div>
  );
}
