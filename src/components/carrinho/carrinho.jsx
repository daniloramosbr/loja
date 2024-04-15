import { useContext, useEffect, useState } from "react";
import "./carrinho.scss";
import { ContextJsx } from "../../context/context";
import Onecarrinho from "../onecarrinho/onecarrinho";

export default function Carrinho() {
  const { width, setWidth, cart } = useContext(ContextJsx);

  const [valor, setValor] = useState();

  useEffect(() => {
    function GetValor() {
      let val = 0;

      for (let c in cart) {
        if (cart[c].qtd > 1) {
          let value = cart[c].qtd;
          let resamount = cart[c].price;
          let res = resamount * value;
          val += res;
        }
        if (cart[c].qtd < 2) {
          val += Number(cart[c].price);
        }
      }

      setValor(val.toLocaleString());
    }

    GetValor();
  }, [cart]);

  return (
    <nav className="nav-cart" style={{ width: width }}>
      <div className="header-cart">
        <h1>Carrinho de compras</h1>
        <button
          className="button-cart"
          onClick={() => {
            setWidth("0px");
          }}
        >
          <span>X</span>
        </button>
      </div>
      <div className="cart-section">
        {cart.length >= 1 ? (
          cart.map((res) => {
            return (
              <Onecarrinho
                img={res.img}
                title={res.title}
                price={res.price}
                key={res.id}
                qtd={res.qtd}
                id={res.id}
              />
            );
          })
        ) : (
          <h1>VOCÊ AINDA NÃO TEM PRODUTOS</h1>
        )}
      </div>

      <div className="cart-footer">
        <div className="total">
          <span>Total</span>
          <span>R${valor}</span>
        </div>
        <button>Finalizar Compra</button>
      </div>
    </nav>
  );
}
