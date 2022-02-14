import React from "react";
import { Card } from "react-bootstrap";

export default function ProductsCard(props) {
  const {
    productImage,
    productName,
    brandName,
    price,
    location,
    date,
    description,
  } = props;

  const year = new Date(date).getFullYear();
  const month = new Date(date).getMonth();
  const day = new Date(date).getDate();
  const parsedDate = `${day}:${month}:${year}`;

  return (
    <Card className="bg-dark ev-rounded-05 text-light py-2 px-2 my-2 mx-2">
      <Card.Body>
        <div className="row">
          <div className="col-md-5">
            <img
              src={productImage}
              alt={productName}
              style={{ maxWidth: "5rem", aspectRatio: 1 }}
            />
          </div>
          <div className="col-md-7">
            <div className="row fw-bold">{productName}</div>
            <div className="row fw-light">{brandName}</div>
            <div className="row fw-bold">$ {price}</div>
          </div>
        </div>
        <div className="row mt-3">
          <small className="col-md-7 ev-fs-micro fw-light">
            {location.city} {location.state}
          </small>
          <small className="col-md-5 ev-fs-micro fw-light">
            Date: {parsedDate}
          </small>
        </div>
        <div className="row mt-3 px-2">{description}</div>
      </Card.Body>
    </Card>
  );
}
