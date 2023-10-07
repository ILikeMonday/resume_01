import Homes from "./Homes";

import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div>
        <div style={{ textAlign: "center" }}>
          <div>
            <img
              src="https://scontent.fbkk13-2.fna.fbcdn.net/v/t39.30808-6/316041186_1973194079550859_2184212689215502427_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=a2f6c7&_nc_eui2=AeHcnOhXYz3KtFeEXr7-raYTSur6OPKXaNlK6vo48pdo2cI_PMjgcvEMLCHvjuRZVlE0XpiIeHInuM6sASxIZeZ6&_nc_ohc=Au4GfnklBscAX-sLgg1&_nc_ht=scontent.fbkk13-2.fna&oh=00_AfCOqtAc3wjkPJXYJJmYbxWKX-WnO4Wr4X_nn2k9jo3pzg&oe=6526AA5D"
              width="250"
              height="250"
              style={{ objectFit: "cover" }}
              className="rounded-circle"
            />
          </div>
          <br />
          <span class="fw-bold fs-3 ; vstack">Sirawich Pintana</span>
          <div style={{ textAlign: "center" }} className="fs-5">
            Hi ,my name is Sirawich Pintana ,I graduated from Chiangmai
            University, Studied Computer engineering ,I also love to program and
            I'm interested in Cyber Security
          </div>
        </div>
      </div>
      <Homes />
    </div>
  );
}
