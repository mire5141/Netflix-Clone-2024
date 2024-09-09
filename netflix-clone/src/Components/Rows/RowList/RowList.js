import React from "react";
import Row from "../Row/Row.js";
import requests from "../../../utils/request";

const RowList = () => {
  return (
    <div>
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOrginals}
        isLargeRow={true}
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />

      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />

      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />

      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />

      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />

      <Row title="TV Shows" fetchUrl={requests.fetchTvShow} />

      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
};

export default RowList;
