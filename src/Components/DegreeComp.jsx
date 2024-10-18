/* eslint-disable no-unused-vars */
import React from 'react'
import { useState } from 'react';
import { raptor3601, raptor3602, raptor3603, raptor3604, raptor3605, raptor3606, raptor3607, raptor3608, raptor3609, raptor3610, raptor3611, raptor3612, raptor3613, raptor3614, raptor3615, raptor3616, raptor3617, raptor3618, raptor3619, raptor3620, raptor3621, raptor3622, raptor3623, raptor3624, raptor3625, raptor3626, raptor3627, raptor3628, raptor3629, raptor3630, raptor3631, raptor3632, raptor3633, raptor3634, raptor3635, raptor3636, raptor3637, raptor3638, raptor3639, raptor3640, raptor3641, raptor3642, raptor3643, raptor3644, raptor3645, raptor3646, raptor3647, raptor3648, raptor3649, raptor3650,} from '../assets/images/importImage';

export default function DegreeComp() {
  
  const [rangeValue, setRangeValue] = useState(1);

    // Fungsi yang dipanggil saat input range digeser
    const handleRangeChange = (event) => {
      const newValue = parseInt(event.target.value);
      setRangeValue(newValue);
    };
    const imageList = {
      1: raptor3601,
      2: raptor3602,
      3: raptor3603,
      4: raptor3604,
      5: raptor3605,
      6: raptor3606,
      7: raptor3607,
      8: raptor3608,
      9: raptor3609,
      10: raptor3610,
      11: raptor3611,
      12: raptor3612,
      13: raptor3613,
      14: raptor3614,
      15: raptor3615,
      16: raptor3616,
      17: raptor3617,
      18: raptor3618,
      19: raptor3619,
      20: raptor3620,
      21: raptor3621,
      22: raptor3622,
      23: raptor3623,
      24: raptor3624,
      25: raptor3625,
      26: raptor3626,
      27: raptor3627,
      28: raptor3628,
      29: raptor3629,
      30: raptor3630,
      31: raptor3631,
      32: raptor3632,
      33: raptor3633,
      34: raptor3634,
      35: raptor3635,
      36: raptor3636,
      37: raptor3637,
      38: raptor3638,
      39: raptor3639,
      40: raptor3640,
      41: raptor3641,
      42: raptor3642,
      43: raptor3643,
      44: raptor3644,
      45: raptor3645,
      46: raptor3646,
      47: raptor3647,
      48: raptor3648,
      49: raptor3649,
      50: raptor3650,
      
    };
  return (
    <>
    <div className="container">
      <input
        type="range"
        value={rangeValue}
        min="1"
        max="50"
        id="range"
        onChange={handleRangeChange} // Mengaitkan fungsi handleRangeChange dengan input range
        style={{
          position: 'absolute',
          width: '100%',
          top: 10,
          height: '100%',
          cursor: 'grabbing',
          zIndex: 2,
          opacity: 0,
        }}
      />
      <div id="main">
        <img src={imageList[rangeValue]} alt="" style={{ width: '100%' }} />
      </div>
    </div>
    
    
    </>
  )
}
