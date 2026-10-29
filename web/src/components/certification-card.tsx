import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { BadgeCheckIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Props {
  title: string;
  code: string;
  issuer: string;
  issued?: string;
  expires?: string;
  note?: string;
  image: string;
  /** Public verification page (Microsoft Learn, Credly) for earned certs. */
  credentialUrl?: string;
  /** Fallback link, e.g. the official exam page for one in progress. */
  href?: string;
  status?: string;
}

export function CertificationCard({
  title,
  code,
  issuer,
  issued,
  expires,
  note,
  image,
  credentialUrl,
  href,
  status,
}: Props) {
  return (
    <Link
      href={credentialUrl ?? href ?? "#"}
      target="_blank"
      rel="noopener noreferrer"
      className="group block h-full"
    >
      <Card className="flex h-full items-center gap-4 border p-4 transition-all duration-300 ease-out hover:shadow-lg">
        <Image
          src={image}
          alt={`${issuer} ${code} badge`}
          width={64}
          height={64}
          unoptimized
          // Light backing in dark mode, like the work logos: some badges have dark artwork.
          className="size-16 shrink-0 object-contain dark:rounded-xl dark:bg-foreground dark:p-1"
        />
        <div className="flex min-w-0 flex-col gap-1">
          <div className="flex flex-wrap items-center gap-1">
            <Badge variant="secondary" className="px-1.5 py-0 text-[10px]">
              {code}
            </Badge>
            {status && (
              <Badge variant="outline" className="gap-1 px-1.5 py-0 text-[10px]">
                <span className="size-1.5 animate-pulse rounded-full bg-amber-500" />
                {status}
              </Badge>
            )}
          </div>
          <h3 className="text-sm font-semibold leading-tight">{title}</h3>
          <p className="text-xs text-muted-foreground">{issuer}</p>
          <p className="text-xs text-muted-foreground">
            {note ?? (
              <>
                <span className="whitespace-nowrap">Issued {issued}</span>
                {" · "}
                <span className="whitespace-nowrap">Expires {expires}</span>
              </>
            )}
          </p>
          {credentialUrl && (
            <span className="mt-1 inline-flex items-center gap-1 text-xs font-medium underline-offset-4 group-hover:underline">
              <BadgeCheckIcon className="size-3.5" />
              Verify credential
            </span>
          )}
        </div>
      </Card>
    </Link>
  );
}
