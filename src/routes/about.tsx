import { exterior, partnership } from "@/lib/images";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, HeartHandshake, MapPin, ShieldPlus, UsersRound } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/page-hero";
import { catchment, training } from "@/lib/hospital";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | Entebbe Regional Referral Hospital" },
      {
        name: "description",
        content:
          "Get to know Entebbe Regional Referral Hospital and its commitment to patient-centred care in Uganda.",
      },
      { property: "og:title", content: "About Us | Entebbe Regional Referral Hospital" },
      {
        property: "og:description",
        content: "A hospital for our people, committed to care in Entebbe and beyond.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="A hospital for our people."
        description="Rooted in Entebbe. Committed to the health and wellbeing of the communities we serve."
        image={exterior}
        imageAlt="Exterior of Entebbe Regional Referral Hospital"
      />
      <section className="site-container grid gap-12 py-20 lg:grid-cols-[.85fr_1.15fr] lg:items-center lg:gap-20 lg:py-28">
        <div>
          <p className="eyebrow mb-5 text-primary">Our purpose</p>
          <h2 className="section-title">
            Care grounded in community<span className="text-primary">.</span>
          </h2>
          <p className="mt-7 text-base leading-8 text-ink-soft">
            Entebbe Regional Referral Hospital is a public healthcare facility serving Entebbe and
            surrounding communities. Every day, our teams work across outpatient, inpatient and
            specialist care to support people at their most important moments.
          </p>
          <p className="mt-5 text-base leading-8 text-ink-soft">
            We are focused on a welcoming, supportive experience for patients and their families —
            and on working with partners to keep improving care.
          </p>
          <Button asChild variant="forest" size="lg" className="mt-8">
            <Link to="/services/">
              Explore our services <ArrowUpRight />
            </Link>
          </Button>
        </div>
        <figure className="overflow-hidden rounded-xl bg-sage">
          <img
            src={partnership}
            alt="Hospital representatives and visitors working together in a meeting"
            width={2048}
            height={1536}
            className="aspect-[4/3] w-full object-cover"
            loading="lazy"
          />
          <figcaption className="px-6 py-5 text-sm text-ink-soft">
            Listening, learning and working together for our community.
          </figcaption>
        </figure>
      </section>
      <section className="bg-sage py-20">
        <div className="site-container">
          <p className="eyebrow mb-5 text-primary">What matters to us</p>
          <h2 className="section-title max-w-xl">
            Putting people first, always<span className="text-primary">.</span>
          </h2>
          <div className="mt-11 grid gap-4 md:grid-cols-3">
            {[
              {
                icon: HeartHandshake,
                title: "Compassion",
                text: "Care that starts with listening, dignity and respect for every person.",
              },
              {
                icon: ShieldPlus,
                title: "Quality",
                text: "A commitment to thoughtful, dependable care at every step.",
              },
              {
                icon: UsersRound,
                title: "Community",
                text: "Working together to build healthier families and stronger communities.",
              },
            ].map((item) => (
              <div key={item.title} className="border-t-2 border-primary pt-7">
                <item.icon className="size-8 text-primary" strokeWidth={1.6} />
                <h3 className="mt-7 text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 max-w-xs text-sm leading-7 text-ink-soft">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-forest py-20 text-forest-foreground">
        <div className="site-container">
          <p className="eyebrow mb-5 text-sun">Teaching & partnership</p>
          <h2 className="section-title max-w-2xl">
            Building the health workforce of tomorrow<span className="text-sun">.</span>
          </h2>
          <div className="mt-11 grid gap-8 md:grid-cols-3">
            {training.map((t) => (
              <div key={t.title} className="border-t border-forest-foreground/25 pt-6">
                <t.icon className="size-8 text-sun" strokeWidth={1.5} />
                <h3 className="mt-6 text-lg font-semibold">{t.title}</h3>
                <p className="mt-3 text-sm leading-6 text-forest-foreground/75">{t.text}</p>
              </div>
            ))}
          </div>
          <p className="mt-12 text-xs text-forest-foreground/60">
            Serving: {catchment.join(" · ")}.
          </p>
        </div>
      </section>
      <section className="site-container flex flex-col gap-7 py-20 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <MapPin className="size-7 text-primary" />
          <h2 className="mt-5 text-3xl font-semibold">Come visit us in Entebbe.</h2>
          <p className="mt-2 text-sm text-muted-foreground">Nsamizi Road, Entebbe, Uganda</p>
        </div>
        <Button asChild variant="forest" size="lg">
          <Link to="/contact/">
            Contact & directions <ArrowUpRight />
          </Link>
        </Button>
      </section>
    </>
  );
}
