"use client";
import React from "react";
import ErrorFallback from "@/componentPages/ErrorFallback/ErrorFallback";
import { ErrorBoundary } from "react-error-boundary";

export default function Providers({ children }) {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>{children}</ErrorBoundary>
  );
}
