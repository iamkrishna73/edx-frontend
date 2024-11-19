import React from "react";

const CardData = () => {
  return (
    <div className="padding-v2 container-mw-lg container-fluid">
      <br />
      <div className="row">
        {/* Card 1 */}
        <div className="col-md-4 mb-4">
          <div className="card p-4 rounded">
            <div className="card-body d-flex flex-column justify-content-between">
              <p className="card-text">
                “ One employer was very interested in my boot camp experience
                and couldn’t believe all I learned in just six months.{" "}
                <b>I ended up getting that job.</b> ”
              </p>
              <div className="d-flex align-items-center pt-3">
                <img
                  className="rounded-circle me-3"
                  src="https://www.edx.org/contentful/ii9ehdcj88bc/7o7XMbfpw3CiLxbblDS3rT/b3cd054b340c56c60d48c89e77ff4557/edX_testimonial_icon_68x68.svg"
                  loading="lazy"
                  alt="Testimonial Avatar"
                  width="68"
                  height="68"
                />
                <p className="mb-0 small">
                  <span className="fw-bold">Maggie B.</span>
                  <br />
                  TUMx Professional Certificate Program in Lean Six Sigma&nbsp;
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="col-md-4 mb-4">
          <div className="card p-4 rounded">
            <div className="card-body d-flex flex-column justify-content-between">
              <p className="card-text">
                “<b>This course challenged my perspective on leadership.</b> It
                helped me develop new skills and approaches for managing teams
                effectively.”
              </p>
              <div className="d-flex align-items-center pt-3">
                <img
                  className="rounded-circle me-3"
                  src="https://www.edx.org/contentful/ii9ehdcj88bc/7o7XMbfpw3CiLxbblDS3rT/b3cd054b340c56c60d48c89e77ff4557/edX_testimonial_icon_68x68.svg"
                  loading="lazy"
                  alt="Testimonial Avatar"
                  width="68"
                  height="68"
                />
                <p className="mb-0 small">
                  <span className="fw-bold">John D.</span>
                  <br />
                  Leadership Essentials Professional Certificate&nbsp;
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="col-md-4 mb-4">
          <div className="card p-4 rounded">
            <div className="card-body d-flex flex-column justify-content-between">
              <p className="card-text">
                “
                <b>
                  This program gave me the tools I needed to excel in my career.
                </b>{" "}
                It was a fantastic learning experience that opened many doors
                for me.”
              </p>
              <div className="d-flex align-items-center pt-3">
                <img
                  className="rounded-circle me-3"
                  src="https://www.edx.org/contentful/ii9ehdcj88bc/7o7XMbfpw3CiLxbblDS3rT/b3cd054b340c56c60d48c89e77ff4557/edX_testimonial_icon_68x68.svg"
                  loading="lazy"
                  alt="Testimonial Avatar"
                  width="68"
                  height="68"
                />
                <p className="mb-0 small">
                  <span className="fw-bold">Sarah L.</span>
                  <br />
                  Business Strategy Certificate Program&nbsp;
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardData;
