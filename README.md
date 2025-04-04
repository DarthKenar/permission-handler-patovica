# 🔒 Patovica - Simple TypeScript Permission Handler 🛡️

Patovica is a lightweight, type-safe permissions handler for TypeScript applications. Named after the Argentine slang for "bouncer" (security guard), this library helps you manage role-based access control (RBAC) in your applications with ease.

[![npm version](https://img.shields.io/npm/v/permission-handler-patovica)](https://npmjs.com/package/permission-handler-patovica)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## 🚀 Installation

```bash
npm install permission-handler-patovica
```

## ✨ Features

- 🔐 Type-safe permission checking with TypeScript
- 💪 Simple and intuitive API
- 🛡️ Role-based access control
- 🔍 Support for wildcard permissions (`ALL`)
- 📦 Zero dependencies

## 📋 Usage

### Basic Example

```typescript
import { Patovica, ALL } from 'permission-handler-patovica';

// Define your roles and permissions
const patovica = new Patovica({
  ADMIN: [ALL],                  // Admins have access to everything
  EDITOR: ['edit:posts', 'view:posts'],
  USER: ['view:posts']
} as const);

// Check if a user has permission
const admin = { id: 1, role: 'ADMIN' as const };
const editor = { id: 2, role: 'EDITOR' as const };
const user = { id: 3, role: 'USER' as const };

// Check permissions
console.log(patovica.hasPermission(admin, 'edit:posts'));  // true (has ALL permissions)
console.log(patovica.hasPermission(editor, 'edit:posts')); // true
console.log(patovica.hasPermission(user, 'edit:posts'));   // false
console.log(patovica.hasPermission(user, 'view:posts'));   // true
```

### Advanced Usage with Custom Types

```typescript
import { Patovica, ALL } from 'permission-handler-patovica';

// Define your custom roles and permissions
type MyRoles = 'ADMIN' | 'MANAGER' | 'USER';
type MyPermissions = 'create:project' | 'edit:project' | 'view:project' | 'delete:project';

// Create a roles configuration
const rolesConfig = {
  ADMIN: [ALL],
  MANAGER: ['create:project', 'edit:project', 'view:project'],
  USER: ['view:project']
} as const;

// Create a type-safe Patovica instance
const patovica = new Patovica(rolesConfig);

// User object with typed role
const user = { 
  id: 1, 
  name: 'John Doe',
  role: 'MANAGER' as const 
};

// Check permissions (fully type-safe)
if (patovica.hasPermission(user, 'edit:project')) {
  console.log('User can edit projects');
} else {
  console.log('Permission denied');
}
```

## 🔍 API Reference

### `Patovica<T>`

The main class for permission handling.

#### Constructor

```typescript
constructor(config: T)
```

- `config`: A record mapping role names to arrays of permission strings.

#### Methods

##### `hasPermission(user: { role: Role }, permission: Permissions): boolean`

Checks if a user with the given role has the specific permission.

- `user`: An object with a `role` property that matches a role in your configuration
- `permission`: A permission string to check
- Returns: `boolean` - Whether the user has the requested permission

### Constants

#### `ALL`

A special permission constant that grants access to all permissions.

```typescript
import { ALL } from 'permission-handler-patovica';

const roles = {
  ADMIN: [ALL], // Administrators have all permissions
  USER: ['view:posts']
};
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

Made with ❤️ by DarthKenar
