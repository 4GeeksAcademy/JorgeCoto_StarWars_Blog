import React from "react";

export const Footer = () => (
  <footer
    className="text-center text-white"
    style={{ backgroundColor: "#45637d" }}
  >
    {/* Grid container */}
    <div className="container p-4">
      {/* Section: Iframe */}
      <section className="">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-6">
            <div className="ratio ratio-16x9">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/HrIJT_4Txqw?si=8FpXzlkkrbIROOr0&amp;controls=0"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      {/* Section: Iframe */}
    </div>
    {/* Grid container */}

    {/* Copyright */}
    <div
      className="text-center p-3"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
    >
      © 2024 Copyright:
      <a className="text-white" href="https://github.com/JorgeCoto98">
        {" "}
        JorgeCoto98
      </a>
    </div>
    {/* Copyright */}
  </footer>
);

export default Footer;
