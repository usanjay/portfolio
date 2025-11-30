import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import AppButton from "../../components/AppButton.jsx";

function Download() {
  return (
    <a href="/resume-sanjay_sharma.pdf" download>
      <AppButton className="flex items-center justify-center !py-1 !px-2">
        <FontAwesomeIcon icon={faDownload} size="sm" />
        <span className="ml-2">Resume</span>
      </AppButton>
    </a>
  );
}

export default Download;
