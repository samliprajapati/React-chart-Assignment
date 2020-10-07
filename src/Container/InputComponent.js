import React from "react";
import { Button, Input } from "antd";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addRow } from "./Action";
import { CloseOutlined } from "@ant-design/icons";

function InputComponent(props) {
  function handleAddRowClick(name, value) {
    props.addRow(...props.rows, {
      name: name,
      value: value,
      id: props.rows.id + 1,
    });
  }
  console.log(props.rows);
  function handleDelete(id) {
    alert(id);
  }
  return (
    <div>
      <div className="heading">Add Row And Create Card</div>
      <div className="MainBox">
        <div className="InputBox">
          {props.rows.map((item, index) => {
            return (
              <div className="Container">
                <div style={{ width: "47%" }}>
                  {" "}
                  <Input placeholder="Name" onChange={props.handleChangeName} />
                </div>
                <div style={{ width: "47%" }}>
                  {" "}
                  <Input
                    placeholder="Value"
                    onChange={props.handleChangeValue}
                  />
                </div>
                <CloseOutlined onClick={() => handleDelete(props.id)} />
              </div>
            );
          })}
          <div className="button">
            <Button
              type="primary"
              onClick={() => handleAddRowClick(props.name, props.value)}
            >
              Add Row
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = ({ main }) => ({ rows: main.rows });
const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ addRow }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(InputComponent);
