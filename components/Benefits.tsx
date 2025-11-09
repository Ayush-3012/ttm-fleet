import { TrendingUp } from "lucide-react";
import MotionWrapper from "./MotionWrapper";
export default function Benefits() {
  const benefits = [
    {
      title: "-12% Fuel Costs",
      desc: "Lower idle time and optimize routes with live fuel insights.",
    },
    {
      title: "-30% Incidents",
      desc: "Reduce accidents and violations with proactive safety analytics.",
    },
    {
      title: "+18% On-time Deliveries",
      desc: "Real-time ETAs and geofencing improve dispatch precision.",
    },
    {
      title: "Audit-Ready Reports",
      desc: "Stay compliant with FMCSA and IFTA through automated logs.",
    },
  ];

  return (
    <section id="benefits" className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 text-center">
        <MotionWrapper>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">
            Measurable outcomes from day one
          </h2>
        </MotionWrapper>
        <MotionWrapper>
          <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
            Data-driven improvements that translate directly into performance
            and savings.
          </p>
        </MotionWrapper>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map(({ title, desc }, i) => (
            <MotionWrapper key={title} delay={i * 0.15}>
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition">
                <TrendingUp className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-blue-600">{title}</div>
                <p className="mt-2 text-sm text-slate-600">{desc}</p>
              </div>
            </MotionWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
