import React from 'react';
import RepositoriesCard from './RepositoriesCard';

function RepositoriesList(props) {

    const { repositories } = props
    console.log(repositories);

    return (
        <div>
            {repositories.map(Repos => (
                <RepositoriesCard key={Repos.id} Repos={Repos}/>
            ))}
        </div>
    )
}

export default RepositoriesList;