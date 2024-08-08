import React from 'react'

const PageHeader = ({title, path}) => {
  return (
    <div className='py-24 mt-3 bg-black text-white rounded flex items-center justify-center'>
      <div>
        <h1 className='text-3xl text-white font-lg mb-1 text-center'>{title}</h1>
        <p className='text-lg text-center'><a href="/">Home</a> / {path}</p>
      </div>
    </div>
  )
}

export default PageHeader