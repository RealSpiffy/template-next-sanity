"use client";

import { usePreview } from "@/lib/sanity.preview";
import { query } from "@/queries/all-articles";
import { AllDocuments } from "./AllDocuments";

export const PreviewAllDocuments = () => {
  const data = usePreview(null, query);
  // const data = [];
  return <AllDocuments data={data} />;
};
