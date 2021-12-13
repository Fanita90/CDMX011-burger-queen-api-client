/* eslint-disable react/prop-types */
import React from "react";

export const CommandOrder = (props) => {
  let { product, updateOrder, date } = props;
  const dateStart = new Date(product.date).toLocaleString();

  return (
    <div className="card-cocina">
      <p>{product.clientName}</p>
      <div>
        {" "}
        {product.orderProducts.map((p) => (
          <ul key={p.id}>
            <li>
              {p.quantity} {p.name}
            </li>
          </ul>
        ))}
      </div>
      <p className="status">{product.status}</p>
      <p>{dateStart}</p>
      <p className="waiterMail">{product.waiter}</p>
      <button
        onClick={() => {
          date(product);
        }}
      >
        Terminar preparación
      </button>
      <button
        onClick={() => {
          updateOrder(product);
        }}
      >
        Enviar a Mesa
      </button>
    </div>
  );
};
