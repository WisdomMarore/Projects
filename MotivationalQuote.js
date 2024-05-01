import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MotivationalQuote = () => {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const response = await axios.get('https://api.quotable.io/random');
        const { content, author } = response.data;
        setQuote(`${content} - ${author}`);
      } catch (error) {
        console.log('Error fetching quote:', error);
      }
    };

    fetchQuote();
  }, []);

  return (
    <div>
      <p className="quote">{quote}</p>
    </div>
  );
};

export default MotivationalQuote;