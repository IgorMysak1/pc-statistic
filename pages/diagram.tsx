import React, { useState } from "react";
import Head from "next/head";
import { HistogramChart } from "../components/HistogramChart ";
import { diagramSortBy } from "../constants";

const Diagram: React.FC = () => {
  const [currentCategory, setCurrentCategory] = useState<string>("price");
  return (
    <div className="h-full w-full flex flex-col items-center">
      <Head>
        <title>Histogram</title>
      </Head>
      <h1 className="text-4xl pb-3">Histogram</h1>
      <select
        name="categories"
        value={currentCategory}
        onChange={(e) => setCurrentCategory(e.target.value)}
        className="my-4 outline-0 bg-extraDarkBlack text-extraligthBlack capitalize p-1 cursor-pointer"
      >
        {diagramSortBy.map((category) => (
          <option key={category} value={category} className="capitalize">
            {category}
          </option>
        ))}
      </select>
      <HistogramChart currentCategory={currentCategory} />
    </div>
  );
};
export default Diagram;
