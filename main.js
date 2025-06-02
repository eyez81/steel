const steelData = {
  pipes: {
    name: "צינורות",
    sizes: ["1/2\"", "3/4\"", "1\"", "1 1/4\"", "1 1/2\"", "2\"", "2 1/2\"", "3\"", "4\"", "5\"", "6\"", "8\"", "10\"", "12\"", "14\"", "16\""],
    diameters: [21.3, 26.9, 33.7, 42.4, 48.3, 60.3, 76.1, 88.9, 114, 141.3, 168.3, 219.1, 273.05, 323.85, 355.6, 406.4],
    weights: {
      "1.50": [null, null, 1.27, 1.61, 1.84, 2.25, 2.84, 3.32],
      "2.00": [0.98, 1.22, 1.56, 1.99, 2.28, 2.77, 3.50, 4.07],
      "2.65": [null, 1.58, 2.03, 2.60, 2.98, 3.77, 4.80, 5.64, 7.05, 8.64, 10.52],
      "3.20": [null, null, 2.50, 3.24, 3.68, 4.51, 5.74, 6.78, 8.63, 10.69, 12.73, 16.07, 20.93, 25.3],
      "3.65": [null, null, null, 3.78, 4.30, 5.44, 6.93, 8.19, 10.29, 12.87, 15.27, 19.58, 25.26, 30.97, 34.43],
      "4.05": [null, null, null, null, null, 6.02, 7.71, 9.11, 11.41, 14.27, 16.96, 21.77, 28.04, 34.43, 38.49, 43.39],
      "4.50": [null, null, null, null, null, null, 8.77, 10.25, 12.66, 15.88, 18.78, 24.21, 31.06, 38.16, 42.55, 48.08],
      "5.00": [null, null, null, null, null, null, null, 11.50, 14.02, 17.69, 20.93, 26.97, 34.59, 42.56, 47.39, 53.79],
      "5.40": [null, null, null, null, null, null, null, null, 15.27, 19.24, 22.78, 29.39, 37.70, 46.36, 51.64, 58.57],
      "6.30": [null, null, null, null, null, null, null, null, null, 22.89, 27.14, 35.07, 45.01, 55.37, 61.67, 70.05],
      "8.00": [null, null, null, null, null, null, null, null, null, null, null, 44.45, 57.02, 70.16, 78.18, 88.77]
    }
  },
  rectangular: {
    name: "פרופילים מלבניים",
    sizes: ["30×20", "40×20", "50×25", "60×30", "60×40", "80×40", "100×40", "100×50", "100×60", "120×60", "120×80", "150×100", "160×80", "200×100", "250×150", "300×200", "400×200"],
    weights: {
      "1.50": [1.09, 1.32, 1.68, 2.05, 2.27],
      "2.00": [1.41, 1.73, 2.28, 2.70, 3.00, 3.65, 4.24],
      "2.65": [1.78, 2.18, 2.93, 3.52, 3.87, 4.71, 4.71, 6.02, null, 7.26],
      "2.90": [null, null, null, 3.83, 4.26, 5.17, 6.04, 6.50, 7.02, 7.93, 8.84],
      "3.25": [null, null, null, 4.26, 5.17, 5.67, 6.63, 7.24, 7.64, 8.76, 9.76, null, 11.91],
      "4.00": [null, null, null, null, 5.67, 6.97, null, 8.96, 9.42, 10.9, 12, 15.2, 14.57, 18.12],
      "5.00": [null, null, null, null, 5.72, 8.54, null, 10.9, 11.7, 13.3, 14.8, 18.7, 18, 22.7, 30.5],
      "6.00": [null, null, null, null, null, 10.5, null, 13.4, 14.4, 16.4, 17.71, 22.42, 21.48, 28.3, 38.2, 48.1],
      "8.00": [null, null, null, null, null, 12.8, null, 16.6, 17.8, 20.4, 22.9, 29.1, 27.9, 35.4, 48, 60.5]
    }
  },
  square: {
    name: "פרופילים מרובעים",
    sizes: ["20×20", "25×25", "30×30", "34×34", "40×40", "50×50", "60×60", "70×70", "80×80", "90×90", "100×100", "120×120", "150×150", "200×200", "250×250", "300×300"],
    weights: {
      "1.50": [0.92, 1.09, 1.32, 1.53, 1.80, 2.27],
      "2.00": [1.21, 1.43, 1.77, 2.01, 2.40, 3.00, 3.65, 4.24, 4.79, null, 6],
      "2.65": [null, 1.8, 2.21, null, 3.03, 3.87, 4.71, 5.53, 6.30, null, 7.9],
      "2.90": [null, null, 2.44, null, 3.35, 4.26, 5.17, 6.08, 6.99, 7.90, 8.78],
      "3.25": [null, null, 2.73, null, 3.75, 4.76, 5.78, 6.80, 7.82, 8.84, 9.86, 11.9],
      "4.00": [null, null, null, null, 4.53, 5.77, 7.01, 8.25, 9.50, 10.7, 12.0, 14.5, 18.2],
      "5.00": [null, null, null, null, 5.52, 7.09, 8.65, 10.2, 11.8, 13.4, 14.9, 18.1, 22.7, 30.5],
      "6.00": [null, null, null, null, null, 8.39, 10.3, 12.2, 14.1, 16.0, 17.9, 21.7, 27.2, 36.6, 46],
      "6.30": [null, null, null, null, null, 8.82, 10.8, 12.8, 14.8, 16.8, 18.8, 22.8, 28.6, 38.5, 48.3],
      "8.00": [null, null, null, null, null, null, 13.4, 15.9, 18.4, 20.9, 23.4, 28.4, 35.6, 48, 60.4, 72.8],
      "10.0": [null, null, null, null, null, null, null, 19.4, 22.5, 25.6, 28.7, 34.9, 43.9, 59.2, 74.5, 89.8],
      "12.0": [null, null, null, null, null, null, null, null, 26.5, 30.2, 33.9, 41.3, 52.1, 70.3, 88.5, 107]
    }
  },
  heb: {
    name: "פרופיל HEB",
    items: [
      { size: "HEB 100", weight: 20.4, width: 100, height: 100 },
      { size: "HEB 120", weight: 26.7, width: 120, height: 120 },
      { size: "HEB 140", weight: 33.7, width: 140, height: 140 },
      { size: "HEB 160", weight: 42.6, width: 160, height: 160 },
      { size: "HEB 180", weight: 51.2, width: 180, height: 180 },
      { size: "HEB 200", weight: 61.3, width: 200, height: 200 },
      { size: "HEB 220", weight: 71.5, width: 220, height: 220 },
      { size: "HEB 240", weight: 83.2, width: 240, height: 240 },
      { size: "HEB 260", weight: 93.0, width: 260, height: 260 },
      { size: "HEB 280", weight: 103.0, width: 280, height: 280 },
      { size: "HEB 300", weight: 117.0, width: 300, height: 300 },
      { size: "HEB 320", weight: 127.0, width: 320, height: 320 },
      { size: "HEB 340", weight: 134.0, width: 340, height: 340 },
      { size: "HEB 360", weight: 142.0, width: 360, height: 360 },
      { size: "HEB 400", weight: 155.0, width: 400, height: 400 },
      { size: "HEB 450", weight: 171.0, width: 450, height: 450 },
      { size: "HEB 500", weight: 187.0, width: 500, height: 500 },
      { size: "HEB 550", weight: 199.0, width: 550, height: 550 },
      { size: "HEB 600", weight: 212.0, width: 600, height: 600 },
      { size: "HEB 650", weight: 225.0, width: 650, height: 650 },
      { size: "HEB 700", weight: 241.0, width: 700, height: 700 },
      { size: "HEB 800", weight: 262.0, width: 800, height: 800 },
      { size: "HEB 900", weight: 291.0, width: 900, height: 900 }
    ]
  },
  hea: {
    name: "פרופיל HEA",
    items: [
      { size: "HEA 100", weight: 16.7, width: 96, height: 100 },
      { size: "HEA 120", weight: 19.9, width: 114, height: 120 },
      { size: "HEA 140", weight: 24.7, width: 133, height: 140 },
      { size: "HEA 160", weight: 30.4, width: 152, height: 160 },
      { size: "HEA 180", weight: 35.5, width: 171, height: 180 },
      { size: "HEA 200", weight: 42.3, width: 190, height: 200 },
      { size: "HEA 220", weight: 50.5, width: 210, height: 220 },
      { size: "HEA 240", weight: 60.3, width: 230, height: 240 },
      { size: "HEA 260", weight: 68.2, width: 250, height: 260 },
      { size: "HEA 280", weight: 76.4, width: 270, height: 280 },
      { size: "HEA 300", weight: 88.3, width: 290, height: 300 },
      { size: "HEA 320", weight: 97.6, width: 310, height: 320 },
      { size: "HEA 340", weight: 105.0, width: 330, height: 340 },
      { size: "HEA 360", weight: 112.0, width: 350, height: 360 },
      { size: "HEA 400", weight: 125.0, width: 390, height: 400 },
      { size: "HEA 450", weight: 140.0, width: 440, height: 450 },
      { size: "HEA 500", weight: 155.0, width: 490, height: 500 },
      { size: "HEA 550", weight: 166.0, width: 540, height: 550 },
      { size: "HEA 600", weight: 178.0, width: 590, height: 600 },
      { size: "HEA 650", weight: 190.0, width: 640, height: 650 },
      { size: "HEA 700", weight: 204.0, width: 690, height: 700 },
      { size: "HEA 800", weight: 224.0, width: 790, height: 800 },
      { size: "HEA 900", weight: 252.0, width: 890, height: 900 },
      { size: "HEA 1000", weight: 272.0, width: 990, height: 1000 }
    ]
  },
  u_channel: {
    name: "פרופיל U תעלה",
    items: [
      { size: "UPN 50", weight: 5.59, width: 38, height: 50 },
      { size: "UPN 65", weight: 7.09, width: 42, height: 65 },
      { size: "UPN 80", weight: 8.64, width: 45, height: 80 },
      { size: "UPN 100", weight: 10.60, width: 50, height: 100 },
      { size: "UPN 120", weight: 13.40, width: 55, height: 120 },
      { size: "UPN 140", weight: 16.00, width: 60, height: 140 },
      { size: "UPN 160", weight: 18.80, width: 65, height: 160 },
      { size: "UPN 180", weight: 22.00, width: 70, height: 180 },
      { size: "UPN 200", weight: 25.30, width: 75, height: 200 },
      { size: "UPN 220", weight: 29.40, width: 80, height: 220 },
      { size: "UPN 240", weight: 33.20, width: 85, height: 240 },
      { size: "UPN 260", weight: 37.90, width: 90, height: 260 },
      { size: "UPN 280", weight: 41.80, width: 95, height: 280 },
      { size: "UPN 300", weight: 46.20, width: 100, height: 300 },
      { size: "UPN 320", weight: 59.50, width: 100, height: 320 },
      { size: "UPN 350", weight: 60.60, width: 100, height: 350 },
      { size: "UPN 380", weight: 63.10, width: 102, height: 380 },
      { size: "UPN 400", weight: 71.80, width: 110, height: 400 }
    ]
  },
  ipn: {
    name: "פרופיל IPN",
    items: [
      { size: "IPN 80", weight: 5.94, width: 42, height: 80 },
      { size: "IPN 100", weight: 8.34, width: 50, height: 100 },
      { size: "IPN 120", weight: 11.10, width: 58, height: 120 },
      { size: "IPN 140", weight: 14.30, width: 66, height: 140 },
      { size: "IPN 160", weight: 17.90, width: 74, height: 160 },
      { size: "IPN 180", weight: 21.90, width: 82, height: 180 },
      { size: "IPN 200", weight: 26.20, width: 90, height: 200 },
      { size: "IPN 220", weight: 31.10, width: 98, height: 220 },
      { size: "IPN 240", weight: 36.20, width: 106, height: 240 },
      { size: "IPN 260", weight: 41.90, width: 113, height: 260 },
      { size: "IPN 280", weight: 47.90, width: 119, height: 280 },
      { size: "IPN 300", weight: 54.20, width: 125, height: 300 },
      { size: "IPN 320", weight: 61.00, width: 131, height: 320 },
      { size: "IPN 340", weight: 68.00, width: 137, height: 340 },
      { size: "IPN 360", weight: 76.10, width: 143, height: 360 },
      { size: "IPN 380", weight: 84.00, width: 149, height: 380 },
      { size: "IPN 400", weight: 92.40, width: 155, height: 400 },
      { size: "IPN 450", weight: 115.00, width: 170, height: 450 },
      { size: "IPN 500", weight: 141.00, width: 185, height: 500 },
      { size: "IPN 550", weight: 166.00, width: 200, height: 550 }
    ]
  },
  t_beam: {
    name: "ברזל T",
    items: [
      { size: "20×3", weight: 0.88 },
      { size: "25×3.5", weight: 1.29 },
      { size: "30×4", weight: 1.77 },
      { size: "35×4.5", weight: 2.33 },
      { size: "40×5", weight: 2.96 },
      { size: "45×5.5", weight: 3.67 },
      { size: "50×6", weight: 4.44 },
      { size: "60×7", weight: 6.23 },
      { size: "70×8", weight: 8.32 },
      { size: "80×9", weight: 10.70 },
      { size: "90×10", weight: 13.40 },
      { size: "100×11", weight: 16.40 },
      { size: "120×13", weight: 23.20 },
      { size: "140×15", weight: 31.30 }
    ]
  },
  channels: {
    name: "פטות",
    items: [
      { size: "60×30×14", thickness: "2.0", weight: 2.11 },
      { size: "60×30×14", thickness: "2.5", weight: 2.68 },
      { size: "80×40×14", thickness: "2.0", weight: 2.67 },
      { size: "80×40×14", thickness: "2.5", weight: 3.34 },
      { size: "80×40×14", thickness: "3.0", weight: 4.00 },
      { size: "100×40×14", thickness: "2.0", weight: 2.99 },
      { size: "100×40×14", thickness: "2.5", weight: 3.75 },
      { size: "100×40×14", thickness: "3.0", weight: 4.49 },
      { size: "120×40×14", thickness: "2.0", weight: 3.37 },
      { size: "120×40×14", thickness: "2.5", weight: 4.13 },
      { size: "120×40×14", thickness: "3.0", weight: 4.97 },
      { size: "140×40×14", thickness: "2.0", weight: 3.68 },
      { size: "140×40×14", thickness: "2.5", weight: 4.54 },
      { size: "140×40×14", thickness: "3.0", weight: 5.45 },
      { size: "160×40×14", thickness: "2.0", weight: 3.99 },
      { size: "160×40×14", thickness: "2.5", weight: 4.91 },
      { size: "160×40×14", thickness: "3.0", weight: 5.81 },
      { size: "180×40×14", thickness: "3.0", weight: 6.28 },
      { size: "200×40×14", thickness: "3.0", weight: 6.75 },
      { size: "220×40×14", thickness: "3.0", weight: 7.22 }
    ]
  },
  round_solid: {
    name: "ברזל מלא עגול",
    items: [
      { size: "ø5", weight: 0.155 },
      { size: "ø6", weight: 0.222 },
      { size: "ø8", weight: 0.397 },
      { size: "ø10", weight: 0.620 },
      { size: "ø12", weight: 0.893 },
      { size: "ø14", weight: 1.21 },
      { size: "ø16", weight: 1.58 },
      { size: "ø18", weight: 2.06 },
      { size: "ø20", weight: 2.48 },
      { size: "ø25", weight: 3.98 },
      { size: "ø30", weight: 5.58 },
      { size: "ø35", weight: 7.60 },
      { size: "ø40", weight: 9.90 },
      { size: "ø50", weight: 15.5 }
    ]
  },
  square_solid: {
    name: "ברזל מרובע מלא",
    items: [
      { size: "5×5", weight: 0.198 },
      { size: "6×6", weight: 0.284 },
      { size: "8×8", weight: 0.506 },
      { size: "10×10", weight: 0.790 },
      { size: "12×12", weight: 1.138 },
      { size: "14×14", weight: 1.548 },
      { size: "16×16", weight: 2.022 },
      { size: "18×18", weight: 2.56 },
      { size: "20×20", weight: 3.16 },
      { size: "25×25", weight: 4.94 },
      { size: "30×30", weight: 7.10 },
      { size: "35×35", weight: 9.68 },
      { size: "40×40", weight: 12.64 },
      { size: "50×50", weight: 19.75 }
    ]
  },
  flat: {
    name: "ברזל שטוח",
    sizes: ["12מ\"מ", "16מ\"מ", "20מ\"מ", "25מ\"מ", "30מ\"מ", "35מ\"מ", "40מ\"מ", "45מ\"מ", "50מ\"מ", "60מ\"מ", "70מ\"מ", "80מ\"מ", "100מ\"מ", "120מ\"מ"],
    weights: {
      "3": [0.288, 0.384, 0.48, 0.6, 0.72, 0.84, 0.96, 1.08, 1.20, 1.44, 1.68, 1.92, 2.40, 2.88],
      "4": [null, 0.512, 0.64, 0.8, 0.96, 1.12, 1.28, 1.44, 1.60, 1.92, 2.24, 2.56, 3.20, 3.84],
      "5": [null, 0.64, 0.80, 1.00, 1.20, 1.40, 1.60, 1.80, 2.00, 2.40, 2.80, 3.20, 4.00, 4.80],
      "6": [0.576, null, 0.96, 1.20, 1.44, 1.68, 1.92, 2.16, 2.40, 2.88, 3.36, 3.84, 4.80, 5.76],
      "8": [null, null, 1.28, 1.60, 1.92, 2.24, 2.56, 2.88, 3.20, 3.84, 4.48, 5.12, 6.40, 7.68],
      "10": [null, null, null, 2.00, 2.40, 2.80, 3.20, 3.60, 4.00, 4.80, 5.60, 6.40, 8.00, 9.00]
    }
  },
  sheets: {
    name: "פחים",
    sizes: ["1000×2000", "1250×2500", "1500×3000"],
    weights: {
      "1.00": [16, 25, 36],
      "1.25": [20, 31.2, 45],
      "1.50": [24, 37.5, 54],
      "2.00": [32, 50, 72],
      "2.50": [40, 62.5, 90],
      "3.00": [48, 75, 108],
      "4.00": [64, 100, 144],
      "5.00": [80, 125, 180],
      "6.00": [96, 150, 216],
      "8.00": [128, 200, 288],
      "10.00": [160, 250, 360],
      "12.00": [192, 300, 432],
      "14.00": [224, 350, 504],
      "15.00": [240, 375, 540],
      "16.00": [256, 400, 576],
      "18.00": [288, 450, 648],
      "20.00": [320, 500, 720],
      "25.00": [400, 625, 900],
      "30.00": [480, 750, 1080],
      "35.00": [560, 875, 1260],
      "40.00": [640, 1000, 1440],
      "50.00": [800, 1250, 1800]
    }
  },
  angle: {
    name: "ברזל זווית L",
    items: [
      { size: "20×20×3", weight: 0.88 },
      { size: "25×25×3", weight: 1.12 },
      { size: "30×30×3", weight: 1.38 },
      { size: "30×30×4", weight: 1.78 },
      { size: "35×35×3", weight: 1.60 },
      { size: "35×35×3.5", weight: 1.85 },
      { size: "40×40×3", weight: 1.84 },
      { size: "40×40×4", weight: 2.42 },
      { size: "45×45×4", weight: 2.74 },
      { size: "45×45×5", weight: 3.38 },
      { size: "50×50×5", weight: 3.77 },
      { size: "60×60×6", weight: 5.42 },
      { size: "70×70×7", weight: 7.38 },
      { size: "80×80×8", weight: 9.66 },
      { size: "90×90×9", weight: 12.17 },
      { size: "100×100×8", weight: 12.20 },
      { size: "100×100×10", weight: 15.10 },
      { size: "110×110×10", weight: 16.60 },
      { size: "120×120×11", weight: 19.90 },
      { size: "120×120×12", weight: 21.60 },
      { size: "130×130×12", weight: 23.60 },
      { size: "140×140×13", weight: 27.50 },
      { size: "150×150×14", weight: 31.60 },
      { size: "150×150×15", weight: 33.80 },
      { size: "160×160×15", weight: 36.20 },
      { size: "180×180×16", weight: 43.50 },
      { size: "180×180×18", weight: 48.60 },
      { size: "200×200×18", weight: 54.30 },
      { size: "200×200×20", weight: 59.90 },
      { size: "200×200×24", weight: 71.10 },
      { size: "250×250×20", weight: 73.36 },
      { size: "250×250×22", weight: 80.55 },
      { size: "250×250×24", weight: 90.50 },
      { size: "250×250×26", weight: 97.56 }
    ]
  },
  ipe: {
    name: "פרופיל IPE",
    items: [
      { size: "IPE 80", weight: 6.0, width: 46, height: 80 },
      { size: "IPE 100", weight: 8.1, width: 55, height: 100 },
      { size: "IPE 120", weight: 10.4, width: 64, height: 120 },
      { size: "IPE 140", weight: 12.9, width: 73, height: 140 },
      { size: "IPE 160", weight: 15.8, width: 82, height: 160 },
      { size: "IPE 180", weight: 18.8, width: 91, height: 180 },
      { size: "IPE 200", weight: 22.4, width: 100, height: 200 },
      { size: "IPE 220", weight: 26.2, width: 110, height: 220 },
      { size: "IPE 240", weight: 30.7, width: 120, height: 240 },
      { size: "IPE 270", weight: 36.1, width: 135, height: 270 },
      { size: "IPE 300", weight: 42.2, width: 150, height: 300 },
      { size: "IPE 330", weight: 49.1, width: 160, height: 330 },
      { size: "IPE 360", weight: 57.1, width: 170, height: 360 },
      { size: "IPE 400", weight: 66.3, width: 180, height: 400 },
      { size: "IPE 450", weight: 77.6, width: 190, height: 450 },
      { size: "IPE 500", weight: 90.7, width: 200, height: 500 },
      { size: "IPE 550", weight: 106.0, width: 210, height: 550 },
      { size: "IPE 600", weight: 122.0, width: 220, height: 600 }
    ]
  }
};
const app = document.getElementById('app');

