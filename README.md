# 🏫 Schoolboard (app)
>*Every school needs a board*

## Description
An EdTech web app designed to help schools organize courses, classrooms and students.
|                                                                                                         |                                                                                                        |
| ------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------|
| ![image](https://github.com/daviloops/schoolboard/assets/63609685/2fb9d1a0-dc01-4156-971f-807458442371) | ![image](https://github.com/daviloops/schoolboard/assets/63609685/b12a403a-5690-4ab5-9231-b3380c184ff9) | 
| ![image](https://github.com/daviloops/schoolboard/assets/63609685/d6ea76b0-6fa1-4a7d-a644-ab3611c09db9) | ![image](https://github.com/daviloops/schoolboard/assets/63609685/20307f1a-a838-484b-9b23-b7b9eb2f1d55) | 

The web app features
- Server side and reactive rendering with *Nextjs* modern React framework
- *Prisma* ORM to generate schemas for database.
- API integration with *swr* and *fetch*.
- Forms managed with *react-hook-form* and validated with yup.
- Design system implemented with *Material UI Joy*.
- *Responsive design* to adjust to different screen sizes.
- *Notistack* to log notifications to user.
- Wrote on *Typescript* for typing and a better dev experience.
- Code analysis to keep a code pattern with *eslint*.
- Storage for user settings with *store*.
- *Parallel routes* to provide content independently and conditionate rendering.
- *Api router* to provide access to RESTful APIs.


## Resources
### UI
- High fidelity design: [Figma design](https://www.figma.com/file/l5aEvax0D02wYWHR7yUYFA/%F0%9F%8F%AB-Schoolboard?type=design&node-id=0-1&mode=design)
### Demo
- Live demo: [Schoolboard demo (app)](https://schoolboard-gray.vercel.app/)
- Video demo: [Schoolboard demo (video)](https://youtu.be/VcX1yORj98A)

## Getting Started

### 1) Install dependencies
Change to the folder directory `cd schoolboard` and run `npm i`.

### 2) Setup env
Setup env variables to connect database. If using postgreSQL database, just update `DATABASE_URL` and `DIRECT_URL` with corresponding database urls as shown in `.env.example`. 
For this project supabase was used and there's a [guide](https://supabase.com/partners/integrations/prisma) for easily obtaining the urls for the env vars. 

Also set `NODE_ENV` to 'development' or 'production', depending your use case.

### 2) Init migrations
Run `npx prisma migrate dev --name init` to initiate migrations

### 3) You are ready to run in local or deploy
To run on local follow the normal nextjs project instructions:

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

To deploy project on vercel set `npm run vercel-build` as build command in vercel app, this will generate tables and create a migration deploy for prisma
