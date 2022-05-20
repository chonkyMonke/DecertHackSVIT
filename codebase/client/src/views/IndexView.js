/* eslint-disable */

import React from "react";
import { createScope, map, transformProxies } from "./helpers";
import { Link } from "react-router-dom";
import { FormView } from "./FormView";
import { SigninBusinessView } from "./SigninBusinessView";
import { SigninStudentView } from "./SigninStudentView";

import "../css/competetor.webflow.css";
import "../css/normalize.css";
import "../css/webflow.css";
const scripts = [
  {
    loading: fetch(
      "https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=625f05a760e7a73fba7797a8"
    ).then((body) => body.text()),
    isAsync: false,
  },
  {
    loading: fetch("js/webflow.js").then((body) => body.text()),
    isAsync: false,
  },
];

let Controller;

class IndexView extends React.Component {
  static get Controller() {
    if (Controller) return Controller;

    try {
      Controller = require("..controllers/IndexController");
      Controller = Controller.default || Controller;

      return Controller;
    } catch (e) {
      if (e.code == "MODULE_NOT_FOUND") {
        Controller = IndexView;

        return Controller;
      }

      throw e;
    }
  }

  componentDidMount() {
    const htmlEl = document.querySelector("html");
    htmlEl.dataset["wfPage"] = "625f05a860e7a76b007797b9";
    htmlEl.dataset["wfSite"] = "625f05a760e7a73fba7797a8";

    scripts.concat(null).reduce((active, next) =>
      Promise.resolve(active).then((active) => {
        const loading = active.loading.then((script) => {
          new Function(`
          with (this) {
            eval(arguments[0])
          }
        `).call(window, script);

          return next;
        });

        return active.isAsync ? next : loading;
      })
    );
  }