// יצירת אלמנטים עבור שדות קלט והוספה
app.innerHTML = `
  <h1>מחשבון משקל פרופילי ברזל</h1>
  <div style="margin-bottom:2rem;">
    <label>בחר קטגוריה:
      <select id="category"></select>
    </label>
    <label>גודל:
      <select id="size"></select>
    </label>
    <label>עובי (מ"מ):
      <select id="thickness"></select>
    </label>
    <label>אורך (מטר):
      <input type="number" id="length" min="0.01" value="1" style="width:60px">
    </label>
    <label>כמות:
      <input type="number" id="qty" min="1" value="1" style="width:50px">
    </label>
    <button id="addItem">הוסף</button>
  </div>
  <div id="results"></div>
  <div id="summary"></div>
  <div style="margin:1rem 0;">
    <button id="exportCSV">יצוא דוח (CSV)</button>
  </div>
`;

// הכנה
let items = [];

const categorySelect = document.getElementById('category');
const sizeSelect = document.getElementById('size');
const thicknessSelect = document.getElementById('thickness');
const lengthInput = document.getElementById('length');
const qtyInput = document.getElementById('qty');

function getOptions(obj) {
  return Object.entries(obj).map(([key, v]) => `<option value="${key}">${v.name}</option>`).join('');
}

