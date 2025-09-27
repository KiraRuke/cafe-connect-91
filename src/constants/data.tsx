import coffeeSignature from "@/assets/coffee-signature.jpg";
import avocadoToast from "@/assets/avocado-toast.jpg";
import coldBrew from "@/assets/cold-brew.jpg";
import {
  Coffee,
  Clock,
  Heart,
  Leaf,
  Users,
  MapPin,
  Phone,
  Mail,
  Star,
  Instagram,
  Facebook,
  Twitter,
} from "lucide-react";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Menu", path: "/menu" },
  { name: "Reservations", path: "/reservations" },
  { name: "Contact", path: "/contact" },
];

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    details: ["123 Coffee Street", "Downtown District", "City, State 12345"],
    link: "https://maps.google.com",
  },
  {
    icon: Phone,
    title: "Call Us",
    details: ["(555) 123-4567", "Available during business hours"],
    link: "tel:+15551234567",
  },
  {
    icon: Mail,
    title: "Email Us",
    details: ["hello@brewhouse.com", "We respond within 24 hours"],
    link: "mailto:hello@brewhouse.com",
  },
  {
    icon: Clock,
    title: "Hours",
    details: [
      "Mon-Fri: 7:00 AM - 8:00 PM",
      "Sat: 8:00 AM - 9:00 PM",
      "Sun: 8:00 AM - 7:00 PM",
    ],
    link: null,
  },
];

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
];

const featuredItems = [
  {
    name: "Signature Blend",
    description: "Our house blend with notes of chocolate and caramel",
    price: "₹180",
    image: coffeeSignature,
  },
  {
    name: "Avocado Toast",
    description: "Multigrain bread with smashed avocado and sea salt",
    price: "₹240",
    image: avocadoToast,
  },
  {
    name: "Cold Brew",
    description: "Smooth coffee brewed cold for 18 hours",
    price: "₹300",
    image: coldBrew,
  },
];

const testimonials = [
  {
    name: "Sarah Johnson",
    text: "The best coffee in town! The atmosphere is perfect for both work and relaxation.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    text: "Amazing pastries and friendly staff. This place has become my daily ritual.",
    rating: 5,
  },
  {
    name: "Emma Rodriguez",
    text: "Love the cozy ambiance and sustainable practices. Highly recommend!",
    rating: 4,
  },
];

const features = [
  {
    icon: Coffee,
    title: "Premium Coffee",
    description:
      "Ethically sourced beans roasted fresh daily for your premium coffee",
  },
  {
    icon: Clock,
    title: "Quick Service",
    description: "Fast, friendly service without compromising quality",
  },
  {
    icon: Heart,
    title: "Made with Love",
    description: "Every cup and dish prepared with passion and care",
  },
];

const values = [
  {
    icon: Coffee,
    title: "Quality Coffee",
    description:
      "We source the finest beans from sustainable farms around the world, roasted fresh daily.",
  },
  {
    icon: Heart,
    title: "Community First",
    description:
      "Our café is a gathering place where neighbors become friends and memories are made.",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description:
      "Committed to eco-friendly practices, from compostable cups to solar energy.",
  },
  {
    icon: Users,
    title: "Local Partnership",
    description:
      "We proudly partner with local bakeries, artists, and musicians to support our community.",
  },
];

const categories = [
  { id: "coffee", name: "Coffee & Espresso", icon: Coffee },
  { id: "beverages", name: "Beverages", icon: Leaf },
  { id: "food", name: "Food & Pastries", icon: Star },
];

