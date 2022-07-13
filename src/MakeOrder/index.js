import React from "react";
import "./MakeOrder.css";

function MakeOrder() {
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.elements.client_name.value);
  };

  return (
    <React.Fragment>
      <div className="containerOrder">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label>
              Client name: <input type="text" name="client_name" required />
            </label>
            <label>
              Waiter id:{" "}
              <input type="number" name="waiter_id" min={1} required />
            </label>
            <label>
              Table number:{" "}
              <input type="number" name="table_number" min={1} required />
            </label>
            <label>
              Products description:
              <textarea required name="products_description"></textarea>
            </label>
            <label>
              Total cost: <input type="text" name="total_cost" required />
            </label>
            <label>
              Auth code:{" "}
              <input type="number" name="auth_code" min={1} required />
            </label>
            <div className="buttonDiv">
              <button type="submit">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
}

export default MakeOrder;
