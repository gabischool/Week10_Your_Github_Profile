
import React from 'react';
import RepositoriesCard from './repositoriesCard';

function  repositoriesList(props) {

    const {repositories} = props;
    
// console.log(props);

  return (
    <div>
        {repositories && repositories.map((repo) => (
            <RepositoriesCard key={repo.id} repo={repo} />
        ))}
    </div>
  )
}

export default  repositoriesList