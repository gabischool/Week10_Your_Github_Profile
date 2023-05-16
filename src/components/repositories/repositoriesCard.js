 
import React from 'react'

function  repositoriesCard(props) {

    const {repo} = props;

  return (
    <div className="flex items-center gap-3 px-2 py-3 bg-white rounded border w-full relative">
 
      <div className="leading-3 ">
  
      <p className=" ms-2  text-lg font-bold text-slate-700  ">{repo.name}</p>
        <span className='absolute top-3 right-5 text-xs text-slate-500 '> {repo.pushed_at}</span>
     
    
        <span className=" ms-5 text-xs text-sky-600">{repo.language}</span>
      </div>
    </div>
  )
}

export default repositoriesCard