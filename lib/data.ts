import sofaAndFurniture from "@/public/services/sofa-furniture.jpg";
import carpet from "@/public/services/carpet.jpg";
import bathroom from "@/public/services/bathroom.jpg";
import homeOffice from "@/public/services/home-office.jpg";

export const links = [
  {
    name: "Home",
    hash: "/#home",
  },
  {
    name: "About Us",
    hash: "/#about",
  },
  {
    name: "Services",
    hash: "/#services",
  },
  {
    name: "Gallery",
    hash: "/#gallery",
  },
  {
    name: "Testomonials",
    hash: "#testomonials",
  },
  {
    name: "Contact Us",
    hash: "#contact",
  },
  {
    name: "Book Now",
    hash: "#book",
  },
] as const;


export const servicesData = [
  {
    title: "Home and Office Cleaning",
    description:
      "Our home and office cleaning services create a pristine and welcoming environment, tailored to your specific needs. We ensure every space is meticulously cleaned, promoting a healthy and productive atmosphere.",    
    imageUrl: homeOffice,
  },
  {
    title: "Sofa & Furniture Cleaning",
    description:
      "Our expert cleaning services rejuvenate your sofas and furniture, removing deep-seated dirt, stains, and allergens. We use advanced techniques to restore the beauty and freshness and ensuring a healthy environment.",    
    imageUrl: sofaAndFurniture,
  },
  {
    title: "Carpet Cleaning",
    description:
      "Our carpet cleaning service penetrates deep into the fibers to remove dirt, stains, and allergens, leaving your carpets looking and feeling like new. We use specialized techniques to ensure a thorough clean, enhancing the longevity and appearance of your carpets.",    
    imageUrl: carpet,
  },
  {
    title: "Bathroom Cleaning",
    description:
      "Our bathroom cleaning service ensures every corner is thoroughly sanitized, removing soap scum, grime, and bacteria for a sparkling clean finish. We focus on hygiene and attention to detail, leaving your bathroom fresh, spotless, and safe for daily use.",    
    imageUrl: bathroom,
  },
  
] as const;

