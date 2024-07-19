import React from "react";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-600">
      <div className="text-center p-10 max-w-md mx-auto bg-white rounded-xl shadow-lg space-y-6">
        <h1 className="text-5xl font-extrabold text-gray-800">We Are Under Maintenance</h1>
        <p className="text-lg text-gray-600">
          Our website is currently undergoing scheduled maintenance. We should be back shortly. Thank you for your patience.
        </p>
        <div className="flex justify-center">
          <svg className="w-32 h-32 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m0-4h.01M12 9v2m0 4v4m0 0H8m4 0h4m4-4v4h-1v-4h-1v-4h1m-1-4v4h1M5 8h14M5 8V5a2 2 0 012-2h10a2 2 0 012 2v3M5 8v11a2 2 0 002 2h10a2 2 0 002-2V8m0 0h-4m-4 0h-4"></path>
          </svg>
        </div>
        <button className="px-6 py-2 bg-indigo-500 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700">
          Refresh Page
        </button>
      </div>
    </main>
  );
}
