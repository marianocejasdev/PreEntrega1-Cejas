# ☕ Cofi – Web de Café de Especialidad

Este proyecto es la página web de **Cofi**, una marca de café de especialidad, usando **Bootstrap 5** para la base y estilos personalizados con **SCSS** organizados bajo la arquitectura 7-1.

---

## 📂 Estructura SCSS

```scss/
├── abstracts/ # Variables y mixins globales
│ └── _variables.scss
├── base/ # Reset, tipografías y estilos globales
│ ├── _fonts.scss
│ └── _reset.scss
├── layout/ # Secciones principales: header, main, subscription-banner, footer
│ ├── _header.scss
│ ├── _main.scss
│ ├── _subscription-banner.scss
│ └── _footer.scss
└── index.scss # Archivo principal que importa todo```

---

## 🛠️ Compilación SCSS

Compilá con:

bash
sass scss/index.scss css/style.css --watch