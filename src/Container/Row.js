import React, { useState } from "react";
import CardComponent from "./CardComponent";
import InputComponent from "./InputComponent";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addCard, addRow } from "./Action";
import { Link } from "react-router-dom";
import imging from "../Assets/bg.jpg";
function Row() {
  return (
    <div class="landing-img">
      <div className="left-box">
        <img src={imging} className="img" alt="bg-img" />
      </div>
      <div className="right-box">
        <Link to="/chart">
          <div className="NextPage">Go To Next Page</div>
        </Link>
        <InputComponent />
      </div>
    </div>
  );
}

const mapStateToProps = ({ main }) => ({ rows: main.rows });
const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ addCard, addRow }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Row);
