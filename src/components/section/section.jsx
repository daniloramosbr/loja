import "./section.scss";
import Onesection from "../onesection/onesection";
import Carrinho from "../carrinho/carrinho";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Section() {
  const [data, setData] = useState();

  useEffect(() => {
    async function getApi() {
      try {
        const res = await axios.get(
          "https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=DESC"
        );
        console.log(res.data.products);
        setData(res.data.products);
      } catch (error) {
        console.log(error);
      }
    }
    getApi();
  }, []);

  return (
    <div className="cont-sect">
      <Carrinho />
      <main className="main-sect">
        {data ? (
          data.map((res) => {
            return (
              <Onesection
                id={res.id}
                key={res.id}
                img={res.photo}
                title={res.name}
                price={res.price}
                desc={res.description}
              />
            );
          })
        ) : (
          <div className="cont-skeleton">
            <div>
              <div className="skeleton skeleton-img"></div>
              <div className="skeleton skeleton-text"></div>
              <div className="skeleton skeleton-desc"></div>
              <div className="skeleton skeleton-button"></div>
              <div className="skeleton skeleton-desc"></div>
            </div>

            <div>
              <div className="skeleton skeleton-img"></div>
              <div className="skeleton skeleton-text"></div>
              <div className="skeleton skeleton-desc"></div>
              <div className="skeleton skeleton-button"></div>
              <div className="skeleton skeleton-desc"></div>
            </div>

            <div>
              <div className="skeleton skeleton-img"></div>
              <div className="skeleton skeleton-text"></div>
              <div className="skeleton skeleton-desc"></div>
              <div className="skeleton skeleton-button"></div>
              <div className="skeleton skeleton-desc"></div>
            </div>

            <div>
              <div className="skeleton skeleton-img"></div>
              <div className="skeleton skeleton-text"></div>
              <div className="skeleton skeleton-desc"></div>
              <div className="skeleton skeleton-button"></div>
              <div className="skeleton skeleton-desc"></div>
            </div>

            <div>
              <div className="skeleton skeleton-img"></div>
              <div className="skeleton skeleton-text"></div>
              <div className="skeleton skeleton-desc"></div>
              <div className="skeleton skeleton-button"></div>
              <div className="skeleton skeleton-desc"></div>
            </div>

            <div>
              <div className="skeleton skeleton-img"></div>
              <div className="skeleton skeleton-text"></div>
              <div className="skeleton skeleton-desc"></div>
              <div className="skeleton skeleton-button"></div>
              <div className="skeleton skeleton-desc"></div>
            </div>

            <div>
              <div className="skeleton skeleton-img"></div>
              <div className="skeleton skeleton-text"></div>
              <div className="skeleton skeleton-desc"></div>
              <div className="skeleton skeleton-button"></div>
              <div className="skeleton skeleton-desc"></div>
            </div>

            <div>
              <div className="skeleton skeleton-img"></div>
              <div className="skeleton skeleton-text"></div>
              <div className="skeleton skeleton-desc"></div>
              <div className="skeleton skeleton-button"></div>
              <div className="skeleton skeleton-desc"></div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
