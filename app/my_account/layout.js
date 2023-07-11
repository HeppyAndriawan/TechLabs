import React from "react";
import PageLayout from "@/components/PageLayout/PageLayout";
import ProtectedRoute from "@/components/ProtectedRoute/ProtectedRoute";

export default function layout({ children }) {
  return (
    <ProtectedRoute>
      <PageLayout>{children}</PageLayout>
    </ProtectedRoute>
  );
}
