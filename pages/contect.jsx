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
            src="https://scontent.fbkk13-2.fna.fbcdn.net/v/t39.30808-6/316041186_1973194079550859_2184212689215502427_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=a2f6c7&_nc_eui2=AeHcnOhXYz3KtFeEXr7-raYTSur6OPKXaNlK6vo48pdo2cI_PMjgcvEMLCHvjuRZVlE0XpiIeHInuM6sASxIZeZ6&_nc_ohc=Au4GfnklBscAX-sLgg1&_nc_ht=scontent.fbkk13-2.fna&oh=00_AfCOqtAc3wjkPJXYJJmYbxWKX-WnO4Wr4X_nn2k9jo3pzg&oe=6526AA5D"
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
