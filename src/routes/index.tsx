import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import heroAsset from "@/assets/hero-city.png";
import liquidityMark from "@/assets/liquidity-mark.png";
import { SignalDuo } from "@/components/SignalDuo";
import themeSong from "./theme.mp3";
import logoMark from "@/assets/logo-mark.png";
import { translations, useLanguage } from "./i18n";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The Standard Reserve" },
      {
        name: "description",
        content:
          "Information on The Standard Reserve: an onchain central bank protocol built on Charters, Branches, and ETH-flow-based issuance.",
      },
      { property: "og:title", content: "The Standard Reserve" },
      {
        property: "og:description",
        content:
          "Information on The Standard Reserve: an onchain central bank protocol built on Charters, Branches, and ETH-flow-based issuance.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const { lang, setLang } = useLanguage();
  const t = translations[lang];

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.35;

    const tryPlay = () => {
      audio
        .play()
        .then(() => setPlaying(true))
        .catch(() => {
          // Autoplay was blocked. Start on the first user interaction instead.
          const startOnInteraction = () => {
            audio.play().then(() => setPlaying(true));
          };
          const events = ["click", "keydown", "touchstart"];
          events.forEach((e) =>
            document.addEventListener(e, startOnInteraction, { once: true }),
          );
          return () =>
            events.forEach((e) =>
              document.removeEventListener(e, startOnInteraction),
            );
        });
    };

    tryPlay();
  }, []);

  const toggleMusic = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      audio.play().then(() => setPlaying(true));
    }
  };

  return (
    <main className="w-full overflow-hidden font-display">
      <audio ref={audioRef} src={themeSong} loop preload="auto" />

      <button
        type="button"
        onClick={toggleMusic}
        aria-label={playing ? t.mute_music : t.play_music}
        className="fixed bottom-6 right-6 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-signal/50 bg-void/80 text-void-fg backdrop-blur transition-transform hover:scale-105"
      >
        {playing ? "🔊" : "🔇"}
      </button>
      <div className="relative min-h-screen">
        <img
          src={heroAsset}
          alt="Futuristic city skyline at sunset with towering skyscrapers above the clouds"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-hero-veil" />

        <header className="relative z-10 flex items-center justify-between px-6 py-6 md:px-12">
          <a href="/" className="flex items-center gap-2.5">
            <img
              src={logoMark}
              alt="Standard Reserve logo"
              className="h-8 w-auto brightness-0 invert"
            />
            <span className="text-[1.6rem] font-semibold tracking-tight text-hero-fg">
              Standard Reserve
            </span>
          </a>

          <nav className="hidden items-center gap-9 text-[0.95rem] text-hero-fg/90 md:flex">
            <a className="transition-opacity hover:opacity-70" href="#solutions">
              {t.nav_protocol}
            </a>
            <Link className="transition-opacity hover:opacity-70" to="/questions">
              {t.nav_questions}
            </Link>
            <a className="transition-opacity hover:opacity-70" href="#how-it-works">
              {t.nav_how}
            </a>
            <a className="transition-opacity hover:opacity-70" href="#early-insight">
              {t.nav_contact}
            </a>
          </nav>

          <div className="flex items-center gap-4">
            <LanguageSwitcher lang={lang} onChange={setLang} />

            <a
              href="https://www.standardreserve.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-hero-fg px-6 py-3 text-[0.95rem] font-medium text-hero-ink shadow-soft transition-transform hover:scale-[1.03]"
            >
              {t.official_site}
            </a>
          </div>
        </header>

        <section className="relative z-10 flex min-h-[calc(100vh-6.5rem)] flex-col items-center justify-center px-6 pb-24 text-center">
          <h1 className="max-w-4xl text-[2.75rem] font-medium leading-[1.05] tracking-tight text-hero-fg drop-shadow-hero sm:text-6xl md:text-7xl">
            {t.hero_title}
          </h1>
          <p className="mt-6 max-w-xl text-balance text-lg leading-relaxed text-hero-fg/85 md:text-xl">
            {t.hero_desc}
          </p>

          <a
            href="#solutions"
            className="mt-10 rounded-full bg-hero-fg px-9 py-4 text-lg font-medium text-hero-ink shadow-soft transition-transform hover:scale-[1.03]"
          >
            {t.learn_how}
          </a>

          <a
            href="#how-it-works"
            className="mt-6 text-[0.95rem] text-hero-fg/85 underline-offset-4 transition-opacity hover:opacity-70"
          >
            {t.how_it_works_link}
          </a>
        </section>
      </div>

      <section
        id="solutions"
        className="relative min-h-screen overflow-hidden border-t border-signal/60 bg-void text-void-fg"
      >
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-signal via-signal-soft to-transparent" />
        <div className="absolute right-[-10rem] top-[-7rem] h-[34rem] w-[34rem] rounded-full bg-signal/10 blur-3xl md:right-[-4rem] md:top-[-10rem] md:h-[46rem] md:w-[46rem]" />

        <div className="relative mx-auto grid min-h-screen max-w-[94rem] grid-cols-1 px-6 py-20 sm:px-10 md:px-14 lg:grid-cols-12 lg:px-20 lg:py-24">
          <div className="relative z-10 lg:col-span-6">
            <p className="mb-7 flex items-center gap-3 text-xs font-medium uppercase text-signal-soft">
              <span className="h-px w-8 bg-signal" />
              {t.mechanics_label}
            </p>
            <h2 className="max-w-[10ch] text-[3.25rem] font-light leading-[0.98] sm:text-6xl lg:text-7xl xl:text-[5.4rem]">
              {t.mechanics_title}
            </h2>
            <p className="mt-10 max-w-md text-[0.95rem] leading-7 text-void-muted sm:text-base">
              {t.mechanics_desc}
            </p>

            <div className="mt-10 flex max-w-lg items-center" aria-hidden="true">
              <span className="h-px flex-1 bg-gradient-to-r from-void-muted/50 via-signal/80 to-signal" />
              <span className="h-2 w-2 rotate-45 border border-signal" />
              <span className="h-px w-16 bg-signal/50" />
            </div>
          </div>

          <div className="relative mt-14 flex min-h-[22rem] items-center justify-center lg:col-span-6 lg:mt-0 lg:min-h-0 lg:items-start lg:justify-end">
            <img
              src={liquidityMark}
              alt="Interlocking geometric network symbol"
              className="relative z-10 w-full max-w-[32rem] object-contain drop-shadow-signal lg:-mr-8 lg:-mt-8 xl:max-w-[39rem]"
            />
          </div>

          <div className="relative z-10 mt-12 border-t border-void-line pt-8 lg:col-span-6 lg:col-start-7 lg:mt-[-3rem] lg:pt-7">
            <p className="max-w-xl text-[0.95rem] leading-7 text-void-muted sm:text-base">
              {t.reflexive_desc}
            </p>
            <div className="mt-8 flex items-center gap-3 text-xs uppercase text-signal-soft">
              <span className="h-1.5 w-1.5 bg-signal" />
              {t.prelaunch}
            </div>
          </div>
        </div>
      </section>

      <SignalDuo lang={lang} />

      <section
        id="how-it-works"
        className="relative overflow-hidden bg-void text-void-fg"
      >
        <div className="absolute left-1/2 top-0 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-signal/10 blur-3xl" />

        <div className="relative mx-auto max-w-[94rem] px-6 py-24 sm:px-10 md:px-14 lg:px-20 lg:py-32">
          <div className="flex flex-col gap-8 border-b border-void-line pb-14 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="mb-7 flex items-center gap-3 text-xs font-medium uppercase text-signal-soft">
                <span className="h-px w-8 bg-signal" />
                {t.breakdown_label}
              </p>
              <h2 className="max-w-[16ch] text-[2.75rem] font-light leading-[1.02] sm:text-5xl lg:text-6xl">
                {t.breakdown_title}
              </h2>
            </div>
            <p className="max-w-sm text-[0.95rem] leading-7 text-void-muted">
              {t.breakdown_desc}
            </p>
          </div>

          <ol className="grid grid-cols-1 gap-px overflow-hidden bg-void-line/60 md:grid-cols-3">
            {[
              { step: "01", title: t.step1_title, body: t.step1_body },
              { step: "02", title: t.step2_title, body: t.step2_body },
              { step: "03", title: t.step3_title, body: t.step3_body },
            ].map((item) => (
              <li
                key={item.step}
                className="group relative bg-void p-8 transition-colors duration-300 hover:bg-void-fg/[0.03] lg:p-10"
              >
                <span className="text-xs tracking-[0.3em] text-signal">
                  {item.step}
                </span>
                <h3 className="mt-8 text-2xl font-light lg:text-3xl">
                  {item.title}
                </h3>
                <p className="mt-4 max-w-xs text-[0.95rem] leading-7 text-void-muted">
                  {item.body}
                </p>
                <span className="mt-10 block h-px w-0 bg-signal transition-all duration-500 group-hover:w-16" />
              </li>
            ))}
          </ol>

    

          <div
            id="early-insight"
            className="mt-20 flex scroll-mt-24 flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between"
          >
            <p className="max-w-lg text-xl font-light leading-relaxed sm:text-2xl">
              {t.whitepaper_cta}
            </p>
            <a
              href="https://www.standardreserve.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-signal px-8 py-4 text-[0.95rem] font-medium text-void transition-transform hover:scale-[1.03]"
            >
              {t.visit_site}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}