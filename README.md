# Alliance Security Group — website

Marketing and recruitment site for **Alliance Security Group Limited**, a UK
supplier of SIA licensed security personnel.

The site has two jobs:

1. **Win work** — show businesses and larger security contractors what we
   provide, and collect enquiries.
2. **Find officers** — get SIA licensed guards, CCTV operators, dog handlers and
   fire marshals to register their details so we can call them when work comes
   up.

## 👉 To put the site live, read [DEPLOY.md](./DEPLOY.md)

That guide walks through Netlify and pointing a Hostinger domain at it, step by
step, assuming no technical knowledge.

---

## Before launch — fill these in

Open **`src/site.js`** and complete the blanks:

- `email` — business email address
- `companyNumber` — Companies House number
- `registeredAddress` — registered office address

Anything left as `""` is simply hidden on the site. A UK limited company must
display its registered name, number and office address on its website, so the
last two should be filled in before launch.

---

## Editing content

Almost everything you'd want to change lives in one of two places:

| File            | Contains                                                              |
| --------------- | --------------------------------------------------------------------- |
| `src/site.js`   | Phone, contact name, company details, the five services, sectors, roles, and the accreditation wording. |
| `src/forms.js`  | The fields on both enquiry forms.                                     |

Page copy lives in `src/pages/`. Shared bits (header, footer, buttons, forms)
live in `src/components/`.

> **If you add a form field in `src/forms.js`**, add an `<input>` with the same
> `name` to the matching hidden form in `index.html`. Netlify only records
> fields it saw when it built the site — see the comment in that file.

## Pages

| Route       | File                    |
| ----------- | ----------------------- |
| `/`         | `src/pages/Home.jsx`    |
| `/services` | `src/pages/Services.jsx`|
| `/clients`  | `src/pages/Clients.jsx` |
| `/careers`  | `src/pages/Careers.jsx` |
| `/about`    | `src/pages/About.jsx`   |
| `/contact`  | `src/pages/Contact.jsx` |
| `/privacy`  | `src/pages/Privacy.jsx` |

## Tech

React 19 + Vite + Tailwind CSS 4, deployed on Netlify. Forms are handled by
Netlify Forms — no server, no database, no monthly bill.

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build into dist/
npm run lint
```
