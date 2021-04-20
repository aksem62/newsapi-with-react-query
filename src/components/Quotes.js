import React from "react";
import { useQuery } from "react-query";
import ShowArticle from "./ShowArticle";

const Quotes = () => {
  const url =
    "https://newsapi.org/v2/top-headlines?" +
    "country=ru&" +
    "apiKey=7271896d1b0e489fb670d99146b312c0";

  const req = new Request(url);

  const { isLoading, error, data, isFetching } = useQuery("quotes", () =>
    fetch(req).then((res) => res.json())
  );
  if (isLoading) {
    return "Loading...";
  }
  if (error) {
    return "Error" + error.message;
  }
  return (
    <div>
      <div>
        {isFetching ? "Updating..." : <ShowArticle articles={data.articles} />}
      </div>
    </div>
  );
};

export default Quotes;
