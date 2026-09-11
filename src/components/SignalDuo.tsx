import { useEffect, useRef, useState } from "react";
import scoutAsset from "@/assets/scout-thinking.png";
import sparkAsset from "@/assets/spark-verdict.png";

type Verdict = {
  signal: string;
  read: string;
  move: string;
  confidence: number;
};

const VERDICTS: Record<string, Verdict> = {
  Pricing: {
    signal: "Two rivals trimmed list price within 36 hours of each other.",
    read: "This is a coordinated floor test, not a promo cycle.",
    move: "Hold your price and lead with contract length instead.",
    confidence: 88,
  },
  Supply: {
    signal: "Lead times on your second-tier suppliers slipped 9 days.",
    read: "Upstream capacity is tightening before it shows in quotes.",
    move: "Pre-book Q3 volume this week, before rates reprice.",
    confidence: 92,
  },
  Talent: {
    signal: "Senior hiring in your category jumped 24% month over month.",
    read: "A competitor is staffing for a launch, not for churn.",
    move: "Lock your top 5 engineers now with retention offers.",
    confidence: 76,
  },
  Demand: {
    signal: "Search intent rose in three regions you barely serve.",
    read: "Demand is forming ahead of your distribution footprint.",
    move: "Open a lightweight channel test in the strongest region.",
    confidence: 84,
  },
};

const TOPICS = Object.keys(VERDICTS);

export function SignalDuo() {
  const [topic, setTopic] = useState<string | null>(null);
  const [scanning, setScanning] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => { if (timer.current) clearTimeout(timer.current); }, []);

  const run = (next: string) => {
    if (timer.current) clearTimeout(timer.current);
    setTopic(null);
    setScanning(true);
    timer.current = setTimeout(() => {
      setTopic(next);
      setScanning(false);
    }, 1400);
  };

  const verdict = topic ? VERDICTS[topic] : null;

  return (
    <section
      id="signal-desk"
      className="relative overflow-hidden border-t border-void-line bg-void text-void-fg"
    >
      <div className="absolute left-[-8rem] top-1/3 h-[28rem] w-[28rem] rounded-full bg-signal/10 blur-3xl" />

      <div className="relative mx-auto max-w-[94rem] px-6 py-24 sm:px-10 md:px-14 lg:px-20 lg:py-32">
        <p className="mb-7 flex items-center gap-3 text-xs font-medium uppercase text-signal-soft">
          <span className="h-px w-8 bg-signal" />
          The signal desk
        </p>
        <div className="flex flex-col gap-8 border-b border-void-line pb-14 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="max-w-[16ch] text-[2.75rem] font-light leading-[1.02] sm:text-5xl lg:text-6xl">
            Meet Scout and Spark.
          </h2>
          <p className="max-w-sm text-[0.95rem] leading-7 text-void-muted">
            Scout reads the noise. Spark calls the move. Pick a signal below and
            watch them work a real shift end to end.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">
          {/* Scout */}
          <div className="flex flex-col items-center lg:col-span-3">
            <div className="relative">
              <img
                src={scoutAsset}
                alt="Scout, a hooded character thinking with a finger to the chin"
                className={`w-40 max-w-full object-contain transition-all duration-500 sm:w-48 ${
                  scanning ? "scale-105 opacity-100" : "opacity-80"
                }`}
                style={{ animation: "float-soft 5s ease-in-out infinite" }}
              />
              {scanning && (
                <span className="absolute -right-2 -top-2 flex items-end gap-1 rounded-full border border-void-line bg-void px-3 py-2">
                  {[0, 1, 2].map((i) => (
                    <span
                      key={i}
                      className="h-1.5 w-1.5 rounded-full bg-signal"
                      style={{
                        animation: `think-bounce 1.1s ease-in-out ${i * 0.15}s infinite`,
                      }}
                    />
                  ))}
                </span>
              )}
            </div>
            <p className="mt-5 text-lg font-light">Scout</p>
            <p className="mt-1 text-xs uppercase tracking-widest text-void-muted">
              Reads the noise
            </p>
          </div>

          {/* Console */}
          <div className="lg:col-span-6">
            <div className="border border-void-line bg-void-fg/[0.02] p-6 sm:p-8">
              <p className="text-xs uppercase tracking-widest text-void-muted">
                Choose a signal to trace
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                {TOPICS.map((t) => (
                  <button
                    key={t}
                    onClick={() => run(t)}
                    className={`rounded-full border px-5 py-2.5 text-sm transition-colors ${
                      topic === t
                        ? "border-signal bg-signal text-void"
                        : "border-void-line text-void-fg hover:border-signal/70 hover:text-signal-soft"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>

              <div className="relative mt-7 h-px overflow-hidden bg-void-line">
                {scanning && (
                  <span
                    className="absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-signal to-transparent"
                    style={{ animation: "scan-pulse 1.2s ease-in-out infinite" }}
                  />
                )}
              </div>

              <div className="mt-7 min-h-[15rem]">
                {!topic && !scanning && (
                  <p className="text-[0.95rem] leading-7 text-void-muted">
                    Nothing on the desk yet. Pick a signal and Scout will start
                    scanning your ecosystem for deviations.
                  </p>
                )}

                {scanning && (
                  <p className="text-[0.95rem] leading-7 text-signal-soft">
                    Scout is separating movement from noise…
                  </p>
                )}

                {verdict && !scanning && (
                  <div className="space-y-6">
                    {[
                      { label: "Signal", value: verdict.signal },
                      { label: "Read", value: verdict.read },
                      { label: "Move", value: verdict.move },
                    ].map((row) => (
                      <div key={row.label} className="border-l border-signal pl-5">
                        <p className="text-xs uppercase tracking-widest text-signal-soft">
                          {row.label}
                        </p>
                        <p className="mt-2 text-[0.95rem] leading-7 text-void-fg">
                          {row.value}
                        </p>
                      </div>
                    ))}

                    <div>
                      <div className="flex items-center justify-between text-xs uppercase tracking-widest text-void-muted">
                        <span>Confidence</span>
                        <span className="text-signal">{verdict.confidence}%</span>
                      </div>
                      <div className="mt-3 h-1 w-full bg-void-line">
                        <div
                          className="h-full bg-signal transition-[width] duration-700 ease-out"
                          style={{ width: `${verdict.confidence}%` }}
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Spark */}
          <div className="flex flex-col items-center lg:col-span-3">
            <div className="relative">
              <img
                src={sparkAsset}
                alt="Spark, a hooded character winking and giving a peace sign"
                className={`w-40 max-w-full object-contain transition-all duration-500 sm:w-48 ${
                  verdict && !scanning ? "scale-105 opacity-100" : "opacity-40 grayscale"
                }`}
                style={{ animation: "float-soft 5s ease-in-out 0.8s infinite" }}
              />
              {verdict && !scanning && (
                <span className="absolute -left-3 -top-1 rounded-full border border-signal bg-void px-3 py-1.5 text-xs text-signal">
                  Call it
                </span>
              )}
            </div>
            <p className="mt-5 text-lg font-light">Spark</p>
            <p className="mt-1 text-xs uppercase tracking-widest text-void-muted">
              Calls the move
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
