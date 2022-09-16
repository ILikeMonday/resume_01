import React from "react";

export default function Header() {
  return (
    <div>
      <br />
      <div className="vstack" style={{ textAlign: "center" }}>
        <span className="fw-bold fs-3 ">My skills</span>
      </div>
      <br />
      <div className="d-flex gap-5 justify-content-center">
        <div style={{ textAlign: "center" }} className="fs-5">
          <br />
          <div
            className="card"
            style={{ width: "400px", backgroundColor: "azure" }}
          >
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVw-x3jMaKBYOtEpUnuCsx6j7ZD5_BJIndzw&usqp=CAU"
              className="card-img-top"
              alt="..."
            />
            <br />
            <div className="card-body" style={{ textAlign: "center" }}>
              <h5 className="card-title fw-bold">Programing</h5>
              <p className="card-text">
                I love coding! I code desktop application usingC# and etc.,
                frontend website using Vue and React ,and also the backend part.
              </p>
            </div>
          </div>
        </div>
        <div
          className="card fs-5"
          style={{ width: "400px", backgroundColor: "azure" }}
        >
          <img
            src="https://static6.depositphotos.com/1098692/603/i/600/depositphotos_6032977-stock-photo-table-tennis.jpg"
            className="card-img-top"
            alt="..."
          />
          <br />
          <div className="card-body" style={{ textAlign: "center" }}>
            <h5 className="card-title fw-bold">Table tennis</h5>
            <p className="card-text">
              On wednesday and Sunday I often to play Table tennis at my club.
              And I used to competitive in my high school.
            </p>
          </div>
        </div>
        <div
          className="card fs-5"
          style={{ width: "400px", backgroundColor: "azure" }}
        >
          <img
            src="https://cdn.gamingdose.com/wp-content/uploads/2021/08/seer-abilities-apex-legends-emergence-1000x600-1.jpg"
            className="card-img-top"
            alt="..."
          />
          <br />
          <div className="card-body" style={{ textAlign: "center" }}>
            <h5 className="card-title fw-bold">Apex legend</h5>
            <p className="card-text">
              My hobby is playing game and my favorite game is Apex legend. My
              highest rank/competitive was diamond.
            </p>
          </div>
        </div>
        <br />
      </div>
    </div>
  );
}
