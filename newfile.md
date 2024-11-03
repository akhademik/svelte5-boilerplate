# SvelteKit Project Folder Structure

```
project-root/
├── src/
│   ├── lib/
│   │   ├── components/
│   │   │   ├── common/
│   │   │   │   ├── Button.svelte
│   │   │   │   ├── Input.svelte
│   │   │   │   ├── Modal.svelte
│   │   │   │   └── index.ts           # Barrel exports
│   │   │   ├── layout/
│   │   │   │   ├── Header.svelte
│   │   │   │   ├── Footer.svelte
│   │   │   │   ├── Sidebar.svelte
│   │   │   │   └── Navigation.svelte
│   │   │   └── features/
│   │   │       ├── auth/
│   │   │       │   ├── LoginForm.svelte
│   │   │       │   └── SignupForm.svelte
│   │   │       └── dashboard/
│   │   │           ├── DashboardCard.svelte
│   │   │           └── DashboardStats.svelte
│   │   ├── stores/
│   │   │   ├── auth.js
│   │   │   ├── theme.js
│   │   │   └── index.js               # Combined store exports
│   │   ├── utils/
│   │   │   ├── api.js                 # API utilities
│   │   │   ├── validation.js
│   │   │   ├── formatting.js
│   │   │   └── helpers.js
│   │   ├── constants/
│   │   │   ├── routes.js
│   │   │   ├── config.js
│   │   │   └── api.js
│   │   ├── types/
│   │   │   └── index.ts               # TypeScript definitions
│   │   └── services/
│   │       ├── api/
│   │       │   ├── auth.js
│   │       │   └── users.js
│   │       └── external/
│   │           └── analytics.js
│   ├── routes/
│   │   ├── +layout.svelte             # Root layout
│   │   ├── +layout.server.js          # Server-side layout logic
│   │   ├── +error.svelte             # Error page
│   │   ├── +page.svelte              # Home page
│   │   ├── about/
│   │   │   └── +page.svelte
│   │   ├── blog/
│   │   │   ├── +layout.svelte
│   │   │   ├── +page.svelte
│   │   │   └── [slug]/
│   │   │       ├── +page.svelte
│   │   │       └── +page.server.js
│   │   └── dashboard/
│   │       ├── +layout.svelte
│   │       ├── +layout.server.js      # Protected route logic
│   │       ├── +page.svelte
│   │       └── settings/
│   │           └── +page.svelte
│   ├── params/                        # URL parameters validation
│   │   └── slug.js
│   ├── hooks.client.js                # Client-side hooks
│   └── hooks.server.js                # Server-side hooks
├── static/
│   ├── favicon.ico
│   ├── images/
│   │   └── logo.png
│   ├── fonts/
│   │   └── custom-font.woff2
│   └── manifest.json
├── tests/
│   ├── unit/
│   │   └── components/
│   ├── integration/
│   │   └── routes/
│   └── e2e/
│       └── flows/
├── scripts/
│   ├── build.js
│   └── deploy.js
└── configuration files
    ├── package.json
    ├── svelte.config.js
    ├── vite.config.js
    ├── tsconfig.json                  # If using TypeScript
    ├── .env
    ├── .env.example
    ├── .gitignore
    └── README.md
```

## Directory Explanations

### `/src/lib/`

The `$lib` alias directory for your internal library. Contains reusable code:

- **components/**: Svelte components organized by scope

  - `common/`: Reusable UI components
  - `layout/`: Page layout components
  - `features/`: Feature-specific components

- **stores/**: Svelte stores for state management

  - Individual store files
  - Combined exports in index.js

- **utils/**: Helper functions and utilities

  - API utilities
  - Validation functions
  - Formatting helpers

- **constants/**: Application constants and configuration

  - Route definitions
  - API endpoints
  - Configuration values

- **services/**: External service integrations
  - API service modules
  - Third-party service integrations

### `/src/routes/`

SvelteKit routing structure:

- Root level components (`+layout.svelte`, `+error.svelte`)
- Page routes with their specific layouts
- Dynamic routes with parameters
- Server-side route handling

### `/static/`

Static assets served directly:

- Images
- Fonts
- Manifest files
- Favicons

### `/tests/`

Test files organized by type:

- Unit tests
- Integration tests
- End-to-end tests

## Usage Examples

### Importing Components

```javascript
// Using $lib alias
import Button from '$lib/components/common/Button.svelte'
import { LoginForm } from '$lib/components/features/auth'
import { Header } from '$lib/components/layout'
```

### Using Stores

```javascript
// Store usage
import { auth } from '$lib/stores'
import { theme } from '$lib/stores/theme'
```

### API Services

```javascript
// API service usage
import { userService } from '$lib/services/api/users'
import { apiUtils } from '$lib/utils/api'
```

## Best Practices

1. **Component Organization**

   - Keep components small and focused
   - Use barrel exports for cleaner imports
   - Group related components in feature folders

2. **Route Structure**

   - Use +page.svelte for page content
   - Use +layout.svelte for shared layouts
   - Keep server logic in .server.js files

3. **State Management**

   - Keep stores simple and focused
   - Use composed stores for complex state
   - Export store instances, not store classes

4. **API Integration**

   - Centralize API calls in services
   - Use typed responses with TypeScript
   - Handle errors consistently

5. **Asset Management**
   - Use static/ for public assets
   - Organize images by feature/purpose
   - Optimize assets during build
