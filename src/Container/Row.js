import React, { useState } from "react";
import CardComponent from "./CardComponent";
import InputComponent from "./InputComponent";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addCard } from "./Action";
import { Link } from "react-router-dom";
function Row() {
  const [name, setName] = useState("");
  const [value, setValue] = useState("");
  const [id, setId] = useState(Date.now());

  function handleChangeName(e) {
    setName(e.target.value);
  }
  function handleChangeValue(e) {
    setValue(e.target.value);
  }

  return (
    <div>
      <Link to="/chart">
        <div className="NextPage">Go To Next Page</div>
      </Link>
      <InputComponent
        handleChangeName={handleChangeName}
        handleChangeValue={handleChangeValue}
      />
      <CardComponent name={name} value={value} id={id} />
    </div>
  );
}

const mapStateToProps = ({ main }) => ({});
const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ addCard }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Row);
