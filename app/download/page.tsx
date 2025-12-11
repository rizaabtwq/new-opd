"use client";

import { motion } from "framer-motion";
// Импортируем более релевантные иконки для преимуществ
import { ShieldCheck, Download, Zap, Gauge, BookOpen } from "lucide-react"; 

import Footer from "@/components/Footer";
import Header from "@/components/Header";

// Предполагаем, что у вас есть компонент для кнопки скачивания
// (Удален импорт DownloadButton, так как используется встроенный <a>)

export default function DownloadAntivirusPage() {
  return (
    <>
      <Header />

      <main className="text-white bg-black min-h-screen relative overflow-hidden">
        {/* ФОНОВЫЙ ГРАДИЕНТ для визуальной глубины */}
        <div className="absolute inset-0 bg-radial-gradient from-gray-900/40 to-black pointer-events-none"></div>

        {/* Секция с основным призывом к действию (CTA) */}
        <section className="relative z-10 pt-36 md:pt-44 pb-28 md:pb-40 flex flex-col items-center px-6 sm:px-8 md:px-10 text-center max-w-6xl mx-auto">
          
          {/* Иконка-акцент */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-8 p-4 rounded-full bg-green-600/30 backdrop-blur-sm border border-green-700/50"
          >
            <ShieldCheck className="h-12 w-12 text-green-400" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black mb-8 max-w-5xl text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400"
          >
            Мгновенная защита для вашего ПК
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-gray-400 mb-12 max-w-4xl"
          >
            Продвинутый и удобный набор антивирусных программ доступен по кнопке ниже. Защитите свои данные прямо сейчас.
          </motion.p>
          
          {/* Кнопка скачивания */}
          <motion.a 
            // КОРРЕКЦИЯ ПУТИ: добавлен префикс /new-opd/
            href="https://disk.yandex.ru/d/C-Ax9w8u8QBlLg" 
            download
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 150, delay: 0.4 }}
            className="
              flex items-center space-x-4 bg-red-600 hover:bg-red-700 
              text-white font-extrabold py-4 sm:py-5 px-8 sm:px-12 rounded-xl text-base sm:text-lg md:text-xl 
              transition duration-300 shadow-2xl shadow-red-500/50 
              ring-4 ring-red-500/0 hover:ring-red-500/30
            "
          >
            <Download className="h-7 w-7 animate-bounce-slow" />
            <span>Скачать бесплатно (Windows)</span>
          </motion.a>
          
          <motion.p
             initial={{ opacity: 0, y: 10 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.5, delay: 0.6 }}
             className="mt-4 text-sm text-gray-500"
          >
              Версия 1.0.0. Совместимость с Windows 10/11.
          </motion.p>


        </section>
        
        {/* Дополнительная секция с преимуществами */}
        <section className="relative z-10 py-16 sm:py-20 px-6 sm:px-8 md:px-10 max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-center mb-12 sm:mb-16 text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-500"
            >
              Почему стоит выбрать наш набор?
            </motion.h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 text-left">
                {/* Карточка 1: Интуитивность (Скорость/Простота) */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0 }}
                    viewport={{ once: true }}
                    className="p-8 bg-gray-900/50 rounded-2xl border border-gray-800 backdrop-blur-sm transition hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-900/20"
                >
                    <Gauge className="h-10 w-10 text-blue-400 mb-4" />
                    <h3 className="text-2xl font-semibold mb-3 text-white">Интуитивность</h3>
                    <p className="text-gray-400 leading-relaxed">Программы интуитивно понятны даже новичкам. Начните работу без лишних настроек.</p>
                </motion.div>
                
                {/* Карточка 2: Доступность (Быстрый старт) */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="p-8 bg-gray-900/50 rounded-2xl border border-gray-800 backdrop-blur-sm transition hover:border-red-500/50 hover:shadow-xl hover:shadow-red-900/20"
                >
                    <Zap className="h-10 w-10 text-red-400 mb-4" />
                    <h3 className="text-2xl font-semibold mb-3 text-white">Мгновенный старт</h3>
                    <p className="text-gray-400 leading-relaxed">После скачивания и установки программ ничего лишнего делать не нужно. Работает "из коробки".</p>
                </motion.div>
                
                {/* Карточка 3: Гайды (Обучение) */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="p-8 bg-gray-900/50 rounded-2xl border border-gray-800 backdrop-blur-sm transition hover:border-green-500/50 hover:shadow-xl hover:shadow-green-900/20"
                >
                    <BookOpen className="h-10 w-10 text-green-400 mb-4" />
                    <h3 className="text-2xl font-semibold mb-3 text-white">Полные гайды</h3>
                    <p className="text-gray-400 leading-relaxed">Сайт поможет вам справиться с правильным использованием программ благодаря подробным инструкциям.</p>
                </motion.div>
            </div>
        </section>

      </main>

      <Footer />
    </>
  );
}