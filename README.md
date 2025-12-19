# Link Star - Developer Documentation

A WordPress Gutenberg block plugin that provides a customizable link block with advanced styling options and hover effects.

## Overview

Link Star adds a powerful link block to the WordPress block editor with extensive customization options including hover effects, icon support, and advanced styling controls. The block is perfect for creating call-to-action buttons, styled navigation elements, and interactive link components.

## Requirements

- **WordPress:** 6.7 or higher
- **PHP:** 7.4 or higher
- **Node.js:** 18.0 or higher
- **npm/yarn:** Latest stable version

## Quick Start

### Installation

1. Clone the repository into your WordPress plugins directory:

```bash
cd wp-content/plugins/
git clone <repository-url> link-star
cd link-star
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Start development mode:

```bash
npm start
# or
yarn start
```

4. Activate the plugin in WordPress admin

## Development

### Available Scripts

| Command                   | Description                                                |
| ------------------------- | ---------------------------------------------------------- |
| `npm start`               | Start development mode with hot reload and blocks manifest |
| `npm run build`           | Build production-ready files with blocks manifest          |
| `npm run format`          | Format code using WordPress Prettier config                |
| `npm run lint:js`         | Lint JavaScript files                                      |
| `npm run lint:css`        | Lint CSS/SCSS files                                        |
| `npm run packages-update` | Update @wordpress packages to latest versions              |
| `npm run plugin-zip`      | Create a distributable plugin ZIP file                     |

### Development Workflow

1. **Start Development Server:**

```bash
npm start
```

This will watch for changes and automatically rebuild the block.

2. **Make Your Changes:**
    - Edit files in `src/linkstar/`
    - Changes will be hot-reloaded in the editor

3. **Build for Production:**

```bash
npm run build
```

4. **Test Your Changes:**
    - Add the block to a page/post in the WordPress editor
    - Test all features and styling options
    - Check browser console for errors

## Building for Production

### Create Production Build

```bash
npm run build
```

This will:

1. Compile and minify JavaScript
2. Process and minify SCSS to CSS
3. Generate asset dependency files
4. Create blocks manifest
5. Output to `build/` directory

### Create Distribution Package

```bash
npm run plugin-zip
```

This creates a `link-star.zip` file ready for:

- WordPress.org submission
- Manual installation
- Client delivery

### Files Included in Distribution

The plugin ZIP includes:

- `build/` - Compiled assets
- `languages/` - Translation files
- `link-star.php` - Main plugin file
- `readme.txt` - WordPress.org readme
- Excludes: `node_modules/`, `src/`, dev config files

## Internationalization (i18n)

### Text Domain

The plugin uses the text domain: `link-star`

### Adding Translatable Strings

In JavaScript:

```javascript
import { __ } from '@wordpress/i18n';

const label = __('Link URL', 'link-star');
```

In PHP:

```php
__( 'Link Star', 'link-star' );
```

### Generating Translation Files

Translation files should be placed in the `languages/` directory following WordPress naming conventions.

---

**Happy Coding! 🚀**
