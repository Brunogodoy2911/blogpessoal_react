import { Outlet, useLocation } from "react-router";

export function AuthLayout() {
  const location = useLocation();

  const isSignupPage = location.pathname === "/signup";

  const ImageSide = (
    <div
      className="w-1/2 h-screen bg-no-repeat bg-cover bg-center hidden md:block"
      style={{ backgroundImage: "url(https://i.imgur.com/ZZFAmzo.jpg)" }}
    />
  );

  const OutletSide = (
    <div className="w-full md:w-1/2 h-screen flex flex-col items-center justify-center p-8 bg-white">
      <Outlet />
    </div>
  );

  return (
    <div className="w-screen h-screen flex">
      {isSignupPage ? (
        <>
          {ImageSide}
          {OutletSide}
        </>
      ) : (
        <>
          {OutletSide}
          {ImageSide}
        </>
      )}
    </div>
  );
}
