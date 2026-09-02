import { Link } from "@/i18n/routing";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="bg-brand-canvas-soft border-b border-brand-hairline py-3 px-8 text-sm">
      <div className="max-w-[1280px] mx-auto flex items-center gap-2 text-brand-mute font-medium">
        {items.map((item, idx) => (
          <span key={idx} className="flex items-center gap-2">
            {item.href ? (
              <Link href={item.href} className="hover:text-brand-primary transition-colors">
                {item.label}
              </Link>
            ) : (
              <span className="text-brand-ink">{item.label}</span>
            )}
            {idx < items.length - 1 && (
              <svg className="w-4 h-4 text-brand-hairline" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            )}
          </span>
        ))}
      </div>
    </nav>
  );
}
