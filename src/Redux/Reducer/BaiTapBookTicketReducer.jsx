import data from "../../Data/danhSachGhe.json";
import { chon_ghe, dat_ghe, huy_ghe } from "../actions/BaiTapBookTicketType";

const stateDefault = {
  arrAllGhe: [...data],
  arrGheDangChon: [],
};

export const BaiTapBookTicketReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case chon_ghe: {
      let arrGheDangChonUpdate = [...state.arrGheDangChon];
      let index = arrGheDangChonUpdate.findIndex(
        (ghe) => ghe.soGhe === action.ghe.soGhe
      );
      if (index === -1) {
        arrGheDangChonUpdate.push(action.ghe);
      } else {
        arrGheDangChonUpdate.splice(index, 1);
      }
      state.arrGheDangChon = arrGheDangChonUpdate;
      return { ...state };
    }
    case dat_ghe: {
      let arrAllGheCopy = [...state.arrAllGhe];
      arrAllGheCopy.forEach((obj) => {
        obj.danhSachGhe.forEach((ghe) => {
          let newGhe = state.arrGheDangChon.find(
            (gheDangChon) => ghe.soGhe === gheDangChon.soGhe
          );
          if (newGhe) {
            return (ghe.daDat = true);
          }
        });
      });
      state.arrAllGhe = arrAllGheCopy;
      return { ...state, arrGheDangChon: [] };
    }
    case huy_ghe: {
      return {
        ...state,
        arrGheDangChon: state.arrGheDangChon.filter(
          (gheDangChon) => gheDangChon.soGhe !== action.ghe.soGhe
        ),
      };
    }
    default:
      return { ...state };
  }
};
