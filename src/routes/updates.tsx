import { exterior, immunisation, surgery } from "@/lib/images";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { updates } from "@/lib/hospital";

export const Route = createFileRoute("/updates")({
  head: () => ({
    meta: [
      { title: "News & Updates | Entebbe Regional Referral Hospital" },
      {
        name: "description",
        content:
          "Read recent community health and hospital updates from Entebbe Regional Referral Hospital’s official X account.",
      },
      { property: "og:title", content: "News & Updates | Entebbe Regional Referral Hospital" },
      {
        property: "og:description",
        content: "Recent news and community stories from Entebbe Regional Referral Hospital.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: UpdatesPage,
});

function UpdatesPage() {
  const images: Record<string, string> = {
    exterior: exterior,
    immunisation: immunisation,
    surgery: surgery,
  };
  return (
    <>
      <PageHero
        eyebrow="News & updates"
        title="Stories from our hospital."
        description="A look at the people, partnerships and moments shaping care in our community."
      />
      <section className="site-container py-16 lg:py-24">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="eyebrow mb-4 text-primary">Latest stories</p>
            <h2 className="section-title">
              Around Entebbe<span className="text-primary">.</span>
            </h2>
          </div>
          <a
            href="https://x.com/EntebbeRRH"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:underline"
          >
            Follow us on X <ExternalLink className="size-4" />
          </a>
        </div>
        <div className="mt-11 grid gap-x-6 gap-y-12 md:grid-cols-3">
          {updates.map((item) => (
            <article key={item.title}>
              <a href={item.href} target="_blank" rel="noreferrer" className="group block">
                <div className="overflow-hidden rounded-xl bg-sage">
                  <img
                    src={images[item.image]}
                    alt={item.title}
                    className="h-auto w-full object-contain"
                    loading="lazy"
                  />
                </div>
                <div className="mt-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[.08em] text-primary">
                  <span>{item.category}</span>
                  <span className="size-1 rounded-full bg-sun" />
                  <span className="text-muted-foreground">{item.date}</span>
                </div>
                <h3 className="mt-3 text-xl font-semibold leading-snug group-hover:text-primary">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.description}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-primary">
                  View original post <ArrowUpRight className="size-4" />
                </span>
              </a>
            </article>
          ))}
        </div>
      </section>
      <section className="bg-forest py-14 text-forest-foreground">
        <div className="site-container flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="eyebrow text-sun">Stay connected</p>
            <h2 className="mt-3 text-2xl font-semibold">More stories, straight from the source.</h2>
          </div>
          <a
            href="https://x.com/EntebbeRRH"
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-fit items-center gap-2 border-b border-sun pb-1 text-sm font-bold text-sun"
          >
            Visit our X profile <ArrowUpRight className="size-4" />
          </a>
        </div>
      </section>
    </>
  );
}
