import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API routes
  app.get("/api/products", (req, res) => {
    const products = [
      { 
        id: "mahoghony",
        name: "Mahoghony", 
        tags: "Woody · Warm · Grounded", 
        image: "https://storage.googleapis.com/datagen-public/input_file_0.png",
        badge: "🔥 Low Stock",
        prices: { "3ml": 99, "5ml": 149 }
      },
      { 
        id: "godfather",
        name: "God Father", 
        tags: "Intense · Smoky · Commanding", 
        image: "https://storage.googleapis.com/datagen-public/input_file_1.png",
        badge: "⚡ Bestseller",
        prices: { "3ml": 99, "5ml": 149 }
      },
      { 
        id: "flovera",
        name: "Flovera", 
        tags: "Floral · Soft · Luminous", 
        image: "https://storage.googleapis.com/datagen-public/input_file_2.png",
        prices: { "3ml": 99, "5ml": 149 }
      },
      { 
        id: "evan",
        name: "Evan", 
        tags: "Fresh · Aquatic · Clean", 
        image: "https://storage.googleapis.com/datagen-public/input_file_3.png",
        prices: { "3ml": 99, "5ml": 149 }
      },
    ];
    res.json(products);
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
