'use client';

import { useEffect } from "react";

export default function error(error, reset) {
    useEffect(() => {
        console.log(error);
    }, [error]);
    return (
        <div className="text-center mt-10">
            <h1>
                Something went wrong. Please try again later.
            </h1>
            <br />
            <button className='bg-amber-500 text-white hover:bg-white hover:text-amber-500 py-2 px-2 rounded' onClick={() => reset()}>Try Again</button>
        </div>
    )
}
