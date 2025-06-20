// src/lib/api/auth.ts
import { getAuth } from "@clerk/tanstack-react-start/server";
import { createServerFn } from "@tanstack/react-start";
import { getWebRequest } from "@tanstack/react-start/server";

export const getUserSignedInId = createServerFn({ method: "GET" }).handler(
  async () => {
    const { userId } = await getAuth(getWebRequest()!);

    return {
      userId,
    };
  }
);
