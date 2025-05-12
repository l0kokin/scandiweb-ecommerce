import Sweater from "../../assets/images/sweater.png";

// dummy data that I will get rid of
const dummyProducts = {
  women: [
    {
      id: "3",
      name: "Women Dress",
      brand: "BrandC",
      inStock: true,
      gallery: [Sweater],
      prices: [{ currency: "$", amount: 75.0 }],
      attributes: [
        {
          id: "1",
          name: "Color",
          type: "swatch",
          items: [
            { displayValue: "Red", value: "#FF0000", id: "1" },
            { displayValue: "Blue", value: "#0000FF", id: "2" },
          ],
        },
      ],
    },
    {
      id: "1",
      name: "Black Jacket",
      brand: "BrandA",
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
      brand: "BrandB",
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
      brand: "BrandD",
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
      brand: "BrandE",
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
    },
  ],
};

export default dummyProducts;
