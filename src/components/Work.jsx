export default function Work() {
  return (
    <section className="w-full bg-white px-4 sm:px-8 py-24 mt-96">
      <div className="max-w-[1200px] mx-auto text-center relative mt-7">
        <h2 className="text-5xl sm:text-7xl font-bold inline-block">
          Selected Work
        </h2>
        <img
          src="/star.svg"
          alt="star"
          className="absolute -top-24  right-10 sm:right-60"
        />
      </div>

      <div className="max-w-[1200px] mx-auto mt-20 rounded-3xl border-[1rem] border-gray-200 shadow-inner overflow-hidden flex flex-col lg:flex-row">
        <div className="bg-gray-100 lg:w-1/2 p-6 flex items-center justify-center">
          <img
            src="/work1.svg"
            alt="Customer Portal"
            className="w-full h-auto object-contain rounded-l-3xl"
          />
        </div>

        <div className="bg-white lg:w-1/2 px-10 flex flex-col gap-4 justify-center">
          <span className="text-gray-500 text-sm">Jan 2024</span>
          <h3 className="text-3xl sm:text-3xl font-semibold -mt-1">
            SAFESQUID’s CUSTOMER PORTAL
          </h3>
          <p className="text-gray-600 text-lg">
            Explore a case study on revolutionizing a customer portal.
            Discover how a focus on user experience led to an 80% improvement
            in user-friendliness and seamless mobile access.
          </p>

          <div className="grid grid-cols-2 gap-6 mt-28 text-sm text-gray-700">
            <div>
              <p className="font-semibold">Duration</p>
              <p>6 months</p>
            </div>
            <div>
              <p className="font-semibold">Site</p>
              <p>
                <a href="https://www.safesquid.com" className="text-blue-500 underline">
                  www.safesquid.com
                </a>
              </p>
            </div>
            <div>
              <p className="font-semibold">Industry</p>
              <p>Cybersecurity</p>
            </div>
            <div>
              <p className="font-semibold">Tools</p>
              <p>Figma, Figjam</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
