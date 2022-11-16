import react, { useEffect, useState } from "react";
import "./App.css";
import mql from "@microlink/mql";

interface hoverData {
  snapshot: string | undefined;
  currentHover: string;
}

const App = () => {
  const [data, setData] = useState<hoverData>({
    snapshot: "",
    currentHover: "",
  });
  const [isHovered, setHovered] = useState<boolean>(false);

  const onHover = async (hoverItem: string) => {
    let displayImage = "";

    if (hoverItem === "twitter") {
      displayImage = "https://twitter.com/san_sontu";
    }

    if (hoverItem === "gitHub") {
      displayImage = "https://github.com/ShaktiMandal";
    }

    if (hoverItem === "linkedIn") {
      displayImage = "https://www.linkedin.com/in/shaktishankarmandal/";
    }

    setHovered(true);

    const { status, data } = await mql(displayImage, {
      screenshot: true,
    });

    debugger;
    setData({ snapshot: data.screenshot?.url, currentHover: hoverItem });
  };

  return (
    <>
      <div className="link-priview">
        <p>
        {isHovered && data.currentHover === "twitter" ? (
            <div className="hoverItem">
              <img
                src={data.snapshot}
                alt="this is hover image"
                height="100px"
                width="150px"
              />
            </div>
          ) : null}
          connect through{" "}
          <a
            onMouseLeave={() => setHovered(false)}
            onMouseOver={() => onHover("twitter")}
            href="https://twitter.com/san_sontu">
            twitter
          </a>
         
        </p>
        <p>
        {isHovered && data.currentHover === "gitHub" ? (
            <div className="hoverItem">
              <img
                src={data.snapshot}
                alt="this is hover image"
                height="100px"
                width="150px"
              />
            </div>
          ) : null}
          connect through{" "}
          <a
            onMouseLeave={() => setHovered(false)}
            onMouseOver={() => onHover("gitHub")}
            href="https://twitter.com/san_sontu">
            github
          </a>
         
        </p>
        <p>
        {isHovered && data.currentHover === "linkedIn" ? (
            <div className="hoverItem">
              <img
                src={data.snapshot}
                alt="this is hover image"
                height="100px"
                width="150px"
              />
            </div>
          ) : null}
          connect through{" "}
          <a
            onMouseLeave={() => setHovered(false)}
            onMouseOver={() => onHover("linkedIn")}
            href="https://twitter.com/san_sontu">
            linkedIn
          </a>
         
        </p>
      </div>
    </>
  );
};

export default App;
