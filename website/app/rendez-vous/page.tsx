import type { Metadata } from "next";
import { Suspense } from "react";
import AppointmentPage from "../../components/AppointmentPage";
export const metadata: Metadata = { title: "Rendez-vous" };
export default function Page() { return <Suspense fallback={<div className="page-loading">Chargement…</div>}><AppointmentPage /></Suspense>; }
