import React from "react";

const TopHeader = () => {
  return (
    <div className="flex items-center pb-3 justify-between w-11/12 mx-auto pt-4">
      <h4 className="text-2xl font-bold ml-3">Logo</h4>

      <h6 className="mr-3">
        <span className="text-primary">BN</span> / EN
      </h6>
    </div>
  );
};

export default TopHeader;
