import React, { useState } from "react";
import { FcExpand, FcCollapse } from "react-icons/fc";

const ShowData = ({ title, body }) => {
  const [show, setShow] = useState(false);
const showItem=()=>{
    setShow(!show)
}

  return (
    <React.Fragment>
      <div className= { show?"card card-desing":"card card-desing-false"}>
        <div className="collapse-icons"  onClick={showItem}>
          <h4>{title}</h4>
          <span>
            {show? <FcCollapse/>: <FcExpand />}
           
          </span>
        </div>

        {show && <p>{body}</p>}
      </div>
    </React.Fragment>
  );
};
export default ShowData;
