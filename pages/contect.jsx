import React from "react";
import Navbar from "../components/Navbar";

export default function contect() {
  return (
    <div>
      <Navbar />
      <div className="text-bg-dark p-1 fs-1">
        <div style={{ backgroundColor: "darkgray", textAlign: "center" }}>
          Contect me
        </div>
      </div>
      <br />
      <div style={{ textAlign: "center" }}>
        <div>
          <img
            src="https://scontent.fbkk10-1.fna.fbcdn.net/v/t39.30808-6/269642629_1729300650606871_7579167713292384481_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHhmY5LFqgaZNB678vBwCXu5ak1pBgZQHflqTWkGBlAd7TMF-DB73EHMoyxBCRCXQO5kLYVQc0PAtzwvqAO9swk&_nc_ohc=eUwhlcPNHPIAX-Tvmi_&tn=NYpYAvcW9sxu1p45&_nc_ht=scontent.fbkk10-1.fna&oh=00_AT9lCKbCc0OsU1Z3Inhd2tZWFkUg5k_myVZ9exnHfNQSfg&oe=6327EE6D"
            width="200"
            height="200"
            style={{ objectFit: "cover" }}
            className="rounded-circle"
          />
        </div>
        <br />
        <span className="fw-bold fs-2">Sirawich Pintana</span>
        <br />
        <span className="fw-bold">Name : </span>
        <span>Sirawich Pintana</span>
        <br />
        <span className="fw-bold">Nickname :</span>
        <span>Fifa</span>
        <br />
        <span className="fw-bold"> Address : </span>
        <span>
          369/3 ตำบล บ้านกลาง อำเภอ สันป่าตอง จังหวัด เชียงใหม่ 50120{" "}
        </span>
        <br />
        <span className="fw-bold"> Facebook : </span>
        <a href="https://www.facebook.com/worldrocker64" target="_blank">
          https://www.facebook.com/worldrocker64
        </a>
        <br />
        <span className="fw-bold">Email : </span>
        <a href="mailto:Sirawich_Pin@cmu.ac.th" target="_blank">
          Sirawich_Pin@cmu.ac.th
        </a>
        <br />
        <span className="fw-bold">Phone : </span>
        <span>062-7535095</span>
        <br />
        <span className="fw-bold">Freelance : </span>
        <span>available</span>
      </div>
      <br />
    </div>
  );
}
