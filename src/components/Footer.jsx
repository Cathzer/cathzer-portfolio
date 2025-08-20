export default function Footer() {
  return (
    <footer className="py-6 text-center text-gray-400 bg-black/40">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} Alghazali Winet Abdurrahman. All rights reserved.</p>
        <div className="flex items-center gap-4 text-sm">
          <a href="mailto:ghazali0102@gmail.com" className="hover:text-white">Email</a>
          <span className="opacity-50">•</span>
          <a href="https://www.linkedin.com/in/alghazali-winet-abdurrahman/" className="hover:text-white" target="_blank" rel="noreferrer">LinkedIn</a>
          <span className="opacity-50">•</span>
          <a href="tel:+6282186217075" className="hover:text-white">Phone</a>
        </div>
      </div>
    </footer>
  );
}
