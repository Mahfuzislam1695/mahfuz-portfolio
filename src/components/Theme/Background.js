import React from 'react';

const Background = ( { children } ) =>
{
    return (
       
        <div className="bg-white dark:bg-slate-900 transition delay-150 ease-in duration-500">
            {children}
        </div>
    )
}

export default Background;