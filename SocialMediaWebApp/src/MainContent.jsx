import React from 'react';

import HeaderMenus from './HeaderMenus.jsx'
import ProfileContent from './ProfileContent.jsx';
import Post from './Post.jsx';
export default function MainContent() {
  
  return (
    <>
    <header><HeaderMenus/><br /></header>
      <section >
    <div><ProfileContent></ProfileContent></div>
      <div><Post></Post></div>
      </section>
    </>
  );
}