import type { Metadata } from "next";
import IndoTechnologyPage from "../../components/IndoTechnologyPage";

export const metadata: Metadata = {
  title: "Verres et technologies INDO",
  description: "Découvrez les technologies verrières INDO proposées avec l’accompagnement de Loza Optique à Casablanca.",
};

export default function Page() {
  return <IndoTechnologyPage />;
}
