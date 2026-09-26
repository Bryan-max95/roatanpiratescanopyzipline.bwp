# Pirates of the Caribbean Zipline

Sitio Next.js con páginas públicas, reservas, reseñas y panel de administración en `/admin.bwp`. Preparado para desplegar desde GitHub en Vercel usando Node.js 22 y pnpm 9.15.4.

## 1. Subir a GitHub

Sube la carpeta del proyecto con `package.json` en la raíz del repositorio. Incluye `app`, `components`, `lib`, `hooks`, `types`, `public`, `database`, `scripts`, los archivos de configuración, `.env.example` y **`pnpm-lock.yaml`**.

Conserva toda la carpeta `public`, incluido `public/uploads`: contiene imágenes que ya puede estar usando tu base de datos. Las nuevas cargas en producción se guardarán en Vercel Blob.

`.gitignore` excluye `.env.local`, `node_modules`, `.next`, cachés y `.vercel`. No subas secretos ni estas carpetas mediante carga manual. No necesitas crear un ZIP ni subir una compilación local.

## 2. Importar el repositorio en Vercel

En Vercel, crea un proyecto con **Add New > Project**, selecciona tu repositorio de GitHub y usa:

| Ajuste | Valor |
| --- | --- |
| Framework Preset | Next.js |
| Root Directory | Carpeta que contiene `package.json` (`./` si está en la raíz) |
| Node.js Version | 22.x |
| Install Command | `pnpm install --frozen-lockfile` |
| Build Command | `pnpm run build` |
| Output Directory | Valor predeterminado de Next.js; no activar una ruta personalizada |

`vercel.json` y `package.json` ya fijan el framework, los comandos y las versiones. No uses `public` u `out` como directorio de salida: las reservas y la administración necesitan las API de Next.js. Vercel realiza la compilación al desplegar.

## 3. Variables de entorno

En **Settings > Environment Variables**, agrega los valores reales para **Production**. Agrégalos también a **Preview** si vas a probar despliegues de ramas; preferiblemente con una base de datos de pruebas separada.

| Variable | Uso |
| --- | --- |
| `DATABASE_URL` | Conexión PostgreSQL/Neon con SSL y pool. Necesaria para reservas, usuarios, sesiones, contenido guardado y reseñas. |
| `BLOB_READ_WRITE_TOKEN` | Token privado del almacén **público** Vercel Blob conectado al proyecto. Necesario para nuevas fotos/videos. |
| `NEXT_PUBLIC_SITE_URL` | URL final con `https://`, por ejemplo `https://tu-proyecto.vercel.app` o tu dominio conectado. |
| `GOOGLE_SITE_VERIFICATION` | Opcional: token de Search Console. |

Los valores de `.env.local` **no se transfieren automáticamente** de tu computadora a Vercel. Copia los valores, sin las comillas del archivo, al panel de Vercel. Nunca uses el prefijo `NEXT_PUBLIC_` para la conexión de base de datos ni para el token Blob.

`ADMIN_ROOT_USERNAME` y `ADMIN_ROOT_PASSWORD` solo se utilizan al inicializar una base nueva. No es necesario añadirlos a Vercel si ya existe el administrador. La aplicación actual no necesita `GEMINI_API_KEY`; `APP_URL` es únicamente una alternativa antigua para la URL pública.

Después de cambiar variables, realiza un **Redeploy** para que se apliquen. Si cambias de dominio, actualiza también `NEXT_PUBLIC_SITE_URL` y vuelve a desplegar.

## 4. Base de datos

Si ya usas Neon y quieres conservar tus datos, conecta Vercel a esa misma base con su cadena de conexión con pool. No crees otra base vacía por accidente.

Para una base nueva, configura `DATABASE_URL`, `ADMIN_ROOT_USERNAME` y una `ADMIN_ROOT_PASSWORD` real de al menos 12 caracteres en tu entorno local o `.env.local`. Luego ejecuta tú, desde la raíz del proyecto:

```sh
pnpm install --frozen-lockfile
pnpm db:migrate
pnpm db:verify
```

La migración crea las tablas, el primer administrador y el contenido inicial. Si ya existe un administrador raíz, conserva su contraseña. También conserva el contenido ya guardado. `db:verify` comprueba las tablas y muestra conteos sin listar datos de clientes.

La migración es un paso explícito; **no se ejecuta automáticamente durante el build**. No es necesario repetirla en cada despliegue. Los scripts aceptan variables del sistema y `.env.local`, con prioridad para las del sistema.

Sin `DATABASE_URL`, las páginas públicas muestran el contenido inicial incluido en el código. Las reservas y los cambios administrativos requieren una base configurada e inicializada; no se consideran guardados sin ella.

## 5. Fotos y videos en producción

En **Storage** del proyecto Vercel, crea o conecta un almacén **Vercel Blob con acceso Public**. Incluye Production en la conexión y comprueba que exista `BLOB_READ_WRITE_TOKEN`. Vuelve a desplegar.

Las nuevas cargas van directamente del navegador a Blob usando autorización de la sesión administrativa; después, el servidor verifica y registra el archivo en PostgreSQL. Esto permite imágenes de hasta 20 MB y videos de hasta 200 MB sin enviar el archivo completo a una función de Vercel. Configuración basada en la [documentación oficial de cargas desde el cliente](https://vercel.com/docs/vercel-blob/client-upload).

Las imágenes Blob están permitidas en `next.config.ts`. El almacenamiento local en `public/uploads/gallery` se conserva únicamente para desarrollo cuando no hay token Blob. En producción se exige Blob para las nuevas cargas.

Se añadió `@vercel/blob` a `package.json` y al lockfile. Vercel lo instalará automáticamente. Para seguir trabajando localmente con estos cambios, ejecuta `pnpm install --frozen-lockfile` cuando quieras actualizar tus dependencias.

## 6. Comprobar después del despliegue

Abre primero el enlace `*.vercel.app` que muestra el despliegue. Comprueba `/`, `/es`, `/experiencia`, `/precios`, `/galeria`, `/ubicacion`, `/contacto` y `/reservar`.

Después verifica `/admin.bwp`: inicio de sesión, carga de una foto/video, cambios en la galería y persistencia al recargar. Realiza una reserva de prueba identificable y comprueba que aparezca en administración. Si usas un dominio propio, conéctalo en **Settings > Domains** con los registros DNS que indique Vercel.

| Problema | Qué revisar |
| --- | --- |
| Vercel devuelve 404 o no encuentra la web | Root Directory, preset Next.js y Output Directory predeterminado. |
| Falla la instalación | Incluir `pnpm-lock.yaml`, usar pnpm 9.15.4 y revisar el primer error del Build Log. |
| La web abre, pero fallan reservas o administración | `DATABASE_URL`, SSL, acceso a Neon y tablas inicializadas; consultar Runtime Logs. |
| Error 503 de base de datos | Falta `DATABASE_URL` en el entorno del despliegue. |
| Error 503 de almacenamiento | Falta conectar Blob y configurar `BLOB_READ_WRITE_TOKEN`. |
| Una imagen antigua da 404 | Falta el archivo correspondiente en `public`, o su nombre no coincide exactamente; Linux distingue mayúsculas. |
| Un archivo Blob no se muestra | El almacén debe ser Public y estar conectado al proyecto. |
| El dominio propio falla, pero `vercel.app` funciona | Revisar los DNS indicados en Domains. |

La configuración fue revisada en archivos. La compilación inicial se interrumpió a petición del usuario; los cambios finales no se han ejecutado, compilado ni validado en un despliegue real. Las comprobaciones anteriores quedan para el despliegue en Vercel.
