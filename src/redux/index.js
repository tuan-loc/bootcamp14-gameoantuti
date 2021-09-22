const stateDefault = {
  arrDatCuoc: [
    {
      ma: "keo",
      hinhAnh: "./images/keo.png",
      datCuoc: false,
    },
    {
      ma: "bua",
      hinhAnh: "./images/bua.png",
      datCuoc: false,
    },
    {
      ma: "bao",
      hinhAnh: "./images/bao.png",
      datCuoc: false,
    },
  ],
  ketQua: "I'm iron man, i love you 3000 !!!",
  soBanThang: 0,
  soBanChoi: 0,
  computer: {
    ma: "keo",
    hinhAnh: "./images/keo.png",
  },
};

const BaiTapOanTuTiReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "CHON_KEO_BUA_BAO": {
      let arrCuocUpdate = [...state.arrDatCuoc];
      arrCuocUpdate = arrCuocUpdate.map((item, index) => {
        if (item.ma === action.maCuoc) {
          return { ...item, datCuoc: true };
        }
        return { ...item, datCuoc: false };
      });
      state.arrDatCuoc = arrCuocUpdate;
      return { ...state };
    }

    case "RAN_DOM": {
      let soNgauNhien = Math.floor(Math.random() * 3);
      let quanCuocNgauNhien = state.arrDatCuoc[soNgauNhien];
      state.computer = quanCuocNgauNhien;
      return { ...state };
    }

    case "END_GAME":
      state.soBanChoi += 1;
      let player = state.arrDatCuoc.find((item) => item.datCuoc === true);
      let computer = state.computer;

      switch (player.ma) {
        case "keo":
          if (computer.ma === "keo") {
            state.ketQua = "HÒA !!!";
          } else if (computer.ma === "bua") {
            state.ketQua = "THUA SML !!!";
          } else {
            state.soBanThang += 1;
            state.ketQua = "I LOVE YOU 3000 !!!";
          }
          break;

        case "bua":
          if (computer.ma === "keo") {
            state.soBanThang += 1;
            state.ketQua = "I LOVE YOU 3000 !!!";
          } else if (computer.ma === "bua") {
            state.ketQua = "HÒA !!!";
          } else {
            state.ketQua = "THUA SML !!!";
          }
          break;

        case "bao":
          if (computer.ma === "keo") {
            state.ketQua = "THUA SML !!!";
          } else if (computer.ma === "bua") {
            state.soBanThang += 1;
            state.ketQua = "I LOVE YOU 3000 !!!";
          } else {
            state.ketQua = "HÒA !!!";
          }
          break;

        default:
          state.soBanThang += 1;
          state.ketQua = "I LOVE YOU 3000 !!!";
          return { ...state };
      }

      return { ...state };

    default:
      return { ...state };
  }
};

export default BaiTapOanTuTiReducer;
