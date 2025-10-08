import React from "react";
import { useParams, Link } from "react-router";
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

const AppDetails = () => {
  const { id } = useParams();
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


//   set localStorage 

const handleAddtoInstallList = () =>{
    const existingList = JSON.parse(localStorage.getItem('installList'))
    const isDuplicate = existingList.some((a) => a.id === app.id);

    
   
        if(isDuplicate) {
            alert ('already added')
            return
        }
    const updatedList = [...existingList, app];
localStorage.setItem('installList',JSON.stringify(updatedList))
alert(`${app.title} installed successfully!`);
}
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
            <Link to='/install' onClick={handleAddtoInstallList} className="bg-[#00D390] text-white px-3 py-2 rounded-md font-semibold">Install Now <span>({app.size} MB)</span></Link>
        </div>
        
        
      </div>
      </div>
      <div className="border border-gray-400">

      </div>
      {/* Chart Section */}
        <div className="mt-10  p-5 rounded-lg">
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
        {/* description  */}
        <div className="px-5 md:px-0">
            <h1 className="text-xl font-bold my-4">Description:</h1>
            <p className="text-[#777] wrap-break-word ">This focus app takes the proven Pomodoro technique and makes it even more practical for modern lifestyles. Instead of just setting a timer, it builds a complete environment for deep work, minimizing distractions and maximizing concentration. Users can create custom work and break intervals, track how many sessions they complete each day, and review detailed statistics about their focus habits over time. The design is minimal and calming, reducing cognitive load so you can focus entirely on the task at hand. Notifications gently let you know when to pause and when to resume, helping you maintain a healthy rhythm between work and rest.

A unique feature of this app is the integration of task lists with timers. You can assign each task to a specific Pomodoro session, making your schedule more structured. The built-in analytics show not only how much time you’ve worked but also which tasks consumed the most energy. This allows you to reflect on your efficiency and adjust your workflow accordingly. The app also includes optional background sounds such as white noise, nature sounds, or instrumental music to create a distraction-free atmosphere.

For people who struggle with procrastination, the app provides motivational streaks and achievements. Completing multiple Pomodoro sessions unlocks milestones, giving a sense of accomplishment. This gamified approach makes focusing more engaging and less like a chore. Whether you’re studying for exams, coding, writing, or handling office work, the app adapts to your routine. By combining focus tracking, task management, and motivational tools, this Pomodoro app ensures that you not only work harder but also smarter. It is a personal trainer for your brain, keeping you disciplined, refreshed, and productive throughout the day.</p>
        </div>
    </div>
  );
};

export default AppDetails;
