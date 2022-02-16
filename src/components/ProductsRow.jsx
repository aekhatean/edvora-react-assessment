import { Col, Row } from "react-bootstrap";
import ProductsCard from "./ProductsCard";

export default function ProductsRow(props) {
  function ScrollByLeft() {
    document.getElementById("menu").scrollLeft = 10;
  }
  function ScrollByRight() {
    document.getElementById("menu").scrollLeft = -10;
  }

  return (
    <>
      <div className="fs-4 text-light mt-5 px-2 ev-border-bottom">
        {props.brand}
        <hr style={{ height: "0.1rem" }}></hr>
      </div>

      <Row>
        <Col md={11} className="bg-black ev-rounded-1 px-4 py-4 br-5 mb-5">
          <ul className="ev-menu list-group list-group-horizontal">
            {props.brandProducts.map((product, id) => (
              <li className="col-md-3 list-group-item-black" key={id}>
                <ProductsCard
                  productImage={product.image}
                  productName={product.product_name}
                  brandName={product.brand_name}
                  price={product.price}
                  location={product.address}
                  date={product.date}
                  description={product.discription}
                />
              </li>
            ))}
          </ul>
        </Col>
        <Col md={1} className="paddles">
          <button
            onClick={ScrollByLeft}
            className="left-paddle paddle bg-dark hidden"
          >
            <p className="fs-2">&lt;</p>
          </button>
          <button
            onClick={ScrollByRight}
            className="right-paddle paddle bg-dark "
          >
            <p className="fs-2">&gt;</p>
          </button>
        </Col>
      </Row>
    </>
  );
}
