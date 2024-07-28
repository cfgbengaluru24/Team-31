import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from "../public/Rohini-Logo.png";

export default function Header() {
  const [showNotification, setShowNotification] = useState(false);

  const toggleNotification = () => {
    setShowNotification(!showNotification);
  };

  const openNotification = () => {
    notification.open({
      message: 'Notification Title',
      description:
        'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
      onClick: () => {
        console.log('Notification Clicked!');
      },
    });
  };

  return (
    <>
      {/* Main Header */}
      <header className="bg-blue-950 p-4 text-white">
        <div className="container mx-auto flex justify-between items-center px-8">
          <Image src={Logo} alt="Logo" style={{ height: '60px', marginRight: '16px', marginTop: '25px' }} />

          <div className="text-2xl font-medium font-serif px-6">
          </div>

          {/* Navigation Links */}
          <div className="flex items-center space-x-6 relative">
            <button className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
            <button className="btn btn-ghost btn-circle" onClick={toggleNotification}>
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
                <span className="badge badge-xs badge-primary indicator-item"></span>
              </div>
            </button>
            {showNotification && (
              <div className="absolute right-0 mt-12 w-64 bg-white shadow-lg rounded-lg p-4 z-10">
                <h3 className="text-lg font-semibold mb-2 text-black">Notification</h3>
                <p className="text-gray-700">
                  Your next follow-up with the families of Pochampally is in 90 days.
                </p>
                <button
                  className="text-blue-500 mt-4"
                  onClick={() => setShowNotification(false)}
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Secondary Header */}
      <div className="bg-gray-300 p-2 text-gray-700 text-xl">
        <div className="container mx-auto flex justify-center">
          <nav className="flex space-x-8">
            <Link href="/" className="relative group">
              <span className="px-4 py-2 rounded-md transition-transform transform hover:scale-105 hover:shadow-lg">
                Home
              </span>
            </Link>

            <Link href="/volunteers" className="relative group">
              <span className="px-4 py-2 rounded-md transition-transform transform hover:scale-105 hover:shadow-lg">
                Volunteers
              </span>
            </Link>

            <Link href="/contact" className="relative group">
              <span className="px-4 py-2 rounded-md transition-transform transform hover:scale-105 hover:shadow-lg">
                Contact Us
              </span>
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
}
