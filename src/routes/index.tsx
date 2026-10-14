import {
  exterior,
  team,
  immunisation,
  surgery,
  equipment,
  partnership,
  frontGate,
} from "@/lib/images";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  ChevronRight,
  Clock3,
  HeartPulse,
  MapPin,
  Phone,
  Siren,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  clinicTimetable,
  criticalUnits,
  directionsUrl,
  facts,
  phoneHref,
  services,
  updates,
} from "@/lib/hospital";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Entebbe Regional Referral Hospital | Quality Healthcare Close to You" },
      {
        name: "description",
        content:
          "Explore patient services, care, hospital news and directions to Entebbe Regional Referral Hospital in Uganda.",
      },
      {
        property: "og:title",
        content: "Entebbe Regional Referral Hospital | Quality Healthcare Close to You",
      },
      {
        property: "og:description",
        content:
          "Explore patient services, care, hospital news and directions to Entebbe Regional Referral Hospital in Uganda.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

function Home() {
  const newsImages: Record<string, string> = {
    surgery: surgery,
    exterior: exterior,
    immunisation: immunisation,
  };
  return (
    <>
      <section className="home-hero">
        <div className="hero-team-banner">
          <img
            className="hero-team-background"
            src={team}
            alt="Hospital team gathered outside Entebbe Regional Referral Hospital"
            width={2048}
            height={1536}
            fetchPriority="high"
          />
          <div className="site-container hero-copy">
            <p className="eyebrow hero-kicker">
              <span /> Entebbe Regional Referral Hospital
            </p>
            <h1>
              Care for our
              <br />
              community.
              <br />
              <span>Every day.</span>
            </h1>
            <p className="hero-intro">
              Quality healthcare close to you. From your first visit to specialist care, we’re here
              for you and the people you love.
            </p>
            <div className="hero-actions">
              <Button asChild variant="sun" size="lg">
                <Link to="/services/">
                  Find the care you need <ArrowUpRight />
                </Link>
              </Button>
              <Link to="/patients/" className="hero-text-link">
                Plan your visit <ArrowRight size={17} />
              </Link>
            </div>
            <div className="hero-note">
              <span className="hero-note-icon">
                <HeartPulse size={21} />
              </span>
              <p>
                <strong>Here when it matters.</strong>
                <span>Emergency &amp; casualty care, 24 hours a day.</span>
              </p>
            </div>
          </div>
        </div>
        <div className="site-container hero-layout">
          <div className="hero-visual">
            <figure className="hospital-hero-photo">
              <img
                src={frontGate}
                alt="Front gate of Entebbe Regional Referral Hospital"
                width={1344}
                height={796}
                loading="lazy"
              />
              <figcaption className="photo-caption">
                <div>
                  <span className="eyebrow">A place for our community</span>
                  <p>Welcome to Entebbe Regional.</p>
                </div>
              </figcaption>
            </figure>
            <div className="hero-visual-foot">
              <span>Rooted in Entebbe.</span>
              <span>
                Here for you. <ArrowUpRight size={15} />
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="emergency-ribbon">
        <div className="site-container flex flex-col gap-4 py-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <Siren className="size-7 shrink-0" strokeWidth={1.6} />
            <p className="text-sm font-semibold">
              Emergency? Come straight to casualty, open 24 hours a day, 7 days a week.
            </p>
          </div>
          <Link
            to="/referrals/"
            className="inline-flex items-center gap-2 text-sm font-bold hover:underline"
          >
            Emergency & referrals <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="site-container grid grid-cols-2 gap-6 py-10 lg:grid-cols-4">
          {facts.map((f) => (
            <div key={f.label}>
              <p className="text-xs font-bold uppercase tracking-[.08em] text-muted-foreground">
                {f.label}
              </p>
              <p className="mt-2 text-lg font-semibold text-forest">{f.value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-sage text-sage-foreground">
        <div className="site-container grid grid-cols-1 divide-y divide-primary/15 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          <Link
            to="/services/"
            className="group flex min-h-28 items-center gap-4 py-5 sm:px-5 lg:px-9 first:pl-0"
          >
            <span className="grid size-11 shrink-0 place-items-center rounded-sm bg-background">
              <HeartPulse className="size-5" />
            </span>
            <span className="min-w-0 flex-1">
              <strong className="block text-sm font-bold">Find the care you need</strong>
              <small className="mt-1 block text-xs text-ink-soft">Explore our services</small>
            </span>
            <ChevronRight className="size-4 shrink-0 transition-transform group-hover:translate-x-1" />
          </Link>
          <a
            href={phoneHref}
            className="group flex min-h-28 items-center gap-4 py-5 sm:px-5 lg:px-9"
          >
            <span className="grid size-11 shrink-0 place-items-center rounded-sm bg-background">
              <Phone className="size-5" />
            </span>
            <span className="min-w-0 flex-1">
              <strong className="block text-sm font-bold">Speak to our team</strong>
              <small className="mt-1 block text-xs text-ink-soft">Call the hospital</small>
            </span>
            <ChevronRight className="size-4 shrink-0 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href={directionsUrl}
            target="_blank"
            rel="noreferrer"
            className="group flex min-h-28 items-center gap-4 py-5 sm:px-5 lg:px-9 last:pr-0"
          >
            <span className="grid size-11 shrink-0 place-items-center rounded-sm bg-background">
              <MapPin className="size-5" />
            </span>
            <span className="min-w-0 flex-1">
              <strong className="block text-sm font-bold">Find your way here</strong>
              <small className="mt-1 block text-xs text-ink-soft">Nsamizi Road, Entebbe</small>
            </span>
            <ChevronRight className="size-4 shrink-0 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="site-container">
          <div className="flex flex-col justify-between gap-7 md:flex-row md:items-end">
            <div>
              <p className="eyebrow mb-5 text-primary">How we care for you</p>
              <h2 className="section-title max-w-[610px]">
                The right care,
                <br />
                at the right time<span className="text-primary">.</span>
              </h2>
            </div>
            <div className="max-w-sm">
              <p className="text-sm leading-7 text-ink-soft">
                From everyday health needs to specialist treatment, our teams are here for you and
                your family.
              </p>
              <Link
                to="/services/"
                className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-primary hover:underline"
              >
                View all services <ArrowUpRight className="size-4" />
              </Link>
            </div>
          </div>
          <div className="mt-12 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
            {services.slice(0, 4).map((service, i) => (
              <Link
                to="/services/"
                key={service.title}
                className="care-card group flex min-h-[275px] flex-col justify-between border border-border bg-card p-7 transition-colors hover:bg-sage"
              >
                <div className="flex justify-between">
                  <span className="grid size-12 place-items-center rounded-sm bg-sage text-primary">
                    <service.icon className="size-6" strokeWidth={1.6} />
                  </span>
                  <span className="text-xs text-muted-foreground">0{i + 1}</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">{service.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    {service.description}
                  </p>
                </div>
                <ArrowUpRight className="size-4 text-primary transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section
        className="site-container middle-photo-break"
        aria-labelledby="hospital-team-heading"
      >
        <div className="team-photo-heading">
          <div>
            <p className="eyebrow text-primary">A hospital for our people</p>
            <h2 id="hospital-team-heading" className="section-title">
              People at the heart
              <br />
              of our care<span className="text-primary">.</span>
            </h2>
          </div>
          <p>
            Dedicated teams, a shared purpose and a commitment to the communities of Entebbe and
            beyond.
          </p>
        </div>
        <figure>
          <img
            src={team}
            alt="Hospital team and guests gathered outside Entebbe Regional Referral Hospital"
            width={2048}
            height={1536}
            loading="lazy"
            className="editorial-photo"
          />
          <figcaption>Our hospital community, together in Entebbe.</figcaption>
        </figure>
      </section>

      <section className="bg-sage py-20 lg:py-24">
        <div className="site-container grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="eyebrow mb-5 text-primary">Regional referral care</p>
            <h2 className="section-title">
              Ready for the patients others refer<span className="text-primary">.</span>
            </h2>
            <p className="mt-6 max-w-lg text-sm leading-7 text-ink-soft">
              We receive patients from health centres and district facilities across Entebbe,
              Wakiso, Kalangala and beyond, supported by critical care and diagnostics around the
              clock.
            </p>
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {criticalUnits.map((u) => (
                <div key={u.title} className="flex gap-3">
                  <u.icon className="mt-0.5 size-5 shrink-0 text-primary" />
                  <span className="text-sm font-semibold text-forest">{u.title}</span>
                </div>
              ))}
            </div>
            <Button asChild variant="forest" size="lg" className="mt-9">
              <Link to="/referrals/">
                How referrals work <ArrowUpRight />
              </Link>
            </Button>
          </div>
          <div className="bg-background p-7 sm:p-9">
            <div className="flex items-center gap-3 text-primary">
              <CalendarDays className="size-6" />
              <span className="eyebrow">Specialist clinic days</span>
            </div>
            <div className="mt-6 divide-y divide-border">
              {clinicTimetable.map((r) => (
                <div key={r.day} className="flex flex-col gap-1 py-3.5 sm:flex-row sm:gap-6">
                  <span className="w-36 shrink-0 text-sm font-bold text-forest">{r.day}</span>
                  <span className="text-sm text-ink-soft">{r.clinics}</span>
                </div>
              ))}
            </div>
            <Link
              to="/patients/"
              className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-primary hover:underline"
            >
              Visiting hours & patient guide <ArrowUpRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="hospital-journal py-20 lg:py-28">
        <div className="site-container">
          <div className="journal-heading">
            <div>
              <p className="eyebrow mb-5 text-primary">A closer look</p>
              <h2 className="section-title">
                Our people.
                <br />
                Our hospital<span className="text-primary">.</span>
              </h2>
            </div>
            <p>Real moments from the teams, partnerships and shared work behind our care.</p>
          </div>
          <div className="journal-grid">
            <figure className="journal-feature">
              <img
                src={equipment}
                width={2048}
                height={1536}
                alt="Hospital staff and visitors viewing medical equipment at Entebbe Regional Referral Hospital"
                loading="lazy"
              />
              <figcaption>
                <span className="eyebrow">Care &amp; collaboration</span>
                <h3>Working together for better care.</h3>
                <Link to="/services/">
                  Explore our services <ArrowUpRight size={18} />
                </Link>
              </figcaption>
            </figure>
            <figure className="journal-secondary">
              <img
                src={partnership}
                width={2048}
                height={1536}
                alt="Hospital representatives and visitors in a meeting"
                loading="lazy"
              />
              <figcaption>
                <span className="eyebrow">People &amp; partnership</span>
                <h3>Good care begins with working together.</h3>
                <Link to="/about/">
                  Get to know our hospital <ArrowUpRight size={18} />
                </Link>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="site-container">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="eyebrow mb-5 text-primary">From our hospital</p>
              <h2 className="section-title">
                News & community<span className="text-primary">.</span>
              </h2>
            </div>
            <Link
              to="/updates/"
              className="hidden items-center gap-2 text-sm font-bold text-primary hover:underline sm:inline-flex"
            >
              See all updates <ArrowUpRight className="size-4" />
            </Link>
          </div>
          <div className="mt-11 grid gap-5 md:grid-cols-3">
            {updates.map((item) => (
              <article key={item.title}>
                <div className="overflow-hidden rounded-xl bg-sage">
                  <img
                    src={newsImages[item.image]}
                    alt={item.title}
                    loading="lazy"
                    className="h-auto w-full object-contain"
                  />
                </div>
                <div className="mt-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[.08em] text-primary">
                  <span>{item.category}</span>
                  <span className="size-1 rounded-full bg-sun" />
                  <span className="text-muted-foreground">{item.date}</span>
                </div>
                <h3 className="mt-3 text-xl font-semibold leading-snug">{item.title}</h3>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Read ${item.title} on X`}
                  className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-primary hover:underline"
                >
                  Read on X <ArrowUpRight className="size-4" />
                </a>
              </article>
            ))}
          </div>
          <Link
            to="/updates/"
            className="mt-9 inline-flex items-center gap-2 text-sm font-bold text-primary sm:hidden"
          >
            See all updates <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>

      <section className="bg-sun text-sun-foreground">
        <div className="site-container flex flex-col gap-6 py-10 md:flex-row md:items-center md:justify-between">
          <div className="flex items-start gap-5">
            <Clock3 className="mt-1 size-9 shrink-0" strokeWidth={1.5} />
            <div>
              <h2 className="text-xl font-semibold">Need laboratory services?</h2>
              <p className="mt-1 text-sm text-sun-foreground/80">
                Our laboratory is available 24 hours a day, 7 days a week.
              </p>
            </div>
          </div>
          <Button asChild variant="forest" size="lg">
            <Link to="/contact/">
              Get directions <ArrowUpRight />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
