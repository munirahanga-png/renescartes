"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Linkedin, Globe } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#123057] text-white pt-16 pb-8">
      <div className="corporate-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand Column */}
        <div className="flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-3 group">
                <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/b61c2f97-8295-4a85-b7fd-6a54a7750012/Renes_icon-resized-1768836864966.webp?width=200&height=200&resize=contain"
              alt="Renés-Cartes Logo"
              width={44}
              height={44}
              className="group-hover:scale-105 transition-transform duration-300 brightness-0 invert" />

              <div className="flex flex-col">
              <span className="font-bold text-lg leading-tight tracking-tight uppercase">
                Renés-Cartes
              </span>
              <span className="text-[10px] font-medium opacity-80 uppercase tracking-widest">
                Energy & Management Consulting
              </span>
            </div>
          </Link>
          <p className="text-sm text-gray-300 leading-relaxed !whitespace-pre-line">An international multidisciplinary consulting firm delivering technical excellence and strategic impact across the UK and Nigeria.

          </p>
          <div className="flex gap-4">
            <Link href="https://www.linkedin.com/company/renes-cartes/" target="_blank" rel="noopener noreferrer" className="hover:text-[#E1702C] transition-colors">
              <Linkedin size={20} />
            </Link>
              <Link href="#" className="hover:text-[#E1702C] transition-colors">
                <svg width={20} height={20} viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
              </Link>
              <Link href="https://www.facebook.com/share/1J1eYB8huP/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="hover:text-[#E1702C] transition-colors">
                <svg width={20} height={20} viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.268h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/></svg>
              </Link>
            </div>
        </div>

        {/* Services Column */}
        <div>
          <h4 className="text-lg font-semibold mb-6 border-b border-white/10 pb-2">Services</h4>
          <ul className="flex flex-col gap-3 text-sm text-gray-300">
            <li><Link href="/services/energy-environment" className="hover:text-white transition-colors">Energy & Environmental Management</Link></li>
            <li><Link href="/services/renewable-energy" className="hover:text-white transition-colors">Renewable Energy Solutions</Link></li>
            <li><Link href="/services/project-management" className="hover:text-white transition-colors">Project Management</Link></li>
            <li><Link href="/services/bim-digital" className="hover:text-white transition-colors">BIM & Digital Engineering</Link></li>
            <li><Link href="/services/hseq" className="hover:text-white transition-colors">HSEQ Management</Link></li>
          </ul>
        </div>

          {/* Offices Column */}
          <div>
            <h4 className="text-lg font-semibold mb-6 border-b border-white/10 pb-2">Our Offices</h4>
            <div className="flex flex-col gap-6 text-sm text-gray-300">
              <div className="flex gap-3">
                <MapPin size={18} className="text-[#E1702C] shrink-0" />
                <div>
                  <p className="font-semibold text-white">United Kingdom</p>
                  <p>18 Lila Avenue, Coventry</p>
                  <p>CV3 1LW</p>
                </div>
              </div>
              <div className="flex gap-3">
                <MapPin size={18} className="text-[#E1702C] shrink-0" />
                <div>
                  <p className="font-semibold text-white">Nigeria</p>
                  <p className="!whitespace-pre-line !whitespace-pre-line">31 Adamu Ciroma Crescent,</p>
                  <p className="!whitespace-pre-line !whitespace-pre-line">Jabi, FCT-Abuja</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-lg font-semibold mb-6 border-b border-white/10 pb-2">Contact Us</h4>
            <div className="flex flex-col gap-4 text-sm text-gray-300">
              <a href="mailto:contact@renescartes.com" className="flex items-center gap-3 hover:text-white transition-colors">
                <Mail size={18} className="text-[#E1702C]" />
                contact@renescartes.com
              </a>
              <div className="flex flex-col gap-2">
                <a href="tel:+447854217797" className="flex items-center gap-3 hover:text-white transition-colors">
                  <Phone size={18} className="text-[#E1702C]" />
                  +44 (0) 785 421 7797
                </a>
                <a href="tel:+2348095192297" className="flex items-center gap-3 hover:text-white transition-colors pl-[30px]">
                  +234 809 519 2297
                </a>
              </div>
            </div>
          </div>
      </div>

      <div className="corporate-container mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
        <p>© {new Date().getFullYear()} Renés-Cartes Energy & Management Consulting Ltd. All rights reserved.</p>
        <div className="flex gap-6">
          <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-white">Terms of Business</Link>
          <Link href="/legal" className="hover:text-white">Legal Notice</Link>
        </div>
      </div>
    </footer>);

}