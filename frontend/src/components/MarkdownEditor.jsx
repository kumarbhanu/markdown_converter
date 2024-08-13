import React, { useState, useEffect } from "react";
import axios from "axios";
import { convertURl } from "../constants";

const MarkdownEditor = () => {
  const [markdown, setMarkdown] = useState("");
  const [html, setHtml] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const convertFunc = async () => {
      setLoading(true);
      try {
        const response = await axios.post(convertURl, { markdown });
        setHtml(response?.data?.html);
        setLoading(false);
      } catch (error) {
        console.error("Error converting markdown:", error);
        setError("something went wrong");
        setLoading(false);
      }
    };

    convertFunc();
  }, [markdown]);
  if (loading) {
    return <div>Loading ....</div>;
  }
  return (
    <>
      <p className="error">{error}</p>
      <div className="container">
        <textarea
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
          placeholder="Enter markdown "
        />
        <div className="htmlPanel">
          <h2>Output panel</h2>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      </div>
    </>
  );
};

export default MarkdownEditor;
