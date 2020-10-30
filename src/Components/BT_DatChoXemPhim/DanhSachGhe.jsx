import React, { Component } from "react";
import { connect } from "react-redux";
import { chonGhe, datGhe } from "../../Redux/actions/BaiTapBookTicketAction";

class DanhSachGhe extends Component {
  renderAllGhe = () => {
    let { arrAllGhe, arrGheDangChon } = this.props;
    return arrAllGhe.map((obj, index) => {
      if (obj.hang === "") {
        return (
          <div
            className="text-warning d-flex justify-content-around align-item-center ml-4 mr-5"
            key={index}
          >
            <div className="rowNumber">{obj.hang}</div>
            {obj.danhSachGhe.map((hangGhe, index) => (
              <div className="rowNumber" key={index}>
                {hangGhe.soGhe}
              </div>
            ))}
          </div>
        );
      } else {
        return (
          <div
            className="text-warning d-flex justify-content-around align-item-center ml-4 mr-5"
            key={index}
          >
            <div className="rowNumber">{obj.hang}</div>
            {obj.danhSachGhe.map((hangGhe, index) => {
              let gheDangChon = arrGheDangChon.find(
                (ghe) => ghe.soGhe === hangGhe.soGhe
              );
              let gheDaDat = "";
              let dangChon = "";
              let disabled = false;
              if (hangGhe.daDat) {
                gheDaDat = "gheDuocChon";
                disabled = true;
              }
              if (gheDangChon) {
                dangChon = "gheDangChon";
              }
              return (
                <button
                  disabled={disabled}
                  className={`ghe ${gheDaDat} ${dangChon}`}
                  key={index}
                  onClick={() => this.props.dispatch(chonGhe(hangGhe))}
                >
                  {hangGhe.soGhe.split(obj.hang)[1]}
                </button>
              );
            })}
          </div>
        );
      }
    });
  };
  render() {
    return (
      <div className="text-center">
        <h2 className=" text-warning">ĐẶT VÉ XEM PHIM</h2>
        <div className=" text-light">Màn hình</div>
        <div className="w-100 screen"></div>
        {this.renderAllGhe()}
        <div>
          <button
            className="btn btn-success"
            onClick={() => this.props.dispatch(datGhe())}
          >
            Đặt ghế
          </button>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    arrAllGhe: state.BaiTapBookTicketReducer.arrAllGhe,
    arrGheDangChon: state.BaiTapBookTicketReducer.arrGheDangChon,
  };
};
export default connect(mapStateToProps)(DanhSachGhe);
