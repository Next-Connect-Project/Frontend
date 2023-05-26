import React from "react";
import { SiNotion } from "react-icons/si";
import { BsGithub } from "react-icons/bs";
export default function Footer() {
  return (
    <div className="footer_wrapper">
      <div className="footer_title">Project Info</div>
      <div className="footer_link">
        <a
          href="https://www.notion.so/Project-97120d343cb6445bb949a035b8e9347f"
          target="_blank"
          rel="noreferrer noopener"
        >
          <div className="link">
            <SiNotion />
          </div>
        </a>
        <a
          href="https://github.com/Next-Connect-Project"
          target="_blank"
          rel="noreferrer noopener"
        >
          <div className="link">
            <BsGithub />
          </div>
        </a>
      </div>
      <div className="footer_desc">
        <div className="footer_name">
          <span className="charge">@FE</span> 송지수 조혜준
        </div>
        <div className="footer_name">
          <span className="charge">@BE</span> 최송희 한희나
        </div>
      </div>
    </div>
  );
}
