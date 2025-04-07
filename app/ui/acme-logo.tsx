import { GlobeAltIcon } from "@heroicons/react/24/outline";
import { lusitana } from "@/app/ui/fonts";
import { auth } from "@/auth/auth";

export default async function AcmeLogo() {
  const session = await auth();

  const firstName = session?.user?.name?.split(" ")[0];

  // console.log("session", session);
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
        <GlobeAltIcon className="h-12 w-12 rotate-[15deg]" />
      )}

      <h1 className="text-[44px] capitalize">{firstName ?? "Acme"}</h1>
      {/* <GlobeAltIcon className="h-12 w-12 rotate-[15deg]" /> */}
      {/* <p className="text-[44px]">Acme</p> */}
    </div>
  );
}
