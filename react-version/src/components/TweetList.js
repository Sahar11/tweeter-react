/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Tweet from './Tweet';

function TweetList(){
  return (
    <section className="tweets">
  <Tweet /> 
  <Tweet />
  </section>
  );
}

export default TweetList;