import { lusitana } from "@/app/ui/fonts";
import {
  AtSymbolIcon,
  KeyIcon,
  ExclamationCircleIcon
} from "@heroicons/react/24/outline";
import { ArrowRightIcon } from "@heroicons/react/20/solid";
import { Button } from "./button";
import { signIn } from "@/auth/auth";

export default function LoginForm() {
  return (
    <div className="space-y-3">
      <div className="flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-8">
        <h1 className={`${lusitana.className} mb-3 text-2xl`}>Login with</h1>

        <form
          action={async () => {
            "use server";
            await signIn("google");
          }}
        >
          <Button className="mt-4 w-full" type="submit">
            Google <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50" />
          </Button>
        </form>

        <form
          action={async () => {
            "use server";
            await signIn("github");
          }}
        >
          <Button className="mt-4 w-full" type="submit">
            GitHub <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50" />
          </Button>
        </form>

        <div className="flex h-8 items-end space-x-1">
          {/* Add form errors here */}
        </div>
      </div>
    </div>
  );
}

// export default async function SignIn() {
//   const session = await auth();

//   return (
//     <div>
//       {session?.user ? (
//         <div className="flex flex-col items-center justify-center h-screen">
//           <h1 className="text-2xl">Welcome {session.user.name}</h1>
//           <form
//             action={async () => {
//               "use server";
//               await signOut();
//             }}
//           >
//             <button
//               type="submit"
//               className="p-2 bg-red-700 text-white mx-auto rounded-md hover:bg-red-800"
//             >
//               Signout
//             </button>
//           </form>
//         </div>
//       ) : (
//         <>
//           <div className="flex flex-col items-center justify-center h-screen">
//             <h1 className="text-2xl">Please Sign In</h1>
//             <form
//               action={async () => {
//                 "use server";
//                 await signIn("google");
//               }}
//             >
//               <button
//                 type="submit"
//                 className="p-2 bg-blue-700 text-white mx-auto rounded-md hover:bg-blue-800"
//               >
//                 Signin
//               </button>
//             </form>
//           </div>
//         </>
//       )}
//     </div>
//   );
// }
