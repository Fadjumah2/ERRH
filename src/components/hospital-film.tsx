import { useEffect, useRef, useState } from "react";
import { Pause, Play } from "lucide-react";
import { entrancePoster, hospitalFilm } from "@/lib/images";

export function HospitalFilm() {
  const video = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const element = video.current;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const connection = (navigator as Navigator & { connection?: { saveData?: boolean } })
      .connection;
    if (element && !motion.matches && !connection?.saveData) {
      element.src = hospitalFilm;
      element.play().catch(() => setPlaying(false));
    }
    const stopMotion = () => {
      if (motion.matches) element?.pause();
    };
    motion.addEventListener("change", stopMotion);
    return () => {
      motion.removeEventListener("change", stopMotion);
      element?.pause();
    };
  }, []);

  function toggle() {
    const element = video.current;
    if (!element) return;
    if (!element.paused) element.pause();
    else {
      if (!element.getAttribute("src")) element.src = hospitalFilm;
      element.play().catch(() => setPlaying(false));
    }
  }

  return (
    <figure className="hospital-film">
      <video
        ref={video}
        poster={entrancePoster}
        muted
        loop
        playsInline
        preload="none"
        aria-label="A short view of the entrance to Entebbe Regional Referral Hospital"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onError={() => {
          setPlaying(false);
          setFailed(true);
        }}
      />
      <div className="film-location">
        <span className="status-dot" /> Entebbe, Uganda
      </div>
      <figcaption className="film-caption">
        <div>
          <span className="eyebrow">A place for our community</span>
          <p>Welcome to Entebbe Regional.</p>
        </div>
        {!failed && (
          <button
            type="button"
            onClick={toggle}
            className="film-control"
            aria-label={playing ? "Pause hospital video" : "Play hospital video"}
          >
            {playing ? (
              <Pause size={17} fill="currentColor" />
            ) : (
              <Play size={17} fill="currentColor" />
            )}
            <span>{playing ? "Pause" : "Play"}</span>
          </button>
        )}
      </figcaption>
    </figure>
  );
}
