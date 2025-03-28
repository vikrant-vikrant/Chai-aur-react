import React from "react";

function Card({name="Unknown",intro="Hey i am User"}) {
  
  return (
    <>
      <div className="max-w-xs p-6 rounded-md shadow-md  bg-green-800 mb-6" >
        <img
          src="https://th.bing.com/th/id/OIP.SQQFm-oK6Lu_eMaiGGRI1AHaE8?rs=1&pid=ImgDetMain"
          alt=""
          className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
        />
        <div className="mt-6 mb-2">
          <span className="block text-sm font-medium font-mono tracking-widest uppercase text-indigo-400">
            Title
          </span>
          <h2 className="text-xl font-semibold tracking-wide">{name}</h2>
        </div>
        <p className="text-gray-300">
          {intro}
        </p>
      </div>
    </>
  );
}

export default Card;

// <div className="max-w-xs p-6 rounded-md shadow-md bg-green-800">
//   <img
//     src="https://th.bing.com/th/id/OIP.SQQFm-oK6Lu_eMaiGGRI1AHaE8?rs=1&pid=ImgDetMain"
//     alt=""
//     className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
//   />
//   <div className="mt-6 mb-2">
//     <span className="block text-sm font-medium font-mono tracking-widest uppercase text-indigo-400">
//       Title
//     </span>
//     <h2 className="text-xl font-semibold tracking-wide">Vikrant</h2>
//   </div>
//   <p className="text-gray-300">
//     Hey there i am a web-Devloper learning react with Tailwindcss
//   </p>
// </div>;
