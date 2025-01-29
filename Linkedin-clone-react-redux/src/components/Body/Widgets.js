import React from "react";
import "./Widgets.css";
import InfoIcon from "@mui/icons-material/Info";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className="widget-article">
      <div className="widgets-article-left">
        <FiberManualRecordIcon />
      </div>

      <div className="widgets-article-right">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="widgets">
      <div className="widget-header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>

      {newsArticle("React: New Jobs", "Tops news - 324 readers")}
      {newsArticle("Decoding cyber skills demand", "Tops news - 2,324 readers")}
      {newsArticle("Will AI takeover humans", "Tops news - 144 readers")}
      {newsArticle("Banks on profit path", "Tops news - 129 readers")}
    </div>
  );
}

export default Widgets;
