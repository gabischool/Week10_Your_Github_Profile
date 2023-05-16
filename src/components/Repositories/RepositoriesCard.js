import React from 'react';
import Folder from './Folder.png';

function RepositoriesCard(props) {
    
    const { Repos } = props;
    // console.log(Repos);

    return (
     <div className="flex items-center gap-3 px-2 py-3 bg-white rounded border w-full ">
        <div className="h-[60px] shadow-md w-[60px] rounded-full border-4 overflow-hidden border-white">
        <img
          src={Folder} alt='Icon'
          className="w-full h-full rounded-full object-center object-cover shadow-3"
        />
      </div>
          <div className="leading-3">
            <p className=" text-sm font-bold text-slate-700">{Repos.name}</p>
            <span className="text-xs text-slate-600">Most language: {Repos.language}</span>
          </div>
      </div>
    )
}

export default RepositoriesCard;