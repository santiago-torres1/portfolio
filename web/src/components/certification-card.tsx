import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
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
  href,
  status,
}: Props) {
  return (
    <Link
      href={href || "#"}
      target="_blank"
      rel="noopener noreferrer"
      className="block h-full"
    >
      <Card className="flex h-full items-center gap-4 border p-4 transition-all duration-300 ease-out hover:shadow-lg">
        <Image
          src={image}
          alt={`${issuer} ${code} badge`}
          width={64}
          height={64}
          unoptimized
          className="size-16 shrink-0 object-contain"
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
        </div>
      </Card>
    </Link>
  );
}
