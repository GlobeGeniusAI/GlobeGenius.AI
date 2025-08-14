"use client";

import { useMemo, useState } from "react";
import {
  CalendarDaysIcon,
  CloudIcon,
  CurrencyDollarIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";

type WeatherPoint = { month: string; value: number }; // e.g., temp or index per month (Jan–Dec)

type InsightsProps = {
  /** ex. "Paris, France" */
  title: string;

  bestTime: {
    /** ex. "March to May" */
    range: string;
    /** ex. "Pleasant weather and cherry blossoms in spring" */
    summary: string;
  };

  weather: {
    /** 12 points, Jan..Dec */
    series: WeatherPoint[];
    /** optional label shown on the card header (default: "Weather") */
    label?: string;
  };

  budget: {
    /** small blurb under the Budget header */
    summary: string; // e.g., "The trip may range from x USD to y USD."
  };

  /** Currency section inputs (kept super-flexible for future API wiring) */
  currency?: {
    /** default amount in the input (client can control via key to reset) */
    defaultAmount?: number;
    /** 3-letter ISO for base, e.g. "USD" */
    base?: string;
    /** 3-letter ISO for target, e.g. "JPY" */
    target?: string;
    /** latest known conversion rate (base -> target). If missing, we show "—" until Update */
    rate?: number | null;
    /** list of selectable codes. If omitted we fall back to a small sensible list. */
    options?: string[];
    /** Called when the user clicks "Update Rates" (you can fetch from OpenAI/any API) */
    onUpdateRequest?: (base: string, target: string) => void | Promise<void>;
  };

  /** optional className to let you position the component anywhere */
  className?: string;
};

/* ------------------------------ UI Helpers ------------------------------ */

const Card = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div
    className={[
      "rounded-2xl bg-white shadow-sm ring-1 ring-black/5",
      "p-6",
      className,
    ].join(" ")}
  >
    {children}
  </div>
);

function MiniSparkline({ points }: { points: WeatherPoint[] }) {
  // normalize values to [0..1] for a smooth tiny chart
  const { d } = useMemo(() => {
    const vals = points.map((p) => p.value);
    const min = Math.min(...vals);
    const max = Math.max(...vals);
    const norm = (v: number) => (max === min ? 0.5 : (v - min) / (max - min));

    const width = 260;
    const height = 80;
    const step = width / Math.max(1, points.length - 1);

    const path = points
      .map((p, i) => {
        const x = i * step;
        const y = height - norm(p.value) * height;
        return `${i === 0 ? "M" : "L"}${x.toFixed(2)},${y.toFixed(2)}`;
      })
      .join(" ");

    return { d: path };
  }, [points]);

  return (
    <svg viewBox="0 0 260 80" className="w-full h-20">
      <path d={d} fill="none" stroke="#0d1b2a" strokeWidth="2.5" />
    </svg>
  );
}

/* ------------------------------ Currency functionality ----------------------------- */

function CurrencyConverter({
  defaultAmount = 1,
  base = "USD",
  target = "JPY",
  rate = null,
  options,
  onUpdateRequest,
}: NonNullable<InsightsProps["currency"]>) {
  const currencyOptions = options ?? ["USD", "EUR", "GBP", "JPY", "CAD", "AUD"];

  const [amount, setAmount] = useState<number>(defaultAmount);
  const [from, setFrom] = useState(base);
  const [to, setTo] = useState(target);

  const converted =
    rate && !Number.isNaN(amount) ? (amount * rate).toLocaleString() : "—";

  return (
    <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-[1fr_auto_1fr] sm:items-center">
      <div className="flex items-center gap-2">
        <input
          type="number"
          inputMode="decimal"
          className="w-20 rounded-xl border border-gray-300 bg-white px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#0d1b2a]"
          value={amount}
          onChange={(e) => setAmount(parseFloat(e.target.value))}
          min={0}
        />
        <Select value={from} onChange={setFrom} options={currencyOptions} />
      </div>

      <div className="hidden sm:flex items-center justify-center text-gray-600">
        =
      </div>

      <div className="flex items-center gap-2">
        <input
          readOnly
          value={converted}
          className="w-28 rounded-xl border border-gray-300 bg-gray-50 px-3 py-2 text-gray-900"
        />
        <Select value={to} onChange={setTo} options={currencyOptions} />
      </div>

      <div className="sm:col-span-3">
        <button
          type="button"
          onClick={() => onUpdateRequest?.(from, to)}
          className="mt-3 ml-66 inline-flex items-center rounded-2xl bg-[#0d1b2a] px-5 py-2.5 text-white font-semibold"
        >
          Update Rates
        </button>
      </div>
    </div>
  );
}

function Select({
  value,
  onChange,
  options,
}: {
  value: string;
  onChange: (v: string) => void;
  options: string[];
}) {
  return (
    <div className="relative">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="appearance-none rounded-xl border border-gray-300 bg-white px-3 py-2 pr-9 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#0d1b2a]"
      >
        {options.map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>
      <ChevronDownIcon className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
    </div>
  );
}

/* --------------------------------- Main --------------------------------- */

export default function Insights({
  title,
  bestTime,
  weather,
  budget,
  currency,
  className = "",
}: InsightsProps) {
  return (
    <section
      className={[
        "rounded-xl border-[3px] border-[#0d1b2a] bg-[#f6f8fb] font-montserrat px-6 py-10 sm:px-10",
        className,
      ].join(" ")}
      aria-label="Destination insights"
    >
      <h2 className="text-center text-4xl sm:text-5xl font-semibold text-[#ff6f61]">
        {title}
      </h2>

      {/* Best time */}
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <Card>
          <div className="flex items-start gap-3">
            <div className="mt-0.5">
              <CalendarDaysIcon className="w-6 text-[#0d1b2a] -ml-2" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-900">
                Best Time to Visit
              </h3>
              <p className="mt-3 -ml-6 text-xl font-semibold text-[#0d1b2a]">
                {bestTime.range}
              </p>
              <p className="mt-2 -ml-6 text-gray-700">{bestTime.summary}</p>
            </div>
          </div>
        </Card>

        {/* Weather */}
        <Card>
          <div className="flex items-start gap-3">
            <div className="mt-0.5 flex-shrink-0">
              <CloudIcon className="w-6 text-gray-700 -ml-2" />
            </div>
            <div className="flex-1">
              <div className="flex items-center">
                <h3 className="text-lg font-semibold text-gray-900">
                  {weather.label ?? "Weather"}
                </h3>
              </div>

              <div className="mt-4 -ml-6">
                <MiniSparkline points={weather.series} />
              </div>

              {/* Month labels under chart */}
              <div className="mt-1 -ml-10 flex justify-between gap-1 text-xs text-gray-600">
                {weather.series.map((p) => (
                  <span key={p.month} className="whitespace-nowrap">
                    {p.month}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Budget */}
      <Card className="mt-6">
        <div className="flex items-start gap-3">
          <CurrencyDollarIcon className="mt-0.5 w-6 text-[#0d1b2a]" />
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-900">Budget</h3>
            <p className="mt-2 text-gray-700">{budget.summary}</p>

            {currency && (
              <CurrencyConverter
                defaultAmount={currency.defaultAmount ?? 1}
                base={currency.base ?? "USD"}
                target={currency.target ?? "JPY"}
                rate={currency.rate ?? null}
                options={currency.options}
                onUpdateRequest={currency.onUpdateRequest}
              />
            )}
          </div>
        </div>
      </Card>
    </section>
  );
}
