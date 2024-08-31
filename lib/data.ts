import sofaAndFurniture from "@/public/services/sofa-furniture.jpg";
import carpet from "@/public/services/carpet.jpg";
import bathroom from "@/public/services/bathroom.jpg";
import homeOffice from "@/public/services/home-office.jpg";

import galleryImage1 from "@/public/gallery/image_1.jpeg";
import galleryImage2 from "@/public/gallery/image_2.jpeg";
import galleryImage3 from "@/public/gallery/image_3.jpeg";
import galleryImage4 from "@/public/gallery/image_4.jpeg";
import galleryImage5 from "@/public/gallery/image_5.jpeg";
import galleryImage6 from "@/public/gallery/image_6.jpeg";
import galleryImage7 from "@/public/gallery/image_7.jpeg";
import galleryImage8 from "@/public/gallery/image_8.jpeg";
import galleryImage9 from "@/public/gallery/image_9.jpeg";
import galleryImage10 from "@/public/gallery/image_10.jpeg";
import galleryImage11 from "@/public/gallery/image_11.jpeg";
import galleryImage12 from "@/public/gallery/image_12.jpeg";
import galleryImage13 from "@/public/gallery/image_13.jpeg";
import galleryImage14 from "@/public/gallery/image_14.jpeg";
import galleryImage15 from "@/public/gallery/image_15.jpeg";
import galleryImage16 from "@/public/gallery/image_16.jpeg";
import galleryImage17 from "@/public/gallery/image_17.jpeg";
import galleryImage18 from "@/public/gallery/image_18.jpeg";

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
    name: "Testimonials",
    hash: "#testimonials",
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
    title: "Home & Office Cleaning",
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


export const galleryImages = [
  galleryImage1,
  galleryImage2,
  galleryImage3,
  galleryImage4,
  galleryImage5,
  galleryImage6,
  galleryImage7,
  galleryImage8,
  galleryImage9,
  galleryImage10,
  galleryImage11,
  galleryImage12,
  galleryImage13,
  galleryImage14,
  galleryImage15,
  galleryImage16,
  galleryImage17,
  galleryImage18,
] as const;


export const testimonialData = [
  {
    name: 'Mr. Masudul Haque',
    role: 'Flat Owner, Baridhara DOHS, Dhaka',
    testimonial: 'I hired Apples International Ltd. for a deep cleaning of my home, including the kitchen and bathrooms. The team was punctual, professional, and left everything spotless. The attention to detail was incredible—my home has never felt so clean! Highly recommend their services to anyone looking for thorough cleaning.',
    avatar: '/images/avatar1.jpg',
  },
  {
    name: 'Rajib Chowdhury',
    role: 'Principal, Sunrise School',
    testimonial: 'Our School needs to be a clean and safe environment for children, and Apples International Ltd. delivers just that. Their cleaning services are thorough and reliable. The team is respectful of our schedule and always ensures that everything is in perfect condition for our little ones. We are truly grateful for their commitment.',
    avatar: '/images/avatar2.jpg',
  },
  {
    name: 'Hasibul Alam',
    role: 'Maintanance Manager',
    testimonial: 'As a property manager, maintaining the cleanliness and appeal of our units is a top priority. Apples International Ltd. handles everything from carpet cleaning to pest control with professionalism and efficiency. They’ve been instrumental in keeping our apartments in top shape, and our tenants have noticed the difference.',
    avatar: '/images/avatar3.jpg',
  },
  // Add more testimonials as needed
];