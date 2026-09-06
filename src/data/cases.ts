export type CaseStatus = "coming-soon" | "in-progress" | "published";

export interface CaseStudy {
  slug: string;
  caseNo: string;
  categoryKey: "genericCollab" | "comingSoon";
  status: CaseStatus;
  isPublic: boolean;
  role?: Array<"ip" | "creative" | "marketing">;
  heroImage?: string;
}

/**
 * Public case data only. Unpublished names, clients, and IP must never
 * be imported into production bundles.
 */
export const publicCases: CaseStudy[] = [
  {
    slug: "case-01",
    caseNo: "01",
    categoryKey: "genericCollab",
    status: "coming-soon",
    isPublic: true,
  },
  {
    slug: "case-02",
    caseNo: "02",
    categoryKey: "comingSoon",
    status: "coming-soon",
    isPublic: true,
  },
  {
    slug: "case-03",
    caseNo: "03",
    categoryKey: "comingSoon",
    status: "coming-soon",
    isPublic: true,
  },
];

export function getPublicCases(): CaseStudy[] {
  return publicCases.filter((item) => item.isPublic);
}
