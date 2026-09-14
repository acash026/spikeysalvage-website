# Spikey Salvage

Website for Spikey Salvage, part of Big Sky Salvage — used OEM auto parts in St Cloud, FL. Built with Next.js (App Router), Tailwind CSS v4, shadcn/ui, and Prisma + Neon Postgres.

## Getting started

```bash
npm install
cp .env.example .env   # DATABASE_URL / DIRECT_URL — read by the Prisma CLI
cp .env.example .env.local   # SMTP + contact-email values — read by Next.js
npx prisma migrate dev --name init   # creates the tables in your Neon database
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

- `src/app/` — routes (App Router), API routes under `src/app/api/`
- `src/components/` — shared React components (`Global/` layout chrome, `Home/` homepage sections, `ui/` primitives)
- `src/data/` — static content (`parts.ts` drives the used-auto-parts catalog and product pages, `testimonials.ts`)
- `src/lib/` — `site-config.ts` (brand/contact constants), `mailer.ts` (nodemailer transporter), `prisma.ts` (Prisma client singleton)
- `prisma/schema.prisma` — `PartRequest` (quote-request leads) and `ContactMessage` (contact-form submissions)

## Environment variables

See `.env.example`.

- `DATABASE_URL` / `DIRECT_URL` — Neon Postgres, used by Prisma (`prisma/schema.prisma`). `DATABASE_URL` should be the pooled connection string (host ending in `-pooler`) for app runtime queries; `DIRECT_URL` is the unpooled string used only by `prisma migrate`. The Prisma CLI reads these from a plain `.env` file at the project root (not `.env.local`).
- `SMTP_*` + `ADMIN_EMAIL` power the contact and quote-request forms (`src/app/api/contact`, `src/app/api/send-email`), which both email out via nodemailer **and** persist a row via Prisma. `PUBLIC_CONTACT_EMAIL` is the address shown publicly on the site.

## Deployment

Deploys to Vercel as a standard Next.js app (`npm run build`). No custom `vercel.json` is required — Vercel auto-detects Next.js. `postinstall` runs `prisma generate` automatically. Set `DATABASE_URL`, `DIRECT_URL`, and the SMTP/email vars in the Vercel project's environment variables, and run `npx prisma migrate deploy` (or `migrate dev` locally) against the production database before the first deploy that needs the tables.
