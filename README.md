# Amigo Secreto

Este proyecto es una aplicación web simple para realizar un sorteo de "Amigo Secreto". Los usuarios pueden ingresar nombres, que luego serán sorteados para asignar amigos secretos. Es una herramienta útil para realizar sorteos de manera rápida y divertida.

## Características

- **Agregar nombres**: Los usuarios pueden añadir nombres a una lista.
- **Mostrar lista**: Los nombres ingresados se muestran en una lista.
- **Sorteo de amigo secreto**: Una vez que se ingresan los nombres, el sistema selecciona aleatoriamente un nombre de la lista como el amigo secreto.
- **Interfaz intuitiva**: Interfaz fácil de usar para ingresar nombres y sortear.
- **Validaciones**: Se validan los nombres ingresados para asegurarse de que sean válidos antes de agregarlos a la lista. Si el nombre es inválido, se muestra un mensaje de alerta al usuario.

## Validaciones

El proyecto incluye validaciones básicas para asegurarse de que el nombre ingresado sea válido:

1. **Nombre vacío**: Si el campo de texto está vacío, no se agrega el nombre a la lista y se muestra un mensaje de alerta pidiendo al usuario que ingrese un nombre válido.
2. **Lista vacía antes del sorteo**: Si el usuario intenta realizar el sorteo sin haber ingresado nombres, se muestra un mensaje indicando que no hay nombres en la lista y se solicita ingresar algunos antes de continuar.
3. **Sorteo vacío**: Cuando no hay nombres disponibles para sortear, el sorteo no se realiza y se muestra un mensaje de alerta.

## Tecnologías utilizadas

- **HTML**: Estructura básica de la página web.
- **CSS**: Estilo básico para hacer la interfaz más amigable.
- **JavaScript**: Lógica para manejar los nombres, el sorteo y la visualización de resultados.

## Cómo usar

1. **Ingresar nombres**: Escribe el nombre de una persona en el campo de texto y presiona el botón "Añadir" para agregarlo a la lista de amigos.
2. **Validación de nombre**: Si el nombre está vacío, se mostrará una alerta solicitando ingresar un nombre válido.
3. **Realizar el sorteo**: Una vez que hayas agregado varios nombres, presiona el botón "Sortear amigo" para elegir un amigo secreto al azar. El nombre del amigo secreto seleccionado aparecerá en la lista de resultados.
4. **Reiniciar la lista**: La lista se borrará automáticamente después de realizar el sorteo, y podrás comenzar de nuevo.

## Archivos del Proyecto

- **`index.html`**: El archivo HTML principal que contiene la estructura de la página.
- **`style.css`**: El archivo CSS para la estilización de la interfaz.
- **`app.js`**: El archivo JavaScript que contiene la lógica para agregar nombres, mostrar la lista, y sortear al amigo secreto.

## Instrucciones para ejecutar el proyecto

1. Clona este repositorio en tu máquina local:
   ```bash
   git clone https://github.com/tu-usuario/amigo-secreto.git
