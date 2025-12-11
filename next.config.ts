import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 1. Включаем статический экспорт
  output: "export",

  // 2. Отключаем оптимизацию изображений (GitHub Pages не умеет сжимать их на лету)
  images: {
    unoptimized: true,
  },

  // 3. ВАЖНО: Если ты деплоишь в репозиторий вида "username.github.io/repo-name",
  // укажи имя репозиторий здесь. Если репозиторий называется "my-site", пиши "/my-site".
  // Если это личный сайт (username.github.io), эту строку можно удалить.
  basePath: "/new-opd", 
};

export default nextConfig;