import React, { useState } from "react";
import { Button, Input } from "antd";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addRow } from "./Action";
import { CloseOutlined } from "@ant-design/icons";
import CardComponent from "./CardComponent";

function InputComponent(props) {
  const [rows, setRows] = useState([{ name: "", value: "", id: 1 }]);
  const [cardData, setCardData] = useState([]);
  const [id, setId] = useState(1);

  function handleChangeName(e) {
    e.persist();
    setRows((v) => {
      return v.map((d) => {
        if (`${d.id}_name` === e.target.name) {
          return { ...d, name: e.target.value };
        } else {
          return d;
        }
      });
    });
  }
  function handleChangeValue(e) {
    e.persist();
    setRows((v) => {
      return v.map((d) => {
        if (`${d.id}_value` === e.target.name) {
          return { ...d, value: e.target.value };
        } else {
          return d;
        }
      });
    });
  }
  function handleAddRowClick() {
    setId((v) => v + 1);
    setRows((v) => [...v, { name: "", value: "", id: id + 1 }]);
  }

  function handleDelete(row) {
    setRows((v) => v.filter((d) => d.id !== row.id));
  }
  return (
    <div>
      <div className="heading">Add Row And Create Card</div>
      <div className="MainBox">
        <div className="InputBox">
          {rows.map((row) => {
            return (
              <div className="Container">
                <div style={{ width: "47%" }}>
                  {" "}
                  <Input
                    name={`${row.id}_name`}
                    value={`${row.name}`}
                    onChange={handleChangeName}
                    placeholder={`Name ${row.id}`}
                  />
                </div>
                <div style={{ width: "47%" }}>
                  {" "}
                  <Input
                    name={`${row.id}_value`}
                    value={`${row.value}`}
                    onChange={handleChangeValue}
                    placeholder={`Value ${row.id}`}
                  />
                </div>
                {rows.length > 1 && (
                  <CloseOutlined onClick={() => handleDelete(row)} />
                )}
              </div>
            );
          })}
          <div className="button">
            <Button type="primary" onClick={handleAddRowClick}>
              Add Row
            </Button>
          </div>

          <Button type="primary" onClick={() => setCardData(rows)}>
            Create Card
          </Button>
          {cardData.map((card) => {
            return (
              <div
                key={card.id}
                style={{
                  border: "1px solid #aaa",
                  padding: "0.5rem",
                  margin: "0.3rem 0",
                  backgroundColor: "white",
                  boxShadow: "0px 4px 10px -2px #aaa",
                }}
              >
                <p>ID: {card.id}</p>
                <p>Name: {card.name || "N/A"}</p>
                <p>Value: {card.value || "N/A"}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = ({ main }) => ({ rows: main.rows });
const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ addRow }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(InputComponent);
