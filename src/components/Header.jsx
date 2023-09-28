import { NavLink } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const handleMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };
  return (
    <header className="sticky top-0 bg-primary p-4 flex justify-between">
      <NavLink
        to={"/"}
        className="font-semibold text-xl md:text-2xl lg:text-3xl"
      >
        FitHub
      </NavLink>
      <div className="">
        <div className="md:hidden">
          {isOpenMenu ? (
            <XMarkIcon
              className="block h-6 w-6 max-md:ml-auto"
              aria-hidden="true"
              onClick={handleMenu}
            />
          ) : (
            <Bars3Icon
              className="block h-6 w-6 max-md:ml-auto"
              aria-hidden="true"
              onClick={handleMenu}
            />
          )}
        </div>
        <nav
          className={`bg-primary flex gap-2 max-md:flex-col max-md:p-4 max-md:mt-12 max-md:fixed max-md:inset-y-0 max-md:right-0 md:gap-6 ${
            !isOpenMenu && "max-md:hidden"
          }`}
        >
          <NavLink to={"/dashboard"} className={"md:text-lg"}>
            Dashboard
          </NavLink>
          <NavLink to={"/exercise-tracker"} className={"md:text-lg"}>
            Exercise Tracker
          </NavLink>
          <NavLink to={"/food-tracker"} className={"md:text-lg"}>
            Food Tracker
          </NavLink>
          <NavLink to={"/goal-tracker"} className={"md:text-lg"}>
            Goal Tracker
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export { Header };
