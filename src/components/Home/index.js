import React from 'react';

function index() {

  console.log('import.meta', import.meta);

  return (
    <div>
      Hello world! <br/>
      Environment: {import.meta.env.SNOWPACK_PUBLIC_NODE_ENV}
      <br/>
      Hello every body
    </div>
  );
}

export default index;
