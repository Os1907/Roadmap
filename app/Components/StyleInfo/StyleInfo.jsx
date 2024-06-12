'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import trueMark from '../../../public/Icon/trueMark.png';
import restore from '../../../public/Icon/reset.png';

export default function StyleInfo() {
  const [color, setColor] = useState("blue");
  const [second, setSecond] = useState("orange");

  const colors = [
    { name: "gray", class: "bg-gray-300", border: "border-gray-300" },
    { name: "blue", class: "bg-skyy", border: "border-skyy" },
    { name: "orange", class: "bg-[#FF9900]", border: "border-[#FF9900]" },
    { name: "red", class: "bg-red-600", border: "border-red-600" },
    { name: "dark", class: "bg-gray-800", border: "border-gray-800" },
  ];

  const renderColorOptions = (selectedColor, setColor) => (
    colors.map(color => (
      <div
        key={color.name}
        onClick={() => setColor(color.name)}
        className={`cursor-pointer rounded-full inline-flex p-1 ${selectedColor === color.name ? `bg-white border ${color.border}` : ''}`}
      >
        <div className={`size-6 ${color.class} rounded-full inline-flex justify-center`}>
          {selectedColor === color.name && <Image src={trueMark} alt="trueMark" />}
        </div>
      </div>
    ))
  );

  return (
    <>
      <div className="mt-5 mx-2 lg:mx-0">
        <p className="text-black text-lg lg:text-2xl font-semibold">
          Roadmap Information & Style
        </p>

        <div>
          <div className="mt-4">
            <label htmlFor="name" className="text-zinc-500 text-xs font-light">Roadmap name*</label>
            <input id="name" name="name" type="text" defaultValue="DevOps" className="text-black w-full border bg-white rounded-xl p-4 focus-within:outline-none mt-1" />
          </div>

          <div className="flex gap-x-3">
            <div className="mt-4 w-full">
              <label htmlFor="duration" className="text-zinc-500 text-xs font-light">Roadmap duration*</label>
              <select id="duration" className="text-black bg-white size-14 focus-within:outline-none w-full p-4 rounded-xl">
                <option defaultValue="5:6 Weeks" >5:6 Weeks</option>
                <option defaultValue="3:4 Weeks">3:4 Weeks</option>
                <option defaultValue="1:2 Weeks">1:2 Weeks</option>
              </select>
            </div>

            <div className="mt-4 w-full">
              <label htmlFor="icon" className="text-zinc-500 text-xs font-light">Roadmap icon</label>
              <select id="icon" className="text-black bg-white size-14 focus-within:outline-none w-full p-4 rounded-xl bg-[url('/Icon/Frame.png')] bg-no-repeat bg-center bg-position pl-10">
                <option defaultValue="Example Icon" >Example Icon</option>
              </select>
            </div>
          </div>

          <div className="mt-4">
            <label htmlFor="description" className="text-zinc-500 text-xs font-light">Roadmap description*</label>
            <textarea id="description" name="description" defaultValue="description" className="w-full border bg-white rounded-xl p-4 focus-within:outline-none mt-1 text-zinc-500 h-44" />
          </div>
        </div>

        <div className="my-2 w-full flex flex-col items-start">
          <p className="text-black text-base lg:text-xl font-semibold">
            Roadmap Style
          </p>

          <div className="my-3 flex gap-x-3 items-center ">
            <p className="text-black text-sm">Main Color:</p>
            <div className="flex items-center ml-8">
              {renderColorOptions(color, setColor)}
            </div>
          </div>

          <div className="my-3 flex gap-x-3 items-center">
            <p className="text-black text-sm">Secondary Color:</p>
            <div className="flex items-center">
              {renderColorOptions(second, setSecond)}
            </div>
          </div>
        </div>

        <div className="pt-3 border-t border-gray-300 mt-2">
          <div onClick={() => { setColor("blue"); setSecond("orange"); }} className="w-auto cursor-pointer inline-flex items-center gap-x-1">
            <Image src={restore} alt="restore" className="size-5" />
            <p className="text-skyy">Reset style defaults</p>
          </div>
        </div>
      </div>
    </>
  );
}
