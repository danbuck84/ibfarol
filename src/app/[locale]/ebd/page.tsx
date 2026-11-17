import { Suspense } from "react";
import Header from "@/components/Header";
import ResourceLibrary from "@/components/ResourceLibrary";
import Footer from "@/components/Footer";
import { getResourceLibrary } from "@/lib/resourceLibrary";

export default async function EbdPage() {
  const libraryItems = await getResourceLibrary();

  return (
    <>
      <Header />
      <main className="min-h-[70vh] pt-6">
        <Suspense fallback={null}>
          <ResourceLibrary items={libraryItems} initialType="ebd" />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
