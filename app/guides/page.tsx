"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Иконки для разделов
import { BookOpen, ShieldCheck, Settings, AlertTriangle, ChevronRight, Play, CheckCircle, Monitor, FileX, Download } from "lucide-react";

export default function GuidesPage() {
  return (
    <>
      <Header />

      <main className="relative min-h-screen bg-black text-white overflow-hidden">
        {/* Фоновые элементы */}
        <div className="absolute inset-0 -z-20 opacity-20">
          <Image
            src="/fluid1.png"
            alt="Background Shape"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 -z-30 opacity-10">
          <Image
            src="/fluid2.png"
            alt="Background Shape 2"
            fill
            className="object-cover"
          />
        </div>

        {/* Hero Section */}
        <section className="relative z-10 pt-40 pb-20 px-6 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-8">
              <BookOpen className="h-6 w-6 text-emerald-400" />
              <span className="text-emerald-400 font-medium">Руководства</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold mb-6 bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
              Гайды по программам
            </h1>

            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Подробные инструкции по использованию антивирусных инструментов.
              Освойте все возможности программ для максимальной защиты.
            </p>
          </motion.div>
        </section>

        {/* Simple Unlocker Section */}
        <section className="relative z-10 px-6 pb-32 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-20"
          >
            <div className="flex flex-col lg:flex-row gap-12 items-start">
              {/* Левая часть - информация */}
              <div className="lg:w-1/2">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/20">
                    <FileX className="h-8 w-8 text-blue-400" />
                  </div>
                  <div>
                    <h2 className="text-4xl font-bold">Simple Unlocker</h2>
                    <p className="text-blue-400 font-medium">Разблокировка файлов</p>
                  </div>
                </div>

                <p className="text-gray-300 mb-8 leading-relaxed text-lg">
                  Мощный инструмент для разблокировки защищенных файлов и папок.
                  Помогает в ситуациях, когда обычное удаление невозможно из-за системных ограничений.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10">
                    <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                    <span className="text-sm">Легкий интерфейс</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10">
                    <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                    <span className="text-sm">Безопасная работа</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10">
                    <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                    <span className="text-sm">Быстрая разблокировка</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10">
                    <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                    <span className="text-sm">Совместимость с Windows</span>
                  </div>
                </div>
              </div>

              {/* Правая часть - шаги */}
              <div className="lg:w-1/2">
                <div className="space-y-4">
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="group p-6 rounded-2xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                        <span className="text-blue-400 font-bold text-sm">1</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-400 transition-colors">
                          Запуск программы
                        </h3>
                        <p className="text-gray-400 leading-relaxed">
                          Запустите Simple Unlocker от имени администратора. В главном окне вы увидите список всех процессов системы.
                        </p>
                      </div>
                      <ChevronRight className="h-5 w-5 text-gray-600 group-hover:text-blue-400 transition-colors flex-shrink-0" />
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="group p-6 rounded-2xl bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 hover:border-green-400/40 transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                        <span className="text-green-400 font-bold text-sm">2</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2 group-hover:text-green-400 transition-colors">
                         Проверка автозапусков
                        </h3>
                        <p className="text-gray-400 leading-relaxed">
                          Можно просматривать программы которые находятся в автозапуске и удалить их из него при необходимости.
                        </p>
                      </div>
                      <ChevronRight className="h-5 w-5 text-gray-600 group-hover:text-green-400 transition-colors flex-shrink-0" />
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    className="group p-6 rounded-2xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center">
                        <span className="text-purple-400 font-bold text-sm">3</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2 group-hover:text-purple-400 transition-colors">
                          Разблокировка ограничений 
                        </h3>
                        <p className="text-gray-400 leading-relaxed">
                          Разблокировка базовых ограничений которые были прописаны в реестре.
                        </p>
                      </div>
                      <ChevronRight className="h-5 w-5 text-gray-600 group-hover:text-purple-400 transition-colors flex-shrink-0" />
                    </div>
                  </motion.div>
                </div>

                {/* Предупреждение */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                  className="mt-8 p-4 rounded-xl bg-yellow-500/10 border border-yellow-500/20"
                >
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="h-5 w-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-yellow-400 mb-1">Важно!</h4>
                      <p className="text-sm text-gray-300">
                        Будьте осторожны с системными файлами. Их удаление может повредить работу Windows.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* AnVir Task Manager Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex flex-col lg:flex-row gap-12 items-start">
              {/* Левая часть - информация */}
              <div className="lg:w-1/2">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/20">
                    <Monitor className="h-8 w-8 text-red-400" />
                  </div>
                  <div>
                    <h2 className="text-4xl font-bold">AnVir Task Manager</h2>
                    <p className="text-red-400 font-medium">Диспетчер задач с антивирусом</p>
                  </div>
                </div>

                <p className="text-gray-300 mb-8 leading-relaxed text-lg">
                  Продвинутый диспетчер задач с встроенными антивирусными функциями.
                  Мониторит процессы, сетевые соединения и обнаруживает вредоносное ПО.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10">
                    <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                    <span className="text-sm">Мониторинг процессов</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10">
                    <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                    <span className="text-sm">Сетевой анализ</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10">
                    <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                    <span className="text-sm">Антивирусное сканирование</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10">
                    <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                    <span className="text-sm">Управление автозагрузкой</span>
                  </div>
                </div>
              </div>

              {/* Правая часть - функционал */}
              <div className="lg:w-1/2">
                <div className="grid grid-cols-1 gap-4">
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="p-6 rounded-2xl bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-500/20 hover:border-red-400/40 transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-2 rounded-lg bg-red-500/20">
                        <Settings className="h-6 w-6 text-red-400" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-3">Вкладка "Процессы"</h3>
                        <ul className="space-y-2 text-gray-300 text-sm">
                          <li>• Отслеживание CPU и памяти</li>
                          <li>• Информация о путях к файлам</li>
                          <li>• Завершение подозрительных процессов</li>
                        </ul>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="p-6 rounded-2xl bg-gradient-to-r from-orange-500/10 to-yellow-500/10 border border-orange-500/20 hover:border-orange-400/40 transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-2 rounded-lg bg-orange-500/20">
                        <ShieldCheck className="h-6 w-6 text-orange-400" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-3">Вкладка "Антивирус"</h3>
                        <ul className="space-y-2 text-gray-300 text-sm">
                          <li>• Быстрое и полное сканирование</li>
                          <li>• Обнаружение угроз в реальном времени</li>
                          <li>• Карантин для подозрительных файлов</li>
                        </ul>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="p-6 rounded-2xl bg-gradient-to-r from-yellow-500/10 to-green-500/10 border border-yellow-500/20 hover:border-yellow-400/40 transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-2 rounded-lg bg-yellow-500/20">
                        <Play className="h-6 w-6 text-yellow-400" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-3">Вкладка "Автозагрузка"</h3>
                        <ul className="space-y-2 text-gray-300 text-sm">
                          <li>• Управление программами при старте</li>
                          <li>• Удаление ненужных приложений</li>
                          <li>• Оптимизация загрузки системы</li>
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>
</main>

    

      <Footer />
    </>
  );
}