function renderSizes(cat) {
  sizeSelect.innerHTML = '';
  thicknessSelect.innerHTML = '<option value="">--בחר--</option>';
  if (!cat) return;
  const data = steelData[cat];
  // במבנה items (ללא עובי)
  if (data.items) {
    sizeSelect.innerHTML = data.items.map((it, i) => `<option value="${i}">${it.size}</option>`).join('');
    thicknessSelect.disabled = true;
  }
  // מבנה עם thickness
  else if (data.sizes && data.weights) {
    sizeSelect.innerHTML = data.sizes.map((sz, i) => `<option value="${i}">${sz}</option>`).join('');
    thicknessSelect.innerHTML = '<option value="">--בחר--</option>' + Object.keys(data.weights).map(w => `<option value="${w}">${w}</option>`).join('');
    thicknessSelect.disabled = false;
  }
}

categorySelect.innerHTML = getOptions(steelData);
renderSizes(categorySelect.value);
categorySelect.addEventListener('change', () => renderSizes(categorySelect.value));

function getSelectedItem() {
  const cat = categorySelect.value;
  const sizeIdx = sizeSelect.value;
  const thickness = thicknessSelect.value;
  const length = Number(lengthInput.value);
  const qty = Number(qtyInput.value);

  const data = steelData[cat];
  let size, weight;
  if (data.items) {
    size = data.items[sizeIdx].size;
    weight = data.items[sizeIdx].weight;
  } else if (data.sizes && data.weights) {
    size = data.sizes[sizeIdx];
    weight = data.weights[thickness][sizeIdx];
  }
  return { category: data.name, cat, size, thickness, length, qty, weightPerMeter: weight };
}

