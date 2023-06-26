
import React, { useEffect, useRef } from "react";
import { has } from "lodash/object";


const FbComment = ({ url }) => {
  const fbRef = useRef(null);
  useEffect(() => {
    console.log('url', url)
    if (global.document && has(global.window, "FB")) {
      global.FB.XFBML.parse(fbRef.current);
    }
  }, []);
  return (
    <div ref={fbRef}>
      <div
        className="fb-comments"
        data-href={url}
        data-width="100%"
        data-numposts="5"
        style={{ width: "100%" }}
      ></div>
    </div>
  );
};

export default FbComment;