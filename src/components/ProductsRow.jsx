import { Col, Row } from "react-bootstrap";
import ProductsCard from "./ProductsCard";

export default function ProductsRow(props) {
  return (
    <>
      <div className="fs-4 text-light mt-5 px-2 ev-border-bottom">
        {props.brand}
        <hr style={{ height: "0.1rem" }}></hr>
      </div>

      <Row className="bg-black ev-rounded-1 px-4 py-4 br-5 mb-5">
        {props.brandProducts.map((product, id) => (
          <Col md={3} key={id}>
            <ProductsCard
              productImage={product.image}
              productName={product.product_name}
              brandName={product.brand_name}
              price={product.price}
              location={product.address}
              date={product.date}
              description={product.discription}
            />
          </Col>
        ))}
      </Row>
    </>
  );
}
