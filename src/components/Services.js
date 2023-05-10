import React from "react";

function Services() {
  return (
    <div>
      <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold md:py-6 text-white text-center">
        Our Services
      </h1>
      <div className="h-auto grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 content-center">
        <div className="bg-slate-900 rounded-lg shadow-md overflow-hidden my-6">
          <div className="p-4">
            <h2 className="text-2xl font-medium mb-2 pb-2 font-mono bg-slate-600 text-white text-center rounded-lg">
              For Individuals
            </h2>
            <p className="text-xl font-normal my-6 text-white text-center ">
              Easy ITR
            </p>
            <p className="text-xl font-normal my-6 text-white text-center ">
              Easy Invest
            </p>
          </div>
        </div>

        <div className="bg-slate-900 rounded-lg shadow-md overflow-hidden my-6">
          <div className="p-4">
            <h2 className="text-2xl font-medium mb-2 pb-2 font-mono bg-slate-600 text-white text-center rounded-lg">
              For Enterprises
            </h2>
            <p className="text-xl font-normal my-6 text-white text-center ">
              Easy E-invoice
            </p>
            <p className="text-xl font-normal my-6 text-white text-center ">
              Easy Audit
            </p>
            <p className="text-xl font-normal my-6 text-white text-center ">
              Easy ITR
            </p>
            <p className="text-xl font-normal my-6 text-white text-center ">
              Easy GSTR
            </p>
          </div>
        </div>

        <div className="bg-slate-900 rounded-lg shadow-md overflow-hidden my-6">
          <div className="p-4">
            <h2 className="text-2xl font-medium mb-2 pb-2 font-mono bg-slate-600 text-white text-center rounded-lg">
              For Tax Experts
            </h2>
            <p className="text-xl font-normal my-6 text-white text-center ">
              Easy TDS
            </p>
            <p className="text-xl font-normal my-6 text-white text-center ">
              Easy Audit
            </p>
            <p className="text-xl font-normal my-6 text-white text-center ">
              Easy ITR
            </p>
            <p className="text-xl font-normal my-6 text-white text-center ">
              Easy GSTR
            </p>
          </div>
        </div>

        <div className="bg-slate-900 rounded-lg shadow-md overflow-hidden my-6">
          <div className="p-4">
            <h2 className="text-2xl font-medium mb-2 pb-2 font-mono bg-slate-600 text-white text-center rounded-lg">
              For Tax Experts
            </h2>
            <p className="text-xl font-normal my-6 text-white text-center ">
              Easy Audit{" "}
            </p>
            <p className="text-xl font-normal my-6 text-white text-center ">
              Easy GSTR
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
