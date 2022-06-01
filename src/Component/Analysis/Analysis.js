import React from "react";

const Analysis = () => {
  return (
    <section className="bg-secondary py-20">
      <h2 className="text-center text-2xl mb-10 text-white">Title 1</h2>
      <div className="grid grid-cols-3">
        <div className="analysis text-white border-dotted border-2 border-white ">
          <div className="text-center">
            <h2 className="text-4xl font-bold">1 BN+</h2>
            <h3 className="mt-10 text-2xl">Daily Impressions</h3>
          </div>
        </div>
        <div className="analysis bg-white text-secondary">
          <div className="text-center">
            <h2 className="text-4xl font-bold">$500K+</h2>
            <h3 className="mt-10 text-2xl">Paid</h3>
          </div>
        </div>
        <div className="analysis bg-primary text-white">
          <div className="text-center">
            <h2 className="text-4xl font-bold">$500K+</h2>
            <h3 className="mt-10 text-2xl">Daily Impressions</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Analysis;
