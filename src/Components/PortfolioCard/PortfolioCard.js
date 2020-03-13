import React from "react";
import "./PortfolioCard.css";

function PortfolioCard(props) {
  return (
    <div className="PortfolioCard">
      <h1>{props.props.name}</h1>
      <div className="MyRow">
        <span>
          <a
            className="PortfolioLink"
            style={{ textDecoration: "underline" }}
            target="_blank"
            rel="noopener noreferrer"
            href={props.props.URL}
          >
            Github
          </a>
        </span>
        <span>
          {props.props.liveSite === "N/A"
            ? "Live site: N/A"
            : " Click here for: " && (
                <a
                  className="PortfolioLink"
                  style={{ textDecoration: "underline" }}
                  target="_blank"
                  rel="noopener noreferrer"
                  href={props.props.liveSite}
                >
                  Live Site
                </a>
              )}
        </span>
      </div>
      <p style={{ margin: "12px" }}>{props.props.description}</p>
      <img
        className="PortfolioImage"
        alt={props.props.name}
        src={process.env.PUBLIC_URL + props.props.image}
      />
      <p>
        <span style={{ fontWeight: "bolder" }}>Technology Used:</span>{" "}
        {props.props.technologies}
      </p>
    </div>
  );
}

export default PortfolioCard;
