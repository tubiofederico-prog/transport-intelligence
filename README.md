# Transport Intelligence

Plataforma web de gestión de comunicaciones, proveedores y viajes para empresas de transporte de carga.

## 🎯 Descripción

Transport Intelligence es un prototipo visual frontend para una solución SaaS B2B que centraliza toda la operación de contratación de transporte. El sistema integra llamadas, WhatsApp, gestión de proveedores, viajes disponibles, análisis con IA, métricas y supervisión del equipo en una sola interfaz moderna y profesional.

## 🚀 Características

- **Dashboard General**: KPIs principales, gráficos de actividad, embudo de conversión y ranking de operadores
- **Comunicaciones**: Registro de llamadas y WhatsApp con detalle y transcripción
- **Análisis IA**: Clasificación automática de conversaciones con intención, score y sentimiento
- **Proveedores**: Base de datos completa de transportistas con perfiles y documentación
- **Viajes**: Gestión de viajes disponibles con filtros y asignación de proveedores
- **Automatizaciones**: Flujos automáticos de envío de viajes y templates de mensajes
- **Métricas**: Gráficos y análisis de desempeño por operador y proveedor
- **Supervisión**: Control en tiempo real del equipo con alertas
- **Usuarios**: Administración de usuarios, roles y permisos
- **Reportes**: Generación y exportación de reportes en múltiples formatos

## 🛠️ Stack Tecnológico

- **React 19** - Framework UI
- **Vite** - Build tool y dev server
- **Tailwind CSS** - Estilos
- **React Router** - Navegación
- **Recharts** - Gráficos
- **Lucide React** - Iconos

## 📦 Instalación

```bash
# Clonar o descargar el proyecto
cd transport-intelligence

# Instalar dependencias
npm install
```

## 🏃 Ejecución

### Modo Desarrollo
```bash
npm run dev
```
La aplicación estará disponible en `http://localhost:5173`

### Build para Producción
```bash
npm run build
```

### Preview del Build
```bash
npm run preview
```

## 📁 Estructura del Proyecto

```
src/
├── components/
│   ├── layout/
│   │   ├── Sidebar.jsx      # Menú lateral fijo
│   │   ├── Header.jsx       # Encabezado superior
│   │   └── Layout.jsx       # Layout principal
│   └── ui/
│       ├── Badge.jsx        # Componente de etiquetas
│       ├── Button.jsx       # Botones reutilizables
│       ├── Card.jsx         # Tarjetas
│       ├── StatCard.jsx     # Tarjetas de estadísticas
│       ├── Avatar.jsx       # Avatares de usuario
│       ├── Table.jsx        # Tablas
│       └── Modal.jsx        # Modales
├── pages/
│   ├── Dashboard.jsx        # Página principal
│   ├── Comunicaciones.jsx   # Gestión de llamadas y WhatsApp
│   ├── AnalisisIA.jsx       # Análisis inteligente
│   ├── Proveedores.jsx      # Gestión de proveedores
│   ├── Viajes.jsx           # Gestión de viajes
│   ├── Automatizaciones.jsx # Flujos automáticos
│   ├── Metricas.jsx         # Métricas y análisis
│   ├── Supervision.jsx      # Control del equipo
│   ├── Usuarios.jsx         # Administración de usuarios
│   └── Reportes.jsx         # Generación de reportes
├── data/
│   ├── mockData.js          # Datos ficticios (usuarios, proveedores, viajes, etc.)
│   └── mockMetrics.js       # Datos de métricas y gráficos
├── App.jsx                  # Configuración de rutas
├── main.jsx                 # Punto de entrada
└── index.css                # Estilos globales
```

## 🎨 Diseño

- **Paleta de Colores**: Blanco, gris claro, negro y violeta/azul tecnológico
- **Componentes**: Cards limpias, tablas, badges, gráficos, modales
- **Tipografía**: Moderna con jerarquía visual clara
- **Espaciado**: Amplio y ordenado
- **Responsive**: Desktop-first, pero adaptable

## 📊 Datos Ficticios

El proyecto incluye datos mock realistas para todas las secciones:

- **6 Proveedores**: Transportes Andina, Carga Norte SAS, Logística Rápida, Flota Central, Camiones del Valle, Rutas Nacionales
- **5 Usuarios**: Alfredo Barraza, Laura Méndez, Carlos Ruiz, Mariana Torres, Juan Pérez
- **20+ Viajes**: Con origen, destino, carga, estado y proveedor
- **30+ Comunicaciones**: Llamadas y WhatsApp con resultado y transcripción
- **Métricas**: Gráficos de actividad, conversión, desempeño

## 🔒 Notas

Este es un **prototipo visual** sin conexión a backend. Todas las interacciones son navegables pero no afectan estado persistente. Los datos son ficticios y se resetean al recargar la página.

## 📝 Secciones Disponibles

| Sección | Descripción |
|---------|-------------|
| Dashboard | Resumen general con KPIs, gráficos y alertas |
| Comunicaciones | Registro de llamadas/WhatsApp con detalle |
| Análisis IA | Clasificación automática de conversaciones |
| Proveedores | Tabla y perfil de proveedores |
| Viajes | Gestión de viajes con prioridades |
| Automatizaciones | Flujos automáticos y templates |
| Métricas | Gráficos y análisis de rendimiento |
| Supervisión | Control del equipo en tiempo real |
| Usuarios | Administración de usuarios y roles |
| Reportes | Generación y exportación de reportes |

## 🎯 Objetivo

Este prototipo está diseñado para mostrarle al cliente cómo se vería la plataforma final. Transmite control, trazabilidad, inteligencia artificial y modernización de operaciones de transporte tradicionales.

---

**Transport Intelligence** - Plataforma moderna para gestión inteligente de transporte de carga.
