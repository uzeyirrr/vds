"use client";

import { motion } from "framer-motion";
import { Shield, Lock, Eye, FileText, UserCheck, Database } from "lucide-react";
import { Breadcrumb } from "@/components/ui/breadcrumb";

export default function GizlilikPolitikasi() {
  return (
    <>
      {/* Hero Section */}
      <section className="w-full bg-white py-12 md:py-16 px-4 md:px-6 lg:px-8 border-b border-gray-100">
        <div className="container mx-auto max-w-7xl">
          <Breadcrumb items={[{ label: "Gizlilik Politikası" }]} />
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
              Gizlilik Politikası
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl leading-relaxed">
              VDS Diş Kliniği olarak kişisel verilerinizin korunması bizim için önemlidir. 
              Bu politika, verilerinizin nasıl toplandığı, kullanıldığı ve korunduğu hakkında bilgi sağlar.
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
                  <Shield className="w-6 h-6 text-green-600" />
                  1. Genel Bilgiler
                </h2>
                <p className="mb-4">
                  VDS Diş Kliniği ("Kliniğimiz", "Biz", "Bizim") olarak, 6698 sayılı Kişisel Verilerin Korunması Kanunu 
                  ("KVKK") kapsamında kişisel verilerinizin korunmasına büyük önem vermekteyiz. Bu gizlilik politikası, 
                  kişisel verilerinizin nasıl toplandığı, işlendiği, saklandığı ve korunduğu hakkında sizleri bilgilendirmek 
                  amacıyla hazırlanmıştır.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Database className="w-6 h-6 text-green-600" />
                  2. Toplanan Kişisel Veriler
                </h2>
                <p className="mb-4">Kliniğimiz, aşağıdaki kişisel verileri toplayabilir:</p>
                <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                  <li><strong>Kimlik Bilgileri:</strong> Ad, soyad, T.C. kimlik numarası, doğum tarihi</li>
                  <li><strong>İletişim Bilgileri:</strong> Telefon numarası, e-posta adresi, adres bilgisi</li>
                  <li><strong>Sağlık Bilgileri:</strong> Tıbbi geçmiş, tedavi bilgileri, röntgen ve görüntüleme sonuçları</li>
                  <li><strong>Finansal Bilgiler:</strong> Ödeme bilgileri, fatura bilgileri</li>
                  <li><strong>Teknik Veriler:</strong> IP adresi, çerez bilgileri, tarayıcı bilgileri</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Eye className="w-6 h-6 text-green-600" />
                  3. Kişisel Verilerin İşlenme Amaçları
                </h2>
                <p className="mb-4">Kişisel verileriniz aşağıdaki amaçlarla işlenmektedir:</p>
                <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                  <li>Randevu planlama ve yönetimi</li>
                  <li>Hasta kayıt ve takip işlemleri</li>
                  <li>Teşhis ve tedavi hizmetlerinin sunulması</li>
                  <li>Fatura ve ödeme işlemlerinin yürütülmesi</li>
                  <li>Yasal yükümlülüklerin yerine getirilmesi</li>
                  <li>Hasta memnuniyeti anketleri ve değerlendirmeleri</li>
                  <li>Web sitesi kullanım analizi ve iyileştirme</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Lock className="w-6 h-6 text-green-600" />
                  4. Kişisel Verilerin Korunması
                </h2>
                <p className="mb-4">
                  Kliniğimiz, kişisel verilerinizin güvenliğini sağlamak için teknik ve idari önlemler almaktadır:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                  <li>Güvenli veri saklama sistemleri</li>
                  <li>Şifreleme teknolojileri</li>
                  <li>Erişim kontrolü ve yetkilendirme</li>
                  <li>Düzenli güvenlik denetimleri</li>
                  <li>Personel eğitimleri</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <UserCheck className="w-6 h-6 text-green-600" />
                  5. Kişisel Verilerin Paylaşılması
                </h2>
                <p className="mb-4">
                  Kişisel verileriniz, yasal yükümlülüklerimiz ve hizmet kalitemizin artırılması amacıyla aşağıdaki 
                  durumlarda üçüncü kişilerle paylaşılabilir:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                  <li>Sağlık Bakanlığı ve ilgili kamu kurumları (yasal zorunluluklar nedeniyle)</li>
                  <li>Laboratuvarlar ve tıbbi görüntüleme merkezleri</li>
                  <li>Sigorta şirketleri (tedavi kapsamında)</li>
                  <li>Hukuki danışmanlar ve avukatlar</li>
                  <li>IT hizmet sağlayıcıları (güvenli veri saklama için)</li>
                </ul>
                <p className="mb-4">
                  Kişisel verileriniz, yukarıda belirtilen durumlar dışında üçüncü kişilerle paylaşılmaz.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <FileText className="w-6 h-6 text-green-600" />
                  6. KVKK Kapsamındaki Haklarınız
                </h2>
                <p className="mb-4">KVKK'nın 11. maddesi uyarınca aşağıdaki haklara sahipsiniz:</p>
                <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                  <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
                  <li>İşlenmişse buna ilişkin bilgi talep etme</li>
                  <li>İşlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme</li>
                  <li>Yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme</li>
                  <li>Eksik veya yanlış işlenmişse düzeltilmesini isteme</li>
                  <li>KVKK'da öngörülen şartlar çerçevesinde silinmesini veya yok edilmesini isteme</li>
                  <li>Düzeltme, silme, yok etme işlemlerinin aktarıldığı üçüncü kişilere bildirilmesini isteme</li>
                  <li>İşlenen verilerin münhasıran otomatik sistemler ile analiz edilmesi suretiyle aleyhinize bir sonucun 
                  ortaya çıkmasına itiraz etme</li>
                  <li>Kanuna aykırı olarak işlenmesi sebebiyle zarara uğramanız halinde zararın giderilmesini talep etme</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  7. Çerezler (Cookies)
                </h2>
                <p className="mb-4">
                  Web sitemiz, kullanıcı deneyimini iyileştirmek ve site performansını analiz etmek için çerezler kullanmaktadır. 
                  Çerezler hakkında daha fazla bilgi için tarayıcı ayarlarınızı kontrol edebilirsiniz.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  8. Değişiklikler
                </h2>
                <p className="mb-4">
                  Bu gizlilik politikası, yasal düzenlemelerdeki değişiklikler veya hizmetlerimizdeki güncellemeler nedeniyle 
                  değiştirilebilir. Değişiklikler web sitesinde yayınlandığı anda yürürlüğe girer.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  9. İletişim
                </h2>
                <p className="mb-4">
                  Kişisel verilerinizle ilgili sorularınız, talepleriniz veya şikayetleriniz için bizimle iletişime geçebilirsiniz:
                </p>
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                  <p className="font-semibold text-gray-900 mb-2">VDS Diş Kliniği</p>
                  <p className="text-gray-600 mb-1">Veri Sorumlusu: Dr. Aykut Arık</p>
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
                  Bu gizlilik politikası 6698 sayılı Kişisel Verilerin Korunması Kanunu'na uygun olarak hazırlanmıştır.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

