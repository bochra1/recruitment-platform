import React, { useEffect, useState } from "react";
import Data from "../List-jobs/Data.json";
import SideBar from "../Recruteur/SideBar/SideBar";
import JobCard from "./JobCard";
import "./JobCard.css";
export default function Jobs() {
  const [jobs, setJobs] = useState([]);
  const [filters, setFilters] = useState([]);

  useEffect(() => setJobs(Data), []);

  const filterFunc = ({ role, level, tools, languages }) => {
    if (filters.length === 0) {
      return true;
    }

    const tags = [role, level];
    if (languages) {
      tags.push(...languages);
    }
    if (tools) {
      tags.push(...tools);
    }

    return filters.every((f) => tags.includes(f));
  };

  const handleTagClick = (tag) => {
    if (filters.includes(tag)) return;
    setFilters([...filters, tag]);
  };

  const handleFilterClick = (passedFilter) => {
    setFilters(filters.filter((f) => f !== passedFilter));
  };
  const filterdJobs = jobs.filter(filterFunc);
  return (
    <div
      style={{ paddingBottom: "0.5%" }}
      class="bg-blue-100  bg-opacity-30 mb-12"
    >
      <header class="bg-blue-100 bg-opacity-30 ">
        <img src="/images/bg-header.svg"></img>
      </header>
      <div>
        {filters.length > 0 && (
          <div className={`bg-white shadow-md my-16 mx-10 p-8 flex flex-wrap`}>
            {filters.map((filter) => (
              <span className="m-3">
                <span
                  onClick={() => handleFilterClick(filter)}
                  className={`text-white bg-blue-500 font-bold p-2 rounded rounded-r-none`}
                >
                  {filter}
                </span>
                <span
                  className={`text-blue-900 bg-blue-300 font-bold cursor-pointer rounded-l-none p-2 rounded`}
                  onClick={() => handleFilterClick(filter)}
                >
                  ×
                </span>
              </span>
            ))}
          </div>
        )}
        {jobs.length === 0 ? (
          <p>Jobs are fetching...</p>
        ) : (
          filterdJobs.map((job) => (
            <JobCard job={job} key={job.id} handleTagClick={handleTagClick} />
          ))
        )}
      </div>
    </div>
  );
}
