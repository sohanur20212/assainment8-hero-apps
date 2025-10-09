import React from "react";
import { useParams, Link, useNavigate } from "react-router";
import useApps from "../Hooks/useApps";
import downloads from "../assets/icon-downloads.png";
import ratings from "../assets/icon-ratings.png";
import review from "../assets/icon-review.png";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { toast } from "react-toastify";

const AppDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { apps, loading } = useApps();

  if (loading) return <p>Loading...</p>;

  const app = apps.find((a) => String(a.id) === id);

  if (!app) {
    return (
      <div className="text-center mt-10 space-y-4">
        <h2 className="text-2xl font-semibold text-red-500">
          App not found 😢
        </h2>
        <Link to="/" className="text-blue-600 underline">
          Go Back
        </Link>
      </div>
    );
  }

  // Add to install list
  const handleAddtoInstallList = () => {
    const existingList = JSON.parse(localStorage.getItem("installList")) || [];
    const isDuplicate = existingList.some((a) => a.id === app.id);

    if (isDuplicate) {
      toast.error("Already installed!");
      return;
    }

    const updatedList = [...existingList, app];
    localStorage.setItem("installList", JSON.stringify(updatedList));
    toast.success(`${app.title} installed successfully!`);
    navigate("/install"); // redirect after install
  };

  return (
    <div className="">
      <div className="flex flex-col lg:flex-row gap-10 p-10">
        {/* Left Side */}
        <div>
          <img src={app.image} alt={app.title} className="w-64 rounded-xl" />
        </div>

        {/* Right Side */}
        <div className="flex-1 ">
          <h1 className="text-2xl font-bold mb-2">
            {app.title}: <span className="font-normal">{app.description}</span>
          </h1>
          <p className="text-[18px] mb-3">
            <span className="text-[#777]">Developed by </span>
            <span className="text-[#9F62F2] font-semibold">
              {app.companyName}
            </span>
          </p>

          <div className="flex gap-16 my-5">
            <div className="text-center">
              <img className="w-[40px] h-[40px] mx-auto" src={downloads} />
              <p>Downloads</p>
              <h1 className="text-2xl font-bold">{app.downloads}</h1>
            </div>
            <div className="text-center">
              <img className="w-[40px] h-[40px] mx-auto" src={ratings} />
              <p>Ratings</p>
              <h1 className="text-2xl font-bold">{app.ratingAvg}</h1>
            </div>
            <div className="text-center">
              <img className="w-[40px] h-[40px] mx-auto" src={review} />
              <p>Reviews</p>
              <h1 className="text-2xl font-bold">{app.reviews}</h1>
            </div>
          </div>

          <div>
            <button
              onClick={handleAddtoInstallList}
              className="bg-[#00D390] text-white px-3 py-2 rounded-md font-semibold"
            >
              Install Now <span>({app.size} MB)</span>
            </button>
          </div>
        </div>
      </div>

      <div className="border border-gray-400"></div>

      {/* Chart Section */}
      <div className="mt-10 p-5 rounded-lg">
        <h2 className="text-xl font-bold mb-3">Ratings</h2>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart
            data={[...app.ratings].reverse()}
            layout="vertical"
            margin={{ top: 10, right: 30, left: 20, bottom: 10 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" />
            <YAxis dataKey="name" type="category" />
            <Tooltip />
            <Bar dataKey="count" fill="#ff8800" barSize={25} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Description */}
      <div className="px-5 md:px-0">
        <h1 className="text-xl font-bold my-4">Description:</h1>
        <p className="text-[#777] wrap-break-word">
          {app.longDescription ||
            "This app provides detailed analytics, focus tracking, and productivity tools for users who want to maximize their workflow."}
        </p>
      </div>
    </div>
  );
};

export default AppDetails;
