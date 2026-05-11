export const gifts = [
    {
        id: 1,
        name: "Custom Spiral Notebook",
        category: "Gifts",
        type: "Notebook",
        description:
            "Premium personalized spiral notebook perfect for office, school, gifting, and branding purposes.",
        image: "/gift/2872v.png",
        basePrice: 199,

        options: {
            quantity: [
                { label: "1 Piece", price: 199 },
                { label: "5 Pieces", price: 899, discount: "Save 10%" },
                { label: "10 Pieces", price: 1699, discount: "Save 15%" }
            ],

            size: ["A5", "A4", "Pocket Size"],

            pages: [
                { label: "100 Pages", price: 0 },
                { label: "200 Pages", price: 80 },
                { label: "300 Pages", price: 140 }
            ],

            cover: [
                { label: "Matte", price: 0 },
                { label: "Gloss", price: 60 },
                { label: "Hard Cover", price: 120 }
            ]
        }
    },

    {
        id: 2,
        name: "Personalized Photo Mug",
        category: "Gifts",
        type: "Mug",
        description:
            "Custom ceramic photo mug ideal for personal gifts, birthdays, office branding, and promotional merchandise.",
        image: "/gift/6078915xx.png",
        basePrice: 249,

        options: {
            quantity: [
                { label: "1 Piece", price: 249 },
                { label: "5 Pieces", price: 1099, discount: "Save 12%" },
                { label: "10 Pieces", price: 1999, discount: "Save 20%" }
            ],

            size: ["250ml", "350ml", "500ml"],

            material: [
                { label: "Ceramic", price: 0 },
                { label: "Magic Mug", price: 120 },
                { label: "Steel Mug", price: 180 }
            ],

            printing: [
                { label: "Single Side", price: 0 },
                { label: "Full Wrap", price: 80 }
            ]
        }
    },

    {
        id: 3,
        name: "Thermal Display Bottle",
        category: "Gifts",
        type: "Bottle",
        description:
            "Smart temperature display insulated bottle with premium stainless steel finish for modern gifting.",
        image: "/gift/bottle.png",
        basePrice: 599,

        options: {
            quantity: [
                { label: "1 Piece", price: 599 },
                { label: "5 Pieces", price: 2799, discount: "Save 8%" },
                { label: "10 Pieces", price: 5199, discount: "Save 13%" }
            ],

            capacity: ["500ml", "750ml", "1L"],

            material: [
                { label: "Stainless Steel", price: 0 },
                { label: "Matte Finish", price: 120 },
                { label: "Premium Coated", price: 180 }
            ],

            printing: [
                { label: "UV Print", price: 0 },
                { label: "Laser Engraving", price: 150 }
            ]
        }
    },

    {
        id: 4,
        name: "Premium Photo Frame",
        category: "Gifts",
        type: "Frame",
        description:
            "Elegant customized photo frame for memorable gifts, home decor, and premium wall display.",
        image: "/gift/frame.png",
        basePrice: 399,

        options: {
            quantity: [
                { label: "1 Piece", price: 399 },
                { label: "5 Pieces", price: 1849, discount: "Save 8%" },
                { label: "10 Pieces", price: 3499, discount: "Save 12%" }
            ],

            size: ["8x10", "12x16", "16x20"],

            frameType: [
                { label: "Wooden", price: 0 },
                { label: "Metallic", price: 120 },
                { label: "Premium Matte", price: 180 }
            ]
        }
    },

    {
        id: 5,
        name: "Leather Keychain",
        category: "Gifts",
        type: "Keychain",
        description:
            "Premium engraved leather keychain perfect for corporate gifting and personalized branding.",
        image: "/gift/keychain.png",
        basePrice: 179,

        options: {
            quantity: [
                { label: "1 Piece", price: 179 },
                { label: "10 Pieces", price: 1499, discount: "Save 16%" },
                { label: "25 Pieces", price: 3299, discount: "Save 25%" }
            ],

            material: [
                { label: "Leather", price: 0 },
                { label: "Metal", price: 80 },
                { label: "Premium Steel", price: 140 }
            ],

            engraving: [
                { label: "Single Side", price: 0 },
                { label: "Double Side", price: 60 }
            ]
        }
    },

    {
        id: 6,
        name: "Executive Pen",
        category: "Gifts",
        type: "Pen",
        description:
            "Elegant executive pen with custom branding suitable for premium corporate gifting.",
        image: "/gift/pen.png",
        basePrice: 149,

        options: {
            quantity: [
                { label: "1 Piece", price: 149 },
                { label: "10 Pieces", price: 1299, discount: "Save 13%" },
                { label: "25 Pieces", price: 2899, discount: "Save 22%" }
            ],

            ink: ["Blue", "Black"],

            material: [
                { label: "Plastic", price: 0 },
                { label: "Metal", price: 100 },
                { label: "Premium Matte", price: 160 }
            ],

            branding: [
                { label: "Printed", price: 0 },
                { label: "Laser Engraved", price: 80 }
            ]
        }
    },

    {
        id: 7,
        name: "Custom Printed T-Shirt",
        category: "Gifts",
        type: "T-Shirt",
        description:
            "Comfortable custom printed t-shirt ideal for events, branding, promotions, and gifting.",
        image: "/gift/Promotional.png",
        basePrice: 499,

        options: {
            quantity: [
                { label: "1 Piece", price: 499 },
                { label: "5 Pieces", price: 2299, discount: "Save 8%" },
                { label: "10 Pieces", price: 4299, discount: "Save 14%" }
            ],

            size: ["S", "M", "L", "XL", "XXL"],

            fabric: [
                { label: "Cotton", price: 0 },
                { label: "Polyester", price: 80 },
                { label: "Premium Cotton", price: 140 }
            ],

            printing: [
                { label: "Front Print", price: 0 },
                { label: "Front & Back", price: 120 }
            ]
        }
    },

    {
        id: 8,
        name: "Leather Visiting Card Holder",
        category: "Gifts",
        type: "Card Holder",
        description:
            "Premium leather visiting card holder with elegant finish for professional corporate gifting.",
        image: "/gift/visitngcardholder.png",
        basePrice: 349,

        options: {
            quantity: [
                { label: "1 Piece", price: 349 },
                { label: "5 Pieces", price: 1599, discount: "Save 8%" },
                { label: "10 Pieces", price: 2999, discount: "Save 14%" }
            ],

            material: [
                { label: "Leather", price: 0 },
                { label: "PU Leather", price: 60 },
                { label: "Premium Metal", price: 140 }
            ],

            finishing: [
                { label: "Standard", price: 0 },
                { label: "Engraved", price: 80 },
                { label: "Foil Print", price: 120 }
            ]
        }
    }
];