// הוספת פריט
document.getElementById('addItem').onclick = function () {
  const sel = getSelectedItem();
  if (!sel.size || !sel.weightPerMeter || !sel.length || !sel.qty) return alert('יש למלא את כל השדות');
  items.push({
    ...sel,
    totalMeters: sel.length * sel.qty,
    totalWeight: sel.weightPerMeter * sel.length * sel.qty
  });
  renderTable();
  renderSummary();
};

// עריכה אחרי הוספה
window.editItem = function (idx, field, val) {
  val = Number(val);
  items[idx][field] = val;
  // עדכון חישובים
  items[idx].totalMeters = items[idx].length * items[idx].qty;
  items[idx].totalWeight = items[idx].weightPerMeter * items[idx].totalMeters;
  renderTable();
  renderSummary();
};

window.deleteItem = function (idx) {
  items.splice(idx, 1);
  renderTable();
  renderSummary();
};

function renderTable() {
  if (!items.length) {
    document.getElementById('results').innerHTML = '';
    return;
  }
  let html = `
    <table>
      <thead>
        <tr>
          <th>קטגוריה</th>
          <th>גודל</th>
          <th>עובי</th>
          <th>אורך (מטר)</th>
          <th>כמות</th>
          <th>סה"כ מטר</th>
          <th>ק"ג למטר</th>
          <th>סה"כ משקל (ק"ג)</th>
          <th>פעולות</th>
        </tr>
      </thead>
      <tbody>
        ${items.map((it, i) => `
          <tr>
            <td>${it.category}</td>
            <td>${it.size}</td>
            <td>${it.thickness || '-'}</td>
            <td><input type="number" value="${it.length}" min="0.01" style="width:60px" onchange="editItem(${i}, 'length', this.value)"></td>
            <td><input type="number" value="${it.qty}" min="1" style="width:50px" onchange="editItem(${i}, 'qty', this.value)"></td>
            <td>${it.totalMeters.toFixed(2)}</td>
            <td>${it.weightPerMeter}</td>
            <td>${it.totalWeight.toFixed(2)}</td>
            <td><button onclick="deleteItem(${i})">מחק</button></td>
          </tr>
        `).join('')}
      </tbody>
    </table>
  `;
  document.getElementById('results').innerHTML = html;
}