const menuItems = {
  coffee: [
    {
      name: "Signature Blend",
      description: "Our house blend with notes of chocolate and caramel",
      price: "$4.50",
      tags: ["Popular", "House Blend"],
      image: "/placeholder.svg",
    },
    {
      name: "Single Origin Ethiopia",
      description: "Bright and fruity with floral notes",
      price: "$5.25",
      tags: ["Single Origin", "Light Roast"],
      image: "/placeholder.svg",
    },
    {
      name: "Cold Brew",
      description: "Smooth, refreshing coffee brewed cold for 18 hours",
      price: "$4.75",
      tags: ["Cold Brew", "Refreshing"],
      image: "/placeholder.svg",
    },
    {
      name: "Cappuccino",
      description: "Perfect balance of espresso, steamed milk, and foam",
      price: "$4.25",
      tags: ["Classic", "Milk-based"],
      image: "/placeholder.svg",
    },
    {
      name: "Latte",
      description: "Creamy steamed milk with a double shot of espresso",
      price: "$4.50",
      tags: ["Popular", "Milk-based"],
      image: "/placeholder.svg",
    },
    {
      name: "Americano",
      description: "Rich espresso with hot water for a clean, bold taste",
      price: "$3.75",
      tags: ["Classic", "Bold"],
      image: "/placeholder.svg",
    },
  ],
  beverages: [
    {
      name: "Chai Latte",
      description: "Spiced tea blend with steamed milk and honey",
      price: "$4.25",
      tags: ["Spiced", "Non-Coffee"],
      image: "/placeholder.svg",
    },
    {
      name: "Matcha Latte",
      description: "Premium Japanese matcha with steamed milk",
      price: "$4.75",
      tags: ["Matcha", "Antioxidants"],
      image: "/placeholder.svg",
    },
    {
      name: "Golden Milk",
      description: "Turmeric blend with coconut milk and warming spices",
      price: "$4.50",
      tags: ["Healthy", "Vegan"],
      image: "/placeholder.svg",
    },
    {
      name: "Fresh Juice",
      description: "Daily selection of cold-pressed juices",
      price: "$5.50",
      tags: ["Fresh", "Healthy"],
      image: "/placeholder.svg",
    },
  ],
  food: [
    {
      name: "Avocado Toast",
      description:
        "Multigrain bread topped with smashed avocado, cherry tomatoes, and sea salt",
      price: "$8.50",
      tags: ["Healthy", "Vegetarian"],
      image: "/placeholder.svg",
    },
    {
      name: "Croissant Sandwich",
      description:
        "Buttery croissant with scrambled eggs, cheese, and choice of meat",
      price: "$9.25",
      tags: ["Breakfast", "Popular"],
      image: "/placeholder.svg",
    },
    {
      name: "Acai Bowl",
      description:
        "Organic acai topped with granola, fresh berries, and coconut",
      price: "$9.75",
      tags: ["Healthy", "Gluten-Free"],
      image: "/placeholder.svg",
    },
    {
      name: "Artisan Pastries",
      description: "Daily selection of freshly baked pastries and muffins",
      price: "$3.50",
      tags: ["Fresh", "Daily Special"],
      image: "/placeholder.svg",
    },
    {
      name: "Quinoa Salad",
      description:
        "Nutrient-rich quinoa with seasonal vegetables and tahini dressing",
      price: "$10.50",
      tags: ["Healthy", "Vegan", "Gluten-Free"],
      image: "/placeholder.svg",
    },
  ],
};

const timeSlots = [
  "8:00 AM",
  "8:30 AM",
  "9:00 AM",
  "9:30 AM",
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
  "12:00 PM",
  "12:30 PM",
  "1:00 PM",
  "1:30 PM",
  "2:00 PM",
  "2:30 PM",
  "3:00 PM",
  "3:30 PM",
  "4:00 PM",
  "4:30 PM",
  "5:00 PM",
  "5:30 PM",
  "6:00 PM",
  "6:30 PM",
  "7:00 PM",
  "7:30 PM",
];

const guestOptions = ["1", "2", "3", "4", "5", "6", "7", "8", "8+"];

export {
  navItems,
  contactInfo,
  socialLinks,
  testimonials,
  featuredItems,
  features,
  values,
  categories,
  menuItems,
  timeSlots,
  guestOptions,
};
