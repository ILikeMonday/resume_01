import React from "react";
import Navbar from "../components/Navbar";

export default function exper() {
  return (
    <div>
      <Navbar />

      <br />
      <div style={{ textAlign: "center" }}>
        <div class="text-bg-dark p-1 fs-1">
          <div style={{ backgroundColor: "darkgray" }}>Project Experience</div>
        </div>
        <br />

        <div class="d-flex gap-5 justify-content-center">
          <div style={{ textAlign: "center" }} class="fs-5">
            <br />
            <div
              class="card"
              style={{ width: "400px", backgroundColor: "azure" }}
            >
              <img
                src="https://i0.wp.com/krukob.com/web/wp-content/uploads/2019/11/Screen-Shot-2562-11-08-at-11.52.41-1.png?fit=2554%2C1442"
                class="card-img-top"
                alt="..."
              />
              <br />
              <div class="card-body">
                <h5 class="card-title fw-bold">Scratch Project</h5>
                <p class="card-text">
                  My project from Chiangmai University frist year.
                </p>
                <a
                  href="https://scratch.mit.edu/projects/563416210/"
                  target="_blank"
                  class="btn btn-primary"
                >
                  here is my project
                </a>
              </div>
            </div>
          </div>
          <div
            class="card"
            style={{ width: "400px", backgroundColor: "azure" }}
          >
            <img
              src="https://media.discordapp.net/attachments/931474543778873357/946633302318649374/unknown.png"
              class="card-img-top"
              alt="..."
            />
            <br />
            <div class="card-body">
              <h5 class="card-title fw-bold">Calculator Project</h5>
              <p class="card-text">
                My project from learning C++ with teacher karn.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
