import React from "react";
import ReactPlayer from "react-player";
import "./about.css";
function About() {
  return (
    <div>
      <>
        <div className="box">
          <div className="player-video">
            <ReactPlayer
              url="https://www.youtube.com/watch?v=-ZAznOtqaiY"
              controls
              playing
              muted
              width="70%"
              height="500px"
            />
          </div>

          <div className="right">
            <h2>History</h2>
            <p>
              An e-commerce shop is to provide a convenient and reliable
              platform for customers to purchase products or services online.
            </p>
          </div>

          {/* cases */}
          <div className="cartes">
            <div className="row justify-content-center">
              <div className="col-lg-3 col-sm-6">
                <div className="single_feature_part">
                  <img
                    src="data:image/png;base64,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"
                    alt=""
                  />
                  <h4>Credit Card Support</h4>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="single_feature_part">
                  <img
                    src="data:image/png;base64,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"
                    alt=""
                  />
                  <h4>Online Order</h4>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="single_feature_part">
                  <img
                    src="data:image/png;base64,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"
                    alt=""
                  />
                  <h4>Free Delivery</h4>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="single_feature_part">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSSYotk-046_r8iqTaYUv8MMIJ3zg8gMAsPw&usqp=CAU"
                    alt=""
                  />
                  <h4>Product with Gift</h4>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* subbb */}

        <div className="sub">
          <div className="subscribe_part section_padding">
            <div className="container">
              <div className="row justify-content-center1">
                <div className="col-lg-8">
                  <div className="subscribe_part_content">
                    <h2>Get promotions &amp; updates!</h2>
                    <p>
                      Seamlessly empower fully researched growth strategies and
                      interoperable internal or “organic” sources credibly
                      innovate granular internal .
                    </p>
                    <div className="subscribe_form">
                      <input type="email" placeholder="Enter your mail" />
                      <a href="#" className="btn_1">
                        Subscribe
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* review */}

        <>
          <div className="rev">
            <figure className="snip1157">
              <blockquote>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                malesuada vulputate nisi in fermentum. Vivamus ac libero quis
                nisi auctor pulvinar. Aenean sit amet lectus posuere, mattis
                massa eget, ullamcorper diam. Nunc sit amet felis eget arcu
                congue dictum.
                <div className="arrow" />
              </blockquote>
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample3.jpg"
                alt="sq-sample3"
              />
              <div className="author">
                <h5>
                  Pelican Steve <span> LIttleSnippets.net</span>
                </h5>
              </div>
            </figure>
            <figure className="snip1157 hover">
              <blockquote>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                malesuada vulputate nisi in fermentum. Vivamus ac libero quis
                nisi auctor pulvinar. Aenean sit amet lectus posuere, mattis
                massa eget, ullamcorper diam. Nunc sit amet felis eget arcu
                congue dictum.
                <div className="arrow" />
              </blockquote>
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample27.jpg"
                alt="sq-sample27"
              />
              <div className="author">
                <h5>
                  Max Conversion<span> LIttleSnippets.net</span>
                </h5>
              </div>
            </figure>
            <figure className="snip1157">
              <blockquote>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                malesuada vulputate nisi in fermentum. Vivamus ac libero quis
                nisi auctor pulvinar. Aenean sit amet lectus posuere, mattis
                massa eget, ullamcorper diam. Nunc sit amet felis eget arcu
                congue dictum.
                <div className="arrow" />
              </blockquote>
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample17.jpg"
                alt="sq-sample17"
              />
              <div className="author">
                <h5>
                  Eleanor Faint<span> LIttleSnippets.net</span>
                </h5>
              </div>
            </figure>
          </div>
        </>
      </>
    </div>
  );
}

export default About;
