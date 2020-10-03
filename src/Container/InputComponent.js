import React from "react";
import { Button, Input } from "antd";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addRow } from "./Action";

function InputComponent(props) {
  function handleAddRowClick() {
    // props.addRow({ Row: 1 });
    props.addRow({ Row: 2 });
  }
  return (
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
                <Input placeholder="Value" onChange={props.handleChangeValue} />
              </div>
            </div>
          );
        })}
        <div className="button">
          <Button type="primary" onClick={handleAddRowClick}>
            Add Row
          </Button>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = ({ main }) => ({ rows: main.rows });
const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ addRow }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(InputComponent);
