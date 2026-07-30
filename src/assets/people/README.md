# Photography

Drop image files in this folder and they appear across the site
automatically. No component edits, no content edits — the filename is the
wiring.

## How it works

Everywhere the site shows a person it renders `PersonPhoto`, which passes a
seed name (e.g. `"Remittance Sender"`) to `src/lib/people.js`. That module
globs this folder at build time and matches the seed to a file by slug:

    "Remittance Sender"  ->  remittance-sender.jpg

If the file exists you get the photograph, everywhere that seed is used.
If it doesn't you get the illustrated portrait, so a partial set is fine —
add photos one at a time and the site fills in as you go.

Accepted extensions: `.jpg` `.jpeg` `.png` `.webp` `.avif`

## Filenames the site looks for

Customer / persona portraits (used on Home, Solutions, Business, Features,
Contact, and the audience tabs):

    remittance-sender.jpg          Individual sending money home
    wallet-customer.jpg            Business using multi-currency wallets
    business-owner.jpg             SME owner / importer-exporter
    freelance-designer.jpg         Freelancer at a laptop
    payroll-manager.jpg            Ops or payroll manager
    platform-founder.jpg           Founder — used on the white-label spread
    fintech-founder.jpg            Fintech partner
    partnerships-manager.jpg       Partnerships lead
    partner-institution-lead.jpg   Partner bank / institution contact
    individual-customer.jpg        Generic individual customer
    support-agent.jpg              Support team member
    compliance-officer.jpg         Compliance team member

Named faces in the avatar stacks and customer stories:

    amina-yusuf.jpg
    farhan-iqbal.jpg
    priya-nair.jpg
    carlos-mendes.jpg

The About page's compliance & legal team row:

    cobanq-compliance-lead.jpg
    cobanq-legal-counsel.jpg
    cobanq-regulatory-officer.jpg
    cobanq-partnerships-lead.jpg

## What to shoot for

- **Portraits** (avatar stacks, story cards, contact cards) are cropped to
  a circle — square source, face centred, at least 600×600.
- **Solution spreads** are cropped 4:3 and run large — landscape, at least
  1200px wide, with the subject off-centre so the crop has room.
- Keep files under ~300KB each; they're bundled as-is, not compressed at
  build time.
- Consistent lighting and treatment across the set matters more than any
  single image — mixed stock looks worse than none.

## Honesty note

If these are stock or AI-generated rather than photographs of actual
customers and staff, don't present them as specific real people. The
customer-story names and quotes are already labelled illustrative on the
site; pairing invented quotes with photorealistic faces reads as a real
endorsement, so keep the disclaimer in place. Photos of your actual team
on the About page are, of course, fine to caption as such.
