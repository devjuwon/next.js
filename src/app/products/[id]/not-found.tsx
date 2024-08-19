import Link from 'next/link';
import React from 'react'

const notFound = () => {
  return (
    <div>
      <h1>sorry you are lost</h1><Link href={"/"}>Get lost</Link>
    </div>
  )
}

export default notFound;
