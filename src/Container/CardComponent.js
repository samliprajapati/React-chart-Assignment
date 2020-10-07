import React from "react";
import { Button } from "antd";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addCard } from "./Action";

function CardComponent(props) {
  function handleCard(name, value, id) {
    debugger;
    props.addCard({ name, value, id });
  }
  return (
    <div>
      <div className="MainBox">
        <div
          style={{
            width: "80%",
          }}
        >
          <Button
            type="primary"
            onClick={() => handleCard(props.name, props.value, props.id)}
          >
            Create Card
          </Button>
          <div
            style={{
              width: "100%",
              height: "100%",

              display: "flex",
              flexWrap: "wrap",
            }}
          >
            {props.cards.map((item) => {
              return (
                <div className="Card">
                  <div>
                    <div>{item.name}</div>
                    <div>{item.value}</div>
                  </div>
                  <div>
                    <div>{item.id}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = ({ main }) => ({ cards: main.cards });
const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ addCard }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(CardComponent);
