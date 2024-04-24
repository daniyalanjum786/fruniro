import FurniroLogo from "../assets/fruniroLogo.png";
import Cart from "../assets/icons/cart.png";
import Heart from "../assets/icons/heart.png";
import Profile from "../assets/icons/profile.png";
import Search from "../assets/icons/search.png";

function Navbar() {
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
      <nav className="flex justify-between items-center py-5 px-8">
        <div>
          <img src={FurniroLogo} alt="FurniroLogo" />
        </div>
        <ul className="flex gap-14 items-center pt-2">
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
      </nav>
    </>
  );
}

export default Navbar;