function renderSummary() {
  const totalItems = items.length;
  const totalWeight = items.reduce((sum, i) => sum + i.totalWeight, 0);
  const totalTons = totalWeight / 1000;
  document.getElementById('summary').innerHTML = `
    <div class="summary-blocks">
      <div class="summary-block">מס' פריטים: ${totalItems}</div>
      <div class="summary-block">סה"כ משקל: ${totalWeight.toFixed(2)} ק"ג</div>
      <div class="summary-block">סה"כ: ${totalTons.toFixed(3)} טון</div>
    </div>
  `;
}

// יצוא ל־CSV
document.getElementById('exportCSV').onclick = function () {
  if (!items.length) return alert('אין פריטים ליצוא');
  const headers = ['קטגוריה', 'גודל', 'עובי', 'אורך', 'כמות', 'סה"כ מטר', 'ק"ג למטר', 'סה"כ משקל (ק"ג)'];
  const rows = items.map(it => [it.category, it.size, it.thickness || '-', it.length, it.qty, it.totalMeters, it.weightPerMeter, it.totalWeight]);
  const csv = [headers, ...rows].map(r => r.join(',')).join('\n');
  const blob = new Blob([csv], { type: 'text/csv' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'steel_report.csv';
  a.click();
  URL.revokeObjectURL(url);
};

// ראשוני
renderSizes(categorySelect.value);
renderTable();
renderSummary();

