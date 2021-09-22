import React, { Component } from "react";
import Computer from "../_components/Computer";
import "./index.css";
import Player from "../_components/Player";
import ThongTinTroChoi from "../_components/ThongTinTroChoi";
import { connect } from "react-redux";

class OanTuTi extends Component {
  render() {
    return (
      <div className="game">
        <div className="row text-center mt-4">
          <div className="col-md-4">
            <Player />
          </div>
          <div className="col-md-4">
            <ThongTinTroChoi />
            <button
              onClick={() => {
                this.props.playGame();
              }}
              className="btn btn-success p-2 display-4 mt-3"
            >
              Play game
            </button>
          </div>
          <div className="col-md-4">
            <Computer />
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    playGame: () => {
      let count = 20;
      let randomComputerItem = setInterval(() => {
        dispatch({
          type: "RAN_DOM",
        });
        count++;
        if (count >= 10) {
          clearTimeout(randomComputerItem);

          dispatch({
            type: "END_GAME",
          });
        }
      }, 100);
    },
  };
};
export default connect(null, mapDispatchToProps)(OanTuTi);
