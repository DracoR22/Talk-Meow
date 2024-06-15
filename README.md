<div>
  <img src="/public/talkmeow.png">
  <h1 align="center">Talk Meow 🦄</h1>
</div>

<p align="center">
  This SaaS platform leverages AI to automate customer service interactions on websites, providing quick and accurate responses to customer inquiries. By integrating seamlessly into existing websites, it enhances customer experience while reducing the workload on support teams.
</p>

### 💡 Key Features

- 🧠 AI-Powered Responses: Uses advanced AI to provide instant and accurate replies to customer queries.
- 🌐 Next.js Framework: Built with Next.js for server-side rendering and static site generation.
- 📊 Prisma ORM: Utilizes Prisma for seamless database interactions and type-safe queries.
- 🐘 PostgreSQL Database: Robust, scalable, and SQL-compliant relational database management system.
- ⚡ Real-time Updates: Implements Pusher for real-time notifications and updates.
- 🧩 Customizable Widgets: Easily integrate and customize chat widgets to match website aesthetics.
- 🔒 Secure Authentication: Ensures data protection with secure authentication mechanisms.
- 🔍 Analytics Dashboard: Provides detailed insights into customer interactions and response effectiveness.
- 🎨 User-friendly Interface: Intuitive UI for both customers and support teams to manage interactions effortlessly.

### 🔧 Tech Stack

- ⚛️ Next.js: React-based framework for building server-side rendered and statically generated web applications.
- 🌿 Prisma: Modern ORM for SQL databases, offering type safety and a fluent API for database operations.
- 🐘 PostgreSQL: Robust, scalable, and SQL-compliant relational database management system.
- 🔗 Pusher: Real-time communication service for instant notifications and updates.
- 🦾 TypeScript: Strongly typed programming language that builds on JavaScript, ensuring reliability and scalability.
- 🎉 Tailwind CSS: Utility-first CSS framework for rapid UI development.
- 🧩 React: Library for building user interfaces, providing a component-based approach for developing complex UIs.
- 🚀 Vercel: Deployment and hosting platform optimized for Next.js applications.

### Prerequisites

**Node version 14.x**

### Cloning the repository

```shell
git clone https://github.com/DracoR22/TalkMeow
```

### Install packages

```shell
pnpm install
```

### Setup .env file

```js
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

DATABASE_URL=

NEXT_PUBLIC_PUSHER_APP_CLUSTOR=
NEXT_PUBLIC_PUSHER_APP_SECRET=
NEXT_PUBLIC_PUSHER_APP_KEY=
NEXT_PUBLIC_PUSHER_APP_ID=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/auth/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/auth/sign-up

NEXT_PUBLIC_UPLOAD_CARE_PUBLIC_KEY=
UPLOAD_CARE_SECRET_KEY=

NEXT_PUBLIC_APP_URL=

NODE_MAILER_EMAIL=
NODE_MAILER_GMAIL_APP_PASSWORD=

OPEN_AI_KEY=

STRIPE_SECRET=
NEXT_PUBLIC_STRIPE_PUBLISH_KEY=

NODE_TLS_REJECT_UNAUTHORIZED=0
```

### Start the app

```shell
pnpm dev
```

## Available commands

Running commands with npm `pnpm [command]`

| command | description                              |
| :------ | :--------------------------------------- |
| `dev`   | Starts a development instance of the app |
| `build` | Build project                            |
| `lint`  | Check lint for project                   |