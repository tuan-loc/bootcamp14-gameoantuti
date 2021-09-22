import React, { Component } from "react";
import { connect } from "react-redux";

class Player extends Component {
  render() {
    return (
      <div>
        <div className="text-center playerGame">
          <div className="think">
            <img
              width={90}
              height={90}
              src={
                this.props.arrDatCuoc.find((item) => item.datCuoc === true)
                  .hinhAnh
              }
              alt={
                this.props.arrDatCuoc.find((item) => item.datCuoc === true)
                  .hinhAnh
              }
            />
          </div>
          <div className="speech-bubble"></div>
          <img
            style={{ width: 150, height: 150 }}
            src="./images/player.png"
            alt="player"
          />

          <div className="row">
            {this.props.arrDatCuoc.map((item, index) => {
              let border = {};
              if (item.datCuoc) {
                border = { border: "3px solid orange" };
              }

              return (
                <div className="col-md-4">
                  <button
                    onClick={() => {
                      this.props.datCuoc(item.ma);
                    }}
                    style={border}
                    className="btnItem"
                  >
                    <img
                      width={50}
                      height={50}
                      src={item.hinhAnh}
                      alt={item.hinhAnh}
                    />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    arrDatCuoc: state.BaiTapOanTuTiReducer.arrDatCuoc,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    datCuoc: (maCuoc) => {
      dispatch({
        type: "CHON_KEO_BUA_BAO",
        maCuoc,
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Player);
