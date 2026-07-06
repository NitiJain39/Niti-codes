import React from 'react'

export default function UserPersonalDetails({ name, email }) {
  return (
    <div>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
    </div>
  );
}
