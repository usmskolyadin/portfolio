export default function TextCarousel() {
  const items = [
    "ZAMDA",
    "КАРЬЕРАМОЛОДЫХ",
    "БАРС",
    "STUDIAU7",
    "MUROWAY",
    "SCH",
    "SMARTEDUAI",
    "SEAMUSIC",
    "FASTTUBE",
  ];

  return (
    <div className="relative mt-4 overflow-hidden rounded-3xl py-4">
      <div className="flex w-max animate-marquee gap-0">
        {items.map((text, i) => (
          <CarouselLine key={`first-${i}`} text={text} />
        ))}

        {items.map((text, i) => (
          <CarouselLine key={`second-${i}`} text={text} />
        ))}
      </div>
    </div>
  );
}

function CarouselLine({ text }: { text: string }) {
  return (
    <span className="mx-2.5 px-4 py-1.5 text-sm lg:text-md font-semibold uppercase font-benzin text-white/80 border border-white/20 bg-white/5 backdrop-blur-md rounded-[50px] tracking-widest whitespace-nowrap">
      {text}
    </span>
  );
}