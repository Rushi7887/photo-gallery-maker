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
import manufacturing1 from "@/assets/industrial/manufacturing-1.png.asset.json";
import manufacturing2 from "@/assets/industrial/manufacturing-2.png.asset.json";
import advancedPlant1 from "@/assets/industrial/advanced-plant-1.png.asset.json";
import advancedPlant2 from "@/assets/industrial/advanced-plant-2.png.asset.json";
import engineeringInterior from "@/assets/industrial/industrial-interior.png.asset.json";
import engineeringExterior from "@/assets/industrial/industrial-exterior-perspective.png.asset.json";
import engineeringLoading from "@/assets/industrial/industrial-loading-bay.png.asset.json";
import engineeringSitePlan from "@/assets/industrial/industrial-site-plan.png.asset.json";
import engineeringVideoExt from "@/assets/engineering-external-video.asset.json";
import engineeringVideoInt from "@/assets/engineering-internal-video.asset.json";

// Gummidipoondi project assets
import gundiLayout from "@/assets/industrial/gummidipoondi/master-layout.png.asset.json";
import gundiLayoutV2 from "@/assets/industrial/gummidipoondi/master-layout-v2.png.asset.json";
import gundiView1 from "@/assets/industrial/gummidipoondi/view-01.webp.asset.json";
import gundiView2 from "@/assets/industrial/gummidipoondi/view-02.webp.asset.json";
import gundiView3 from "@/assets/industrial/gummidipoondi/view-03.png.asset.json";

// Other project assets
import sharonHall1 from "@/assets/religious/sharon-hall-1.png.asset.json";
import sharonHall2 from "@/assets/religious/sharon-hall-2.png.asset.json";
import sharonHallPlan from "@/assets/religious/sharon-hall-plan.png.asset.json";
import viz01 from "@/assets/3d/v2/viz-01.webp.asset.json";
import viz02 from "@/assets/3d/v2/farmhouse-parbhani-2.png.asset.json";
import viz03 from "@/assets/3d/v2/farmhouse-parbhani-3.png.asset.json";
import viz04 from "@/assets/3d/v2/04-farmhouse-paithan.png.asset.json";
import viz05 from "@/assets/3d/v2/05-farmhouse-paithan.png.asset.json";
import viz06 from "@/assets/3d/v2/06-farmhouse-paithan.png.asset.json";
import viz07 from "@/assets/3d/v2/07-apartment-cs-v2.png.asset.json";
import viz08 from "@/assets/3d/v2/08-apartment-cs-v2.png.asset.json";
import viz09 from "@/assets/3d/v2/09-bungalow-sambhajinagar.png.asset.json";
import viz10 from "@/assets/3d/v2/10-bungalow-sambhajinagar.png.asset.json";
import industryVadodara11 from "@/assets/3d/v2/11-industry-vadodara.png.asset.json";
import housingPune12 from "@/assets/housing-pune-1.webp.asset.json";
import housingPune13 from "@/assets/housing-pune-2.webp.asset.json";
import commercialParbhani14 from "@/assets/commercial-parbhani.webp.asset.json";
import housingPune15 from "@/assets/housing-pune-3.webp.asset.json";
import bedroomParbhani16 from "@/assets/bedroom-parbhani.png.asset.json";
import livingRoomParbhani17 from "@/assets/living-room-parbhani.png.asset.json";



export const categories = [
  "Residential",
  "Industrial",
  "Commercial",
  "Others",
  "Interior",
] as const;

export type Category = (typeof categories)[number] | "3D Visualization";

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
  videos?: string[];
  gallery: { src: string; caption: string }[];
};

