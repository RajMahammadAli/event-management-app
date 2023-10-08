import React from "react";

const ClassSchedule = () => {
  // Sample class schedule data (you can replace this with your actual data)
  const classSchedule = [
    {
      id: 1,
      date: "October 10, 2023",
      time: "10:00 AM - 11:30 AM",
      title: "Yoga Session",
    },
    {
      id: 2,
      date: "October 12, 2023",
      time: "9:30 AM - 10:45 AM",
      title: "Pilates Class",
    },
    {
      id: 3,
      date: "October 15, 2023",
      time: "5:00 PM - 6:30 PM",
      title: "Meditation Workshop",
    },
  ];

  // Sample winner of the month (you can replace this with your actual data)
  const winnerOfTheMonth = {
    name: "John Doe",
    prize: "1-month free membership",
  };

  return (
    <div className="p-8">
      <div className="bg-blue-100 rounded-lg p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Class Schedule Notices</h2>
        <ul>
          {classSchedule.map((scheduleItem) => (
            <li key={scheduleItem.id} className="mb-2">
              <div className="text-gray-700">{scheduleItem.date}</div>
              <div className="text-blue-600">{scheduleItem.time}</div>
              <div className="font-semibold">{scheduleItem.title}</div>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-green-100 rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Winner of the Month</h2>
        <div className="text-lg text-green-600">{winnerOfTheMonth.name}</div>
        <div className="text-gray-700">Prize: {winnerOfTheMonth.prize}</div>
      </div>
    </div>
  );
};

export default ClassSchedule;
