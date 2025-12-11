"use client";

import React from "react";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import Image from "next/image";

interface Footer7Props {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  sections?: Array<{
    title: string;
    links: Array<{ name: string; href: string }>;
  }>;
  description?: string;
  socialLinks?: Array<{
    icon: React.ReactElement;
    href: string;
    label: string;
  }>;
  copyright?: string;
  legalLinks?: Array<{
    name: string;
    href: string;
  }>;
}

const defaultSections = [
  {
    title: "Hizmetler",
    links: [
      { name: "Diş İmplantları", href: "/tedavilerimiz/dis-implantlari" },
      { name: "Diş Dolgusu Tedavisi", href: "/tedavilerimiz/dis-dolgusu-tedavisi" },
      { name: "Kök Kanalı Tedavisi", href: "/tedavilerimiz/kok-kanali-tedavisi" },
      { name: "Diş Kaplama Çeşitleri", href: "/tedavilerimiz/dis-kaplama-cesitleri" },
    ],
  },
  {
    title: "Klinik",
    links: [
      { name: "Hakkımızda", href: "/hakkimizda" },
      { name: "Ekibimiz", href: "/hakkimizda/ekibimiz" },
      { name: "Kliniğimiz", href: "/hakkimizda/klinik" },
      { name: "İletişim", href: "/iletisim" },
    ],
  },
  {
    title: "Destek",
    links: [
      { name: "Sağlık Rehberi", href: "/blog" },
      { name: "Kullanım Koşulları", href: "/kullanim-kosullari" },
      { name: "Gizlilik Politikası", href: "/gizlilik-politikasi" },
    ],
  },
];

const defaultSocialLinks = [
  { icon: <FaInstagram className="size-5" />, href: "#", label: "Instagram" },
  { icon: <FaFacebook className="size-5" />, href: "#", label: "Facebook" },
  { icon: <FaTwitter className="size-5" />, href: "#", label: "Twitter" },
  { icon: <FaLinkedin className="size-5" />, href: "#", label: "LinkedIn" },
];

const defaultLegalLinks = [
  { name: "Kullanım Koşulları", href: "/kullanim-kosullari" },
  { name: "Gizlilik Politikası", href: "/gizlilik-politikasi" },
];

export const Footer7 = ({
  logo = {
    url: "/",
    src: "/logo.webp",
    alt: "VDS Dental Logo",
    title: "VDS Dental",
  },
  sections = defaultSections,
  description = "Uzman diş hekimlerimiz ve son teknoloji ekipmanlarımızla sağlıklı gülüşlerinize kavuşun. Estetik ve tedavi alanında profesyonel hizmet sunuyoruz.",
  socialLinks = defaultSocialLinks,
  copyright = "© 2024 VDS Dental. Tüm hakları saklıdır.",
  legalLinks = defaultLegalLinks,
}: Footer7Props) => {
  return (
    <section className="py-16 bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex w-full flex-col justify-between gap-10 lg:flex-row lg:items-start lg:text-left">
          <div className="flex w-full flex-col justify-between gap-6 lg:items-start">
            {/* Logo */}
            <div className="flex items-center gap-2 lg:justify-start">
              <Link href={logo.url}>
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  title={logo.title}
                  width={40}
                  height={40}
                  className="h-20 w-30 object-contain"
                />
              </Link>
            </div>
            <p className="max-w-[70%] text-sm text-gray-600">
              {description}
            </p>
            <ul className="flex items-center space-x-6 text-gray-600">
              {socialLinks.map((social, idx) => (
                <li key={idx} className="font-medium hover:text-green-600 transition-colors">
                  <a href={social.href} aria-label={social.label}>
                    {social.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid w-full gap-6 md:grid-cols-3 lg:gap-20">
            {sections.map((section, sectionIdx) => (
              <div key={sectionIdx}>
                <h3 className="mb-4 font-bold text-gray-900">{section.title}</h3>
                <ul className="space-y-3 text-sm text-gray-600">
                  {section.links.map((link, linkIdx) => (
                    <li
                      key={linkIdx}
                      className="font-medium hover:text-green-600 transition-colors"
                    >
                      <Link href={link.href}>{link.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8 flex flex-col justify-between gap-4 border-t border-gray-300 py-8 text-xs font-medium text-gray-600 md:flex-row md:items-center md:text-left">
          <p className="order-2 lg:order-1">{copyright}</p>
          <ul className="order-1 flex flex-col gap-2 md:order-2 md:flex-row">
            {legalLinks.map((link, idx) => (
              <li key={idx} className="hover:text-green-600 transition-colors">
                <Link href={link.href}> {link.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

