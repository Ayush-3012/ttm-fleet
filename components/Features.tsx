"use client";
import {
  Truck,
  Fuel,
  BarChart3,
  ShieldCheck,
  Settings,
  Clock,
} from "lucide-react";
import { motion } from "framer-motion";
import MotionWrapper from "./MotionWrapper";

export default function Features() {
  const features = [
    {
      title: "GPS & Live Tracking",
      desc: "Pinpoint vehicles, monitor routes, and view history in real time with accurate GPS data.",
      icon: <Truck className="h-6 w-6 text-blue-600" />,
    },
    {
      title: "ELD & HOS Compliance",
      desc: "Stay FMCSA-compliant with automated electronic logs, HOS alerts, and violation tracking.",
      icon: <Clock className="h-6 w-6 text-blue-600" />,
    },
    {
      title: "Safety & Dashcams",
      desc: "Detect harsh events, get AI-based insights, and coach drivers with context-rich video data.",
      icon: <ShieldCheck className="h-6 w-6 text-blue-600" />,
    },
    {
      title: "Fuel & Idling",
      desc: "Reduce fuel costs by monitoring idle time, consumption, and driver efficiency.",
      icon: <Fuel className="h-6 w-6 text-blue-600" />,
    },
    {
      title: "Maintenance",
      desc: "Automate DVIRs, fault codes, service schedules, and work orders to avoid downtime.",
      icon: <Settings className="h-6 w-6 text-blue-600" />,
    },
    {
      title: "Analytics Dashboard",
      desc: "Generate detailed insights, custom reports, and scorecards to optimize your fleet.",
      icon: <BarChart3 className="h-6 w-6 text-blue-600" />,
    },
  ];

  return (
    <section className="relative overflow-hidden bg-linear-to-b from-slate-50 to-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 text-center">
        <MotionWrapper>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">
            Everything you need to run a safer, smarter fleet
          </h2>
        </MotionWrapper>
        <MotionWrapper delay={0.1}>
          <p className="mt-3 text-slate-600">
            Connect vehicles, drivers, and data to unlock real savings and
            reliability.
          </p>
        </MotionWrapper>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 200, duration: 0.8 }}
              className="rounded-2xl hover:shadow-[0_0_10px]  border border-slate-400 bg-white p-6"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br from-blue-100 to-blue-50 shadow-inner">
                {f.icon}
              </div>
              <h3 className="text-lg font-semibold text-slate-900">
                {f.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
