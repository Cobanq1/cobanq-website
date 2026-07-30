# Putting the website live — step by step

This guide takes you from "the code is on GitHub" to "the website is live on my
own domain". Follow it in order. **You do not need to know how to code.**

Everything here is free except the domain you already own.

---

## Before you start

Have these to hand:

- Your **GitHub** login (the account this code lives in).
- Your **Hostinger** login (where your domain is).
- About **30 minutes**. The domain part takes a few hours to finish on its own
  in the background — that's normal, and you don't have to sit and watch it.

---

## Part 1 — Put the site on Netlify (about 10 minutes)

Netlify takes the code, builds the website, and serves it to the world. Free.

### 1. Create a Netlify account

1. Go to **https://app.netlify.com/signup**
2. Click **"Sign up with GitHub"** (this is the easy route — it links the two
   accounts straight away).
3. Approve the permissions GitHub asks for.

### 2. Connect this repository

1. In Netlify, click **"Add new site"** → **"Import an existing project"**.
2. Choose **"Deploy with GitHub"**.
3. If it asks which repositories Netlify can see, choose **"Only select
   repositories"** and pick this one, then **Install**.
4. From the list, click this repository's name.

### 3. Check the build settings

Netlify reads the settings from the `netlify.toml` file in this repo, so the
boxes should already be filled in correctly:

| Setting          | Value           |
| ---------------- | --------------- |
| Branch to deploy | `main`          |
| Build command    | `npm run build` |
| Publish directory| `dist`          |

If the branch box shows something else, change it to whichever branch your
finished code is on.

Click **"Deploy site"**.

### 4. Wait for the green tick

It takes 1–2 minutes. When it's done you'll get a temporary address like
`https://spontaneous-otter-4f3c21.netlify.app`. **Open it — that's your website,
already live.** The custom domain is the next part.

> **If the deploy fails:** click into the failed deploy and read the last few
> red lines of the log. Nine times out of ten it's a typo in a file that was
> edited by hand. Fix it, push it to GitHub, and Netlify rebuilds automatically.

---

## Part 2 — Point your Hostinger domain at it (about 15 minutes, then a wait)

### 1. Tell Netlify about the domain

1. In Netlify, open your site → **Domain management** (sometimes under
   *Site configuration* → *Domains*).
2. Click **"Add a domain"** and type your domain, e.g.
   `alliancesecuritygroup.co.uk` — **without** `https://` and **without** `www`.
3. Netlify will say the domain is registered elsewhere. Click
   **"Add domain"** / **"Yes, add it"** anyway.
4. Netlify now shows you the DNS records you need. **Leave this tab open.**

You'll see something like:

- An **A record** for the bare domain pointing at `75.2.60.5`
- A **CNAME record** for `www` pointing at `your-site-name.netlify.app`

> ⚠️ **Use the values Netlify shows you on your own screen, not the ones typed
> above.** Netlify occasionally changes the IP address, and yours is the one
> that counts.

### 2. Add those records in Hostinger

1. Log in to **Hostinger** → **Domains** → click your domain → **DNS / Nameservers**.
2. You want the **DNS Zone editor** (the list of records — A, CNAME, MX, TXT).

**Delete first:** if there is already an **A record** with the name `@` (often
pointing at a Hostinger parking page), delete it. Same for any existing
**CNAME** named `www`. Leave **MX** records alone — those are your email, and
deleting them stops email working.

**Then add:**

| Type    | Name  | Points to / Value                       | TTL     |
| ------- | ----- | --------------------------------------- | ------- |
| `A`     | `@`   | the IP address Netlify showed you       | default |
| `CNAME` | `www` | `your-site-name.netlify.app`            | default |

Save.

### 3. Wait

DNS changes take anywhere from 10 minutes to a few hours to spread around the
internet (occasionally up to 24 hours). There is nothing to do but wait. You can
check progress at **https://dnschecker.org** — type your domain and see if the
IP matches the one Netlify gave you.

### 4. Turn on HTTPS (the padlock)

Once Netlify's Domain management page shows your domain as **"Netlify DNS" /
"External DNS — OK"** with a green tick:

1. Scroll to **HTTPS** on that same page.
2. Click **"Verify DNS configuration"**, then **"Provision certificate"**.
3. Wait a minute or two. You'll get a free SSL certificate, and
   `https://yourdomain.co.uk` will show a padlock.

If the button is greyed out, DNS hasn't finished spreading yet. Come back later
and it'll work.

### 5. Force HTTPS

Same page, tick **"Force HTTPS"**. Now anyone typing the `http://` version gets
redirected to the secure one automatically.

**Done. The website is live on your domain.**

---

## Part 3 — Make the forms reach you (5 minutes — DO NOT SKIP)

The website has two forms: the client enquiry form and the officer registration
form. They already work, but **Netlify won't email you unless you tell it
where to send them.**

1. In Netlify: **Site configuration** → **Forms** → **Form notifications**.
2. Click **"Add notification"** → **"Email notification"**.
3. Put in the email address you want enquiries sent to.
4. Under "Form", choose **`client-enquiry`**. Save.
5. Repeat for **`officer-application`**.

### Test it

Open your live site, fill in the enquiry form with your own details, and submit.
Within a minute you should get an email. Every submission is also stored in
Netlify under **Forms**, so nothing is ever lost even if an email bounces.

> Netlify's free plan includes 100 form submissions per month. If you start
> getting more than that, their next tier is inexpensive — you'll get an email
> warning you first.

---

## Part 4 — Fill in the details still missing (5 minutes)

Open the file **`src/site.js`** in GitHub (click the file, then the pencil
icon), and fill in the blanks:

```js
email: "",             // your business email address
companyNumber: "",     // your Companies House number
registeredAddress: "", // your registered office address
```

Anything you leave as `""` just doesn't appear on the site — nothing breaks.

**Please do fill in `companyNumber` and `registeredAddress`.** A UK limited
company is legally required to show its registered name, company number and
registered office address on its website.

Scroll down, click **"Commit changes"**, and Netlify rebuilds the site
automatically in about a minute.

You can change anything else in that file the same way — the phone number, the
contact name, the coverage area, the list of services.

---

## Everyday jobs, later on

| I want to…                          | Do this                                                                 |
| ----------------------------------- | ----------------------------------------------------------------------- |
| Change the phone number or details  | Edit `src/site.js` on GitHub, commit. Live in ~1 minute.                 |
| Change the words on a page          | Edit the matching file in `src/pages/`, commit.                          |
| Add or reword a service             | Edit the `services` list in `src/site.js`.                               |
| Add a social media link             | Fill in the `social` section of `src/site.js`.                           |
| See who's enquired                  | Netlify → your site → **Forms**.                                         |
| Undo a change that broke the site   | Netlify → **Deploys** → find the last working one → **"Publish deploy"**.|

That last one is worth remembering. **You can always roll the site back to a
version that worked, in two clicks.** Nothing you do is permanent.

---

## Running it on your own computer (optional)

Only needed if you want to preview changes before they go live.

```bash
npm install     # once, the first time
npm run dev     # then open http://localhost:5173
```

Press `Ctrl + C` in the terminal to stop it.
