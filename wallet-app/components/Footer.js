import Link from "next/link";

function Footer() {
  return (
    <div className="px-4 flex flex-col items-center">
      <h6 className="text-lg text-lightblack text-center py-12 lg:py-4">
        Visit <span className="font-bold">nearbalkans.org </span>and make sure
        to follow us on our social and community channels!
      </h6>
      <div className="flex items-center px-2 space-x-5 py-8  lg:justify-center lg:space-x-12">
        <div className=" hidden lg:block border-r  pr-8">
          <picture>
            <img src="/nlogo.svg" alt="logo" />
          </picture>
        </div>
        <div className="flex items-center px-2 space-x-5 py-8 lg:py-4">
          <picture>
            <img src="/twitter.svg" alt="twitter" />
          </picture>
          <picture>
            <img src="/discord.svg" alt="twitter" />
          </picture>
          <picture>
            <img src="/telegram.svg" alt="twitter" />
          </picture>
          <picture>
            <img src="/fb.svg" alt="twitter" />
          </picture>
          <picture>
            <img src="/linkedin.svg" alt="twitter" />
          </picture>
          <picture>
            <img src="/IG.svg" alt="twitter" />
          </picture>
          <picture>
            <img src="/dot.svg" alt="twitter" />
          </picture>
        </div>
      </div>
      <div className="flex flex-col items-center text-xl text-primary font-real font-normal space-y-2 lg:flex-row space-x-6">
        <Link href="#">NEAR Balkans 2022</Link>
        <Link href="#">info@nearbalkans.org</Link>
        <Link href="#">Privacy Policy</Link>
        <Link href="#">Cookie Policy</Link>
        <Link href="#">Terms & Conditions</Link>
      </div>
      <h6 className="text-primary text-lg font-real font-normal px-4 max-w-md text-center py-14 lg:max-w-5xl lg:pt-8">
        NEAR Balkans Hub: Bosnia & Herzegovina, Bulgaria, Croatia, Montenegro,
        North Macedonia, Serbia, and Slovenia
      </h6>
    </div>
  );
}
export default Footer;
