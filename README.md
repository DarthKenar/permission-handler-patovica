# 🔒 Permisos Patovica - Permission Handler 🛡️ (en desarrollo)

¡Bienvenido a **Patovica**, tu guardián de permisos en Node.js! 👮♂️  
Una librería escrita en TypeScript que gestiona roles y permisos de forma elegante y eficiente. 

[![npm version](https://img.shields.io/npm/v/permission-handler-patovica)](https://npmjs.com/package/permission-handler-patovica)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## 🚀 Instalación

```bash
npm install permission-handler-patovica
```

💡 ¿Por qué Patovica?

✅ Define roles y permisos en segundos.

🔍 Verifica accesos con funciones simples.

🛡️ Middleware listo para Express.

📦 Tipado fuerte gracias a TypeScript.

### Configura roles y permisos

```js
import Patovica from 'permission-handler-patovica';

  Patovica.init({
    roles: {
      admin: ['create', 'read', 'update', 'delete'],
      user: ['read', 'update'],
      guest: ['read']
    }
  });
```

### Verifica permisos

```js
  const userRole = 'user';
  const hasPermission = await Patovica.checkPermission(userRole, 'update');

  if (hasPermission) {
    console.log('✅ Acceso concedido!');
  } else {
    console.log('⛔ ¡Acción prohibida!');
  }
```

### Comandos disponibles

| Comando | Descripción |
| --- | --- |
| `Patovica.init(options)` | Inicializa la librería con opciones de configuración
| `Patovica.hasPermission(role, permission)` | Verifica si un rol tiene un permiso
| `Patovica.checkPermission(role, permission)` | Verifica si un rol tiene un permiso y devuelve un booleano
| `Patovica.getRoles()` | Devuelve un array de roles
| `Patovica.getPermissions()` | Devuelve un array de permisos

### Tipados

| Tipado | Descripción |
| --- | --- |
| `Patovica.Roles` | Tipado para roles |
| `Patovica.Permissions` | Tipado para permisos |

### 🧪 ¿Quieres Contribuir?

¡PRs son bienvenidos! 🎉

Haz fork al proyecto.

Crea una rama (git checkout -b feat/super-feature).

Commit (git commit -m 'Añadir super feature').

Push (git push origin feat/super-feature).

Abre un PR.

📜 Licencia
MIT © ¡Usa libremente, pero menciona al autor! 😄

Hecho con ❤️ y un poco de café ☕ por DarthKenar
