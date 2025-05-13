import Image from "../../assets/images/Image.png";
import Sweater from "../../assets/images/sweater.png";

// dummy data that I will get rid of
const dummyProducts = {
  women: [
    {
      id: "3",
      name: "Women Dress",
      inStock: true,
      gallery: [Sweater, Image, Sweater, Image, Image],
      prices: [{ currency: "$", amount: 75.0 }],
      description:
        "Access thousands of production-ready models available on our AI model platform. These pre-trained models are optimized for immediate use and require minimal coding effort to implement.",
      attributes: [
        {
          id: "1",
          name: "Size",
          type: "text",
          items: [
            { displayValue: "S", value: "S", id: "1" },
            { displayValue: "M", value: "M", id: "2" },
            { displayValue: "L", value: "L", id: "3" },
          ],
        },
        {
          id: "2",
          name: "Color",
          type: "swatch",
          items: [
            { displayValue: "Black", value: "#2B2B2B", id: "1" },
            { displayValue: "Green", value: "#0F6450", id: "2" },
          ],
        },
      ],
    },
    {
      id: "4",
      name: "Men's Casual Shirt",
      inStock: true,
      gallery: [Sweater, Sweater, Sweater, Sweater],
      prices: [{ currency: "$", amount: 45.99 }],
      description:
        "Premium cotton shirt with slim fit. Perfect for casual outings or office wear. Wrinkle-resistant fabric with reinforced stitching.",
      attributes: [
        {
          id: "1",
          name: "Size",
          type: "text",
          items: [
            { displayValue: "XS", value: "XS", id: "1" },
            { displayValue: "S", value: "S", id: "2" },
            { displayValue: "M", value: "M", id: "3" },
            { displayValue: "L", value: "L", id: "4" },
          ],
        },
        {
          id: "2",
          name: "Color",
          type: "swatch",
          items: [
            { displayValue: "Navy", value: "#001F3F", id: "1" },
            { displayValue: "Light Blue", value: "#7FDBFF", id: "2" },
            { displayValue: "White", value: "#FFFFFF", id: "3" },
          ],
        },
      ],
    },
    {
      id: "5",
      name: "Kids' Sneakers",
      inStock: true,
      gallery: [Image, Image, Image],
      prices: [{ currency: "$", amount: 39.99 }],
      description:
        "Comfortable running shoes for kids with breathable mesh and durable rubber soles. Reflective details for safety.",
      attributes: [
        {
          id: "1",
          name: "Size",
          type: "text",
          items: [
            { displayValue: "28", value: "28", id: "1" },
            { displayValue: "30", value: "30", id: "2" },
            { displayValue: "32", value: "32", id: "3" },
          ],
        },
        {
          id: "2",
          name: "Color",
          type: "swatch",
          items: [
            { displayValue: "Pink", value: "#FF69B4", id: "1" },
            { displayValue: "Blue", value: "#0074D9", id: "2" },
            { displayValue: "Black", value: "#111111", id: "3" },
          ],
        },
      ],
    },
    {
      id: "6",
      name: "Women's Winter Coat",
      inStock: false,
      gallery: [Image, Image, Image, Image],
      prices: [{ currency: "$", amount: 129.99 }],
      description:
        "Waterproof winter coat with thermal insulation. Features multiple pockets and adjustable hood. Perfect for cold climates.",
      attributes: [
        {
          id: "1",
          name: "Size",
          type: "text",
          items: [
            { displayValue: "XS", value: "XS", id: "1" },
            { displayValue: "S", value: "S", id: "2" },
            { displayValue: "M", value: "M", id: "3" },
          ],
        },
        {
          id: "2",
          name: "Color",
          type: "swatch",
          items: [
            { displayValue: "Red", value: "#FF4136", id: "1" },
            { displayValue: "Camel", value: "#D2B48C", id: "2" },
          ],
        },
      ],
    },
    {
      id: "7",
      name: "Unisex Backpack",
      inStock: true,
      gallery: [Image, Image, Image],
      prices: [{ currency: "$", amount: 59.99 }],
      description:
        "Durable 30L backpack with laptop compartment and USB charging port. Water-resistant fabric with ergonomic straps.",
      attributes: [
        {
          id: "1",
          name: "Color",
          type: "swatch",
          items: [
            { displayValue: "Black", value: "#000000", id: "1" },
            { displayValue: "Gray", value: "#AAAAAA", id: "2" },
            { displayValue: "Olive", value: "#3D9970", id: "3" },
          ],
        },
      ],
    },
    {
      id: "8",
      name: "Men's Dress Shoes",
      inStock: true,
      gallery: [Sweater],
      prices: [{ currency: "$", amount: 89.99 }],
      description:
        "Classic oxford dress shoes made with genuine leather. Cushioned insole and slip-resistant rubber sole. Suitable for formal occasions.",
      attributes: [
        {
          id: "1",
          name: "Size",
          type: "text",
          items: [
            { displayValue: "8", value: "8", id: "1" },
            { displayValue: "9", value: "9", id: "2" },
            { displayValue: "10", value: "10", id: "3" },
            { displayValue: "11", value: "11", id: "4" },
          ],
        },
        {
          id: "2",
          name: "Color",
          type: "swatch",
          items: [
            { displayValue: "Black", value: "#111111", id: "1" },
            { displayValue: "Brown", value: "#8B4513", id: "2" },
          ],
        },
        {
          id: "3",
          name: "Width",
          type: "text",
          items: [
            { displayValue: "Narrow", value: "N", id: "1" },
            { displayValue: "Medium", value: "M", id: "2" },
            { displayValue: "Wide", value: "W", id: "3" },
          ],
        },
      ],
    },
    {
      id: "1",
      name: "Black Jacket",
      inStock: true,
      gallery: [Sweater],
      prices: [{ currency: "$", amount: 50.0 }],
      attributes: [
        {
          id: "1",
          name: "Size",
          type: "text",
          items: [
            { displayValue: "S", value: "S", id: "1" },
            { displayValue: "M", value: "M", id: "2" },
            { displayValue: "L", value: "L", id: "3" },
          ],
        },
        {
          id: "2",
          name: "Color",
          type: "swatch",
          items: [{ displayValue: "Black", value: "#000000", id: "1" }],
        },
      ],
    },
    {
      id: "2",
      name: "White T-Shirt",
      inStock: false,
      gallery: [Sweater],
      prices: [{ currency: "$", amount: 25.0 }],
      attributes: [
        {
          id: "1",
          name: "Size",
          type: "text",
          items: [
            { displayValue: "XS", value: "XS", id: "1" },
            { displayValue: "S", value: "S", id: "2" },
          ],
        },
      ],
    },
  ],
  men: [
    {
      id: "4",
      name: "Men Shirt",
      inStock: true,
      gallery: [Sweater],
      prices: [{ currency: "$", amount: 45.0 }],
      attributes: [
        {
          id: "1",
          name: "Size",
          type: "text",
          items: [
            { displayValue: "M", value: "M", id: "1" },
            { displayValue: "L", value: "L", id: "2" },
            { displayValue: "XL", value: "XL", id: "3" },
          ],
        },
      ],
    },
  ],
  kids: [
    {
      id: "5",
      name: "Kids Shoes",
      inStock: true,
      gallery: [Sweater],
      prices: [{ currency: "$", amount: 35.0 }],
      attributes: [
        {
          id: "1",
          name: "Size",
          type: "text",
          items: [
            { displayValue: "28", value: "28", id: "1" },
            { displayValue: "30", value: "30", id: "2" },
          ],
        },
      ],
      description:
        "Access thousands of production-ready models available on our AI model platform. These pre-trained models are optimized for immediate use and require minimal coding effort to implement.",
    },
  ],
};

export default dummyProducts;
