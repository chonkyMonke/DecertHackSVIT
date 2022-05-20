/* eslint-disable */

import React from "react";
import { createScope, map, transformProxies } from "./helpers";
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

class StyleguideView extends React.Component {
  static get Controller() {
    if (Controller) return Controller;

    try {
      Controller = require("..controllers/StyleguideController");
      Controller = Controller.default || Controller;

      return Controller;
    } catch (e) {
      if (e.code == "MODULE_NOT_FOUND") {
        Controller = StyleguideView;

        return Controller;
      }

      throw e;
    }
  }

  componentDidMount() {
    const htmlEl = document.querySelector("html");
    htmlEl.dataset["wfPage"] = "626641cf769131892fa519ef";
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
      StyleguideView.Controller !== StyleguideView
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
        `,
          }}
        />
        <span className="af-view">
          <div>
            <div className="af-class-page-wrapper">
              <div className="af-class-navbar">
                <div className="af-class-container-nav-bar af-class-colour--ffffff af-class-nav-padding">
                  <a href="#" className="w-inline-block">
                    <img
                      src="images/decert-logo.png"
                      loading="lazy"
                      width={156}
                      alt
                      className="af-class-img-logo"
                    />
                  </a>
                  <nav className="af-class-nav-link-wrapper">
                    <a href="#" className="af-class-nav-link w-inline-block">
                      <div className="af-class-nav-text">Home</div>
                    </a>
                    <a
                      href="https://github.com/Hackspiration-Team/DeCert/blob/master/api/README.md"
                      target="_blank"
                      className="af-class-nav-link w-inline-block"
                    >
                      <div className="af-class-nav-text">Docs</div>
                    </a>
                    <a href="#" className="af-class-nav-link w-inline-block">
                      <div className="af-class-nav-text">About us</div>
                    </a>
                    <a href="#" className="af-class-nav-link w-inline-block">
                      <div className="af-class-nav-text">Contact us</div>
                    </a>
                    <a
                      href="#"
                      className="af-class-primary-btn af-class-is-hide w-button"
                    >
                      Sign in
                    </a>
                  </nav>
                  <a href="#" className="af-class-primary-btn w-button">
                    Sign in
                  </a>
                  <div className="af-class-is-hide">
                    <div className="af-class-li-line af-class-top" />
                    <div className="af-class-li-line" />
                    <div className="af-class-li-line af-class-bottom" />
                  </div>
                </div>
              </div>
              <div className="af-class-main">
                <div className="af-class-styling-section">
                  <div className="af-class-page-padding">
                    <div className="af-class-container">
                      <h1>Heading 1</h1>
                      <h2>Heading 2</h2>
                      <h3>Heading 3</h3>
                      <h4>Heading 4</h4>
                      <h5>Heading 5</h5>
                      <h6>Heading 6</h6>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse varius enim in eros elementum tristique.
                        Duis cursus, mi quis viverra ornare, eros dolor interdum
                        nulla, ut commodo diam libero vitae erat. Aenean
                        faucibus nibh et justo cursus id rutrum lorem imperdiet.
                        Nunc ut sem vitae risus tristique posuere.
                      </p>
                      <div className="af-class-h1">Heading 1</div>
                      <div className="af-class-h2">Heading 2</div>
                      <div className="af-class-h3">Heading 3</div>
                      <div className="af-class-h4">Heading 4</div>
                      <div className="af-class-h5">Heading 5</div>
                      <div className="af-class-h6">Heading 6</div>
                      <div className="af-class-colour--a784b6" />
                      <div className="af-class-colour--8fb4c0" />
                      <div className="af-class-colour--ffffff" />
                      <a href="#" className="af-class-primary-btn w-button">
                        Primary Button
                      </a>
                      <img
                        src="images/certificate_3d.png"
                        loading="lazy"
                        sizes="(max-width: 479px) 90vw, (max-width: 767px) 92vw, (max-width: 991px) 94vw, 95vw"
                        width={655}
                        srcSet="images/certificate_3d-p-500.png 500w, images/certificate_3d-p-800.png 800w, images/certificate_3d.png 1310w"
                        alt
                      />
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

export default StyleguideView;

/* eslint-enable */
