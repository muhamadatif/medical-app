import React, { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  const [message, setMessage] = useState("No message found");

  // useEffect(() => {
  //   const unsubscribe = window.ipc.on("message", (message) => {
  //     setMessage(message);
  //   });

  //   return unsubscribe;
  // }, []);

  return (
    <>
      <div
        className="h-10 bg-gray-900 flex items-center justify-between px-2 text-white select-none"
        style={{ WebkitAppRegion: "drag" }}
      >
        <div className="font-bold">My App</div>
        <div className="flex gap-2">
          <button
            style={{ WebkitAppRegion: "no-drag" }}
            onClick={() => window.electron.minimize()}
          >
            —
          </button>

          <button
            style={{ WebkitAppRegion: "no-drag" }}
            onClick={() => window.electron.maximize()}
          >
            ⬜
          </button>

          <button
            style={{ WebkitAppRegion: "no-drag" }}
            onClick={() => window.electron.close()}
          >
            ✕
          </button>
        </div>
      </div>{" "}
      <div className="px-5">
        <p>
          ⚡ Electron + Next.js ⚡ - <Link href="/next">Go to next page</Link>
        </p>
        <Image
          src="/images/logo.png"
          alt="Logo image"
          width={256}
          height={256}
        />
      </div>
      <div>
        <button
          onClick={() => {
            setMessage("Waiting for response...");
          }}
        >
          Test IPC
        </button>
        <p>{message}</p>
      </div>
    </>
  );
}
