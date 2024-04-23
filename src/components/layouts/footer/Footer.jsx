/* eslint-disable no-unused-vars */
import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import logo from "../../../assets/images/logo.png";
const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <div className="footerMain">
          <div className="logoFooter">
            <div className="logoFooterImg">
              <img src={logo} alt="logo" />
            </div>
            <p>
              Innovative medical <br /> products for all health <br /> care
              problems.
            </p>
          </div>
          <div className="quickLinks">
            <span>Quick Links</span>
            <ul>
              <li>
                <Link to={"/"}>Contact Us</Link>
              </li>
              <li>
                <Link to={"/"}>Careers</Link>
              </li>
              <li>
                <Link to={"/"}>Newsroom</Link>
              </li>
            </ul>
          </div>
          <div className="subscriptionFooter">
            <span>Subscribe for our latest news and updates</span>
            <form>
              <input type="text" placeholder="Email Address" />
              <button type="submit">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="36"
                  viewBox="0 0 35 36"
                  fill="none"
                >
                  <path
                    d="M17.5 6.30322L15.4438 8.35947L23.5813 16.5116H5.83337V19.4282H23.5813L15.4438 27.5803L17.5 29.6366L29.1667 17.9699L17.5 6.30322Z"
                    fill="white"
                  />
                </svg>
              </button>
            </form>
            <div className="socialLInks">
              <span>Follow Us</span>
              <ul>
                <li>
                  <a href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="13"
                      height="26"
                      viewBox="0 0 13 26"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_235_70)">
                        <path
                          d="M10.4713 5.11095H12.7536V1.13595C11.6498 1.01469 10.5401 0.955919 9.42966 0.959907C6.13487 0.959907 3.8807 3.0297 3.8807 6.83387V10.3349H0.249451V14.7787H3.8807V25.9599H8.33278V14.7797H11.8172L12.3703 10.3349H8.33174V7.27449C8.33174 5.99011 8.67862 5.11095 10.4682 5.11095H10.4713Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_235_70">
                          <rect
                            width="12.501"
                            height="25"
                            fill="white"
                            transform="translate(0.249451 0.959961)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="26"
                      viewBox="0 0 25 26"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_235_75)">
                        <path
                          d="M24.9938 25.9599H25V16.7933C25 12.3078 24.0344 8.85264 18.7906 8.85264C17.806 8.81603 16.8299 9.04735 15.9664 9.52194C15.1029 9.99652 14.3844 10.6966 13.8875 11.5474H13.8146V9.26826H8.84271V25.9599H14.0198V17.6943C14.0198 15.5183 14.4365 13.4141 17.1271 13.4141C19.7823 13.4141 19.8219 15.8974 19.8219 17.8339V25.9599H24.9938Z"
                          fill="white"
                        />
                        <path
                          d="M0.416687 9.26929H5.59585V25.9599H0.416687V9.26929Z"
                          fill="white"
                        />
                        <path
                          d="M3.00211 0.960019C2.40307 0.956312 1.81645 1.1308 1.31681 1.4613C0.817173 1.7918 0.427084 2.2634 0.196124 2.81614C-0.0348361 3.36889 -0.0962379 3.97782 0.0197232 4.56555C0.135684 5.15327 0.423772 5.69325 0.847368 6.11685C1.27097 6.54044 1.81094 6.82853 2.39867 6.94449C2.98639 7.06045 3.59533 6.99905 4.14807 6.76809C4.70082 6.53713 5.17241 6.14704 5.50291 5.6474C5.83342 5.14777 6.0079 4.56115 6.0042 3.9621C6.00392 3.16598 5.68754 2.40255 5.1246 1.83961C4.56166 1.27667 3.79823 0.960295 3.00211 0.960019Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_235_75">
                          <rect
                            width="25"
                            height="25"
                            fill="white"
                            transform="translate(0 0.959961)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="35"
                      height="25"
                      viewBox="0 0 35 25"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_235_82)">
                        <path
                          d="M33.9318 4.71401C33.7354 3.9919 33.3537 3.33365 32.8246 2.8045C32.2954 2.27534 31.6372 1.89366 30.9151 1.69728C28.233 0.96289 17.5029 0.962891 17.5029 0.962891C17.5029 0.962891 6.77365 0.962891 4.09159 1.66899C3.36862 1.87449 2.71068 2.26253 2.18104 2.79581C1.65139 3.32908 1.26786 3.98966 1.06731 4.71401C0.361206 7.39702 0.361206 12.9601 0.361206 12.9601C0.361206 12.9601 0.361206 18.5504 1.06731 21.2042C1.26378 21.9263 1.64549 22.5845 2.17463 23.1136C2.70377 23.6428 3.36198 24.0245 4.08404 24.221C6.79439 24.9553 17.4953 24.9553 17.4953 24.9553C17.4953 24.9553 28.2245 24.9553 30.9066 24.2492C31.6287 24.0529 32.2869 23.6712 32.8161 23.142C33.3452 22.6129 33.7269 21.9546 33.9233 21.2325C34.6294 18.5504 34.6294 12.9883 34.6294 12.9883C34.6294 12.9883 34.6662 7.39702 33.9318 4.71401ZM14.0836 18.1008V7.82502L23.0056 12.9601L14.0836 18.1008Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_235_82">
                          <rect
                            width="34.2776"
                            height="24"
                            fill="white"
                            transform="translate(0.361206 0.959961)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
      <div className="footerLast text-center">
        <p>
          © 2024 bee group All Rights Reserved - شركة بي جروب للادوية و
          المستلزمات الطبية
        </p>
      </div>
    </footer>
  );
};

export default Footer;
