import type { Metadata } from "next";
import CollectionsPage from "../../components/CollectionsPage";
export const metadata: Metadata = { title: "Collections" };
export default function Page() { return <CollectionsPage />; }
