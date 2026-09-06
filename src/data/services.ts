export const serviceIds = ["ip", "creative", "marketing"] as const;
export type ServiceId = (typeof serviceIds)[number];

export const services: Array<{
  id: ServiceId;
  no: string;
  icon: "ip" | "creative" | "marketing";
}> = [
  { id: "ip", no: "01", icon: "ip" },
  { id: "creative", no: "02", icon: "creative" },
  { id: "marketing", no: "03", icon: "marketing" },
];

export const projectFlow = [
  "consulting",
  "planning",
  "license",
  "production",
  "marketing",
  "analysis",
] as const;
