import { useState } from "react";
import FurniroLogo from "../assets/fruniroLogo.png";
import Cart from "../assets/icons/cart.png";
import Heart from "../assets/icons/heart.png";
import Profile from "../assets/icons/profile.png";
import Search from "../assets/icons/search.png";
import { IoMenuOutline } from "react-icons/io5";

function Navbar() {
  const [navToggle, setNavToggle] = useState(false);
  const handleNavToggle = () => {
    setNavToggle(!navToggle);
  };
  const navLinks = [
    {
      title: "Home",
      href: "#",
    },
    {
      title: "Shop",
      href: "#",
    },
    {
      title: "About",
      href: "#",
    },
    {
      title: "Contact",
      href: "#",
    },
  ];
  const navLinksIcons = [
    {
      title: "Profile",
      href: "#",
      icon: Profile,
    },
    {
      title: "Search",
      href: "#",
      icon: Search,
    },
    {
      title: "Wishlist",
      href: "#",
      icon: Heart,
    },
    {
      title: "Cart",
      href: "#",
      icon: Cart,
    },
  ];
  return (
    <>
      <nav className="flex justify-between items-center py-5 px-8 relative">
        {/* logo */}
        <div className="w-1/4">
          <img className="min-w-32" src={FurniroLogo} alt="FurniroLogo" />
        </div>
        {/* menu icon */}
        <div>
          <IoMenuOutline
            className="text-3xl lg:hidden block cursor-pointer"
            onClick={handleNavToggle}
          />
        </div>
        {/* Large Screen Devices Menu */}
        <div className=" w-3/4 py-1 justify-between hidden lg:flex">
          <ul className="flex gap-14 items-center pt-2 xl:ms-20 lg:ms-12">
            {navLinks.map((link, index) => {
              return (
                <li key={index}>
                  <a className="font-poppins poppins-medium" href={link.href}>
                    {link.title}
                  </a>
                </li>
              );
            })}
          </ul>
          <ul className="flex gap-10 items-center">
            {navLinksIcons.map((link, index) => {
              return (
                <li key={index}>
                  <a className="" title={link.title} href={link.href}>
                    <img src={link.icon} alt={link.title} />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        {/* Mobile Screen Devices Menu */}
        {navToggle && (
          <div className="duration-1000 transition-all ease-in-out w-full py-1 flex flex-col lg:hidden absolute left-0 top-16">
            <ul className="flex gap-4 items-center flex-col pt-2">
              {navLinks.map((link, index) => {
                return (
                  <li key={index} className="w-full text-center">
                    <a
                      className="font-poppins block poppins-medium"
                      href={link.href}
                    >
                      {link.title}
                    </a>
                  </li>
                );
              })}
            </ul>
            <ul className="flex gap-14 justify-center items-center py-8">
              {navLinksIcons.map((link, index) => {
                return (
                  <li key={index}>
                    <a className="" title={link.title} href={link.href}>
                      <img src={link.icon} alt={link.title} />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;
