import React, { useState } from 'react'

const Search = ({ser}) => {
    const [input,setInput] = useState('');

    const onsubmit=(e)=>{
        e.preventDefault();
        ser(input);
    }
    return (
      <div className="max-w-sm rounded overflow-hidden my-10 mx-auto">
        <form className="w-full max-w-sm" onSubmit={onsubmit}>
          <div className="flex items-center border-b border-b-2 border-teal-500 py-2">
            <input
              onChange={(e) => setInput(e.target.value)}
              className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
              type="text"
              placeholder="Search Image Term..."
            />
            <button
              className="flex-shrink-0 border-2 border-blue-500 rounded-full font-bold text-blue-500 px-4
              py-2 transition duration-300 ease-in-out hover:bg-blue-500
              hover:text-white mr-6"
              type="submit"
            >
              Search
            </button>
          </div>
        </form>
      </div>
    );
}

export default Search
