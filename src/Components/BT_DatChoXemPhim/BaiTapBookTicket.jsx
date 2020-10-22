import React, { Component } from "react";
import BangGia from "./BangGia";
import DanhSachGhe from "./DanhSachGhe";
import "./BaiTapBookingTicketStyle.css";

export default class BaiTapBookTicket extends Component {
  render() {
    return (
      <div
        style={{
          backgroundImage: "url(./img/video27_dat_ve_phim/bgmovie.jpg)",
          width: "100%",
          height: "100%",
          position: "fixed",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          className="bookingMovie"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.603)",
            width: "100%",
            height: "100%",
          }}
        >
          <div className="container-fluid">
            <div className="row">
              <div className="col-8">
                <DanhSachGhe />
              </div>
              <div className="col-4">
                <BangGia />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
