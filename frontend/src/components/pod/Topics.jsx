import React, { useState, useEffect } from 'react';

const TopicList = () => {
  const [topics, setTopics] = useState(['moowees podcast', 'international confrence', 'Global warning confrence']);
  const [visibleTopic, setVisibleTopic] = useState('');

  useEffect(() => {
    let intervalId;
    const displayTopics = () => {
      const [currentTopic, ...remainingTopics] = topics;
      setTopics(remainingTopics);
      setVisibleTopic(currentTopic);

      if (remainingTopics.length === 0) {
        // Reset the topics after displaying all of them
        setTopics([
          'moowees podcast',
          'international confrence',
          'Global warning confrence',
        ]);
      }
    };

    // Display a new topic every 3 seconds
    intervalId = setInterval(displayTopics, 5000);

    // Clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, [topics]);

  return (
    <div>
      <p>Trending pods: {visibleTopic} </p>

    </div>
  );
};

export default TopicList;
