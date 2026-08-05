import type { Metadata } from "next";
import CollectionsPage from "../../../components/CollectionsPage";
export const metadata: Metadata = { title: "Montures optiques" };
export default function Page() { return <CollectionsPage initialCategory="vue" />; }
