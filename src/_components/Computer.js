import React, { Component } from "react";
import { connect } from "react-redux";

class Computer extends Component {
  render() {
    return (
      <div>
        <div className="text-center playerGame">
          <div className="think">
            <img
              style={{ transform: "rotate(180deg" }}
              width={90}
              height={90}
              src={this.props.computer.hinhAnh}
              alt={this.props.computer.hinhAnh}
            />
          </div>
          <div className="speech-bubble"></div>
          <img
            style={{ width: 150, height: 150 }}
            src="./images/playerComputer.png"
            alt="thanos"
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    computer: state.BaiTapOanTuTiReducer.computer,
  };
};

export default connect(mapStateToProps)(Computer);
