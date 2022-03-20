import React from "react";

export default function ModalAlert({ msg }) {
  return (
    <React.Fragment>
      <section className="modalAlert">
        <div className="Model-A">
          <h2>{msg}</h2>
          <div className="Modal-B"></div>
        </div>
      </section>
    </React.Fragment>
  );
}
