import Link from "next/link";
function Hero() {
  return (
    <>
      <div className="flex flex-col items-center space-y-24 py-48 lg:py-72">
        <div className="flex flex-col items-center space-y-10">
          <h1 className=" max-w-xs font-bold text-primary text-4xl lg:text-7xl lg:max-w-5xl font-real text-center">
            Get{" "}
            <span className=" text-transparent bg-clip-text  bg-gradient-to-b from-purple via-blue to-lightblue">
              NEAR
            </span>{" "}
            Certified!
          </h1>
          <p className="text-lg lg:text-2xl text-secondary lg:max-w-5xl text-center px-8">
            We, in NEAR Balkans, know how important it is to have regional and
            local support. Now you can become NEAR certified in a regional
            language of preference and connect with our team to support your
            further growth within the NEAR ecosystem.
          </p>
        </div>
        <a href="#clever">
          <picture>
            <img src="/arrow.svg" alt="arrow" />
          </picture>
        </a>

        <h2 className="text-primary text-4xl max-w-xs lg:text-5xl font-real font-medium lg:max-w-md text-center items-center">
          Making your NEAR learning easy.
        </h2>
      </div>
    </>
  );
}
export default Hero;
