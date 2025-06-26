# The [<img src="https://github.com/sikessem/art/blob/HEAD/images/logo.svg" alt="Sikessem" height="24" />][sikessem-link] Platform

**Sikessem** is a modular and extensible ecosystem that allows everyone —
individuals, creators, freelancers, or teams — to **create, manage, share, automate,
and grow** their digital spaces, content, and tools.  
It’s a development studio, a platform, and a digital system — all in one.

> ⚡ A new way to build and manage the future.  
> 👀 Want to see [Sikessem][sikessem-link] in action?
Just install and explore.  
> No friction, no demo — only real usage.

[![Preview 👁️](https://github.com/Sikessem/Art/blob/HEAD/images/preview.png)][sikessem-link]

[![php-icon]][php-link]
[![typescript-icon]][typescript-link]
[![license-icon]][license-link]
[![actions-icon]][actions-link]
[![twitter-icon]][twitter-link]

---

## ✨ What is Sikessem?

Sikessem is a **next-generation digital platform**. It lets users:

- Create **spaces** (personal, professional, collaborative…)
- Generate, organize, and evolve content from simple notes to full websites
- Share or publish ideas, products, media, or services
- Manage tasks, finances, time, clients, and projects
- Explore, reuse, remix existing modules — or build your own
- Tap into a powerful ecosystem of services (CRM, ERP, CMS, LMS, PIM…)

Everything starts with a single thought —
and can become the foundation of a full digital system.

---

## 🎯 Philosophy

- **Open access** — Free to use as long as usage stays fair
- **High modularity** — Install only what you need
- **Scalable by design** — From a note to a full company
- **User-first** — No forms, no sales pitch. Use first.
- **Built for all** — From total beginners to expert developers

> Type. Build. Iterate. Everything else follows.

---

## 🔖 Contents

- [📋 Requirements](#-requirements)
- [📦 Available Modules](#-available-modules)
- [🎉 Getting Started](#-getting-started)
- [⚡️ Installation](#️-installation)
- [🗃️ Manage Database](#️-manage-database)
- [🌐 Starting server](#-starting-server)
- [🧪 Testing and debugging](#-testing-and-debugging)
  - [🧹 Keep a modern codebase](#-keep-a-modern-codebase)
  - [⚗️ Run static analysis](#️-run-static-analysis)
  - [✅ Run unit tests](#-run-unit-tests)
  - [🐛 Check all code bugs](#-check-all-code-bugs)
- [📖 Documentation](#-documentation)
- [👏 Contribution](#-contribution)
- [👷 Code of Conduct](#-code-of-conduct)
- [👥 Contributing Guide](#-contributing-guide)
- [🔒️ Good First Issues](#️-good-first-issues)
- [💬 Discussions](#-discussions)
- [🔐 Security Reports](#-security-reports)
- [📄 License](#-license)

## 📋 Requirements

- **Requires [PHP 8.2+](https://php.net/releases/)**
(at least 8.2.14 recommended to avoid potential bugs).
- **Requires [Bun 1.0+](https://bun.sh/)**
(at least 1.0.21 recommended to avoid potential bugs).
- **Requires [Composer >=2.6.6](https://getcomposer.org/)**
to manage [PHP][php-link] dependencies.
- **Requires [Git ~2.42.0](https://git-scm.com/)** to manage source code.

## 📦 Available Modules

Explore the core tools that power [Sikessem][sikessem-link]:

- 🔁 `Workflow Automation`
- 🧠 `AI Integration Layer`
- 🔐 `Advanced Auth`
- 📊 `Insights + Analytics`
- ⚙️ `Customizable APIs`

→ More modules available after setup.

## 🎉 Getting Started

### ⚡️ Installation

[Use this template](https://github.com/sikessem/sikessem/generate) or create a new [Sikessem project](https://packagist.org/packages/sikessem/sikessem) via the [Composer](https://getcomposer.org/) `create-project` command (recommended):

```shell
composer create-project sikessem/sikessem sikessem
```

Where ***sikessem*** is the name of your [Sikessem][sikessem-repo] application.

Access the working directory:

```shell
cd sikessem
```

Install PHP dependencies:

```shell
composer install
```

Install JS / TS dependencies:

```shell
bun install
```

🍱 Build assets

The production build will generate client and server modules by running both client and server build commands:

```shell
bun run build
```

### 🗃️ Manage Database

Install migrations:

```shell
php artisan migrate:install && php artisan migrate
```

### 🌐 Starting server

Run the server in development mode:

```shell
php artisan serve --host=sikessem.local --port=8000
```

Then visit [http://sikessem.local:8000/](http://sikessem.local:8000/)

### 🧪 Testing and debugging

#### 🧹 Keep a modern codebase

- with **Biome**:

```shell
bun check
```

- with **Pint**:

```shell
composer check
```

#### ⚗️ Run static analysis

- Using **PHPStan**:

```shell
composer analyse
```

#### ✅ Run unit tests

- using **Bun**:

```shell
bun run test
```

- using **PEST**:

```shell
composer test
```

🚀 Execute end-to-end testing with **Playwright**:

```shell
bun e2e
```

#### 🐛 Check all code bugs

- Frontend:

```shell
bun debug
```

- Backend:

```shell
composer debug
```

## 📖 Documentation

The full documentation for the Sikessem Sikessem can be found on [this address][docs-link].

## 👏 Contribution

The main purpose of this repository is to continue evolving Sikessem. We want to make contributing to this project as easy and transparent as possible, and we are grateful to the community for contributing bug fixes and improvements. Read below to learn how you can take part in improving Sikessem.

### [👷 Code of Conduct][conduct-link]

Sikessem has adopted a Code of Conduct that we expect project participants to adhere to.
Please read the [full text][conduct-link] so that you can understand what actions will and will not be tolerated.

### 👥 [Contributing Guide][pr-link]

Read our [**Contributing Guide**][pr-link] to learn about our development process, how to propose bugfixes and improvements, and how to build and test your changes to Sikessem.

### 🔒️ Good First Issues

We have a list of [good first issues][gfi] that contain bugs which have a relatively limited scope. This is a great place to get started, gain experience, and get familiar with our contribution process.

### 💬 Discussions

Larger discussions and proposals are discussed in [**Sikessem's GitHub discussions**][discuss-link].

## 🔐 Security Reports

If you discover a security vulnerability within [Sikessem](https://sikessem.com), please email [SIGUI Kessé Emmanuel](https://github.com/siguici) at [contact@sigui.ci](mailto:contact@sigui.ci). All security vulnerabilities will be promptly addressed.

## 📄 License

The Sikessem Sikessem is open-sourced software licensed under the  [MIT License](https://opensource.org/licenses/MIT) - see the [LICENSE][license-link] file for details.

---

<div align="center"><sub>Made with ❤︎ by <a href="https://twitter.com/intent/follow?screen_name=siguici" style="content:url(https://img.shields.io/twitter/follow/siguici.svg?label=@siguici);margin-bottom:-6px">@siguici</a>.</sub></div>

[sikessem-logo]: https://github.com/sikessem/art/blob/HEAD/images/sikessem.svg
[sikessem-link]: https://sikessem.com "Sikessem"
[sikessem-repo]: https://github.com/sikessem/sikessem "Sikessem Source Code"

[php-icon]: https://img.shields.io/badge/PHP-ccc.svg?style=flat&logo=php
[php-link]: https://github.com/sikessem/sikessem/search?l=php "PHP code"

[typescript-icon]: https://img.shields.io/badge/TypeScript-294E80.svg?logo=typescript
[typescript-link]:  https://github.com/sikessem/sikessem/search?l=typescript "TypeScript code"

[javascript-icon]: https://img.shields.io/badge/JavaScript-yellow.svg?logo=javascript
[javascript-link]:  https://github.com/sikessem/sikessem/search?l=javascript "JavaScript code"

[packagist-version-icon]: https://img.shields.io/packagist/v/sikessem/sikessem
[packagist-version-link]: https://packagist.org/packages/sikessem/sikessem "Sikessem Releases"

[packagist-download-icon]: https://img.shields.io/packagist/dt/sikessem/sikessem
[packagist-download-link]: https://packagist.org/packages/sikessem/sikessem "Sikessem Downloads"

[actions-icon]: https://github.com/sikessem/sikessem/workflows/Tests/badge.svg
[actions-link]: https://github.com/sikessem/sikessem/actions "Sikessem status"

[pr-icon]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg?color=brightgreen
[pr-link]: https://github.com/sikessem/.github/blob/HEAD/CONTRIBUTING.md "PRs welcome!"

[twitter-icon]: https://img.shields.io/twitter/follow/SikessemHQ.svg?label=@SikessemHQ
[twitter-link]: https://x.com/intent/follow?screen_name=SikessemHQ "Ping SikessemHQ"

[license-icon]: https://img.shields.io/badge/license-MIT-blue.svg
[license-link]: https://github.com/sikessem/sikessem/blob/HEAD/LICENSE "Sikessem License"
[conduct-link]: https://github.com/sikessem/sikessem/blob/HEAD/CODE_OF_CONDUCT.md
[discuss-link]: https://github.com/orgs/sikessem/discussions
[docs-link]: https://github.com/sikessem/sikessem#readme "Sikessem Documentation"

[gfi]: https://github.com/sikessem/sikessem/labels/good%20first%20issue

[php-home]: https://php.net
[laravel-home]: https://laravel.com "Laravel"
[livewire-home]: https://laravel-livewire.com "Laravel Livewire"
[typescript-home]: https://www.typescriptlang.org "TypeScript"
[alpinejs-home]: https://alpinejs.dev "Alpine.js"
[tailwindcss-home]: https://tailwindcss.com "TailwindCSS"
[vitejs-home]: https://vitejs.dev "Vite.js"
[biome-home]: https://biomejs.dev "Biome"
[bun-home]: https://bun.sh "Bun"
[pint-home]: https://github.com/laravel/pint "Laravel Pint"
[phpstan-home]: https://phpstan.org "PHPStan"
[larastan-home]: https://github.com/nunomaduro/larastan "Larastan"
[rector-home]: https://getrector.com "Rector"
