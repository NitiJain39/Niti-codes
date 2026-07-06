import React from 'react'

export default function Address(props) {
    let {street, suite, city, zipcode} = props.address || {};
    return (
      <div>
        <h1>Address : {street} {suite} {city} {zipcode}</h1>
      </div>
    )
}
