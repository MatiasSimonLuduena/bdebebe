import "./card.css"

import { products } from "../../data"

const Card = () => {
  return (
    <div className="cards">
        {products.map((item, index) => (
            <div className="card" key={index}>
                <img src={item.img} alt={item.title} />
                <div>
                    <h4>{item.title}</h4>
                    <p>★{item.stars}</p>
                </div>
                <div>
                    <p>{item.sex}</p>
                    <p>Talle {item.talle}</p>
                </div>
            </div>
        ))}
    </div>
  )
}

export default Card