export const projects: Project[] = [
  {
    slug: "engineering-automotive-manufacturing-industry-chikhalthana",
    index: "01",
    title: "Engineering & Automotive Manufacturing",
    category: "Industrial",
    meta: "Industrial · Automotive Manufacturing · Chikhalthana MIDC",
    year: "2026",
    location: "Chikhalthana MIDC, Chhatrapati Sambhajinagar",
    status: "In progress",
    scope: "Architecture · Industrial Masterplanning · Layout Design",
    summary:
      "A specialized facility for engineering and automotive manufacturing located in Chikhalthana MIDC. The project features optimized site planning, specialized loading bays, and a high-efficiency layout designed for heavy industrial operations.",
    cover: engineeringExterior.url,
    videos: [engineeringVideoExt.url, engineeringVideoInt.url],
    
    gallery: [
      { src: engineeringExterior.url, caption: "Main perspective — industrial facade and entrance" },
      { src: engineeringInterior.url, caption: "Interior view — optimized storage and warehouse layout" },
      { src: engineeringLoading.url, caption: "Loading bay — logistics and dispatch area" },
      { src: engineeringSitePlan.url, caption: "Site plan — overall layout and landscape integration" },
    ],
  },
  {
    slug: "teak-travertine-apartment",
    index: "02",
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
    slug: "manufacturing-unit-gummidipoondi",
    index: "03",
    title: "Manufacturing Unit — Tamil Nadu",
    category: "Industrial",
    meta: "Industrial · Manufacturing Facility · Gummidipoondi",
    year: "2026",
    location: "Gummidipoondi",
    status: "In progress",
    scope: "Architecture · Master Planning · Industrial Design",
    summary:
      "A sophisticated industrial manufacturing facility in Gummidipoondi, planned for maximum efficiency and site utilization. The design features a comprehensive master layout that integrates production zones, logistics, and administrative areas.",
    cover: gundiLayoutV2.url,
    gallery: [
      { src: gundiLayoutV2.url, caption: "Master Layout — Site planning and logistics flow" },
      { src: gundiLayout.url, caption: "Technical Layout — logistics flow details" },
      { src: gundiView1.url, caption: "Aerial view — site integration and roof planning" },
      { src: gundiView2.url, caption: "Perspective view — industrial facade and warehouse layout" },
      { src: gundiView3.url, caption: "Main elevation — contemporary industrial architecture" },
    ],
  },
  {
    slug: "manufacturing-unit-chhatrapati-sambhajinagar",
    index: "04",
    title: "Manufacturing Unit",
    category: "Industrial",
    meta: "Industrial · Production Facility · Chhatrapati Sambhajinagar",
    year: "2026",
    location: "Chhatrapati Sambhajinagar",
    status: "In progress",
    scope: "Architecture · Structural Design · Industrial Planning",
    summary:
      "A large-scale manufacturing unit designed for optimized production flow and structural durability. The design integrates high-span steel structures with natural ventilation and daylighting to create an efficient and comfortable industrial environment.",
    cover: manufacturing1.url,
    gallery: [
      { src: manufacturing1.url, caption: "Industrial frontage — optimized for logistics and production" },
      { src: manufacturing2.url, caption: "Structural view — high-span steel framework" },
    ],
  },
  {
    slug: "sharon-prayer-hall",
    index: "05",
    title: "Sharon Prayer Hall",
    category: "Others",
    meta: "Other · Prayer Hall · Chhatrapati Sambhajinagar",
    year: "2026",
    location: "Bhimnagar Bhawsingpura, Chhatrapati Sambhajinagar",
    status: "In progress",
    scope: "Architecture · Modern Facade · Lighting Design",
    summary:
      "A contemporary prayer hall featuring a serene white facade accented with navy blue framing. The design incorporates tiered architectural volumes and prominent illuminated signage, creating a landmark of tranquility in the neighborhood.",
    cover: sharonHall1.url,
    gallery: [
      { src: sharonHall1.url, caption: "Main elevation — contemporary form with illuminated cross" },
      { src: sharonHall2.url, caption: "Alternative perspective — night view and lighting integration" },
      { src: sharonHallPlan.url, caption: "Floor Plan — interior layout and seating arrangement" },
    ],
  },
  {
    slug: "commercial-complex-chhatrapati-sambhajinagar",
    index: "06",
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
  {
    slug: "advanced-manufacturing-plant-shendra",
    index: "07",
    title: "Advanced Manufacturing Plant",
    category: "Industrial",
    meta: "Industrial · Advanced Production · Shendra",
    year: "2026",
    location: "Shendra, Chhatrapati Sambhajinagar",
    status: "In progress",
    scope: "Architecture · Industrial Masterplanning · Sustainable Design",
    summary:
      "A state-of-the-art manufacturing plant in Shendra designed for high-precision production. The facility incorporates advanced industrial planning, optimized logistics, and a modern architectural expression that reflects the cutting-edge technology housed within.",
    cover: advancedPlant1.url,
    gallery: [
      { src: advancedPlant1.url, caption: "Main perspective — modern industrial facade" },
      { src: advancedPlant2.url, caption: "Overall view — planning and logistics integration" },
    ],
  },
  {
    slug: "farmhouse-gangapur",
    index: "08",
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
    slug: "3d-visualization-portfolio",
    index: "09",
    title: "3D Visualization Portfolio",
    category: "3D Visualization",
    meta: "3D Visualization · Architectural Rendering · Interior & Exterior",
    year: "2026",
    location: "Various Locations",
    status: "Completed",
    scope: "3D Modelling · Texturing · Lighting · Photo-realistic Rendering",
    summary:
      "A comprehensive showcase of high-end architectural visualizations, ranging from sprawling residential complexes and commercial landmarks to intimate luxury interiors. Our 3D workflow focuses on atmospheric lighting, material honesty, and spatial clarity to help clients visualize their projects before a single brick is laid.",
    cover: viz01.url,
    gallery: [
      { src: viz01.url, caption: "Farmhouse, Parbhani" },
      { src: viz02.url, caption: "Farmhouse, Parbhani" },
      { src: viz03.url, caption: "Farmhouse, Parbhani" },
      { src: viz04.url, caption: "Farmhouse, Paithan" },
      { src: viz05.url, caption: "Farmhouse, Paithan" },
      { src: viz06.url, caption: "Farmhouse, Paithan" },
      { src: viz07.url, caption: "Apartment, Chhatrapati Sambhajinagar" },
      { src: viz08.url, caption: "Apartment, Chhatrapati Sambhajinagar" },
      { src: viz09.url, caption: "Bungalow, Chhatrapati Sambhajinagar" },
      { src: viz10.url, caption: "Bungalow, Chhatrapati Sambhajinagar" },
      { src: industryVadodara11.url, caption: "Industry, Vadodara" },
      { src: housingPune12.url, caption: "Housing, Pune" },
      { src: housingPune13.url, caption: "Housing, Pune" },
      { src: commercialParbhani14.url, caption: "Commercial, Parbhani" },
      { src: bedroomParbhani16.url, caption: "Bedroom, Parbhani" },
      { src: livingRoomParbhani17.url, caption: "Living Room, Parbhani" },
      { src: housingPune15.url, caption: "Housing, Pune" },
    ],

  },
];


export const heroImage = livingRoomSofa.url;
export const heroSlideshow = [
  livingRoomSofa.url,
  engineeringExterior.url,
  gundiLayoutV2.url,
  manufacturing1.url,
  sharonHall1.url,
  farmhouse1.url,
];


export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
