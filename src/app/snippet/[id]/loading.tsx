// import React from 'react'

// const loading = () => {
//   return (
//     <div>loading..</div>
//   )
// }

// export default loading


import React from 'react';

const Loading = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="flex flex-col items-center">
        <div className="loader"></div>
        <div className="mt-4 text-lg font-semibold text-gray-700">Loading...</div>
      </div>
    </div>
  );
};

export default Loading;
