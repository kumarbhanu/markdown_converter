
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { convertURl } from '../constants';


const MarkdownEditor = () => {
  const [markdown, setMarkdown] = useState('');
  const [html, setHtml] = useState('');

  useEffect(() => {
    const convertFunc = async () => {

      try {
        const response = await axios.post(convertURl, { markdown });
        setHtml(response?.data?.html);
      } catch (error) {
        console.error('Error converting markdown:', error);
      }
    };

    convertFunc();
  }, [markdown]);

  return (
    <div className="container">

      <textarea
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
        placeholder="Enter markdown "
      />
   <div>
    <h2>Output panel</h2>
   <div
        className="htmlPanel"
        dangerouslySetInnerHTML={{ __html: html }}
      />
   </div>
    </div>
  );
};

export default MarkdownEditor;
