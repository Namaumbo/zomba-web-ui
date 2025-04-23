import React from "react";
import MinistryComponent from "../components/ministry";
import { ministries } from "../lib/ministries";

const MinistryPage = () => {
  return (
    <div>
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Our Ministries</h1>
        <p className="text-lg text-slate-600">
          Discover the various ways you can connect, serve, and grow within our
          church community.
        </p>
      </div>
      {ministries.map((ministry) => {
        return (
          <>
            <MinistryComponent ministries={ministry} />
          </>
        );
      })}
    </div>
  );
};

export default MinistryPage;
