import React from 'react'

const Navbar = () => {
  return (
    <div className="bg-[#321058] h-20 flex items-center justify-between text-[#B2B2B2] p-3">
    <img
      src="https://opentools.ai/build/assets/opentools-logo-3bf81de6.svg"
      className="logo h-7"
      alt="Logo"
    />
    {["Favourites", "News", "Advertise"].map((items, index) => (
      <div className="flex justify-between items-center font-semibold text-2xl">{items}</div>
    ))}
    <div className="bg-[#B2B2B2] flex gap-2 px-3 py-2 rounded-full ">
    <button className="text-[#620571] font-semibold">LogIn</button>
    <div className="bg-[#481775] px-3 py-1 rounded-full ">Singup</div>
    </div>
  </div>
  )
}

export default Navbar;