import { equipment } from "@/lib/images";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Clock3, Phone } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Button } from "@/components/ui/button";
import { phoneHref, serviceCategories, services } from "@/lib/hospital";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services & Care | Entebbe Regional Referral Hospital" },
      {
        name: "description",
        content:
          "Find outpatient, maternity, paediatric, surgical, laboratory, immunisation and specialist services at Entebbe Regional Referral Hospital.",
      },
      { property: "og:title", content: "Services & Care | Entebbe Regional Referral Hospital" },
      {
        property: "og:description",
        content: "Find the care you need at Entebbe Regional Referral Hospital.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our services"
        title="Care for every stage of life."
        description="Explore the care and support available at Entebbe Regional Referral Hospital."
        image={equipment}
        imageAlt="Hospital staff and visitors alongside medical equipment"
      />
      <section className="py-16 lg:py-24">
        <div className="site-container">
          <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="eyebrow mb-4 text-primary">Clinical departments</p>
              <h2 className="section-title">
                Here when you need us<span className="text-primary">.</span>
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-7 text-muted-foreground">
              See{" "}
              <Link to="/patients/" className="font-bold text-primary underline">
                clinic days
              </Link>{" "}
              for when each specialist clinic runs, or call the hospital before travelling.
            </p>
          </div>
          <div className="grid gap-14">
            {serviceCategories.map((cat) => (
              <div key={cat}>
                <h3 className="border-b border-border pb-4 text-lg font-semibold text-forest">
                  {cat}
                </h3>
                <div className="mt-5 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
                  {services
                    .filter((s) => s.category === cat)
                    .map((service) => (
                      <div
                        key={service.title}
                        className="flex gap-5 border border-border bg-card p-6"
                      >
                        <span className="grid size-12 shrink-0 place-items-center rounded-sm bg-sage text-primary">
                          <service.icon className="size-6" strokeWidth={1.6} />
                        </span>
                        <div>
                          <h4 className="text-lg font-semibold">{service.title}</h4>
                          <p className="mt-2 text-sm leading-6 text-muted-foreground">
                            {service.description}
                          </p>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-sage py-16">
        <div className="site-container grid gap-8 md:grid-cols-[1fr_1fr] md:items-center">
          <div>
            <div className="flex items-center gap-3 text-primary">
              <Clock3 className="size-7" />
              <span className="eyebrow">Around-the-clock support</span>
            </div>
            <h2 className="mt-5 text-3xl font-semibold">Laboratory services, day and night.</h2>
            <p className="mt-4 max-w-lg text-sm leading-7 text-ink-soft">
              Our laboratory operates 24/7. Other clinic availability may vary, so please contact
              the hospital before your visit.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 md:justify-end">
            <Button asChild variant="forest" size="lg">
              <a href={phoneHref}>
                <Phone /> Call the hospital
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/contact/">
                Plan your visit <ArrowUpRight />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      <section className="site-container py-16">
        <p className="text-xs leading-6 text-muted-foreground">
          Service information based on Entebbe Municipal Council’s{" "}
          <a
            className="underline"
            href="https://entebbe.go.ug/ova_dep/public-health/"
            target="_blank"
            rel="noreferrer"
          >
            public health directory
          </a>
          . Please confirm clinic times directly with the hospital.
        </p>
      </section>
    </>
  );
}
