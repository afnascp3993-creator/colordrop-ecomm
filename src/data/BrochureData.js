export const brochures = [
    {
        id: 1,
        name: "Creative Corporate Brochure",
        category: "Brochures",
        type: "Bi-Fold",
        description:
            "Modern corporate brochure with elegant layouts and premium print quality for company branding and presentations.",
        image: "/Brochures/455.png",
        basePrice: 299,

        options: {
            quantity: [
                { label: "50 Pieces", price: 299 },
                { label: "100 Pieces", price: 499, discount: "Save 16%" },
                { label: "250 Pieces", price: 999, discount: "Save 25%" }
            ],

            size: ["A4 Folded", "A5 Folded", "Square"],

            paper: [
                { label: "170 GSM", price: 0 },
                { label: "250 GSM", price: 120 },
                { label: "Textured", price: 180 },
                { label: "Recycled", price: 160 }
            ],

            lamination: [
                { label: "None", price: 0 },
                { label: "Matt", price: 120 },
                { label: "Gloss", price: 120 }
            ],

            foldType: [
                { label: "Bi-Fold", price: 0 },
                { label: "Tri-Fold", price: 120 }
            ]
        }
    },

    {
        id: 2,
        name: "Industrial Tri-Fold Brochure",
        category: "Brochures",
        type: "Tri-Fold",
        description:
            "Professional industrial brochure design ideal for oil, gas, construction, and engineering company promotions.",
        image: "/Brochures/21487893.png",
        basePrice: 349,

        options: {
            quantity: [
                { label: "50 Pieces", price: 349 },
                { label: "100 Pieces", price: 579, discount: "Save 18%" },
                { label: "250 Pieces", price: 1149, discount: "Save 28%" }
            ],

            size: ["A4 Tri-Fold", "DL Size", "Custom Size"],

            paper: [
                { label: "170 GSM", price: 0 },
                { label: "250 GSM", price: 140 },
                { label: "Gloss Art", price: 180 },
                { label: "Premium Matte", price: 200 }
            ],

            lamination: [
                { label: "None", price: 0 },
                { label: "Matt", price: 140 },
                { label: "Gloss", price: 140 }
            ],

            foldType: [
                { label: "Tri-Fold", price: 0 },
                { label: "Z-Fold", price: 180 }
            ]
        }
    },

    {
        id: 3,
        name: "Luxury Product Catalog",
        category: "Brochures",
        type: "Catalog",
        description:
            "Premium catalog brochure with bold visuals and high-end finishing for furniture, fashion, and luxury product showcases.",
        image: "/Brochures/P19PKZ1.png",
        basePrice: 399,

        options: {
            quantity: [
                { label: "50 Pieces", price: 399 },
                { label: "100 Pieces", price: 699, discount: "Save 15%" },
                { label: "250 Pieces", price: 1349, discount: "Save 30%" }
            ],

            size: ["A4", "A5", "Square Catalog"],

            paper: [
                { label: "250 GSM", price: 0 },
                { label: "300 GSM", price: 180 },
                { label: "Velvet Finish", price: 260 },
                { label: "Textured Premium", price: 240 }
            ],

            lamination: [
                { label: "Matt", price: 0 },
                { label: "Gloss", price: 150 },
                { label: "Soft Touch", price: 260 }
            ],

            binding: [
                { label: "Stapled", price: 0 },
                { label: "Perfect Binding", price: 220 }
            ]
        }
    },

    {
        id: 4,
        name: "Food Menu Brochure",
        category: "Brochures",
        type: "Flyer Brochure",
        description:
            "Stylish food and restaurant brochure designed for cafes, bakeries, and restaurant promotions with vibrant printing.",
        image: "/Brochures/Stain_watercolor_mockup4.png",

        basePrice: 279,

        options: {
            quantity: [
                { label: "50 Pieces", price: 279 },
                { label: "100 Pieces", price: 459, discount: "Save 18%" },
                { label: "250 Pieces", price: 899, discount: "Save 32%" }
            ],

            size: ["A4", "A5", "DL Flyer"],

            paper: [
                { label: "130 GSM", price: 0 },
                { label: "170 GSM", price: 80 },
                { label: "Gloss Finish", price: 140 },
                { label: "Premium Matte", price: 160 }
            ],

            lamination: [
                { label: "None", price: 0 },
                { label: "Gloss", price: 120 },
                { label: "Matt", price: 120 }
            ],

            printingSide: [
                { label: "Single Side", price: 0 },
                { label: "Double Side", price: 140 }
            ]
        }
    }
];
