import { useContext } from "react";
import "./onesection.scss";
import { ContextJsx } from "../../context/context";

export default function Onesection({ img, title, price, desc, id }) {
  const { cart, setCart } = useContext(ContextJsx);

  const num = Math.round(price);

  let resFormat = num.toLocaleString();

  function GoCart() {
    if (cart.length == 8) {
      return;
    }

    const exist = cart.findIndex(function (item) {
      //verifica se é o mesmo title
      return item.title == title;
    });

    if (exist != -1) {
      //se exist for diferente de -1 entao ja tem

      let position = exist; //posicao

      let Edit = cart.filter((item) => item.img !== img);

      const newItem = {
        img: img,
        title: title,
        price: num,
        id: id,
        qtd: cart[position].qtd + 1,
      };

      Edit.splice(position, 0, newItem);

      setCart(Edit);

      return;
    }

    const newItem = {
      img: img,
      title: title,
      price: num,
      id: id,
      qtd: 1,
    };

    const newItems = [...cart, newItem];
    setCart(newItems);
  }

  return (
    <div className="cont-onesection">
      <div className="cont-img">
        <img src={img} />
      </div>
      <div className="price">
        <span className="title-prod">{title}</span>
        <span className="price-span">R${resFormat}</span>
      </div>
      <div className="desc">
        <span>{desc}</span>
      </div>
      <button onClick={GoCart}>
        <div>
          <ion-icon name="card-outline"></ion-icon>
        </div>
        <span>COMPRAR</span>
      </button>
    </div>
  );
}
