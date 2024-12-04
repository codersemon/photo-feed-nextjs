import Logo from "./Logo";
import Nav from "./Nav";

const Header = () => {
  return (
    <nav className="py-4 md:py-6 border-b">
      <div className="container mx-auto flex items-center justify-between gap-x-6">
        {/* Logo */}
        <Logo />
        {/* Logo Ends */}
        {/* <Nav /> */}
      </div>
    </nav>
  );
};

export default Header;
