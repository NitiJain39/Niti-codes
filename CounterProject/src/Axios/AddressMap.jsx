import React from 'react'

export default function AddressMap({geo}) {
    let {lat,lng} = geo || {};
  return (
    <div>
      <iframe
        src={`https://www.google.com/maps/embed/v1/view?key=AIzaSyD-9
        1cT5k2ZrZQe6H3zc9V6z5aV6k6U&center=${lat},${lng}&zoom=10`}
        frameBorder="0"
        style={{ border: 0, width: "100%", height: "300px" }}
        allowFullScreen
      ></iframe>
    </div>
  )
}
