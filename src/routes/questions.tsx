import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";

export const Route = createFileRoute("/questions")({
  head: () => ({
    meta: [
      { title: "Protocol Literacy Quiz — Reserve Thesis" },
      {
        name: "description",
        content:
          "Answer 15 multiple-choice questions and see how well you actually understand The Standard Reserve's Charter and Branch mechanics.",
      },
      { property: "og:title", content: "Protocol Literacy Quiz — Reserve Thesis" },
      {
        property: "og:description",
        content:
          "A 15-question multiple-choice quiz on how The Standard Reserve's onchain central bank actually works.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: QuestionsPage,
});

type Question = {
  q: string;
  options: string[];
  answer: number;
  why: string;
};

const QUESTIONS: Question[] = [
  {
    q: "What is a Charter in The Standard Reserve?",
    options: [
      "A transferable trading pass",
      "A soulbound license to operate in the network",
      "A governance proposal",
      "A yield-bearing savings account",
    ],
    answer: 1,
    why: "Charters are soulbound (non-transferable) NFTs — they can't be sold or moved between wallets.",
  },
  {
    q: "How many Genesis Charters are available, and at what cost?",
    options: [
      "1,000, free to whitelisted users",
      "Unlimited, priced in ETH",
      "10,000, auctioned to the highest bidder",
      "100, reserved for the team",
    ],
    answer: 0,
    why: "Only 1,000 Genesis Charters exist and they're distributed free to the whitelist.",
  },
  {
    q: "After Genesis, how do you get a new Charter?",
    options: [
      "Referral rewards",
      "A daily Dutch auction paid in ETH",
      "Staking $STANDARD for 30 days",
      "They're no longer available",
    ],
    answer: 1,
    why: "Post-genesis Charters are won through a daily Dutch auction, paid in ETH.",
  },
  {
    q: "What does a Charter come with automatically?",
    options: [
      "10 Branches",
      "1 Branch",
      "A share of the treasury",
      "Nothing until activated",
    ],
    answer: 1,
    why: "Every Charter starts with one Branch already open, up to a max of 10 per Charter.",
  },
  {
    q: "How do you open additional Branches beyond the first?",
    options: [
      "They open automatically over time",
      "Win a Dutch auction paid in $STANDARD, which is burned",
      "Pay a flat ETH fee",
      "Vote on it via governance",
    ],
    answer: 1,
    why: "Expansion licenses are won via a separate Dutch auction paid in $STANDARD — and that payment is 100% burned.",
  },
  {
    q: "Can you withdraw earned $STANDARD at any time?",
    options: [
      "Yes, it streams to your wallet daily",
      "No, it stays locked until you close a Branch",
      "Only after 1 year",
      "Only if you own 10 Branches",
    ],
    answer: 1,
    why: "Rewards accrue inside the system and only pay out when you close the Branch that earned them.",
  },
  {
    q: "What happens when you close a Branch?",
    options: [
      "Nothing, Branches can't be closed",
      "You receive your $STANDARD, minus a dynamic exit fee",
      "Your Charter is instantly burned",
      "You get ETH instead of $STANDARD",
    ],
    answer: 1,
    why: "Closing pays out your earned $STANDARD after a dynamic exit fee — the fee shifts with how much exit pressure there is.",
  },
  {
    q: "What happens to the exit fee?",
    options: [
      "It all goes to the team",
      "Half is burned, half goes to remaining participants",
      "It's refunded after 90 days",
      "It's converted to ETH and stored",
    ],
    answer: 1,
    why: "The exit fee splits: half is burned outright, half is redistributed to people who keep their Branches open.",
  },
  {
    q: "What happens if you close your last remaining Branch?",
    options: [
      "Nothing changes for your Charter",
      "Your Charter is burned",
      "You get a bonus Charter",
      "Your Charter becomes transferable",
    ],
    answer: 1,
    why: "Closing your final Branch also burns the Charter itself — there's no way to hold an empty license.",
  },
  {
    q: "What happens to $STANDARD issuance when more ETH flows into the protocol?",
    options: [
      "Issuance halts entirely",
      "Issuance increases and reserves build",
      "Issuance is unaffected",
      "The Charter cap increases",
    ],
    answer: 1,
    why: "Issuance is designed to expand as ETH inflow grows, while protocol reserves accumulate.",
  },
  {
    q: "What happens when ETH flows out of the protocol?",
    options: [
      "Issuance increases to compensate",
      "Issuance contracts, and the treasury buys back and burns $STANDARD",
      "Nothing — issuance is fixed",
      "Charters are revoked",
    ],
    answer: 1,
    why: "On outflow, issuance shrinks and the treasury actively buys back and burns $STANDARD to defend price.",
  },
  {
    q: "Where does $STANDARD trade for those who skip the Charter system?",
    options: [
      "A centralized exchange listing",
      "A hooked ETH/STANDARD pool on Uniswap v4",
      "A private OTC desk",
      "It can't be traded, only earned",
    ],
    answer: 1,
    why: "Anyone can buy or sell $STANDARD directly on a Uniswap v4 pool without touching Charters at all.",
  },
  {
    q: "What is 'protocol-owned liquidity' in this design?",
    options: [
      "Liquidity rented from a market maker",
      "Liquidity the protocol itself owns and controls",
      "Liquidity locked by individual users",
      "A liquidity mining rewards program",
    ],
    answer: 1,
    why: "Rather than relying on rented or mercenary liquidity, the protocol owns and controls its own pool.",
  },
  {
    q: "What core flaw is The Standard Reserve trying to fix, relative to Olympus DAO (OHM)?",
    options: [
      "Slow transaction speeds",
      "Unsustainable, artificial-yield-driven inflation",
      "Lack of a governance token",
      "High gas fees on mint",
    ],
    answer: 1,
    why: "Olympus DAO collapsed roughly 98% from its peak after relying on unsustainable, artificially high yield — the design here ties issuance to real ETH flow instead.",
  },
  {
    q: "What's the current status of the project as of its public materials?",
    options: [
      "Fully launched with $STANDARD trading live",
      "Pre-launch — whitepaper live, no token or NFT minted yet",
      "Shut down after a failed audit",
      "Launched only on a testnet",
    ],
    answer: 1,
    why: "The whitepaper is public, but there's no live token or NFT yet, and the team has said there will be no surprise launch.",
  },
];

export default function QuestionsPage() {
  const [answers, setAnswers] = useState<(number | null)[]>(
    () => QUESTIONS.map(() => null),
  );
  const [submitted, setSubmitted] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const answeredCount = answers.filter((a) => a !== null).length;
  const progress = Math.round((answeredCount / QUESTIONS.length) * 100);
  const score = useMemo(
    () =>
      answers.reduce<number>(
        (n, a, i) => (a !== null && a === QUESTIONS[i]?.answer ? n + 1 : n),
        0,
      ),
    [answers],
  );

  const pick = (qi: number, oi: number) => {
    if (submitted) return;
    setAnswers((prev) => prev.map((a, i) => (i === qi ? oi : a)));
  };

  const goTo = (i: number) => {
    setCurrentIndex(Math.max(0, Math.min(QUESTIONS.length - 1, i)));
    if (typeof window !== "undefined") window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const reset = () => {
    setAnswers(QUESTIONS.map(() => null));
    setSubmitted(false);
    setCurrentIndex(0);
    if (typeof window !== "undefined") window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const band =
    score >= 13
      ? "You know the mechanics cold."
      : score >= 9
        ? "You've got the shape of it, with a few gaps."
        : score >= 5
          ? "You're still catching up on the fundamentals."
          : "Time to read the whitepaper.";

  return (
    <main className="min-h-screen bg-void font-display text-void-fg">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-signal/10 blur-3xl" />

      <header className="relative z-10 flex items-center justify-between border-b border-void-line px-6 py-6 md:px-12">
        <Link to="/" className="flex items-center gap-2.5">
          <span className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-void-fg">
            <span className="h-2.5 w-2.5 rounded-full bg-void-fg" />
          </span>
          <span className="text-[1.6rem] font-semibold tracking-tight">Reserve Thesis</span>
        </Link>
        <Link
          to="/"
          className="text-[0.95rem] text-void-muted transition-colors hover:text-signal-soft"
        >
          Back to home
        </Link>
      </header>

      {/* Sticky progress */}
      <div className="sticky top-0 z-20 border-b border-void-line bg-void/90 backdrop-blur">
        <div className="mx-auto flex max-w-3xl items-center gap-4 px-6 py-4">
          <div className="h-1 flex-1 bg-void-line">
            <div
              className="h-full bg-signal transition-[width] duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <span className="text-xs uppercase tracking-widest text-void-muted">
            {answeredCount}/{QUESTIONS.length}
          </span>
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-3xl px-6 py-16 lg:py-24">
        <p className="mb-7 flex items-center gap-3 text-xs font-medium uppercase text-signal-soft">
          <span className="h-px w-8 bg-signal" />
          Protocol literacy
        </p>
        <h1 className="max-w-[22ch] text-[2.5rem] font-light leading-[1.04] sm:text-5xl">
          Fifteen questions on how The Standard Reserve actually works.
        </h1>
        <p className="mt-6 max-w-xl text-[0.95rem] leading-7 text-void-muted">
          Pick the answer you'd defend in a room. Nothing is scored until you
          submit, and every question comes back with the reasoning.
        </p>

        {/* Jump to any question */}
        <div className="mt-14 flex flex-wrap gap-2">
          {QUESTIONS.map((_, qi) => {
            const isCurrent = qi === currentIndex;
            const isAnswered = answers[qi] !== null;
            let cls = "border-void-line text-void-muted hover:border-signal/70";
            if (isCurrent) cls = "border-signal bg-signal text-void";
            else if (isAnswered) cls = "border-signal/60 text-signal-soft";
            return (
              <button
                key={qi}
                type="button"
                onClick={() => goTo(qi)}
                aria-current={isCurrent}
                className={`flex h-9 w-9 items-center justify-center border text-xs transition-colors ${cls}`}
              >
                {qi + 1}
              </button>
            );
          })}
        </div>

        {(() => {
          const qi = currentIndex;
          const item = QUESTIONS[qi];
          const chosen = answers[qi];
          const correct = chosen === item.answer;
          return (
            <div className="mt-6 border border-void-line bg-void-fg/[0.02] p-6 transition-colors sm:p-8">
              <div className="flex items-baseline gap-4">
                <span className="text-xs tracking-[0.3em] text-signal">
                  {String(qi + 1).padStart(2, "0")}
                </span>
                <h2 className="text-lg font-light leading-snug sm:text-xl">
                  {item.q}
                </h2>
              </div>

              <div className="mt-6 grid gap-3">
                {item.options.map((opt, oi) => {
                  const isChosen = chosen === oi;
                  const isAnswer = item.answer === oi;
                  let cls =
                    "border-void-line text-void-fg hover:border-signal/70 hover:text-signal-soft";
                  if (submitted) {
                    if (isAnswer)
                      cls = "border-signal bg-signal/10 text-void-fg";
                    else if (isChosen)
                      cls = "border-destructive/70 text-void-muted line-through";
                    else cls = "border-void-line text-void-muted";
                  } else if (isChosen) {
                    cls = "border-signal bg-signal text-void";
                  }
                  return (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => pick(qi, oi)}
                      aria-pressed={isChosen}
                      className={`flex items-center gap-4 border px-5 py-3.5 text-left text-[0.95rem] leading-6 transition-colors ${cls}`}
                    >
                      <span className="text-xs uppercase tracking-widest opacity-70">
                        {String.fromCharCode(65 + oi)}
                      </span>
                      {opt}
                    </button>
                  );
                })}
              </div>

              {submitted && (
                <div className="mt-6 border-l border-signal pl-5">
                  <p className="text-xs uppercase tracking-widest text-signal-soft">
                    {chosen === null ? "Skipped" : correct ? "Correct" : "Missed"}
                  </p>
                  <p className="mt-2 text-[0.95rem] leading-7 text-void-muted">
                    {item.why}
                  </p>
                </div>
              )}
            </div>
          );
        })()}

        {/* Previous / Next */}
        <div className="mt-6 flex items-center justify-between">
          <button
            type="button"
            onClick={() => goTo(currentIndex - 1)}
            disabled={currentIndex === 0}
            className="rounded-full border border-void-line px-6 py-3 text-[0.9rem] transition-colors hover:border-signal hover:text-signal-soft disabled:pointer-events-none disabled:opacity-40"
          >
            Previous
          </button>
          <span className="text-xs uppercase tracking-widest text-void-muted">
            {currentIndex + 1} / {QUESTIONS.length}
          </span>
          <button
            type="button"
            onClick={() => goTo(currentIndex + 1)}
            disabled={currentIndex === QUESTIONS.length - 1}
            className="rounded-full border border-void-line px-6 py-3 text-[0.9rem] transition-colors hover:border-signal hover:text-signal-soft disabled:pointer-events-none disabled:opacity-40"
          >
            Next
          </button>
        </div>

        {!submitted ? (
          <div className="mt-14 flex flex-col items-start gap-4 border-t border-void-line pt-10 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-[0.95rem] text-void-muted">
              {answeredCount === QUESTIONS.length
                ? "All fifteen answered. Ready when you are."
                : `${QUESTIONS.length - answeredCount} left unanswered.`}
            </p>
            <button
              type="button"
              onClick={() => {
                setSubmitted(true);
                if (typeof window !== "undefined")
                  window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="rounded-full bg-signal px-8 py-4 text-[0.95rem] font-medium text-void transition-transform hover:scale-[1.03]"
            >
              See my result
            </button>
          </div>
        ) : (
          <div className="mt-14 border border-signal/50 bg-signal/[0.06] p-8 sm:p-10">
            <p className="text-xs uppercase tracking-widest text-signal-soft">
              Your result
            </p>
            <p className="mt-4 text-5xl font-light">
              {score}
              <span className="text-void-muted">/{QUESTIONS.length}</span>
            </p>
            <p className="mt-4 max-w-md text-lg font-light leading-relaxed">{band}</p>
            <div className="mt-6 h-1 w-full bg-void-line">
              <div
                className="h-full bg-signal transition-[width] duration-700 ease-out"
                style={{ width: `${(score / QUESTIONS.length) * 100}%` }}
              />
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <button
                type="button"
                onClick={reset}
                className="rounded-full border border-void-line px-7 py-3.5 text-[0.95rem] transition-colors hover:border-signal hover:text-signal-soft"
              >
                Try again
              </button>
              <Link
                to="/"
                className="rounded-full bg-signal px-7 py-3.5 text-[0.95rem] font-medium text-void transition-transform hover:scale-[1.03]"
              >
                Back to Reserve Thesis
              </Link>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}