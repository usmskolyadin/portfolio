"use client";

const Footer = () => {
    return (<footer className="flex justify-between items-center py-4  border-gray-200 px-6 relative ">
    <h1 className="text-md font-medium drop-shadow-[0_0_3px_#ffffff]">
      *WHY SPACY COOKING <span className="underline">HERE</span>?
    </h1>

    <nav className="hidden md:flex gap-6">
      {["About", "Catalog", "Pricing", "Team"].map((item) => (
        <a key={item} href="#" className="hover:underline uppercase font-medium">
          {item}
        </a>
      ))}
    </nav>
  </footer>)
}

export default Footer