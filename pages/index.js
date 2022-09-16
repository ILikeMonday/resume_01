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
              src="https://scontent.fbkk10-1.fna.fbcdn.net/v/t39.30808-6/269642629_1729300650606871_7579167713292384481_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHhmY5LFqgaZNB678vBwCXu5ak1pBgZQHflqTWkGBlAd7TMF-DB73EHMoyxBCRCXQO5kLYVQc0PAtzwvqAO9swk&_nc_ohc=eUwhlcPNHPIAX-Tvmi_&tn=NYpYAvcW9sxu1p45&_nc_ht=scontent.fbkk10-1.fna&oh=00_AT9lCKbCc0OsU1Z3Inhd2tZWFkUg5k_myVZ9exnHfNQSfg&oe=6327EE6D"
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
            I'm interested in website development
          </div>
        </div>
      </div>
      <Homes />
    </div>
  );
}
