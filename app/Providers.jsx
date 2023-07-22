"use client";
import React from "react";
import { SessionProvider } from "next-auth/react";
import { SWRConfig } from 'swr'
import { AppWrapper } from "@/tool/StateProvider/StateProvider";
import BaseLayout from "@/componentPages/BaseLayout/BaseLayout";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "@/componentPages/ErrorFallback/ErrorFallback";

export default function Providers({ children }) {
  return (
    <SessionProvider>
      <SWRConfig>
        <AppWrapper>
          <BaseLayout>
            <ErrorBoundary FallbackComponent={ErrorFallback}>
              {children}
            </ErrorBoundary>
          </BaseLayout>
        </AppWrapper>
      </SWRConfig>
    </SessionProvider>
  );
}
