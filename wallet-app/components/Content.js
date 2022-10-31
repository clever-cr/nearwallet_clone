const data = [
  {
    img: "/icon11.png",
    description: "Essential NEAR concepts",
  },
  {
    img: "/icon2.png",
    description: "How to write smart contracts on NEAR",
  },
  {
    img: "/icon3.png",
    description: "How to build dapps on the NEAR blockchain",
  },
];
function Content() {
  return (
    <>
      <div className="lg:px-52 flex  flex-col items-center ">
        <div className="flex  lg:flex-row  items-center justify-between  lg:space-x-12 flex-col-reverse">
          <div className="space-y-8 flex flex-col items-center">
            <div className="space-y-2 text-center pt-10">
              <h1 className="text-2xl  text-primary font-medium font-real lg:text-5xl">
                Open NEAR wallet
              </h1>
              <p className="text-secondary text-lg font-[400px] font-real max-w-sm px-6 ">
                Opening a NEAR wallet is the first step and essential part of
                joining the NEAR community as well as starting this course.
              </p>
            </div>

            <button className="bg-white border-[1px] border-lightblack text-lightblack px-4 py-2 rounded-full text-lg font-real ">
              Create Wallet
            </button>
          </div>
          <div className="w-2/6 ">
            <picture>
              <img
                alt="near-logo"
                src="https://dacade-nearbalkans.netlify.app/_ipx/w_640,q_75/%2F_next%2Fstatic%2Fmedia%2Fnear.3a79378e.png?url=%2F_next%2Fstatic%2Fmedia%2Fnear.3a79378e.png&w=640&q=75"
              />
            </picture>
          </div>
        </div>

        <picture>
          <img
            className="hidden lg:block text-center py-4"
            src="/arrowdown.svg"
            alt="arrow"
          />
        </picture>

        <div className=" flex w-full flex-col  py-14 lg:flex-row  items-center lg:justify-center lg:space-x-80">
          <div className=" w-3/5 lg:w-1/4">
            <picture>
              <img src="/arrown.svg" alt="arrow" />
            </picture>
          </div>
          <div className="flex flex-col items-center lg:items-start py-4 space-y-4 ">
            <h1 className="text-2xl lg:text-4xl font-medium text-primary">
              Complete the course
            </h1>
            <p className="text-lg text-lightblack">
              In three simple modules, learn:
            </p>
            {data.map((value, index) => (
              <div
                className="flex flex-col items-center lg:flex-row space-y-4 lg:space-x-4
          "
                key={index}
              >
                <div className="w-6">
                  <picture>
                    <img src={value.img} alt="img" />
                  </picture>
                </div>

                <p className="text-base font-normal text-lightblack">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        <picture>
          <img
            className="hidden lg:block text-center py-4"
            src="/reverse.svg"
            alt="arrow"
          />
        </picture>
        <div className="flex flex-col items-center py-12 space-y-8">
          <div className="px-4 flex flex-col items-center space-y-6 py-8">
            <div className="flex flex-col items-center space-y-12">
              <div>
                <h1 className="text-2xl lg:text-4xl font-medium text-primary text-center">
                  Claim NEAR certificate
                </h1>
                <p className="text-secondary text-lg font-[400px] font-real text-center lg:max-w-md ">
                  Upon course completion, receive the NEAR dev 101 certificate
                  as an NFT on your NEAR wallet.
                </p>
              </div>

              <div className=" lg:pl-52">
                <picture>
                  <img className="lg:w-4/5" src="/certificate.png" alt="img" />
                </picture>
              </div>
            </div>
          </div>
          <div className="flex flex-col relative items-center py-12 space-y-4  lg:flex-row-reverse lg:justify-between ">
            <div className=" w-1/3 z-10">
              <picture>
                <img src="/z.png" alt="img" />
              </picture>
            </div>

            <div className="space-y-4 z-10">
              <h1 className="text-2xl lg:text-4xl text-primary font-medium ">
                NEAR Development 101
              </h1>
              <button className="bg-white border-[2px] text-lightblack px-4 py-2 rounded-full text-base font-normal">
                Start The Course
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Content;
