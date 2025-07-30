El proyecto fue creado con Next.js y utiliza TypeScript. Lo inicialicé con `create-next-app` y le agregué como "chiche" el sistema de internacionalización con `next-intl`.

Para correrlo localmente hay que correr los siguientes comandos:

```bash
yarn install

yarn build

yarn start

```

Si todo salió bien podés abrir [http://localhost:3000](http://localhost:3000) en tu navegador.

En cuanto al diseño, utilicé Tailwind CSS para los estilos. La fuente principal es Inter, que se carga desde Google Fonts.
Iba a agregarle theming, pero al no tener un diseño de dark mode, decidí no complicar el proyecto con eso.

El proyecto incluye un componente de encabezado (`Header`) que muestra el título de la aplicación y un selector de idioma. También hay una página de formulario (`@form/page.tsx`) donde los usuarios pueden interactuar con la aplicación.

La página de formulario la hice como un [slot](https://nextjs.org/docs/app/api-reference/file-conventions/parallel-routes) para que maneje su propio estado de loading y error si fuera en un contexto productivo. En este caso maneje el estado de loading y error directamente en el componente de formulario.
Los componentes que están allí estan ahí por que son propios de esta "página" y no son reutilizables en otros lugares de la aplicación.
Los que si lo son, están en la carpeta `@components` y están más pensados para ser "globales" o reutilizables en toda la aplicación.

Utilicé `zustand` para manejar los estados globales de la aplicación ya que tengo experiencia y me gusta mucho.
Podría haber sido un provider, pero como es una aplicación pequeña, decidí usar `zustand` directamente para simplificar la gestión del estado. Además leí este artículo que me pareció interesante: [Why I use Zustand instead of React Context](https://frontendmasters.com/blog/introducing-zustand/).

Para las llamadas a la API hice un hook personalizado llamado `useApi` que maneja las solicitudes y respuestas de la API.
Este aproach es solo por ser un proyecto academico y no por ser una buena práctica. En un proyecto real, probablemente usaría algo como `react-query` o `swr` o `graphql` para manejar las solicitudes a la API de manera más eficiente, con mejor manejo de caché, errores, loading, reintentos, etc.
