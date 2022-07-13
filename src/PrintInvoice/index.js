import React from "react";
import "./PrintInvoice.css";
import Axios from "axios";

function PrintInvoice() {
  const [systemMsg, setSystemMsg] = React.useState("");
  const [invoices, setInvoices] = React.useState([]);

  const onSubmit = async (e) => {
    e.preventDefault();
    await Axios({
      method: "post",
      url: "http://localhost:4000/waiter-app/invoices/print-per-table",
      data: {
        auth_code: parseInt(e.target.elements.auth_code.value),
        tabl_id: parseInt(e.target.elements.table_number.value),
      },
    })
      .then((res) => {
        setSystemMsg("");
        setInvoices(res.data.invoices);
        document.getElementById("form").reset();
      })
      .catch((err) => {
        setSystemMsg(err.response.data.message);
        setInvoices([]);
      });
  };
  return (
    <React.Fragment>
      <div className="containerPrint">
        <form id="form" onSubmit={onSubmit}>
          <div className="form-groupby">
            <label>
              Table number:{" "}
              <input type="number" name="table_number" min={1} required />
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
        <div className="invoices">
          <p>
            {invoices[0] &&
              `Showing invoices of table ${invoices[0] && invoices[0].tabl_id}`}
          </p>
          {invoices.map((invoice) => {
            return (
              <React.Fragment>
                <div className="invoice" key={invoice.id}>
                  invoice id: {invoice.id} <br /> {""}
                  client: {invoice.client.name} <br /> {""}
                  waiter: {invoice.waiter.name} <br /> {""}
                  Table number: {invoice.tabl_id} <br /> {""}
                  location: {invoice.tabl.location} <br /> {""}
                  products description: {
                    invoice.products_description
                  } <br /> {""}
                  total cost: {invoice.total_without_tip} <br /> {""}
                  total cost + tip: {invoice.total_with_tip} <br /> {""}
                  <br />
                  <br />
                  <button className="buttonPrint">Print</button>
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
}
export default PrintInvoice;
