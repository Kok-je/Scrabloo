import React, { useState } from 'react';
import male from '../assets/male.png'
import female from '../assets/female.png'
import myheight from '../assets/height.png'

const Height = () => {
  const [gender, setGender] = useState("male");
  const [height, setHeight] = useState("");
  const [unit, setUnit] = useState("cm");
  const [comparisonHeight, setComparisonHeight] = useState(185);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (unit === "ft") {
      setComparisonHeight(height * 30.48);
    } else {
      setComparisonHeight(height);
    }
  };

  return (
    <div name='about' className='w-full sm:h-screen py-40 sm:py-0 text-gray-300 '>
        <div className="flex flex-row justify-center items-center w-full h-full mt-7">
            <div className="div flex flex-col items-center justify-center px-20 border-2">
                <div className="flex flex-col md:flex-row items-end justify-center ">
                    <div
                    className="h-full md:w-24 relative"
                    >
                        <p className="text-center font-bold">
                            {comparisonHeight} {unit === "cm" ? "cm" : "ft"}
                        </p>
                        <img
                            src={gender === 'male' ? male : female}
                            alt={`${gender} silhouette`}
                            className="bottom-0 left-0 right-0 w-full h-auto border-2"
                            style={{ height: `${(comparisonHeight / 185) * 100}%` }}
                        />
                    </div>
                    <div 
                    className="h-full md:w-24"
                    >
                        <img
                            src={myheight}
                            alt="That's me, Shawn!"
                            className="w-full h-auto rounded-md border-2"
                        />
                    </div>
                </div>
            </div>
            <div className="div flex flex-col items-end ml-20 border-2">
                <h2 className="text-2xl font-bold mb-4">Height Comparison</h2>
                <p>Stand next to me in real life now!</p>
                <form className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mb-4 mt-10" onSubmit={handleSubmit}>
                    <div className="w-full md:w-1/3">
                    <label htmlFor="gender" className="block mb-1">Gender:</label>
                    <select
                        id="gender"
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                        className="w-full px-2 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                    </div>
                    <div className="w-full md:w-1/3">
                    <label htmlFor="height" className="block mb-1">Height:</label>
                    <input
                        id="height"
                        type="number"
                        value={height}
                        onChange={(e) => setHeight(e.target.value)}
                        className="w-full px-2 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    </div>
                    <div className="w-full md:w-1/3">
                    <label htmlFor="unit" className="block mb-1">Unit:</label>
                    <select
                        id="unit"
                        value={unit}
                        onChange={(e) => setUnit(e.target.value)}
                        className="w-full px-2 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="cm">CM</option>
                        <option value="ft">FT</option>
                    </select>
                    </div>
                    <button type="submit" className="w-full md:w-auto mt-4 md:mt-0 px-4 py-2 border-solid border-2 bg-[#ffffff] 
                    text-primary rounded-2xl hover:bg-secondary hover:text-[#ffffff] focus:ring-2 focus:ring-blue-500">
                        Compare
                    </button>
                </form>
            </div>
        </div>
    </div>
  );
}

export default Height
