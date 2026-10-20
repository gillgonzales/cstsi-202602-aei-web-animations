import { Link } from "react-router";
import "./cards.css"
import type { Product } from "../../mocks/mockedProducts"

interface CardsProps {
  item: Product
}

export const Cards = ({ item }: CardsProps) => {
  const awsBucket = "https://v3ll3s3laravelsdisk.s3.sa-east-1.amazonaws.com";
    
  return (
    <div className="card_container">
      <Link to={`/produto/${item.id}`}>
        <div className="card_main">
          <h3 className="card_name">{item.nome}</h3>
          <div className="card_thumb">
            <img className="card_thumb_image" src={`${awsBucket}/produtos/${item.image}`} />
          </div>
          <h4 className="card_price">
            R$ {item.preco}
          </h4>
          <p className="card_text">
            {item.descricao}
          </p>
        </div>
      </Link>
    </div>
  );
};
