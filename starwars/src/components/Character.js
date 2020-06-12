// Write your Character component here
import React from 'react';

function Card(props) {

    return (

        <div>
            <div className='uk-card uk-card-default uk-grid-collapse uk-padding-small uk-margin-bottom'>
                <div className='uk-card-media-top uk-margin-small-bottom'>
                    <img src={props.character.image} alt='' />
                </div>
                <div className='uk-card-body uk-padding-remove'>
                    <h3 className='uk-card-title uk-text-truncate uk-margin-small-bottom'>{props.character.name}</h3>

                    {(props.character.status === 'Alive')
                        ? <div><span className='uk-text-success'>{props.character.status}</span> - {props.character.species}</div>
                        : (props.character.status === 'Dead')
                            ? <div><span className='uk-text-danger'>{props.character.status}</span> - {props.character.species}</div>
                            : <div><span className='uk-text-warning uk-text-capitalize'>{props.character.status}</span> - {props.character.species}</div>
                    }
                    <div className='uk-text-truncate'>Origin: {props.character.origin.name}</div>
                    <div className='uk-text-truncate'>Last Known Location : {props.character.location.name}</div>
                </div>

            </div>
        </div>
    );
}

export default Card;