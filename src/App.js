import { useState, useEffect } from "react";
import { Filter, ProductsRow } from "./components";
import { Col, Container, Row } from "react-bootstrap";

function App() {
  const [uncategorizedProducts, setUncategorizedProducts] = useState([]);

  // partition data
  const brands = new Set();
  const products = new Set();
  const states = new Set();
  const cities = new Set();

  // Data structures to be used in components
  const brandsProducts = {};
  const filters = [];

  // Getting unprocessed datafrom API
  useEffect(() => {
    fetch("https://assessment-edvora.herokuapp.com/")
      .then((res) => res.json())
      .then((products) => setUncategorizedProducts(products));
  }, []);

  // Getting companies names
  uncategorizedProducts.map((product) => brands.add(product.brand_name));
  // Getting products names
  uncategorizedProducts.map((product) => products.add(product.product_name));
  // Getting state
  uncategorizedProducts.map((product) => states.add(product.address.state));
  // Getting cities
  uncategorizedProducts.map((product) => cities.add(product.address.city));

  // Preparing data to be used as filters
  filters.push(Array.from(products), Array.from(states), Array.from(cities));

  // Categorizing products by company
  for (const brand of Array.from(brands)) {
    brandsProducts[brand] = uncategorizedProducts.filter(
      (product) => product.brand_name === brand
    );
  }

  return (
    <Container fluid className="App">
      <Row className="mt-5">
        <Col md={2}>
          <Filter filters={filters} />
        </Col>
        <Col md={9} className="text-light">
          {Object.keys(brandsProducts).map((brand, id) => (
            <ProductsRow
              brand={brand}
              brandProducts={brandsProducts[brand]}
              key={id}
            />
          ))}
        </Col>
      </Row>
    </Container>
  );
}

export default App;
