import React from "react";

export const Header = ({heading1, author}) => {
  return(
    <header>
      <div className='header-wrapper'>
        <h1>{heading1}</h1>
        <h2>{author}</h2>
      </div>
    </header>
  )
}