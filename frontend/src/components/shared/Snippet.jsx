import React from 'react';
import { Helmet } from 'react-helmet';

const Snippet = ({ pageName }) => {
  return (
    <Helmet>
      <title>{`The Leaf Way | ${pageName}`}</title>
    </Helmet>
  );
};

export default Snippet;