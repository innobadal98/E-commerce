import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link } from "react-router-dom";
function Header() {
  return (
    <header className="flex items-center justify-between bg-white shadow-md px-6 py-3 sticky top-0 z-50">
      {/* Logo */}
      <Link to="/">
        <div className="flex items-center gap-2 cursor-pointer">
          <img
            src="https://shmector.com/_ph/13/979709898.png"
            alt="App Logo"
            className="w-14 h-14"
          />
          <h2 className="text-lg font-semibold text-blue-600">E-Cart</h2>
        </div>
      </Link>

      {/* Icons */}
      <div className="flex items-center gap-6 text-gray-700">
        <Link to="/non">
          <ShoppingCartIcon
            className="cursor-pointer hover:text-blue-600 transition-colors"
            fontSize="medium"
          />
        </Link>
        <Link to="/non">
          <NotificationsIcon
            className="cursor-pointer hover:text-blue-600 transition-colors"
            fontSize="medium"
          />
        </Link>
        <Link to="/non">
          <AccountCircleIcon
            className="cursor-pointer hover:text-blue-600 transition-colors"
            fontSize="medium"
          />
        </Link>
      </div>
    </header>
  );
}

export default Header;
