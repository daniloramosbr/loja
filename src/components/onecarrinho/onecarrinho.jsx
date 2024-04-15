import "./onecarrinho.scss";
import { useContext } from "react";
import { ContextJsx } from "../../context/context";

export default function Onecarrinho({ img, title, price, qtd, id }) {
  const { cart, setCart } = useContext(ContextJsx);

  const num = Math.round(price);
  let resFormat = num.toLocaleString();

  const exist = cart.findIndex(function (item) {
    return item.title == title;
  });

  let position = exist;

  let Edit = cart.filter((item) => item.img !== img);

  function AddValue() {
    const newItem = {
      img: img,
      title: title,
      price: num,
      id: id,
      qtd: cart[position].qtd + 1,
    };

    Edit.splice(position, 0, newItem);

    setCart(Edit);
  }

  function RemoveValue() {
    if (cart[position].qtd == 1) {
      return;
    }

    const newItem = {
      img: img,
      title: title,
      price: num,
      id: id,
      qtd: cart[position].qtd - 1,
    };

    Edit.splice(position, 0, newItem);

    setCart(Edit);
  }

  function DeleteCart() {
    let Edit = cart.filter((item) => item.img !== img);
    setCart(Edit);
  }

  return (
    <div className="cont-onecart">
      <div className="cart-remove">
        <button onClick={DeleteCart}>X</button>
      </div>
      <img src={img} />
      <h1>{title}</h1>
      <div className="cont-qtd">
        <div className="qtd-inputs">
          <button onClick={RemoveValue}>-</button>
          <input type="text" value={qtd} />
          <button onClick={AddValue}>+</button>
        </div>
        <span className="price-cart">R${resFormat}</span>
      </div>
    </div>
  );
}
