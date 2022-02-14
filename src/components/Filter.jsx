import React from "react";

export default function Filter(props) {
  const filtersNames = ["products", "cities", "states"];
  const [products, cities, states] = props.filters;
  return (
    <>
      <div className="flex bg-black ev-rounded-1 px-4 py-4 br-5">
        <div className="fs-4 fw-lighter text-light mb-5 px-2 ev-border-bottom">
          Filters
          <hr style={{ height: "0.2rem" }}></hr>
        </div>
        {filtersNames.map((filter, id) => (
          <details
            className="bg-dark ev-rounded-05 text-light py-2 px-2 my-2 mx-2"
            key={id}
          >
            <summary>{filter}</summary>
            <section>
              <ul>
                {props.filters[id].map((filterContent, num) => (
                  <li key={num}>{filterContent}</li>
                ))}
              </ul>
            </section>
          </details>
        ))}
      </div>
    </>
  );
}
