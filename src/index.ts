// Debe ser el primer import: carga las variables de entorno antes de que
// cualquier otro módulo (p. ej. app.ts -> upload.controller.ts) se evalúe y
// lea process.env al importarse.
import "dotenv/config";
import "./config/dns-patch";
import { dbConnect } from "./config/mongo";
import { createApp } from "./app";

const port = process.env.PORT || 8100;

async function main() {
  await dbConnect();

  const { app, server } = createApp();

  server.timeout = 10 * 60 * 1000;

  server.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}

main().catch((error) => {
  console.error("Failed to start server:", error);
  process.exit(1);
});
