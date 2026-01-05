import Link from "next/link";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-[rgba(177,227,199,0.12)] bg-[rgba(13,37,28,0.5)]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="py-12 lg:py-16 grid gap-10 md:gap-12 md:grid-cols-12">
          {/* Brand Section */}
          <div className="md:col-span-5">
            <h3 className="text-2xl font-bold text-polus-gold mb-4">Polus</h3>
            <p className="text-[rgba(254,255,255,0.72)] leading-relaxed max-w-sm mb-4">
              Operations + Microsoft 365 systems for Oklahoma small businesses.
            </p>
            <div className="text-sm text-[rgba(254,255,255,0.65)] space-y-1">
              <p><strong className="text-polus-gold">Service Area:</strong> All of Oklahoma</p>
            </div>
          </div>
          
          {/* Navigation Links */}
          <div className="md:col-span-4 grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-sm font-semibold text-polus-gold mb-4 uppercase tracking-wider">Company</h4>
              <div className="grid gap-3 text-sm">
                <Link href="/about" className="text-[rgba(254,255,255,0.72)] hover:text-polus-gold transition">About</Link>
                <Link href="/results" className="text-[rgba(254,255,255,0.72)] hover:text-polus-gold transition">Results</Link>
                <Link href="/contact" className="text-[rgba(254,255,255,0.72)] hover:text-polus-gold transition">Contact</Link>
              </div>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-polus-gold mb-4 uppercase tracking-wider">Services</h4>
              <div className="grid gap-3 text-sm">
                <Link href="/services" className="text-[rgba(254,255,255,0.72)] hover:text-polus-gold transition">All Services</Link>
                <Link href="/industries" className="text-[rgba(254,255,255,0.72)] hover:text-polus-gold transition">Industries</Link>
                <Link href="/pay" className="text-[rgba(254,255,255,0.72)] hover:text-polus-gold transition">Pay Invoice</Link>
              </div>
            </div>
          </div>

          {/* Legal Links */}
          <div className="md:col-span-3">
            <h4 className="text-sm font-semibold text-polus-gold mb-4 uppercase tracking-wider">Legal</h4>
            <div className="grid gap-3 text-sm">
              <Link href="/privacy" className="text-[rgba(254,255,255,0.72)] hover:text-polus-gold transition">Privacy Policy</Link>
              <Link href="/terms" className="text-[rgba(254,255,255,0.72)] hover:text-polus-gold transition">Terms of Service</Link>
              <Link href="/accessibility" className="text-[rgba(254,255,255,0.72)] hover:text-polus-gold transition">Accessibility</Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-[rgba(177,227,199,0.08)] py-6">
          <p className="text-center text-sm text-[rgba(254,255,255,0.5)]">
            © {year} Polus LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
