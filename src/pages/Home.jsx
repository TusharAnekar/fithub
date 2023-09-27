import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className="">
      <div
        className="md:hidden"
        style={{
          width: "100vw",
          height: "100vh",
          backgroundImage:
            "url('https://res.cloudinary.com/diuf6w2yi/image/upload/f_auto,q_auto/v1/FitHub/d1jn7pbmazzykzzxcwxj')",
          backgroundSize: "cover",
        }}
      ></div>
      <div className="hidden md:block" style={{
          width: "100vw",
          height: "100vh",
          backgroundImage:
            "url('https://res.cloudinary.com/diuf6w2yi/image/upload/f_auto,q_auto/v1/FitHub/mmayvst57avahrfa4vmd')",
          backgroundSize: "cover",
        }}></div>
      <NavLink
        to={"/dashboard"}
        className={"fixed bottom-10 left-10 bg-primary p-4 rounded-lg transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none"}
      >
        Start FitHub Journey Now!
      </NavLink>
    </div>
  );
};

export { Home };
