import React from "react";
import "./MakeOrder.css";
import Axios from "axios";

function MakeOrder() {
  const [systemMsg, setSystemMsg] = React.useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    await Axios({
      method: "post",
      url: "http://localhost:4000/waiter-app/invoices/create",
      data: {
        auth_code: parseInt(e.target.elements.auth_code.value),
        client_name: e.target.elements.client_name.value,
        waiter_id: parseInt(e.target.elements.waiter_id.value),
        tabl_id: parseInt(e.target.elements.table_number.value),
        products_description: e.target.elements.products_description.value,
        cost: parseInt(e.target.elements.total_cost.value),
      },
    })
      .then((res) => {
        setSystemMsg(res.data.message);
        document.getElementById("form").reset();
      })
      .catch((err) => {
        setSystemMsg(err.response.data.message);
      });
  };

  return (
    <React.Fragment>
      <div className="containerOrder">
        <form onSubmit={onSubmit} id="form">
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
            <div className="systemMessages" id="SystemMessages">
              {systemMsg}
            </div>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
}

export default MakeOrder;
