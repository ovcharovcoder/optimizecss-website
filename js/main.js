// Translations
const translations = {
  en: {
    badge: '⚡ v3.0 | Modern CSS Reset',
    title: 'Optimize.css',
    description:
      'A minimal, modern CSS reset for stable and predictable UI development.',
    statSize: 'minified',
    statCoverage: 'compatibility',
    statLicense: 'license',
    downloadFull: 'Get full version',
    downloadMin: 'Get minified',
    principlesTitle: 'Key Principles',
    principle1Title: 'Minimalism',
    principle1Desc: 'Only essential resets, no unnecessary overrides',
    principle2Title: 'Stability',
    principle2Desc: 'No rules that break layouts or native behavior',
    principle3Title: 'Neutral baseline',
    principle3Desc: 'No interference with your design decisions',
    principle4Title: 'Accessibility-first',
    principle4Desc: 'Proper focus styles and motion preferences support',
    principle5Title: 'Predictability',
    principle5Desc: 'Consistent behavior across modern browsers',
    principle6Title: 'Lightweight',
    principle6Desc: 'Only 1.5KB minified — no bloat, just essentials',
    comparisonTitle: 'Why not reset.css or normalize.css?',
    compFeature: 'Feature',
    compFocus: 'Modern focus styles',
    compMotion: 'prefers-reduced-motion',
    compDisabled: 'button:disabled cursor',
    compSelection: '::selection styling',
    compTarget: ':target scroll margin',
    compLegacy: 'No legacy hacks',
    compWeight: 'Lightweight',
    testimonialsTitle: 'What developers say',
    testimonial1:
      "The best CSS reset I've used! Lightweight, modern, and doesn't break my styles. Highly recommended!",
    testimonial2:
      'prefers-reduced-motion and focus-visible support is what other resets were missing. Great for accessibility.',
    testimonial3:
      'I use it in all my projects! Great alternative to normalize.css, especially for its size and modern features.',
    role1: 'Front-end Architect',
    role2: 'UI Engineer',
    role3: 'Senior Developer',
    howToTitle: 'How to install',
    fullVersion: 'Full Version',
    fullSize: '~3KB (unminified)',
    fullDesc:
      'Complete version with comments and readable formatting. Perfect for development and learning.',
    minVersion: 'Minified Version',
    minSize: '~1.5KB (minified)',
    minDesc:
      'Optimized for production — smaller size, faster loading. All features, no comments.',
    downloadFullBtn: 'Get full version',
    downloadMinBtn: 'Get minified',
    recommended: '⭐ RECOMMENDED',
    installTitle: 'Add to your HTML',
    installDesc: 'Add before your main stylesheet:',
    installNote:
      'Connect before your main stylesheet so resets apply first. We recommend the minified version for production.',
    buildDate: 'Build date: 27.04.2026 | Version 3.0',
    license: 'MIT License',
  },
  uk: {
    badge: '⚡ v3.0 | Сучасний CSS-скидання',
    title: 'Optimize.css',
    description:
      'Мінімалістичний, сучасний CSS-скидання для стабільної та передбачуваної UI-розробки.',
    statSize: 'мініфікований',
    statCoverage: 'сумісність',
    statLicense: 'ліцензія',
    downloadFull: 'Отримати повну версію',
    downloadMin: 'Отримати мініфіковану',
    principlesTitle: 'Ключові принципи',
    principle1Title: 'Мінімалізм',
    principle1Desc: 'Тільки необхідні скидання, без зайвих перевизначень',
    principle2Title: 'Стабільність',
    principle2Desc: 'Немає правил, які ламають макети або стандартну поведінку',
    principle3Title: 'Нейтральна база',
    principle3Desc: 'Не втручається у ваші дизайн-рішення',
    principle4Title: 'Доступність',
    principle4Desc: 'Правильні focus-стилі та підтримка motion-преференцій',
    principle5Title: 'Передбачуваність',
    principle5Desc: 'Консистентна поведінка в сучасних браузерах',
    principle6Title: 'Легковаговий',
    principle6Desc:
      'Всього 1.5KB у мініфікованому вигляді — без зайвого, тільки необхідне',
    comparisonTitle: 'Чому не reset.css або normalize.css?',
    compFeature: 'Функція',
    compFocus: 'Сучасні focus-стилі',
    compMotion: 'prefers-reduced-motion',
    compDisabled: 'button:disabled cursor',
    compSelection: '::selection стилі',
    compTarget: ':target scroll margin',
    compLegacy: 'Немає застарілих хаків',
    compWeight: 'Легкий',
    testimonialsTitle: 'Що кажуть розробники',
    testimonial1:
      'Найкращий CSS reset, який я використовував! Легкий, сучасний і не ламає мої стилі. Дуже рекомендую!',
    testimonial2:
      'Підтримка prefers-reduced-motion та focus-visible — це те, чого не вистачало в інших resets. Зручно для accessibility.',
    testimonial3:
      'Використовую у всіх своїх проектах! Чудова альтернатива normalize.css, особливо через розмір та сучасні фічі.',
    role1: 'Фронтенд Архітектор',
    role2: 'UI Інженер',
    role3: 'Старший Розробник',
    howToTitle: 'Як встановити',
    fullVersion: 'Повна версія',
    fullSize: '~3KB (не мініфікована)',
    fullDesc:
      'Повна версія з коментарями та читабельним форматуванням. Ідеально для розробки та навчання.',
    minVersion: 'Мініфікована версія',
    minSize: '~1.5KB (мініфікована)',
    minDesc:
      'Оптимізовано для продакшену — менший розмір, швидше завантаження. Всі функції, без коментарів.',
    downloadFullBtn: 'Отримати повну версію',
    downloadMinBtn: 'Отримати мініфіковану',
    recommended: '⭐ РЕКОМЕНДОВАНО',
    installTitle: 'Додайте у ваш HTML',
    installDesc: 'Додайте перед вашим головним файлом стилів:',
    installNote:
      'Підключайте до ваших основних стилів, щоб скидання застосувалися першими. Рекомендуємо мініфіковану версію для продакшену.',
    buildDate: 'Дата збірки: 27.04.2026 | Версія 3.0',
    license: 'MIT License',
  },
};

let currentLang = 'en';

function updateLanguage() {
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[currentLang][key]) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = translations[currentLang][key];
      } else {
        el.innerHTML = translations[currentLang][key];
      }
    }
  });

  document
    .querySelector('#langUA')
    .classList.toggle('active', currentLang === 'uk');
  document
    .querySelector('#langEN')
    .classList.toggle('active', currentLang === 'en');
  document.documentElement.lang = currentLang === 'uk' ? 'uk' : 'en';
}

// Theme toggle
function initTheme() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
  }
}

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  if (currentTheme === 'dark') {
    document.documentElement.removeAttribute('data-theme');
    localStorage.setItem('theme', 'light');
  } else {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
  }
}

// Event listeners
document.getElementById('langToggle').addEventListener('click', () => {
  currentLang = currentLang === 'uk' ? 'en' : 'uk';
  updateLanguage();
});

document.getElementById('themeToggle').addEventListener('click', toggleTheme);

// Initialize
initTheme();
updateLanguage();
