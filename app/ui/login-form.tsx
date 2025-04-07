"use client";

import { lusitana } from "@/app/ui/fonts";
import {
  AtSymbolIcon,
  KeyIcon,
  ExclamationCircleIcon
} from "@heroicons/react/24/outline";
import { ArrowRightIcon } from "@heroicons/react/20/solid";
import { Button } from "./button";
import { FaGithub, FaGoogle } from "react-icons/fa6";

import { signInWithGithub, signInWithGoogle } from "../lib/actions";

export default function LoginForm() {
  return (
    <div className="space-y-3">
      <div className="flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-8">
        <h1 className={`${lusitana.className} mb-0 text-2xl`}>Login with</h1>

        <form action={signInWithGoogle}>
          <Button className="mt-4 w-full" type="submit">
            <FaGoogle
              size={28}
              className="mr-1 inline-block rounded-full p-1"
            />

            <span>Google</span>
            <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50" />
          </Button>
        </form>

        <form action={signInWithGithub}>
          <Button className="mt-4 w-full" type="submit">
            <FaGithub
              size={28}
              className="mr-1 inline-block rounded-full p-1"
            />
            <span>GitHub</span>
            <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50" />
          </Button>
        </form>

        <div
          className="flex h-8 items-end space-x-1"
          aria-live="polite"
          aria-atomic="true"
        >
          {/* {(googleState.error || githubState.error) && (
            <>
              <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
              <p className="text-sm text-red-500">
                {googleState.error || githubState.error}
              </p>
            </>
          )} */}
        </div>
      </div>
    </div>
  );
}
