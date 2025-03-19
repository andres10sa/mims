# MIMS - Proyecto Next.js

Este es un proyecto basado en Next.js que utiliza Redux para la gestión de estado y consume una API de diccionario.

## 🚀 Instalación y Ejecución

Sigue estos pasos para clonar y ejecutar el proyecto en tu máquina local:

### 1. Clonar el repositorio
```bash
git clone https://github.com/andres10sa/mims.git
cd mims
```

### 2. Instalar dependencias
```bash
npm install
```

### 3. Configurar variables de entorno
Crea un archivo `.env.local` en la raíz del proyecto y agrega la siguiente variable:
```
NEXT_PUBLIC_DICTIONARY_API_URL=https://api.dictionaryapi.dev/api/v2/entries/en
```

### 4. Ejecutar el proyecto
```bash
npm run dev
```
El servidor se iniciará en `http://localhost:3000/`.

## 📂 Estructura del Proyecto
El código está organizado en las siguientes carpetas clave:

- **`app/`** - Contiene las páginas y la estructura principal de la aplicación.
- **`components/`** - Componentes reutilizables de la UI.
- **`constants/`** - Constantes globales utilizadas en el proyecto.
- **`models/`** - Tipos e interfaces para la gestión de datos.
- **`redux/`** - Configuración de Redux con slices y store.

## 🛠️ Tecnologías Usadas
- **Next.js** - Framework de React para SSR y SSG.
- **Redux Toolkit** - Manejo del estado global.
- **React Icons** - Iconos para la interfaz.
- **Headless UI** - Componentes accesibles y personalizables.

---
📌 **Autor**: [andres10sa](https://github.com/andres10sa)

