import { Container, Button } from "../components/ui";
import { LogoMark } from "../components/Logo";
import { site } from "../site";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[80vh] items-center overflow-hidden bg-ink-950">
      <div className="absolute inset-0 bg-hatch" />
      <Container className="relative py-24 text-center">
        <LogoMark className="mx-auto h-16 w-16" />
        <p className="mt-8 text-[11px] font-bold uppercase tracking-[0.22em] text-gold-400">
          404 — page not found
        </p>
        <h1 className="mx-auto mt-4 max-w-xl text-4xl leading-tight text-white">
          Nothing on this post.
        </h1>
        <p className="mx-auto mt-4 max-w-md text-[17px] leading-relaxed text-ink-200/70">
          That page doesn't exist. Head back to the home page, or call {site.contactName} on{" "}
          {site.phone}.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <Button to="/" size="lg">Back to home</Button>
          <Button href={`tel:${site.phoneLink}`} tone="outlineLight" size="lg">
            Call {site.phone}
          </Button>
        </div>
      </Container>
    </section>
  );
}
