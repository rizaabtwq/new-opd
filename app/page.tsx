"use client";

import { useCallback, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// 1. ИМПОРТ ИКОНОК (Lucide React)
// Убедитесь, что сделали: npm install lucide-react
import {
  ShieldCheck,    // Щит
  Bug,            // Жук
  Lock,           // Замок (в Phosphor было LockKey)
  AlertTriangle,  // Треугольник (в Phosphor было Warning)
} from "lucide-react";

import Loader from "@/components/Loader";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Card from "@/components/Card";
import GridBackground from "@/components/GridBackground";

export default function Home() {
  const [ready, setReady] = useState(false);

  const handleLoaderFinish = useCallback(() => {
    setReady(true);
  }, []);

  return (
    <>
      <Loader onFinished={handleLoaderFinish} />

      {ready && (
        <>
          <Header />

          <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="text-white bg-black relative z-10 overflow-hidden"
          >
            {/* HERO SECTION */}
            <section className="min-h-screen px-6 sm:px-10 lg:px-48 flex flex-col lg:flex-row items-center gap-12 lg:gap-20 relative pt-24 lg:pt-32">
              <GridBackground className="absolute inset-0" />
              <div className="relative z-[2] w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7 }}
                  viewport={{ once: true }}
                  className="w-full lg:w-1/2 lg:pr-8 text-center lg:text-left"
                >
                  <h1 className="text-2xl sm:text-4xl lg:text-6xl font-extrabold leading-tight mb-6">
                    Кибербезопасность <br />
                    <span className="text-emerald-500">и Вирусы</span>
                  </h1>

                  <p className="text-base sm:text-lg lg:text-xl text-white/60 max-w-xl lg:max-w-md mx-auto lg:mx-0 mb-12">
                    Исследуем цифровые угрозы, анализируем вредоносный код и
                    разрабатываем методы защиты данных.
                  </p>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mb-10 sm:mb-14">
                    <div className="text-center lg:text-left">
                      <p className="text-3xl sm:text-4xl lg:text-4xl font-bold text-red-500">300К+</p>
                      <p className="text-white/50">Новых вирусов в день</p>
                    </div>
                    <div className="text-center lg:text-left">
                      <p className="text-3xl sm:text-4xl lg:text-4xl font-bold text-emerald-500">99%</p>
                      <p className="text-white/50">Уязвимостей в ПО</p>
                    </div>
                    <div className="text-center lg:text-left">
                      <p className="text-3xl sm:text-4xl lg:text-4xl font-bold">24/7</p>
                      <p className="text-white/50">Мониторинг атак</p>
                    </div>
                    <div className="text-center lg:text-left">
                      <p className="text-3xl sm:text-4xl lg:text-4xl font-bold">AES-256</p>
                      <p className="text-white/50">Стандарт шифрования</p>
                    </div>
                  </div>
                </motion.div>

                {/* ПРАВАЯ ЧАСТЬ HERO: КАРТИНКА ИЛИ БОЛЬШАЯ ИКОНКА */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="w-full lg:w-1/2 flex justify-center lg:justify-end items-center order-first lg:order-none"
                >
                  {/* ВАРИАНТ А: Если у вас нет картинки, используем огромную иконку */}
                  <div className="relative">
                     <div className="absolute inset-0 bg-emerald-500 blur-[100px] opacity-20 rounded-full"></div>
                     <ShieldCheck
                      size={400}
                      className="text-emerald-500 drop-shadow-2xl relative z-10 w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] lg:w-[400px] lg:h-[400px]"
                     />
                  </div>

                  {/* ВАРИАНТ Б: Если картинка есть в папке public/icon.png, раскомментируйте код ниже */}
                  {/* <Image
                    src="/icon.png" 
                    alt="Security Shield"
                    width={650}
                    height={650}
                    className="drop-shadow-[0_0_70px_rgba(16,185,129,0.45)] select-none object-contain"
                  /> 
                  */}
                </motion.div>
              </div>
            </section>

            <section className="min-h-screen flex flex-col lg:flex-row items-center gap-12 lg:gap-20 px-6 sm:px-10 lg:px-48 relative py-20 lg:py-0">
              <div className="w-full lg:w-1/2 lg:pr-10">
                {/* Место для картинки слева */}
                <div className="w-full h-[240px] sm:h-[300px] lg:h-[400px] bg-neutral-900 rounded-2xl flex items-center justify-center border border-neutral-800">
                  <img
                    src="/3189f5f85f2419bec7940d379e0e21e0.png"
                    alt="Feature Image"
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="w-full lg:w-1/2 lg:pl-10 text-center lg:text-left"
              >
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-8 lg:mb-10">
                  Векторы Атаки
                </h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                  {/* ПЕРЕДАЕМ ИКОНКИ С ЦВЕТАМИ ЧЕРЕЗ КЛАССЫ */}
                  <Card
                    icon={<Bug size={32} className="text-red-500" />} 
                    title="Вредоносное ПО"
                    description="Трояны и вирусы-вымогатели."
                  />
                  <Card
                    icon={<AlertTriangle size={32} className="text-yellow-500" />} 
                    title="Фишинг"
                    description="Социальная инженерия и поддельные сайты."
                  />
                  <Card
                    icon={<Lock size={32} className="text-emerald-500" />} 
                    title="Криптография"
                    description="Методы шифрования данных."
                  />
                  <Card
                    icon={<ShieldCheck size={32} className="text-blue-500" />} 
                    title="Сетевая Защита"
                    description="Firewall и защита от DDoS."
                  />
                </div>
              </motion.div>
            </section>

            <Footer />
          </motion.main>
        </>
      )}
    </>
  );
}