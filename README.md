# Calculadora de Gastos Personales

Este proyecto es una calculadora de gastos personales desarrollada utilizando React, TypeScript, y Vite, junto con la Context API para manejar el estado global. El objetivo es proporcionar una herramienta útil para el seguimiento y gestión de gastos personales, aplicando conceptos avanzados de programación en un entorno de desarrollo moderno.

## Tecnologías Utilizadas

- **React**: Utilizado para construir la interfaz de usuario con componentes reutilizables.
- **TypeScript**: Aplicado para añadir tipos estáticos al código, mejorando la mantenibilidad y reduciendo los errores en tiempo de desarrollo.
- **Vite**: Empleado como herramienta de construcción y desarrollo que ofrece un inicio rápido y un empaquetado eficiente.
- **Context API**: Usada para manejar el estado global de la aplicación sin necesidad de librerías externas como Redux.

## Instrucciones para Ejecutar la Aplicación Localmente

### Prerrequisitos

Antes de ejecutar la aplicación, asegúrate de tener instalado Node.js y npm en tu sistema. Puedes descargarlos desde [Node.js official website](https://nodejs.org/).

### Pasos para la Instalación

- **Clonar el Repositorio:** Clona el repositorio del proyecto desde GitHub en tu máquina local utilizando el siguiente comando en tu terminal: git clone https://github.com/lumisof/trackerGastosTs.git
- **Instalar Dependencias:** Accede al directorio del proyecto e instala las dependencias necesarias ejecutando el siguiente comando: cd trackerGastosTs npm install
- **Compilar el Código TypeScript:** Ejecutar el comando: npm run dev
- **Acceder a la Aplicación:** Desde la carpeta clonada, abre el archivo index.html

### Funcionalidades requeridas:

- **Registro de Gastos:** Permitir al usuario registrar nuevos gastos ingresando el nombre del gasto y su respectivo monto.
- **Categorización de Gastos:** Permitir al usuario categorizar los gastos en diferentes categorías (por ejemplo: alimentos, transporte, entretenimiento, etc.).
- **Visualización de Gastos:** Mostrar al usuario una lista de los gastos registrados, junto con su categoría y monto.
- **Cálculo de Total:** Calcular y mostrar al usuario el total de gastos registrados.
- **Gráficos Estadísticos:** Mostrar gráficos estadísticos que representen la distribución de los gastos por categoría.
- **Filtrado de Gastos:** Permitir al usuario filtrar los gastos por categoría o rango de fechas.
- **Guardar en LocalStorage:** Almacenar los gastos registrados en el almacenamiento local del navegador para persistencia de datos.

### Interfaz de Usuario:

- Diseñar una interfaz de usuario intuitiva y atractiva para las funcionalidades mencionadas.
- Utilizar HTML y CSS para crear la estructura y estilos de la interfaz.

### Implementación en TypeScript:

- Utilizar TypeScript para manejar la lógica de cálculo y actualización de la interfaz de usuario.
- Definir tipos de datos adecuados para los gastos, categorías y otros elementos necesarios.
- Organizar el código de forma modular y legible.
