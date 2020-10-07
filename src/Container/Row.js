import React, { useState } from "react";
import CardComponent from "./CardComponent";
import InputComponent from "./InputComponent";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addCard, addRow } from "./Action";
import { Link } from "react-router-dom";
import imging from "../Assets/bg.jpg";
function Row() {
  const [name, setName] = useState("");
  const [value, setValue] = useState("");
  const [id] = useState("");

  function handleChangeName(e) {
    setName(e.target.value);
  }
  function handleChangeValue(e) {
    setValue(e.target.value);
  }

  return (
    <div class="landing-img">
      <div className="left-box">
        <img src={imging} className="img" alt="bg-img" />
      </div>
      <div className="right-box">
        <Link to="/chart">
          <div className="NextPage">Go To Next Page</div>
        </Link>
        <InputComponent
          handleChangeName={handleChangeName}
          handleChangeValue={handleChangeValue}
          name={name}
          value={value}
          id={id}
        />
        <CardComponent name={name} value={value} id={id} />
      </div>
    </div>
  );
}

const mapStateToProps = ({ main }) => ({ rows: main.rows });
const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ addCard, addRow }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Row);
