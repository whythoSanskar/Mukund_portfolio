export default function Navbar() {
  return (
    <div className="flex items-start justify-center bg-gray-100 mt-16">
      <nav className="flex items-center bg-white px-6 py-3 rounded-full border-b-2 border-[#E5E5E5] shadow-md shadow-[#D8D8D8]/25 gap-10 font-albert-400 ">
        <span className="text-green-700 text-xl tracking-tight">
          Mukund Sharma
        </span>
        <img src="/Vector.svg" alt="Logo" className="w-[19px] h-[27px]" />
        <div className="flex items-center gap-6 text-gray-400 text-xl tracking-tight">
          <span className="hover:text-gray-600 transition">Work</span>
          <span className="text-green-600">/</span>
          <span className="hover:text-gray-600 transition">Contact</span>
        </div>
      </nav>
    </div>
  );
}