  render() {
    const proxies =
      IndexView.Controller !== IndexView
        ? transformProxies(this.props.children)
        : {};

    return (
      <span>
        <style
          dangerouslySetInnerHTML={{
            __html: `
          @import url(C:\\css\\normalize.css);
          @import url(C:\\css\\webflow.css);
          @import url(C:\\css\\competetor.webflow.css);

          @media (max-width:991px) and (min-width:768px) {html.w-mod-js:not(.w-mod-ix) [data-w-id=\"529bb808-90f6-232f-c30d-e18e0c22ecb8\"] {-webkit-transform:translate3d(0, -105%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, -105%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, -105%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, -105%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);}}@media (max-width:767px) and (min-width:480px) {html.w-mod-js:not(.w-mod-ix) [data-w-id=\"529bb808-90f6-232f-c30d-e18e0c22ecb8\"] {-webkit-transform:translate3d(0, -105%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, -105%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, -105%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, -105%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);}}@media (max-width:479px) {html.w-mod-js:not(.w-mod-ix) [data-w-id=\"529bb808-90f6-232f-c30d-e18e0c22ecb8\"] {-webkit-transform:translate3d(0, -105%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, -105%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, -105%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, -105%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);}}
        `,
          }}
        />
        <span className="af-view">
          <div>
            <div className="af-class-page-wrapper">
              <div className="af-class-navbar">
                <div className="af-class-page-padding af-class-is-mobile">
                  <div className="af-class-container-nav-bar af-class-colour--ffffff af-class-nav-padding">
                    <div className="w-inline-block">
                      <Link to="/">
                        <img
                          src="https://uploads-ssl.webflow.com/62546fa0d96e443a1867f458/62547dfd8af0a376c7dfb20a_decert-logo.png"
                          loading="lazy"
                          width={156}
                          alt
                          className="af-class-img-logo"
                        />
                      </Link>
                    </div>
                    <nav
                      data-w-id="529bb808-90f6-232f-c30d-e18e0c22ecb8"
                      className="af-class-nav-link-wrapper"
                    >
                      <div className="af-class-nav-link w-inline-block">
                        <Link to="/">
                          <div className="af-class-nav-text">Home</div>
                        </Link>
                      </div>
                      <a
                        href="https://github.com/chonkyMonke/DecertHackSVIT/tree/master/codebase/DeCertApi-onTezos-master"
                        target="_blank"
                        className="af-class-nav-link w-inline-block"
                      >
                        <div className="af-class-nav-text">Docs</div>
                      </a>
                      <div className="af-class-nav-link w-inline-block">
                        <Link to="/form">
                          <div className="af-class-nav-text">Mint Now</div>
                        </Link>
                      </div>
                    </nav>
                    <div
                      data-hover="true"
                      data-delay={0}
                      className="af-class-button-register w-dropdown"
                    >
                      <div className="af-class-primary-btn-nav w-dropdown-toggle">
                        <div className="w-icon-dropdown-toggle" />
                        <div className="af-class-register-button">Sign in</div>
                      </div>
                      <div className="af-class-dropdown-list w-dropdown-list">
                        <Link to="/signin-business">
                          <div className="af-class-dropdown-link w-dropdown-link">
                            As a Business
                          </div>
                        </Link>
                      </div>
                    </div>
                    <div
                      data-w-id="529bb808-90f6-232f-c30d-e18e0c22ecd9"
                      className="af-class-ham-menu"
                    >
                      <div className="af-class-ham_li-top" />
                      <div className="af-class-ham_li-middle" />
                      <div className="af-class-ham_li-bottom" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="af-class-main">
                <section className="af-class-hero-section">
                  <div className="af-class-page-padding">
                    <div className="af-class-container">
                      <div>
                        <div className="w-layout-grid">
                          <div
                            id="w-node-_529bb808-90f6-232f-c30d-e18e0c22ece3-007797b9"
                            className="af-class-is--flex"
                          >
                            <h1
                              data-w-id="529bb808-90f6-232f-c30d-e18e0c22ece4"
                              style={{ opacity: 0 }}
                              className="af-class-margin-bottomo-1rem af-class-heading"
                            >
                              Connecting Education &amp; The Metaverse
                            </h1>
                            <p
                              data-w-id="529bb808-90f6-232f-c30d-e18e0c22ece6"
                              style={{ opacity: 0 }}
                              className="af-class-margin-bottomo-1rem af-class-paragraph"
                            >
                              DeCert is a Decentralized certification service
                              that issues blockchain-based certificates on the
                              Metaverse and Ethereum ecosystems.
                            </p>
                            <a
                              data-w-id="529bb808-90f6-232f-c30d-e18e0c22ece8"
                              style={{ opacity: 0 }}
                              href="#"
                              className="af-class-primary-btn w-button"
                            >
                              Learn more 👉
                            </a>
                          </div>
                          <img
                            src="https://uploads-ssl.webflow.com/62546fa0d96e443a1867f458/62547b11775e4444c15230e9_certificate_3d.png"
                            loading="lazy"
                            style={{ opacity: 0 }}
                            data-w-id="529bb808-90f6-232f-c30d-e18e0c22ecea"
                            id="w-node-_529bb808-90f6-232f-c30d-e18e0c22ecea-007797b9"
                            alt
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <section className="af-class-architecture-section">
                  <div className="af-class-page-padding">
                    <div className="af-class-container">
                      <img
                        src="https://uploads-ssl.webflow.com/62546fa0d96e443a1867f458/625485ad53c1d85b600025fa_Ellipse%207%20(1)%20(1).png"
                        loading="lazy"
                        width="317.5"
                        alt
                        className="af-class-elipse-absolute"
                      />
                      <img
                        src="https://uploads-ssl.webflow.com/62546fa0d96e443a1867f458/625488ecd609c3080846ed7a_Ellipse%208.png"
                        loading="lazy"
                        alt
                        className="af-class-elipse-absolute af-class-_2nd"
                      />
                      <div className="af-class-bg-glassmorphism af-class-os--padding">
                        <div className="w-layout-grid af-class-grid">
                          <img
                            src="https://uploads-ssl.webflow.com/62546fa0d96e443a1867f458/6254865c8af0a37bcfe00ce8_decert-logo-2x%20(1).png"
                            loading="lazy"
                            id="w-node-_529bb808-90f6-232f-c30d-e18e0c22ecf2-007797b9"
                            alt
                          />
                          <img
                            src="https://uploads-ssl.webflow.com/62546fa0d96e443a1867f458/62548698e404bc04260b578b_Group%2014.svg"
                            loading="lazy"
                            id="w-node-_529bb808-90f6-232f-c30d-e18e0c22ecf3-007797b9"
                            alt
                            className="af-class-is-hide_bottom"
                          />
                          <img
                            src="https://uploads-ssl.webflow.com/62546fa0d96e443a1867f458/625486ee54f78673e0d29efd_Group%2018.svg"
                            loading="lazy"
                            id="w-node-_529bb808-90f6-232f-c30d-e18e0c22ecf4-007797b9"
                            alt
                          />
                          <img
                            src="https://uploads-ssl.webflow.com/62546fa0d96e443a1867f458/625487108924be059ee6ae91_Group%2017.svg"
                            loading="lazy"
                            id="w-node-_529bb808-90f6-232f-c30d-e18e0c22ecf5-007797b9"
                            alt
                          />
                          <img
                            src="https://uploads-ssl.webflow.com/62546fa0d96e443a1867f458/625487d09cbade16c02dbc72_Frame%2013.svg"
                            loading="lazy"
                            id="w-node-_529bb808-90f6-232f-c30d-e18e0c22ecf6-007797b9"
                            alt
                          />
                          <div
                            id="w-node-_529bb808-90f6-232f-c30d-e18e0c22ecf7-007797b9"
                            className="af-class-extra-large_text"
                          >
                            =
                          </div>
                          <div
                            id="w-node-_529bb808-90f6-232f-c30d-e18e0c22ecf9-007797b9"
                            className="af-class-extra-large_text"
                          >
                            +
                          </div>
                          <div
                            id="w-node-_529bb808-90f6-232f-c30d-e18e0c22ecfb-007797b9"
                            className="af-class-extra-large_text"
                          >
                            +
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <section className="af-class-main-section">
                  <div className="af-class-page-padding">
                    <div className="af-class-container">
                      <div className="af-class-margin-bottomo-6rem">
                        <h1>What is DeCert?</h1>
                        <h2>Certificates re-engineered.</h2>
                      </div>
                      <div>
                        <div className="w-layout-grid af-class-grid-2">
                          <h3
                            id="w-node-_529bb808-90f6-232f-c30d-e18e0c22ed07-007797b9"
                            data-w-id="529bb808-90f6-232f-c30d-e18e0c22ed07"
                            style={{ opacity: 0 }}
                            className="af-class-heading-medium af-class-margin-bottomo-1rem"
                          >
                            DeCert is a decentralized certification service for
                            the Metaverse.
                          </h3>
                          <ul
                            id="w-node-_529bb808-90f6-232f-c30d-e18e0c22ed09-007797b9"
                            data-w-id="529bb808-90f6-232f-c30d-e18e0c22ed09"
                            style={{ opacity: 0 }}
                            role="list"
                          >
                            <li className="af-class-margin-bottomo-0-75">
                              Certificates created on Metaverse blockchain are
                              becoming increasingly desired by Ed-Tech companies
                              in order to{" "}
                              <strong>
                                recognize user's accomplishment of courses and
                                educational content they have received.
                              </strong>
                            </li>
                            <li className="af-class-margin-bottomo-0-75">
                              In addition, we can also help companies reduce the
                              cost of certificates issued on{" "}
                              <strong>
                                Ethereum, Polygon, Tezos blockchains
                              </strong>{" "}
                              in a Metaverse ecosystem.
                            </li>
                            <li className="af-class-margin-bottomo-0-75">
                              It allows institutions to check the authenticity
                              of a certificate before issuing it, and makes it
                              possible to{" "}
                              <strong>
                                mint and verify blockchain-based certificates
                              </strong>{" "}
                              in seconds.
                            </li>
                            <li>
                              It offers companies, universities, and other
                              organizations a{" "}
                              <strong>
                                modern alternative to traditional certificates
                              </strong>{" "}
                              including paper certificates{" "}
                              <strong>that can be easily faked.</strong>
                            </li>
                          </ul>
                          <div
                            id="w-node-_529bb808-90f6-232f-c30d-e18e0c22ed1f-007797b9"
                            data-w-id="529bb808-90f6-232f-c30d-e18e0c22ed1f"
                            className="af-class-interaction-bg"
                          >
                            <div
                              data-w-id="529bb808-90f6-232f-c30d-e18e0c22ed20"
                              style={{ opacity: 0 }}
                              className="af-class-image-feature"
                            >
                              <img
                                src="https://uploads-ssl.webflow.com/62546fa0d96e443a1867f458/625491d23a3f7b0e2ab7aa4a_Graduation%20Hat%20and%20Diploma.F03%201%20(1).png"
                                loading="lazy"
                                alt
                                className="af-class-img"
                              />
                            </div>
                            <div
                              style={{ width: 10, height: 10 }}
                              className="af-class-bg-scale af-class-colour--8fb4c0"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <section className="af-class-feature-section">
                  <div className="af-class-page-padding">
                    <div className="af-class-container">
                      <div className="af-class-margin-bottomo-6rem">
                        <h1>Features</h1>
                        <h2>What can we help you achieve</h2>
                      </div>
                      <div>
                        <div className="w-layout-grid af-class-grid-3">
                          <div
                            id="w-node-_529bb808-90f6-232f-c30d-e18e0c22ed2d-007797b9"
                            className="af-class-glass-div-feature"
                          >
                            <img
                              src="https://uploads-ssl.webflow.com/62546fa0d96e443a1867f458/62549386839f4360ec66a533_2.png"
                              loading="lazy"
                              alt
                              className="af-class-feature-img"
                            />
                            <div>
                              <h5 className="af-class-feature-heading af-class-margin-bottomo-0-75">
                                Certificate ownership in Blockchain
                              </h5>
                              <p className="af-class-feature-paragraph">
                                Get actual ownership of your certificate via the
                                blockchain network and display it in the
                                metaverse. The certificates are a one-of-a-kind
                                kind of ERC-721 NFT that is non-transferable. We
                                do not hold the certificates; instead, they are
                                distributed around the Filecoin network.
                              </p>
                            </div>
                          </div>
                          <div
                            id="w-node-_529bb808-90f6-232f-c30d-e18e0c22ed34-007797b9"
                            className="af-class-glass-div-feature"
                          >
                            <img
                              src="https://uploads-ssl.webflow.com/62546fa0d96e443a1867f458/62549382607a580de3ad3a26_1.png"
                              loading="lazy"
                              alt
                              className="af-class-feature-img"
                            />
                            <div>
                              <h5 className="af-class-feature-heading af-class-margin-bottomo-0-75">
                                Never, ever lose your certificate
                              </h5>
                              <p className="af-class-feature-paragraph">
                                The certificates are kept in Filecoin, a
                                peer-to-peer decentralized network, so they will
                                be with you in the metaverse for eternity. The
                                ownership record of the certificates is recorded
                                in the form of an immutable ledger on the
                                Ethereum or Polygon blockchain.
                              </p>
                            </div>
                          </div>
                          <div
                            id="w-node-_529bb808-90f6-232f-c30d-e18e0c22ed3b-007797b9"
                            className="af-class-glass-div-feature"
                          >
                            <img
                              src="https://uploads-ssl.webflow.com/62546fa0d96e443a1867f458/625493894023dd53586f36a5_3.png"
                              loading="lazy"
                              alt
                              className="af-class-feature-img"
                            />
                            <div>
                              <h5 className="af-class-feature-heading af-class-margin-bottomo-0-75">
                                API that's simple to use
                              </h5>
                              <p className="af-class-feature-paragraph">
                                Now you don't need a team of blockchain
                                developers to get your company into the
                                metaverse; we provide everything in the form of
                                an API; simply link the API with your product
                                and you're in.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <section className="af-class-main-section">
                  <div className="af-class-page-padding">
                    <div className="af-class-container">
                      <div className="af-class-margin-bottomo-6rem">
                        <h1>FAQs</h1>
                        <h2>Frequently Asked Questions</h2>
                      </div>
                      <div className="af-class-faq-wrapper">
                        <div className="af-class-container-small">
                          <div className="af-class-padding-vertical af-class-padding-xhuge">
                            <div className="af-class-faq4_component">
                              <div className="w-layout-grid af-class-faq4_list">
                                <div className="af-class-faq4_accordion">
                                  <div
                                    data-w-id="529bb808-90f6-232f-c30d-e18e0c22ed50"
                                    className="af-class-faq4_question"
                                  >
                                    <div className="af-class-text-size-medium af-class-text-weight-bold">
                                      What exactly is DeCert?
                                    </div>
                                    <img
                                      src="https://uploads-ssl.webflow.com/624380709031623bfe4aee60/624380709031621ef64aee78_icon_plus.svg"
                                      loading="lazy"
                                      alt
                                      className="af-class-faq-05_icon"
                                    />
                                  </div>
                                  <div
                                    style={{ height: 0 }}
                                    className="af-class-faq4_answer"
                                  >
                                    <div className="af-class-margin-bottom af-class-margin-small">
                                      <p className="af-class-faq-pg">
                                        We provide an easy-to-use, rapid API for
                                        ed-tech companies to convert their
                                        certificates into NFTs and send them to
                                        the recipient. We are making the NFTs
                                        non-transferable in order to retain the
                                        certificates' credibility.
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                <div className="af-class-faq4_accordion">
                                  <div
                                    data-w-id="529bb808-90f6-232f-c30d-e18e0c22ed59"
                                    className="af-class-faq4_question"
                                  >
                                    <div className="af-class-text-size-medium af-class-text-weight-bold">
                                      Why should we use it?
                                    </div>
                                    <img
                                      src="https://uploads-ssl.webflow.com/624380709031623bfe4aee60/624380709031621ef64aee78_icon_plus.svg"
                                      loading="lazy"
                                      alt
                                      className="af-class-faq-05_icon"
                                    />
                                  </div>
                                  <div
                                    style={{ height: 0 }}
                                    className="af-class-faq4_answer"
                                  >
                                    <div className="af-class-margin-bottom af-class-margin-small">
                                      <p className="af-class-faq-pg">
                                        For businesses there is no hassle of
                                        crypto wallet. Get legitimate ownership
                                        of your certificate over secure
                                        blockchain, certificates stay for
                                        life-time even if our server crashes
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                <div className="af-class-faq4_accordion">
                                  <div
                                    data-w-id="529bb808-90f6-232f-c30d-e18e0c22ed62"
                                    className="af-class-faq4_question"
                                  >
                                    <div className="af-class-text-size-medium af-class-text-weight-bold">
                                      Where are my Certificates stored?
                                    </div>
                                    <img
                                      src="https://uploads-ssl.webflow.com/624380709031623bfe4aee60/624380709031621ef64aee78_icon_plus.svg"
                                      loading="lazy"
                                      alt
                                      className="af-class-faq-05_icon"
                                    />
                                  </div>
                                  <div
                                    style={{ height: 0 }}
                                    className="af-class-faq4_answer"
                                  >
                                    <div className="af-class-margin-bottom af-class-margin-small">
                                      <p className="af-class-faq-pg">
                                        The certificates are stored over a
                                        decentralized network - FileCoin. The
                                        ownership is maintained over Ethereum or
                                        polygon blockchain
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                <div className="af-class-faq4_accordion">
                                  <div
                                    data-w-id="529bb808-90f6-232f-c30d-e18e0c22ed6b"
                                    className="af-class-faq4_question"
                                  >
                                    <div className="af-class-text-size-medium af-class-text-weight-bold">
                                      Can we transfer our Certificates?
                                    </div>
                                    <img
                                      src="https://uploads-ssl.webflow.com/624380709031623bfe4aee60/624380709031621ef64aee78_icon_plus.svg"
                                      loading="lazy"
                                      alt
                                      className="af-class-faq-05_icon"
                                    />
                                  </div>
                                  <div
                                    style={{ height: 0 }}
                                    className="af-class-faq4_answer"
                                  >
                                    <div className="af-class-margin-bottom af-class-margin-small">
                                      <p className="af-class-faq-pg">
                                        No, you cannot transfer your
                                        certificates, though it follows ERC-721
                                        token standard
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
              <div className="af-class-footer af-class-colour--8fb4c0">
                <div className="af-class-page-padding">
                  <div className="af-class-container">
                    <div className="af-class-is--flex_hor">
                      <img
                        src="https://uploads-ssl.webflow.com/62546fa0d96e443a1867f458/62549940d3e284368b020dab_Vector.svg"
                        loading="lazy"
                        alt
                        className="af-class-img-logo"
                      />
                      <div className="af-class-footer-text">
                        All Rights Reserved &nbsp;©deCert, 2022
                      </div>
                      <div className="af-class-social-wrapper">
                        <a href="#" className="af-class-sm_link w-inline-block">
                          <div className="af-class-html-embed w-embed">
                            <svg
                              width={32}
                              height={27}
                              viewBox="0 0 32 27"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M31.9854 3.54945C31.5543 4.19525 31.0647 4.80005 30.5229 5.3562C29.9783 5.91592 29.3866 6.42781 28.7544 6.8862C28.7747 7.1685 28.7852 7.45142 28.7859 7.73445C28.7859 9.02595 28.6486 10.3017 28.3719 11.564C28.0961 12.8217 27.6935 14.0482 27.1704 15.2247C26.4457 16.8823 25.488 18.4279 24.3264 19.8147C23.213 21.1409 21.9088 22.2942 20.4564 23.237C18.9988 24.1775 17.4105 24.8977 15.7426 25.3745C14.0022 25.8726 12.2001 26.1218 10.3899 26.1147C8.64412 26.1169 6.90696 25.8707 5.2306 25.3835C3.55051 24.8943 1.9516 24.1605 0.485352 23.2055C2.17774 23.4101 3.89386 23.2789 5.53549 22.8194C7.17713 22.36 8.71203 21.5813 10.0524 20.528C9.04965 20.5139 8.0643 20.2643 7.17589 19.7992C6.28748 19.334 5.52091 18.6665 4.9381 17.8505C4.54059 17.302 4.23158 16.6947 4.02235 16.0505C4.2271 16.082 4.4296 16.109 4.62985 16.1292C5.40214 16.2048 6.18175 16.1369 6.92935 15.929C6.19193 15.7835 5.48637 15.5077 4.84585 15.1145C4.2252 14.7331 3.67176 14.2518 3.20785 13.6902C2.25547 12.5371 1.7379 11.0863 1.74535 9.5907V9.51645C2.64985 10.0272 3.6286 10.2995 4.68385 10.331C3.80395 9.7316 3.08153 8.92891 2.57785 7.99095C2.33119 7.52835 2.14012 7.03819 2.0086 6.5307C1.74072 5.45674 1.74613 4.33278 2.02435 3.26145C2.1661 2.7147 2.3866 2.19495 2.68585 1.7022C3.50485 2.71695 4.41835 3.6282 5.42185 4.43145C7.41628 6.03095 9.72083 7.19932 12.1899 7.8627C13.4361 8.19666 14.7148 8.39506 16.0036 8.45445C15.9414 8.21441 15.8978 7.96994 15.8731 7.7232C15.8478 7.47576 15.835 7.22719 15.8349 6.97845C15.8349 6.0852 16.0036 5.24595 16.3434 4.46295C17.0021 2.91577 18.2342 1.68367 19.7814 1.02495C20.5754 0.68511 21.4309 0.512766 22.2946 0.518703C23.1805 0.514394 24.0576 0.693938 24.8705 1.04598C25.6834 1.39802 26.4144 1.91491 27.0174 2.56395C28.4608 2.27897 29.8445 1.74772 31.1079 0.993453C30.6395 2.49279 29.6307 3.76459 28.2774 4.56195C29.5571 4.41322 30.8071 4.07265 31.9854 3.5517V3.54945Z"
                                fill="white"
                              />
                            </svg>
                          </div>
                        </a>
                        <a href="#" className="af-class-sm_link w-inline-block">
                          <div className="w-embed">
                            <svg
                              width={29}
                              height={29}
                              viewBox="0 0 29 29"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M24.0879 23.8978H19.9465V17.3991C19.9465 15.8495 19.9141 13.858 17.7809 13.858C15.6214 13.858 15.2924 15.5389 15.2924 17.2845V23.8969H11.1457V10.5348H15.1287V12.3574H15.1821C15.7386 11.3048 17.0922 10.1979 19.1117 10.1979C23.3126 10.1979 24.0922 12.9638 24.0922 16.56V23.8969L24.0879 23.8978ZM6.46098 8.70864C6.14447 8.70876 5.83104 8.64643 5.53866 8.52523C5.24628 8.40403 4.98068 8.22633 4.75708 8.00232C4.53347 7.77832 4.35626 7.51239 4.23559 7.21979C4.11492 6.92719 4.05316 6.61365 4.05385 6.29714C4.05437 5.82075 4.19613 5.35521 4.46122 4.95938C4.7263 4.56355 5.1028 4.25521 5.54311 4.07334C5.98342 3.89147 6.46778 3.84424 6.93493 3.93763C7.40208 4.03102 7.83105 4.26082 8.1676 4.59799C8.50416 4.93515 8.73318 5.36454 8.82572 5.83186C8.91826 6.29918 8.87015 6.78344 8.68748 7.22342C8.50481 7.6634 8.19579 8.03934 7.79948 8.30371C7.40317 8.56807 6.93737 8.70899 6.46098 8.70864V8.70864ZM8.53823 23.8978H4.38285V10.5356H8.53823V23.8978ZM26.1669 0.0356445H2.30035C1.16023 0.0356445 0.235352 0.937769 0.235352 2.05427V26.0179C0.235352 27.1344 1.16023 28.0365 2.30035 28.0365H26.1625C27.3009 28.0365 28.2354 27.1344 28.2354 26.0179V2.05427C28.2354 0.937769 27.3009 0.0356445 26.1625 0.0356445H26.1669Z"
                                fill="white"
                              />
                            </svg>
                          </div>
                        </a>
                        <a href="#" className="w-inline-block">
                          <div className="w-embed">
                            <svg
                              width={28}
                              height={28}
                              viewBox="0 0 28 28"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M13.7315 9.47953C11.2227 9.47953 9.17533 11.5269 9.17533 14.0357C9.17533 16.5445 11.2227 18.5918 13.7315 18.5918C16.2403 18.5918 18.2876 16.5445 18.2876 14.0357C18.2876 11.5269 16.2403 9.47953 13.7315 9.47953ZM27.3965 14.0357C27.3965 12.149 27.4136 10.2793 27.3077 8.39603C27.2017 6.20853 26.7027 4.26713 25.1031 2.66752C23.5 1.06449 21.5621 0.568888 19.3746 0.462931C17.4878 0.356974 15.6182 0.374064 13.7349 0.374064C11.8482 0.374064 9.97856 0.356974 8.09526 0.462931C5.90776 0.568888 3.96635 1.06791 2.36674 2.66752C0.763712 4.27055 0.268106 6.20853 0.162149 8.39603C0.0561924 10.2828 0.0732823 12.1524 0.0732823 14.0357C0.0732823 15.919 0.0561924 17.792 0.162149 19.6753C0.268106 21.8628 0.76713 23.8042 2.36674 25.4038C3.96977 27.0069 5.90776 27.5025 8.09526 27.6084C9.98198 27.7144 11.8516 27.6973 13.7349 27.6973C15.6216 27.6973 17.4913 27.7144 19.3746 27.6084C21.5621 27.5025 23.5035 27.0035 25.1031 25.4038C26.7061 23.8008 27.2017 21.8628 27.3077 19.6753C27.417 17.792 27.3965 15.9224 27.3965 14.0357V14.0357ZM13.7315 21.0459C9.85209 21.0459 6.72123 17.9151 6.72123 14.0357C6.72123 10.1563 9.85209 7.02543 13.7315 7.02543C17.6109 7.02543 20.7417 10.1563 20.7417 14.0357C20.7417 17.9151 17.6109 21.0459 13.7315 21.0459ZM21.0289 8.37553C20.1231 8.37553 19.3916 7.64408 19.3916 6.73832C19.3916 5.83256 20.1231 5.10111 21.0289 5.10111C21.9346 5.10111 22.6661 5.83256 22.6661 6.73832C22.6663 6.9534 22.6242 7.16641 22.542 7.36517C22.4598 7.56393 22.3392 7.74452 22.1871 7.8966C22.0351 8.04868 21.8545 8.16927 21.6557 8.25145C21.4569 8.33363 21.2439 8.3758 21.0289 8.37553V8.37553Z"
                                fill="white"
                              />
                            </svg>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* [if lte IE 9]><![endif] */}
          </div>
        </span>
      </span>
    );
  }
}

export default IndexView;

/* eslint-enable */
