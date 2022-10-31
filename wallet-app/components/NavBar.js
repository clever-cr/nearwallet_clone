import Link from "next/link";
function NavBar() {
  return (
    <>
      <div className=" fixed w-full bg-white flex items-center justify-between px-5 py-5 lg:px-32 z-20">
        <div className="flex space-x-1 lg:space-x-2 items-center">
          <Link href="/page1">
            <div className="flex items-center space-x-2 border-r-2 pr-1 lg:pr-4">
              <picture>
                <img className="w-9" src="dlogo.svg" alt="logo" />
              </picture>
              <h2 className="hidden lg:block font-real font-bold  text-lg ">
                Dacade
              </h2>
            </div>
          </Link>
          <Link href="/page2">
            <picture>
              <img className="hidden lg:block" src="/nlogo.svg" alt="logo" />
            </picture>
          </Link>
          <Link href="/page2">
            <picture>
              <img className=" block lg:hidden" src="/smlogo.svg" alt="logo" />
            </picture>
          </Link>
        </div>
        <div className="space-x-8 flex items-center">
          <button className=" hidden lg:block text-xl font-normal ">
            Start The Course
          </button>
          <Link href="/page3">
            <button className="bg-lightblack text-white px-5 py-2 rounded-full text-lg font-real ">
              Create Wallet
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
export default NavBar;
