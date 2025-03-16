import React, { useState, useEffect } from "react";

const QuoteGenerator = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  const fetchQuote = async () => {
    try {
      const response = await fetch(
        "https://cors-anywhere.herokuapp.com/https://zenquotes.io/api/random/"
      );
      const data = await response.json();

      setQuote(data[0].q);
      setAuthor(data[0].a);
    } catch (error) {
      console.error("Error fetching quote:", error);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div>
      <div>
        <div>
          <p>"{quote}"</p>
          <p>- {author}</p>
          <button onClick={fetchQuote}>New Quote</button>
        </div>
      </div>
    </div>
  );
};

export default QuoteGenerator;
