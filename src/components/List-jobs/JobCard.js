import React from "react";
import { useNavigate } from "react-router-dom";
import "./JobCard.css";

export default function JobCard({
  job: {
    company,
    logo,
    isNew,
    featured,
    position,
    role,
    level,
    postedAt,
    contract,
    location,
    languages,
    tools,
  },
  handleTagClick,
}) {
  const tags = [role, level];
  if (languages) {
    tags.push(...languages);
  }
  if (tools) {
    tags.push(...tools);
  }
  // const Navigate = useNavigate();
  // const handleClick = () => Navigate("/");

  return (
    <div
      className={` flex bg-white shadow-xl my-16 mx-10 p-3  lg:flex-row`}
      // onClick={handleClick}
      style={{
        boxShadow: " 0 0 28px 4px rgba(0, 0, 0, 0.1)",
        transition: " transform 0.3s ease",
        cursor: " pointer",
      }}
    >
      <div>
        <img className="-mt-16 w-20 h-20 mb-10" src={logo} alt={company} />
      </div>
      <div className="ml-2">
        <h3 className="font-bold text-base text-blue-600">
          {company}
          {isNew && (
            <span className="rounded-full text text-white	bg-blue-700 font-bold m-2 p-1 ">
              New
            </span>
          )}
          {featured && (
            <span className="rounded-full text text-white	bg-gray-700 font-bold m-2 p-1 px-2">
              featured
            </span>
          )}
        </h3>
        <h2 className="font-bold text-xl ">{position}</h2>
        <p className="text-gray-00	">
          {postedAt} . {contract} . {location}
        </p>
      </div>
      <div className="flex items-center justify-end ml-auto">
        {tags
          ? tags.map((tag) => (
              <span
                className="cursor-pointer text-white	bg-blue-400 font-bold m-2 p-2 rounded"
                onClick={() => handleTagClick(tag)}
              >
                {tag}
              </span>
            ))
          : ""}
      </div>
    </div>
  );
}
