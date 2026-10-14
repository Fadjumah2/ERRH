import { hospitalLogo } from "@/lib/images";
import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
}: {
  eyebrow: string;
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
}) {
  return (
    <section
      className={`relative overflow-hidden ${image ? "bg-forest text-forest-foreground" : "page-hero-light bg-sage text-sage-foreground"}`}
    >
      {image && (
        <>
          <img
            src={image}
            alt={imageAlt ?? ""}
            className="absolute inset-0 size-full object-cover object-center"
          />
          <div className="hero-shade absolute inset-0" />
        </>
      )}
      {!image && <img src={hospitalLogo} alt="" aria-hidden="true" className="page-hero-crest" />}
      <div className="site-container relative flex min-h-[330px] flex-col justify-end py-14 sm:min-h-[390px] sm:py-20">
        <div
          className={`mb-7 flex items-center gap-2 text-xs font-semibold ${image ? "text-forest-foreground/80" : "text-primary"}`}
        >
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <ChevronRight className="size-3" />
          <span>{eyebrow}</span>
        </div>
        <p className={`eyebrow mb-4 ${image ? "text-sun" : "text-primary"}`}>{eyebrow}</p>
        <h1 className="max-w-3xl text-[clamp(2.8rem,6vw,5rem)] font-semibold leading-[1.04] tracking-[-.04em]">
          {title}
        </h1>
        <p
          className={`mt-5 max-w-xl text-base leading-7 ${image ? "text-forest-foreground/85" : "text-ink-soft"}`}
        >
          {description}
        </p>
      </div>
    </section>
  );
}
