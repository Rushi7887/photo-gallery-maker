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
import apartmentExt1 from "@/assets/3d/apartment-ext-1.png.asset.json";
import complexAerial from "@/assets/3d/complex-aerial.png.asset.json";
import apartmentExt2 from "@/assets/3d/apartment-ext-2.png.asset.json";
import urbanComplexAerial from "@/assets/3d/urban-complex-aerial.png.asset.json";
import modernApartment from "@/assets/3d/modern-apartment.png.asset.json";
import luxuryBedroom from "@/assets/3d/luxury-bedroom.png.asset.json";
import entranceNight from "@/assets/3d/entrance-night.png.asset.json";
import villaNight from "@/assets/3d/villa-night.png.asset.json";
import commercialModern from "@/assets/3d/commercial-modern.png.asset.json";
import farmhouseSamba1 from "@/assets/3d/farmhouse-sambhajinagar-1.png.asset.json";
import interiorLiving1 from "@/assets/3d/interior-living-room-1.png.asset.json";
import farmhousePaithan1 from "@/assets/3d/farmhouse-paithan-1.png.asset.json";
import interiorLiving2 from "@/assets/3d/interior-living-room-2.png.asset.json";
import farmhousePaithanNight from "@/assets/3d/farmhouse-paithan-night.png.asset.json";
import luxuryVillaNight from "@/assets/3d/luxury-villa-night.png.asset.json";
import interiorTvUnit from "@/assets/3d/interior-tv-unit.png.asset.json";
import industrialGidc from "@/assets/3d/industrial-gidc.png.asset.json";

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
    cover: apartmentExt1.url,
    gallery: [
      { src: apartmentExt1.url, caption: "Exterior Visualization — Multi-storey residential building" },
      { src: complexAerial.url, caption: "Aerial View — Large scale residential development" },
      { src: apartmentExt2.url, caption: "Perspective View — Contemporary apartment architecture" },
      { src: urbanComplexAerial.url, caption: "Urban Planning — High-density complex visualization" },
      { src: modernApartment.url, caption: "Modern Apartment — Clean lines and structural clarity" },
      { src: luxuryBedroom.url, caption: "Interior Visualization — Luxury bedroom with teak accents" },
      { src: entranceNight.url, caption: "Night View — Entrance canopy and lighting design" },
      { src: villaNight.url, caption: "Residential Night View — Contemporary villa lighting" },
      { src: commercialModern.url, caption: "Commercial Perspective — Glass-fronted retail complex" },
      { src: farmhouseSamba1.url, caption: "Farmhouse — Chhatrapati Sambhajinagar" },
      { src: interiorLiving1.url, caption: "Interior — Living Room Perspective" },
      { src: farmhousePaithan1.url, caption: "Farmhouse — Paithan" },
      { src: interiorLiving2.url, caption: "Interior — Luxury Living Space" },
      { src: farmhousePaithanNight.url, caption: "Farmhouse Paithan — Night View" },
      { src: luxuryVillaNight.url, caption: "Luxury Villa — Night View" },
      { src: interiorTvUnit.url, caption: "Interior — Modern TV Unit Design" },
      { src: industrialGidc.url, caption: "Manufacturing Industry — GIDC" },

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
