import { Link } from "@/i18n/navigation";

export default function NotFound() {
  return (
    <div className="site-grid py-28">
      <p className="font-display text-[11px] tracking-[0.2em] text-brand">404</p>
      <h1 className="mt-4 font-display text-5xl">PAGE NOT FOUND</h1>
      <Link href="/" className="mt-8 inline-flex min-h-11 items-center text-sm">
        ← PLAYWAN
      </Link>
    </div>
  );
}
