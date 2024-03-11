import React from "react";

const Loader = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="w-20 h-20 border-2 border-opacity-20 border-blue-500 border-t-blue-500 rounded-full animate-spin" />
    </div>
  );
};

export default Loader;
