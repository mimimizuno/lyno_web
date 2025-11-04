export default function ContactFooter() {
  return (
    <footer className="bg-mute/60 border-t border-white/10 mt-20">
      <div className="section py-16 text-center text-white/80 space-y-4">
        <h2 className="font-serif text-3xl text-white">LYNO</h2>
        <p>〒123-4567 横浜市西区みなとみらい 1-23</p>
        <p>hello@lyno.coffee / 01-2345-6789</p>
        <p className="text-white/60 text-sm">
          &copy; {new Date().getFullYear()} LYNO COFFEE. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
