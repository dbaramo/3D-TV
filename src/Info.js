import { useState } from "react";
import { Info as InfoImg } from "react-feather";

export default function Info() {
  const [displayInfoBox, setDisplayInfoBox] = useState("none");

  const changeDisplay = () => {
    if (displayInfoBox === "none") {
      setDisplayInfoBox("block");
    } else {
      setDisplayInfoBox("none");
    }
  };
  return (
    <>
      <div onClick={changeDisplay} className="info-container">
        <InfoImg color="black" size={30} />
      </div>

      <div className="info-box" style={{ display: displayInfoBox }}>
        <p>Project Source Code:</p>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/dbaramo/3D-TV"
        >
        https://github.com/dbaramo/3D-TV
        </a>
        <br />
        <br />
        <p>3D TV Model:</p>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://sketchfab.com/3d-models/crt-tv-9ba4baa106e64319a0b540cf0af5aa9e"
        >
          https://sketchfab.com/3d-models/crt-tv-9ba4baa106e64319a0b540cf0af5aa9e
        </a>
      </div>
    </>
  );
}
