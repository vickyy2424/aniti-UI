export interface Product {
  slug: string;
  name: string;
  material: string;
  price: number;
  tagline: string;
  description: string;
  whyThis: string;
  culturalStory: string;
  traditionalUse: string;
  howToUse: string;
  howToCare: string;
  practicalInfo: string;
  image: string;
}

const products: Product[] = [
  {
    slug: "copper-water-bottle",
    name: "Copper Water Bottle",
    material: "Pure Copper",
    price: 1299,
    tagline: "Store water the old way. Drink it fresh.",
    description:
      "A hand-hammered pure copper bottle with a tight-seal cap. Carries the memory of the matka and the discipline of the morning ritual.",
    whyThis:
      "Copper vessels have been used in Indian homes for thousands of years to store drinking water. This bottle brings that same practice into a daily, portable form — without plastic, without pretension.",
    culturalStory:
      "In traditional Indian households, water was always stored overnight in a copper matka or kalash. Elders would fill it at dusk and pour the first glass at dawn. This wasn't superstition — it was an understanding, passed down through generations, that copper and water have a relationship worth respecting. Copper vessels were gifted at weddings, used in temples, and placed at the threshold of a new home as a sign of prosperity and health.",
    traditionalUse:
      "Copper pots, lotas, and tumblers were the standard drinking vessels in most Indian homes until the mid-twentieth century. Water stored in copper overnight was considered ideal for morning consumption. The practice was widespread across all regions of India — from the copper lotas of North India to the bronze vessels of Kerala and Tamil Nadu.",
    howToUse:
      "Fill the bottle with plain water. Leave it overnight or for at least 6–8 hours. Drink the water in the morning, ideally on an empty stomach. Do not store fruit juices, milk, or acidic liquids. Use only plain water.",
    howToCare:
      "Rinse with warm water after each use. Once a week, clean the inside with a mixture of lemon juice and salt — shake it well, then rinse thoroughly. Do not use soap inside the bottle. The outside will develop a natural patina over time; this is normal and expected. Do not put in the dishwasher.",
    practicalInfo:
      "Capacity: approximately 950ml. Leakproof screw-on copper cap. Hand-hammered finish. Do not use for any liquid other than plain water. Not recommended for children under 12 without adult supervision. If the water tastes unusually metallic, clean the bottle with lemon and salt before further use.",
    image: "/p-copper-bottle.jpg",
  },
  {
    slug: "brass-thali",
    name: "Brass Thali",
    material: "Pure Brass",
    price: 1899,
    tagline: "A plate that has always known what a meal should feel like.",
    description:
      "A wide, engraved brass thali with a raised rim. Steady, warm, and made to last generations. Designed to hold a full Indian meal with quiet dignity.",
    whyThis:
      "The brass thali is one of the most recognisable objects in Indian domestic life. It is not decorative — it is functional, durable, and honest. A well-made brass thali will outlive the person who buys it and can be passed on.",
    culturalStory:
      "Before stainless steel arrived in Indian kitchens in the 1960s, the brass thali was the primary eating plate across most of the subcontinent. It was used for everyday meals as well as for religious offerings. In many traditions, a brass or bronze plate was considered the most auspicious surface for food. The circular form, the raised border, the weight in your hands — these details were not accidental. They were refined over centuries of daily use.",
    traditionalUse:
      "The thali was used for all meals — rice, roti, dal, sabzi, and pickle, each in its place. During festivals and special occasions, the thali was the centrepiece of the meal, sometimes decorated with flowers or a small diya at the side. In temple kitchens, brass thalis are still used today for prasad and communal meals.",
    howToUse:
      "Use for serving and eating all Indian meals. Place small katoris inside for curries and dal. The thali can be used daily and washed after each meal. Suitable for room-temperature and warm foods.",
    howToCare:
      "Wash with mild soap and warm water. Dry immediately with a soft cloth — do not leave wet. Polish occasionally with tamarind paste or a mixture of lemon and salt to restore shine. Avoid harsh scrubbers. Store in a dry place. The brass will develop a warm patina with age.",
    practicalInfo:
      "Diameter: approximately 30cm. Weight: approximately 350g. Not suitable for use on a gas flame or induction cooktop. Hand-wash only. Not dishwasher safe. The thali may darken slightly with regular use — this is natural and does not affect quality.",
    image: "/p-brass-thali.jpg",
  },
  {
    slug: "bronze-cooking-pot",
    name: "Bronze Cooking Pot",
    material: "Bell Metal Bronze",
    price: 2499,
    tagline: "Some vessels carry flavour. Some carry memory.",
    description:
      "A heavy, wide-mouthed bronze cooking pot with two handles and a domed lid. Cast from bell metal — the same alloy used in temple vessels for over two thousand years.",
    whyThis:
      "Bell metal bronze cooking vessels are rare today. They were once the primary cooking pot in South Indian and Eastern Indian kitchens. They conduct heat gently and evenly, and many cooks believe they add a quality to slow-cooked food that no modern vessel matches.",
    culturalStory:
      "Bronze, known as kansa in Sanskrit, has been cast and used in India since the Indus Valley Civilisation. The specific alloy called bell metal — roughly 78% copper and 22% tin — was developed over centuries of craft refinement. In Kerala, traditional bronze urlis were used for cooking and for floating flowers in courtyards. In Bengal and Odisha, similar vessels were used for cooking during Durga Puja and other festivals. The craft of bronze casting is still alive in certain parts of India, maintained by communities who have practiced it for generations.",
    traditionalUse:
      "Bronze pots were used for slow-cooking dals, rice dishes, and festival preparations. They were placed directly over wood or charcoal fires. The weight of the vessel and the evenness of its heat distribution made it ideal for dishes that required long, slow cooking. In many homes, the bronze cooking pot was the most prized object in the kitchen.",
    howToUse:
      "Season before first use: apply a thin layer of oil and heat gently. Use on low to medium flame only. Best for slow-cooked dishes, dals, and rice preparations. Suitable for gas stoves. Not suitable for induction cooktops. Use a wooden or bamboo ladle — avoid metal utensils inside the pot.",
    howToCare:
      "Wash with warm water and a soft cloth after each use. Dry immediately and thoroughly. Season with a light coating of oil before storing. Do not use soap regularly — occasional mild soap is acceptable but not necessary. The pot will develop a dark, seasoned surface with use. This is the sign of a well-used vessel.",
    practicalInfo:
      "Capacity: approximately 2 litres. Weight: approximately 900g. Not suitable for induction. Use on low to medium flame only. Do not use for storing acidic foods overnight. Do not put in the dishwasher. Allow to cool before washing.",
    image: "/p-bronze-pot.jpg",
  },
  {
    slug: "brass-diya",
    name: "Brass Diya",
    material: "Pure Brass",
    price: 699,
    tagline: "Light it once. The habit will stay.",
    description:
      "A traditional cast brass oil lamp with a wide, flat base and a curved wick holder. Simple, stable, and meant to be used every day — not kept in a display case.",
    whyThis:
      "A brass diya is one of the few objects in Indian domestic life that has remained almost entirely unchanged for two thousand years. Its form is complete. It does exactly what it was designed to do — hold oil, hold a wick, hold light.",
    culturalStory:
      "The oil lamp is one of the oldest continuous traditions in Indian life. Lighting a lamp at dawn and dusk — Pradosha Puja — has been practiced in Indian homes and temples since the Vedic period. The lamp is not only a ritual object but a practical one. Before electricity, the diya was the primary source of light in homes across the subcontinent. Brass was the preferred material — durable, antimicrobial, and beautiful when it caught the light of its own flame.",
    traditionalUse:
      "The diya was lit at sunrise and sunset in the household prayer room. It was placed at thresholds, in courtyards, and in fields during harvest seasons. On festival nights, dozens of diyas were arranged in rows along the edges of rooftops, steps, and walls. The act of lighting a lamp was considered an offering — of attention, of care, of continuity.",
    howToUse:
      "Fill with sesame oil, coconut oil, or ghee. Place a cotton wick in the wick holder. Light the wick and allow it to settle. Place on a stable, flat, fireproof surface. Never leave a lit diya unattended. Keep away from children and flammable materials.",
    howToCare:
      "Clean after each use once the oil is fully consumed and the lamp has cooled. Wipe with a soft cloth. Polish monthly with tamarind or lemon and salt to maintain shine. The lamp will darken with use near the flame — this is natural. Store in a dry place.",
    practicalInfo:
      "Base diameter: approximately 8cm. Not a toy. Keep away from children. Always place on a heat-safe surface. Do not use with synthetic oils or kerosene. Ensure adequate ventilation when burning indoors.",
    image: "/p-brass-diya.jpg",
  },
  {
    slug: "copper-tumbler",
    name: "Copper Tumbler",
    material: "Pure Copper",
    price: 799,
    tagline: "The glass your grandmother used. Made for your kitchen.",
    description:
      "A hand-hammered pure copper tumbler — the traditional Indian drinking glass, made for everyday use. Solid, simple, and honest in its purpose.",
    whyThis:
      "The copper tumbler is an everyday object. It is not meant to sit on a shelf. It is meant to be filled, held, and used. This is the vessel that replaced clay and preceded steel in Indian kitchens — and it remains the most considered choice for daily water drinking.",
    culturalStory:
      "In homes across India, the copper lota and tumbler were the standard drinking vessels for centuries. In many homes, each family member had their own copper tumbler, kept on a wooden shelf or the kitchen window sill. Children were given smaller ones. Guests were offered water in copper. The tumbler was cleaned with ash or tamarind skin, rinsed at the well, and returned to its place. It was as unremarkable and as essential as any object in the home.",
    traditionalUse:
      "Used for drinking water at all times of day. Also used for rinsing hands before and after meals, for offering water in daily rituals, and as a measure in certain cooking traditions. The copper tumbler was found in every part of India — its form varied slightly by region, but its material and purpose remained constant.",
    howToUse:
      "Fill with plain water. Use for drinking only. For best results, fill the previous evening and drink from it in the morning. Do not use for tea, coffee, juice, or any beverage other than plain water. Rinse after each use.",
    howToCare:
      "Rinse with warm water after use. Clean weekly with lemon juice and salt — rub gently inside and out, then rinse. Do not use soap inside. The tumbler will develop a patina over time. This is natural and not a defect. Do not put in the dishwasher.",
    practicalInfo:
      "Capacity: approximately 300ml. Hand-hammered finish. Suitable for daily use. Not suitable for dishwasher. Not suitable for hot beverages. If the water tastes unusual, clean with lemon and salt before use.",
    image: "/p-copper-tumbler.jpg",
  },
];

export default products;
