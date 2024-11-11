# [Class Web](https://tb-xiirpl1-24.vercel.app/)

The 12th grade RPL 1 class 2024 commemorative website for SMK Taruna Bangsa, Bekasi City, displays students, homeroom teachers, class structure, gallery and real-time chat. Created with Next.js, Typescript, Tailwind, Firebase, Framer motion, shadcn ui + magic ui

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- Node.js: Download and [install Node.js](https://nodejs.org)
- npm: Node.js package manager (comes with Node.js installation)

## Features

- Gallery images/videos
- Authentication
- Serach students
- Real-time chat. Reply, delete

## Getting started

Clone the repository.

```sh
git clone https://github.com/farisnurhkim/class-web.git
```

Navigate to the project directory:

```sh
cd class-web
```

Install dependencies

```sh
npm install
```

## Setup Environment

Create a .env.local file in the root of your project.
create

```sh
AUTH_SECRET=	# Added by `npx auth`. Read more: https://cli.authjs.dev
AUTH_GOOGLE_ID="Your auth google id"
AUTH_GOOGLE_SECRET="Your auth secret id"
```

Create a .env file in the root of your project.

```sh
#firebase setup
NEXT_PUBLIC_API_KEY=your_api_key
NEXT_PUBLIC_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_PROJECT_ID=your_project_id
NEXT_PUBLIC_STORAGE_BUCKET=your_storage_bucket
NEXT_PUBLIC_MESSAGING_SENDER_ID=your_messaging_sender_id
NEXT_PUBLIC_APP_ID=your_app_id
NEXT_PUBLIC_MEASUREMENT_ID=your_measurement_id

#Opsional for google analytics
NEXT_PUBLIC_GTM_ID=your_gtm_id

AUTH_TRUST_HOST=http://localhost:3000  #add this if production mode (change it to your domain)
```

## Development

To start the development server, run:

```sh
npm run dev
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
