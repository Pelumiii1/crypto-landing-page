import Image from "next/image";
import React from "react";
import logo from "../../public/logo.png";

const Navbar = () => {
  return (
    <div
      className="fixed h-[var(--navbar-height)] flex justify-between items-center w-screen px-5 bg-black"
      style={{
        borderBottom: "0.5px solid rgba(255, 255, 255, 0.2)",
      }}
    >
      <Image src={logo} alt="" className="w-[64px] h-auto" />
      <div>{/* <CiMenuBurger color="white" size="1.5rem" /> */}</div>
    </div>
  );
};

export default Navbar;
