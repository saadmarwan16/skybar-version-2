"use client";

import { RefreshRouteOnSave } from "@payloadcms/live-preview-react";
import { useRouter } from "next/navigation.js";
import type { FunctionComponent } from "react";
import { env } from "@/env";

export const LivePreviewListener: FunctionComponent = () => {
  const router = useRouter();

  return (
    <RefreshRouteOnSave
      refresh={() => router.refresh()}
      serverURL={`${env.NEXT_PUBLIC_URL}`}
    />
  );
};
