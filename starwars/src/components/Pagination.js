import React from 'react';

function Pagination(props) {
    return (
        <section className='uk-section uk-section-small uk-tile-default uk-text-center'>
            {(props.prevPage != null)
                ? <button type='button' className='uk-button uk-button-secondary' onClick=''>Prev</button>
                : <button type='button' className='uk-button uk-button-secondary' disabled>Prev</button>
            }
            {(props.nextPage != null)
                ? <button type='button' className='uk-button uk-button-secondary' onClick=''>Next</button>
                : <button type='button' className='uk-button uk-button-secondary' disabled>Next</button>
            }
        </section>
    );
}

export default Pagination;