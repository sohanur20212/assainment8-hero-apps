import React, { useEffect, useState } from "react";
import downloads from "../assets/icon-downloads.png";
import ratings from "../assets/icon-ratings.png";

const InstalledPage = () => {
  const [appInstall, setAppInstall] = useState([]);
  const [sortOrder, setSortOrder] = useState("none");

  useEffect(() => {
    const saveList = JSON.parse(localStorage.getItem("installList")) || [];
    setAppInstall(saveList);
  }, []);

  // remove app
  const handleRemove = (id) => {
    const updatedList = appInstall.filter((a) => a.id !== id);
    setAppInstall(updatedList);
    localStorage.setItem("installList", JSON.stringify(updatedList));
  };

  // sort apps by size
  const handleSortChange = (e) => {
    const value = e.target.value;
    setSortOrder(value);

    let sorted = [...appInstall];
    if (value === "price-asc") {
      sorted.sort((a, b) => a.size - b.size);
    } else if (value === "price-desc") {
      sorted.sort((a, b) => b.size - a.size);
    }
    setAppInstall(sorted);
  };

  return (
    <div className="p-5">
      <div className="flex justify-between items-center mb-5">
        <h1 className="text-xl font-semibold">
          ({appInstall.length}) Apps Found
        </h1>
        <label className="form-control w-full max-w-xs">
          <select
            value={sortOrder}
            onChange={handleSortChange}
            className="select select-bordered"
          >
            <option value="none">Sort by Size</option>
            <option value="price-asc">Low to High</option>
            <option value="price-desc">High to Low</option>
          </select>
        </label>
      </div>

      {appInstall.length === 0 ? (
        <p className="text-center text-gray-500">No apps installed yet 😢</p>
      ) : (
        <div className="flex flex-col gap-5">
          {appInstall.map((app) => (
            <div
              key={app.id}
              className="flex justify-between items-center bg-gray-100 p-4 rounded-md shadow-sm"
            >
              <div className="flex items-center gap-4">
                <img
                  src={app.image}
                  alt={app.title}
                  className="w-20 h-20 rounded-md object-cover"
                />
                <div>
                  <h2 className="text-lg font-semibold">{app.title}</h2>
                  <p className="text-sm text-gray-500">
                    {app.companyName} 
                  </p>
                  <div className="flex items-center gap-4 mt-2">
                    <span className="flex items-center gap-1 text-[#00D390]">
                      <img src={downloads} alt="" className="h-4 w-4" />{" "}
                      {app.downloads}
                    </span>
                    <span className="flex items-center gap-1 text-yellow-500">
                      <img src={ratings} alt="" className="h-4 w-4" />{" "}
                      {app.ratingAvg}
                    </span>
                    <span className="flex items-center gap-1 text-[#777]">
                      {app.size} MB
                    </span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => handleRemove(app.id)}
                className="bg-[#00D390] text-white px-3 py-1 rounded-md"
              >
                Uninstall
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default InstalledPage;
