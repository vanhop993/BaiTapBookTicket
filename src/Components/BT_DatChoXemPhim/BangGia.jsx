import React, { Component } from "react";
import { connect } from "react-redux";
import { huyGhe } from "../../Redux/actions/BaiTapBookTicketAction";

class BangGia extends Component {
  renderBangGia = () => {
    let { arrGheDangChon } = this.props;
    return arrGheDangChon.map((ghe, index) => (
      <tr key={index}>
        <td>{ghe.soGhe}</td>
        <td>{ghe.gia.toLocaleString()}</td>
        <td className="text-center">
          <a
            className="text-danger"
            style={{ cursor: "pointer" }}
            onClick={() => this.props.dispatch(huyGhe(ghe))}
          >
            x
          </a>
        </td>
      </tr>
    ));
  };
  tongTien = () => {
    let { arrGheDangChon } = this.props;
    return arrGheDangChon.reduce(
      (tongTien, gheDangChon) => (tongTien += gheDangChon.gia),
      0
    );
  };
  render() {
    return (
      <div className="text-light">
        <h2>DANH SÁCH GHẾ BẠN CHỌN</h2>
        <div className="d-flex align-items-center">
          <div className="gheDuocChon m-2"></div> <span>: Ghế đã đặt</span>
        </div>
        <div className="d-flex align-items-center">
          <div className="gheDangChon m-2"></div> <span>: Ghế đang chọn</span>
        </div>
        <div className="d-flex align-items-center">
          <div className="ghe m-2"></div> <span>: Ghế còn trống</span>
        </div>
        <table className="table text-light text-left">
          <thead>
            <tr>
              <th>Số ghế</th>
              <th>Giá</th>
              <th className="text-center">Hủy</th>
            </tr>
          </thead>
          <tbody>{this.renderBangGia()}</tbody>
          <tfoot>
            <tr>
              <th>Tổng: </th>
              <th className="text-left">{this.tongTien().toLocaleString()}</th>
              <th></th>
            </tr>
          </tfoot>
        </table>
      </div>
    );
  }
}
const mapStateToProsp = (state) => {
  return {
    arrGheDangChon: state.BaiTapBookTicketReducer.arrGheDangChon,
  };
};
export default connect(mapStateToProsp)(BangGia);
