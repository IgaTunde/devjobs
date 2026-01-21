import React from 'react'

const Button = ({title}: {title: string}) => {
  return (
    <div className=" justify-self-center ">
      <button className="text-sm text-white font-bold bg-indigo-500 rounded-md py-3 px-8 hover:bg-indigo-300 ">
        {title}
      </button>
    </div>
  );
}

export default Button