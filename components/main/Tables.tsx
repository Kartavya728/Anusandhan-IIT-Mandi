"use client";
import React from "react";
import { BsCalendarEvent } from "react-icons/bs";

const EventDatesTable = () => {
  // Event dates data
  const eventDates = [
    {
      id: 1,
      event: "Last Date of Abstract/ Full-Length Paper Submission",
      date: "08th June 2024",
      previousDate: null,
    },
    {
      id: 2,
      event: "Last Date of Registration",
      date: "10th June 2024",
      previousDate: null,
    },
    {
      id: 3,
      event: "Last date of full-length camera-ready paper submission",
      date: "15th June 2024",
      previousDate: null,
    },
    {
      id: 4,
      event: "Date of Events",
      date: "18th - 19th June 2024",
      previousDate: null,
    },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-2">
          Important Event Dates
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-indigo-800 mx-auto"></div>
      </div>

      <div className="relative overflow-hidden">
        {/* Decorative corner accents */}
        <div className="absolute top-0 left-0 w-10 h-10 border-t-2 border-l-2 border-purple-600"></div>
        <div className="absolute top-0 right-0 w-10 h-10 border-t-2 border-r-2 border-purple-600"></div>
        <div className="absolute bottom-0 left-0 w-10 h-10 border-b-2 border-l-2 border-purple-600"></div>
        <div className="absolute bottom-0 right-0 w-10 h-10 border-b-2 border-r-2 border-purple-600"></div>

        {/* Main table container */}
        <div className="bg-white shadow-xl rounded-lg overflow-hidden border border-gray-200 m-4">
          <div className="flex items-center justify-center bg-gradient-to-r from-purple-700 to-indigo-800 py-4 px-6">
            <BsCalendarEvent className="text-white mr-2 text-xl" />
            <h3 className="text-lg font-medium text-white">Important Dates</h3>
          </div>
          
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Event
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {eventDates.map((item, index) => (
                  <tr 
                    key={item.id} 
                    className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                  >
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {item.event}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                      <div className="flex flex-col">
                        <span className="font-medium">{item.date}</span>
                        {item.previousDate && (
                          <span className="text-xs text-gray-500 line-through mt-1">
                            Previously: {item.previousDate}
                          </span>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Call to action */}
      <div className="mt-8 text-center">
        <p className="text-gray-600 mb-4">
          Please ensure to adhere to these important dates for a smooth participation process.
        </p>
        <a 
          href="#registration" 
          className="inline-flex items-center px-5 py-2 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-purple-600 to-indigo-800 hover:from-purple-700 hover:to-indigo-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 shadow-md transition-all duration-300"
        >
          Register Now
        </a>
      </div>
    </div>
  );
};

export default EventDatesTable;