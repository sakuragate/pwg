export type CaseStatus = "coming-soon" | "in-progress" | "published";

export interface CaseStudy {
  slug: string;
  caseNo: string;
  categoryKey: "genericCollab" | "comingSoon";
  status: CaseStatus;
  isPublic: boolean;
  /** Translation key under cases.items.<contentKey> */
  contentKey?: string;
  role?: Array<"ip" | "creative" | "marketing">;
  heroImage?: string;
  /** External URL opened in a new tab from the card */
  href?: string;
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
    categoryKey: "genericCollab",
    status: "published",
    isPublic: true,
    contentKey: "case02",
    heroImage: "/cases/case_02.png",
    href: "https://www.facebook.com/watch/?v=187347782232977",
  },
  {
    slug: "case-03",
    caseNo: "03",
    categoryKey: "genericCollab",
    status: "published",
    isPublic: true,
    contentKey: "case03",
    heroImage: "/cases/case_03.png",
    href: "https://www.wanin.tw/NewsPages/20210922162452938/",
  },
];

export function getPublicCases(): CaseStudy[] {
  return publicCases.filter((item) => item.isPublic);
}
