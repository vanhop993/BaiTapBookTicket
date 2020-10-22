import { chon_ghe, dat_ghe, huy_ghe } from "./BaiTapBookTicketType";

export const chonGhe = (ghe) => {
  return {
    type: chon_ghe,
    ghe,
  };
};
export const datGhe = () => {
  return {
    type: dat_ghe,
  };
};

export const huyGhe = (ghe) => {
  return {
    type: huy_ghe,
    ghe,
  };
};
