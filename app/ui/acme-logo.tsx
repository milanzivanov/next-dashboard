import { GlobeAltIcon } from "@heroicons/react/24/outline";
import { lusitana } from "@/app/ui/fonts";
import { auth } from "@/auth/auth";
import Image from "next/image";

export default async function AcmeLogo() {
  const session = await auth();

  const firstName = session?.user?.name?.split(" ")[0];

  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
    >
      {session?.user?.image ? (
        <img
          className="inline-block h-12 w-12 rounded-full ring-2 bg-white ring-white mr-2"
          src={session?.user?.image}
          alt={session?.user?.name ?? "User Image"}
        />
      ) : (
        <DefaultImage />
      )}

      <h1 className="text-[44px] capitalize">{firstName ?? "Acme"}</h1>
    </div>
  );
}

function DefaultImage() {
  return (
    <Image
      src={
        "https://ovkrqbwfxzmoblsaodse.supabase.co/storage/v1/object/public/cultural-hero-avatars//avatar1.jpg"
      }
      alt="Default user"
      width={48}
      height={48}
      className="inline-block h-12 w-12 rounded-full ring-2 mr-2 grey bg-white ring-white grayscale"
      priority={true}
    />
  );
}
