/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';

const youtubeFrameStyle = {
  maxWidth: '100%',
  overflow: 'hidden',
  position: 'relative',
  paddingBottom: '56.25%'
};

const iframeStyle = {
  position: 'absolute',
  top: '0',
  left: '0',
  width: '100%',
  height: '100%',
};



export default function YoutubeFrameComp({youtubeProps}) {

  if (youtubeProps) {
    return (
      <div className='youtubeFrame p-5 text-center' id='youtubeFrame'>
        <div style={youtubeFrameStyle}>
          <iframe
            style={iframeStyle}
            src={youtubeProps}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    );
  } else {
    // Tidak ada link video yang tersedia
    return null; // Atau tampilkan pesan kesalahan atau komponen lain jika diperlukan
  }
}
