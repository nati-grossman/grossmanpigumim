import Image from "next/image";
import Link from "next/link";

export function Logo({ priority = false }: { priority?: boolean }) {
  return (
    <Link href="/" className="logo" aria-label="גרוסמן פיגומים, עמוד הבית">
      <Image src="/images/logo.png" alt="" width={800} height={272} priority={priority} />
    </Link>
  );
}
