"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FAQCard from "@/components/FAQCard"; // Убедитесь, что этот компонент обновлен (см. п. 3)

export default function FAQPage() {
  return (
    <>
      <Header />

      <main className="relative min-h-screen bg-black text-white overflow-hidden">
        <div className="absolute inset-0 -z-20 opacity-40">
          <img
            src="/new-opd/fluid1.png"
            alt="Background Shape"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="absolute inset-0 -z-30 opacity-30">
          <img
            src="/new-opd/fluid2.png"
            alt="Background Shape 2"
            className="w-full h-full object-cover"
          />
        </div>

        <section className="relative z-10 pt-40 pb-32 flex flex-col items-center px-6 max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-6xl font-extrabold mb-4 text-center"
          >
            FAQ 
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-white/60 mb-16 text-center text-lg"
          >
            Ответы на самые частые вопросы о вирусах и цифровой гигиене.
          </motion.p>

          <div className="w-full flex flex-col gap-4">
            <FAQCard
              question="Что такое компьютерный вирус?"
              answer="Это вид вредоносного ПО, способный создавать свои копии и внедряться в код других программ, системные области памяти или загрузочные секторы для нарушения работы компьютера или кражи данных."
            />

            <FAQCard
              question="Как защититься от фишинга?"
              answer="Никогда не переходите по подозрительным ссылкам в письмах, проверяйте адрес отправителя и URL сайта. Используйте двухфакторную аутентификацию (2FA) везде, где это возможно."
            />

            <FAQCard
              question="Что такое программы-вымогатели (Ransomware)?"
              answer="Это опасный тип вирусов, который шифрует файлы пользователя (документы, фото) и требует выкуп (обычно в криптовалюте) за ключ расшифровки. Часто восстановить данные без резервной копии невозможно."
            />

            <FAQCard
              question="Чем отличается вирус от трояна?"
              answer="Вирус размножается самостоятельно, заражая файлы. Троян же маскируется под полезную программу (например, игру или утилиту), чтобы пользователь сам запустил его, открыв злоумышленнику доступ к системе."
            />

            <FAQCard
              question="Зачем нужно обновлять систему?"
              answer="Разработчики постоянно находят 'дыры' в безопасности и выпускают патчи. Если не обновлять ОС и браузер, хакеры могут использовать известные уязвимости для автоматического взлома вашего устройства."
            />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}