"use client";
import React from "react";
import MinistryComponent from "../components/ministry-component";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check, ChevronRight, ArrowRight } from "lucide-react";

export default function MinistryPage() {
  React.useEffect(() => {
    document.title = "Ministry | Zomba Baptist Church";
  });
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">
          Our Ministries
        </h1>
        <div className="w-20 h-1.5 bg-primary rounded-full mx-auto mb-5"/>

        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Connect, serve, and grow through the ministries of ZBC.
        </p>
      </div>
      <div className="flex flex-row justify-center">
        {/* <Link to={"/articles"} asChild>
          <Button>
            Our Articles <ChevronRight />
          </Button>
        </Link> */}
      </div>

      <MinistryComponent />
    </div>
  );
}
