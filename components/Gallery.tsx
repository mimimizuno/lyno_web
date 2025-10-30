import Image from "next/image";

const GALLERY = [
  { src: "/images/gallery/hero.jpg", alt: "店の外観（ヒーロー）" },
  { src: "/images/gallery/lyno_outside.jpg", alt: "店舗外観" },
  { src: "/images/gallery/lyno_inside.jpg", alt: "店内の雰囲気" },
  { src: "/images/gallery/beans.jpg", alt: "コーヒー豆" },
  { src: "/images/gallery/dripper.jpg", alt: "ドリッパー" },
  { src: "/images/gallery/latteart.jpg", alt: "ラテアート" },
];

export default function Gallery() {
  return (
    <section className="section py-10">
      <h2 className="h2 mb-6">GALLERY</h2>
      <div className="grid md:grid-cols-3 gap-4">
        {GALLERY.map((img) => (
          <div
            key={img.src}
            className="relative overflow-hidden rounded-2xl aspect-[4/3] group"
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(max-width:768px) 100vw, 33vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        ))}
      </div>
    </section>
  );
}
