import React, { useState, useEffect } from "react";
import "../information/information.css";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import Pages from "./pages";
import ShowData from "./showData";

const URL = "https://jsonplaceholder.typicode.com/posts";
const Information = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading]= useState(true)
  //pagination///
  const PER_PAGE = 10;
  const [page, setPage] = useState(1);

  const handlePageClick = ({ selected: selecTedPage }) => {
    setPage(selecTedPage);
  };
  const offset = page * PER_PAGE;
  const currentPageData = data.slice(offset, offset + PER_PAGE);
  const pageCount = Math.ceil(data.length / PER_PAGE);

  const loadApiData = () => {
    fetch(URL, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((result) => {
        if (result) {
          setData(result);
          setLoading(false)
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    loadApiData();
  }, []);
  if(loading){
return(
<div className="text-center my-25">
  <AiOutlineLoading3Quarters size={40}/>
  <h2>Loading...</h2>
</div>
)
  }

  return (
    <div className="container">
      <div className="info-design">
        <h1>List of information</h1>
        <div className="card pagination">
        <Pages pageCount={pageCount} handlePageClick={handlePageClick} />
      </div>
        {currentPageData?.map((item, index) => (
          <ShowData
            key={item.id}
            {...item} // <== spreed operation //
            //   title={item.title}
            //   body={item.body}
          />
        ))}
      </div>
    </div>
  );
};
export default Information;
