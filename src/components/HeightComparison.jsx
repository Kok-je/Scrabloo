import React, { useState } from 'react';
import male from '../assets/male.png'
import female from '../assets/female.png'
import myheight from '../assets/height.png'


const HeightComparison = () => {
    const [height, setHeight] = useState('');
  const [gender, setGender] = useState('female');
  const [silhouetteHeight, setSilhouetteHeight] = useState(160);

  function handleHeightChange(event) {
    const newHeight = parseInt(event.target.value);
    setHeight(newHeight);
    setSilhouetteHeight(newHeight);
  }

  function handleGenderChange(event) {
    setGender(event.target.value);
  }

  return (
    <div className="max-w-1100 mx-auto flex flex-col items-end justify-start md:flex-row">
        <div className="flex-1 md:ml-8">
            <img src={gender === 'female' ? female : male} alt="Silhouette" className="max-w-full object-contain" style={{ height: silhouetteHeight }} />
        </div>
      <div className="flex-1 md:mr-8">
        <img src={myheight} alt="My Image" className="max-w-full object-contain" style={{ height: 185 }} />
      </div>
      <div className="flex-1 md:ml-8">
        <h2 className="text-2xl mb-4">Height Comparison</h2>
        <div className="flex mb-4">
          <div className="w-1/2 mr-2">
            <label htmlFor="height">Height (cm)</label>
            <input type="number" id="height" name="height" value={height} onChange={handleHeightChange} className="w-full p-2 border border-gray-400" placeholder="Enter height..." />
          </div>
          <div className="w-1/2 ml-2">
            <label htmlFor="gender">Gender</label>
            <select id="gender" name="gender" value={gender} onChange={handleGenderChange} className="w-full p-2 border border-gray-400">
              <option value="female">Female</option>
              <option value="male">Male</option>
            </select>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default HeightComparison
