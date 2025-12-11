"use client";

import { motion } from "framer-motion";
import { FileText, Shield, AlertCircle, CheckCircle } from "lucide-react";
import { Breadcrumb } from "@/components/ui/breadcrumb";

export default function KullanimKosullari() {
  return (
    <>
      {/* Hero Section */}
      <section className="w-full bg-white py-12 md:py-16 px-4 md:px-6 lg:px-8 border-b border-gray-100">
        <div className="container mx-auto max-w-7xl">
          <Breadcrumb items={[{ label: "Kullanım Koşulları" }]} />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <div className="inline-block px-4 py-2 bg-green-50 border border-green-200 rounded-full mb-6">
              <span className="text-sm font-semibold text-green-700 uppercase tracking-wider">
                Yasal
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Kullanım Koşulları
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl leading-relaxed">
              VDS Diş Kliniği web sitesini kullanmadan önce lütfen bu kullanım koşullarını dikkatlice okuyun.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="w-full bg-white py-16 md:py-24 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="prose prose-lg max-w-none space-y-8"
          >
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <FileText className="w-6 h-6 text-green-600" />
                  1. Genel Hükümler
                </h2>
                <p className="mb-4">
                  Bu kullanım koşulları, VDS Diş Kliniği ("Kliniğimiz", "Biz", "Bizim") web sitesinin kullanımını düzenler. 
                  Web sitemizi kullanarak, bu koşulları kabul etmiş sayılırsınız. Eğer bu koşulları kabul etmiyorsanız, 
                  lütfen web sitemizi kullanmayın.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Shield className="w-6 h-6 text-green-600" />
                  2. Hizmetler ve Bilgiler
                </h2>
                <p className="mb-4">
                  Web sitemizde yer alan bilgiler genel bilgilendirme amaçlıdır. Bu bilgiler tıbbi tavsiye, tanı veya 
                  tedavi önerisi niteliği taşımaz. Tıbbi durumunuzla ilgili herhangi bir karar vermeden önce mutlaka 
                  uzman bir diş hekimine danışmanız gerekmektedir.
                </p>
                <p className="mb-4">
                  Kliniğimiz, web sitesinde yer alan bilgilerin doğruluğu, güncelliği veya eksiksizliği konusunda 
                  herhangi bir garanti vermemektedir.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <AlertCircle className="w-6 h-6 text-green-600" />
                  3. Kullanıcı Sorumlulukları
                </h2>
                <p className="mb-4">Web sitemizi kullanırken aşağıdaki kurallara uymanız gerekmektedir:</p>
                <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                  <li>Web sitesini yasalara aykırı amaçlarla kullanmamak</li>
                  <li>Başkalarının haklarını ihlal etmemek</li>
                  <li>Zararlı yazılım, virüs veya kötü amaçlı kod yüklememek</li>
                  <li>Web sitesinin güvenliğini tehdit edecek faaliyetlerde bulunmamak</li>
                  <li>Telif haklarını ihlal etmemek</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  4. Fikri Mülkiyet Hakları
                </h2>
                <p className="mb-4">
                  Web sitemizde yer alan tüm içerikler (metinler, görseller, logolar, tasarımlar vb.) VDS Diş Kliniği'ne 
                  aittir ve telif hakları ile korunmaktadır. Bu içeriklerin izinsiz kopyalanması, dağıtılması veya 
                  kullanılması yasaktır.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  5. Randevu ve İletişim
                </h2>
                <p className="mb-4">
                  Web sitemiz üzerinden randevu alabilir veya iletişim formu doldurabilirsiniz. Randevu talepleriniz 
                  en kısa sürede değerlendirilecek ve size geri dönüş yapılacaktır. Ancak, acil durumlarda lütfen 
                  doğrudan kliniğimizi arayın.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  6. Gizlilik
                </h2>
                <p className="mb-4">
                  Kişisel bilgilerinizin korunması konusunda detaylı bilgi için lütfen{" "}
                  <a href="/gizlilik-politikasi" className="text-green-600 hover:text-green-700 underline">
                    Gizlilik Politikamızı
                  </a>{" "}
                  inceleyin.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  7. Değişiklikler
                </h2>
                <p className="mb-4">
                  Kliniğimiz, bu kullanım koşullarını herhangi bir zamanda değiştirme hakkını saklı tutar. 
                  Değişiklikler web sitesinde yayınlandığı anda yürürlüğe girer. Web sitemizi düzenli olarak 
                  ziyaret ederek güncel koşulları takip etmeniz önerilir.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  8. Sorumluluk Reddi
                </h2>
                <p className="mb-4">
                  Kliniğimiz, web sitesinin kesintisiz, hatasız veya güvenli çalışması konusunda garanti vermemektedir. 
                  Web sitesinin kullanımından kaynaklanan herhangi bir zarardan sorumlu tutulamayız.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  9. İletişim Bilgileri
                </h2>
                <p className="mb-4">
                  Kullanım koşulları ile ilgili sorularınız için bizimle iletişime geçebilirsiniz:
                </p>
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                  <p className="font-semibold text-gray-900 mb-2">VDS Diş Kliniği</p>
                  <p className="text-gray-600 mb-1">Yavuz Sultan Selim Caddesi No:12A</p>
                  <p className="text-gray-600 mb-1">34200 Bağcılar, İstanbul, Türkiye</p>
                  <p className="text-gray-600 mb-1">E-posta: info@vdsdental.com</p>
                </div>
              </div>

              <div className="bg-green-50 p-6 rounded-xl border border-green-200 mt-8">
                <p className="text-sm text-gray-700">
                  <strong>Son Güncelleme:</strong> Ocak 2025
                </p>
                <p className="text-sm text-gray-700 mt-2">
                  Bu kullanım koşulları Türk hukukuna tabidir ve İstanbul mahkemeleri yetkilidir.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

