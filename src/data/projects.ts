import heroBuilding from "@/assets/hero-building.jpg";
import workResidence from "@/assets/work-residence.jpg";
import workResidence2 from "@/assets/work-residence-2.jpg";
import workIndustrial from "@/assets/work-industrial.jpg";
import workIndustrial2 from "@/assets/work-industrial-2.jpg";
import workInterior from "@/assets/work-interior.jpg";
import workInterior2 from "@/assets/work-interior-2.jpg";
import workLandscape from "@/assets/work-landscape.jpg";
import workLandscape2 from "@/assets/work-landscape-2.jpg";

// Interior project assets
import washBasin from "@/assets/interior/wash-basin.png.asset.json";
import bedRoom from "@/assets/interior/bed-room.png.asset.json";
import livingRoomStairs from "@/assets/interior/living-room-stairs.png.asset.json";
import kitchen1 from "@/assets/interior/kitchen-1.png.asset.json";
import livingRoomSofa from "@/assets/interior/living-room-sofa.png.asset.json";
import kitchenDining from "@/assets/interior/kitchen-dining.png.asset.json";

import commercial1 from "@/assets/commercial/commercial-1.png.asset.json";
import commercial2 from "@/assets/commercial/commercial-2.png.asset.json";
import farmhouse1 from "@/assets/residential/farmhouse-1.png.asset.json";
import farmhouse2 from "@/assets/residential/farmhouse-2.png.asset.json";


export const categories = [
  "Residential",
  "Industrial",
  "Commercial",
  "Interior",
  "Landscaping",
] as const;

export type Category = (typeof categories)[number];

export type Project = {
  slug: string;
  index: string;
  title: string;
  category: Category;
  meta: string;
  year: string;
  location: string;
  status: string;
  scope: string;
  summary: string;
  cover: string;
  gallery: { src: string; caption: string }[];
};

export const projects: Project[] = [
  {
    slug: "shankara-residency-villa",
    index: "01",
    title: "Shankara Residency Villa",
    category: "Residential",
    meta: "Residential · 4 BHK · Ulkanagari, Chhatrapati Sambhajinagar",
    year: "2025",
    location: "Ulkanagari, Chhatrapati Sambhajinagar",
    status: "Completed",
    scope: "Architecture · Structure coordination · Site supervision",
    summary:
      "A four-bedroom family villa planned around a north-lit courtyard. Deep balconies and a stone plinth keep the interiors cool through the Marathwada summer, while the plan keeps living, guest and private zones cleanly separated.",
    cover: workResidence,
    gallery: [
      { src: workResidence, caption: "Street elevation — plaster, stone plinth and deep balconies" },
      { src: workResidence2, caption: "Double-height living volume with stone feature wall" },
      { src: heroBuilding, caption: "Brick jaali screen study for the west facade" },
    ],
  },
  {
    slug: "farmhouse-gangapur",
    index: "02",
    title: "Farmhouse — Gangapur",
    category: "Residential",
    meta: "Residential · Weekend Home · Gangapur",
    year: "2026",
    location: "Gangapur, Chhatrapati Sambhajinagar",
    status: "In progress",
    scope: "Architecture · Landscape integration · Site supervision",
    summary:
      "A weekend retreat designed to blend seamlessly with its natural surroundings. The project focuses on open spaces, cross-ventilation, and panoramic views of the Gangapur landscape, creating a peaceful escape from the city.",
    cover: farmhouse1.url,
    gallery: [
      { src: farmhouse1.url, caption: "Main elevation — contemporary form with large openings" },
      { src: farmhouse2.url, caption: "Perspective view — integration with the landscape" },
    ],
  },
  {
    slug: "fabrication-unit-waluj",
    index: "03",
    title: "Fabrication Unit — Waluj",
    category: "Industrial",
    meta: "Industrial · 42,000 sq.ft · Shed, offices & site planning",
    year: "2024",
    location: "Waluj MIDC, Chhatrapati Sambhajinagar",
    status: "Completed",
    scope: "Master planning · PEB coordination · Office block",
    summary:
      "A 42,000 sq.ft fabrication shed with a mezzanine office block. Bay spacing, crane paths and truck movement were resolved first; roof monitors bring daylight deep into the shop floor and cut lighting load through the day.",
    cover: workIndustrial,
    gallery: [
      { src: workIndustrial, caption: "Main shed — steel portal frame and metal cladding" },
      { src: workIndustrial2, caption: "Shop floor with mezzanine office glazing" },
    ],
  },
  {
    slug: "teak-travertine-apartment",
    index: "04",
    title: "Teak & Travertine Apartment",
    category: "Interior",
    meta: "Interior · Turnkey · Living, dining & master suite",
    year: "2025",
    location: "Chhatrapati Sambhajinagar",
    status: "In progress",
    scope: "Turnkey interior · Furniture design · Lighting",
    summary:
      "A turnkey apartment interior built on two materials — teak veneer and travertine. Joinery runs floor to ceiling to hide services, and the lighting is layered so the same rooms read differently by day and at night.",
    cover: livingRoomSofa.url,
    gallery: [
      { src: livingRoomSofa.url, caption: "Living area — custom sofa and warm ambient lighting" },
      { src: livingRoomStairs.url, caption: "Living room and staircase with wood and glass details" },
      { src: kitchen1.url, caption: "Modular kitchen with integrated storage and pooja area" },
      { src: kitchenDining.url, caption: "Dining and pantry zone with seamless cabinetry" },
      { src: bedRoom.url, caption: "Master bedroom with wood panelling and soft textures" },
      { src: washBasin.url, caption: "Vanity area with fluted wall tiles and circular mirror" },
    ],
  },
  {
    slug: "courtyard-garden-plot-215",
    index: "05",
    title: "Courtyard Garden — Plot 215",
    category: "Landscaping",
    meta: "Landscaping · Hardscape, water body & planting design",
    year: "2026",
    location: "Plot 215, Shankara Residency",
    status: "In progress",
    scope: "Hardscape · Water body · Planting & lighting",
    summary:
      "A private courtyard that turns a leftover side setback into the best room of the house. A still water body cools the incoming breeze, and the planting palette is chosen for low water use and year-round foliage.",
    cover: workLandscape,
    gallery: [
      { src: workLandscape, caption: "Courtyard with still water body and uplit planting" },
      { src: workLandscape2, caption: "Stone steppers and layered shrub beds" },
    ],
  },
  {
    slug: "commercial-complex-chhatrapati-sambhajinagar",
    index: "05",
    title: "Commercial Complex",
    category: "Commercial",
    meta: "Commercial · Retail & Offices · Chhatrapati Sambhajinagar",
    year: "2026",
    location: "Chhatrapati Sambhajinagar",
    status: "In progress",
    scope: "Architecture · Commercial planning · Facade design",
    summary:
      "A modern commercial complex designed for high visibility and efficient retail flow. The facade uses a mix of glass and solid volumes to create a contemporary landmark while maximizing natural light for the upper-floor office spaces.",
    cover: commercial1.url,
    gallery: [
      { src: commercial1.url, caption: "Front elevation — modern glass facade and retail frontage" },
      { src: commercial2.url, caption: "Perspective view — corner plot utilization and signage zones" },
    ],
  },
];

export const heroImage = livingRoomSofa.url;

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
