import React, { useState } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import { useTimeout } from "../../../utilities/useInterval";

const Toast = ({ ...props }) => {
  const [_showToast, setShowToast] = useState(true);
  const toastPosition = (_position) => {
    switch (_position) {
      case "top-center":
        return {
          top: "0.2rem",
          justifyContent: "center",
          display: "flex",
        };
      case "top-left":
        return { top: "0.2rem", left: 0 };
      case "top-right":
        return { top: ".2rem", right: 0 };
      case "bottom-left":
        return { bottom: "6rem", position: "fixed" };
      case "bottom-right":
        return { bottom: "6rem", position: "fixed", right: "1rem" };
      case "bottom-center":
        return {
          bottom: "6rem",
          position: "fixed",
          justifyContent: "center",
          display: "flex",
        };
      default:
        return {
          bottom: "6rem",
          position: "fixed",
          justifyContent: "center",
          display: "flex",
        };
    }
  };
  const _presetClass = {
    success: { background: "#0abe78" },
    error: {
      background: "#ff5b5b",
    },
    info: {
      background: "var(--info)",
    },
  };
  const _presetBarColor = {
    success: "#0abe78",
    error: "#ff5b5b",
    info: "var(--info)",
  };
  const toastStyles = {
    background: props.bgColor || "#444444",
    color: props.textColor || "#fff",
    height: "max-content",
    borderRadius: "5px",
    transition: `transform ${1}s ease-in-out`,
    maxWidth: "20rem",
    fontSize: ".9rem",
    minWidth: "auto",
    position: "absolute",
    textAlign: "center",
    marginLeft: ".5rem",
    ..._presetClass[props._class],
  };

  useTimeout(() => setShowToast(false), 5000);

  return _showToast ? (
    <div
      style={{
        position: "absolute",
        width: "100%",
        ...toastPosition(props._position),
        zIndex: 200,
      }}
    >
      <div className="toast-container" style={{ ...toastStyles }}>
        <div
          className="toast-loading-bar"
          style={{
            height: ".4rem",
            // TODO:add preset barccolor
            background: props._class
              ? props.barColor
              : "linear-gradient(to right, var(--yellow) , var(--orange), var(--primary))",
          }}
        ></div>

        <div
          className="toast-inner-container"
          style={{ display: "flex", paddingLeft: ".4rem" }}
        >
          <div className="toast-icon" style={{ margin: "auto 0" }}>
            {props._class ? <ClassIcon _class={props._class} /> : null}
          </div>
          <div
            style={{
              textAlign: "left",
              padding: ".2rem .5rem .6rem",
              width: "100%",
              display: "flex",
              flexWrap: "nowrap",
            }}
          >
            <div className="toast-message" style={{ margin: ".4rem" }}>
              {props.message}
            </div>
            <div
              // className="toast-top-bar"
              style={{
                display: "flex",
                // justifyContent: "space-between",
                alignItems: "center",
                marginBottom: ".2rem",
                padding: ".2rem .5rem .1rem",
              }}
            >
              {/* <span className="toast-header text-capitalize">
                {props.heading}
              </span> */}
              <span
                className="toast-close-btn"
                onClick={() => setShowToast(false)}
                style={{ cursor: "pointer" }}
              >
                <svg
                  fill="#fff"
                  width="1rem"
                  height="1rem"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

const ClassIcon = ({ _class }) => {
  return (
    <>
      {_class === "info" ? (
        <svg
          viewBox="0 0 20 20"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
            clipRule="evenodd"
          ></path>
        </svg>
      ) : null}
      {_class === "error" ? (
        <svg
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
            clipRule="evenodd"
          ></path>
        </svg>
      ) : null}
      {_class === "success" ? (
        <svg
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
          ></path>
        </svg>
      ) : null}
    </>
  );
};

export const showToast = (
  attributes,
  container = document.getElementById("toast-container")
) => {
  ReactDOM.render(
    <div>
      <Toast
        key={new Date().getTime()}
        // heading={attributes.heading || ""}
        _class={attributes._class || ""}
        message={attributes.message}
        bgColor={attributes.bgColor || ""}
        textColor={attributes.textColor || ""}
        _position={attributes._position || ""}
        barColor={attributes.barColor || ""}
      />
    </div>,
    container
  );
};

Toast.propTypes = {
  // heading: PropTypes.string,
  _class: PropTypes.string,
  message: PropTypes.string.isRequired,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
  _position: PropTypes.string,
  barColor: PropTypes.string,
};
export default Toast;
