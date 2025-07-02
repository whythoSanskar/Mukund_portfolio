export default function Navbar() {
  return (
    <div className="container mx-auto flex justify-center mt-10 px-4">
      <nav
        className="flex items-center gap-4 sm:gap-6 md:gap-10 bg-white px-6 py-3 rounded-full border border-[#E5E5E5] shadow-md shadow-[#D8D8D8]/25 font-albert-400 text-sm sm:text-base md:text-lg scale-[0.85] sm:scale-100 transition-transform duration-300"
      >
        <span className="text-green-700 whitespace-nowrap">Mukund Sharma</span>

        <img
          src="/Vector.svg"
          alt="Divider Icon"
          className="w-[16px] h-[24px] sm:w-[19px] sm:h-[27px]"
        />

        <div className="flex items-center gap-3 sm:gap-5 text-gray-400">
          <span className="hover:text-gray-600 transition cursor-pointer">Work</span>
          <span className="text-green-600">/</span>
          <span className="hover:text-gray-600 transition cursor-pointer">Playground</span>
          <span className="text-green-600">/</span>
          <span className="hover:text-gray-600 transition cursor-pointer">Contact</span>
        </div>
      </nav>
    </div>
  );
}
