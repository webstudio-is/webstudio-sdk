/**
 * Adds seed data to your db
 *
 * @link https://www.prisma.io/docs/guides/database/seed-database

*/
const { PrismaClient } = require("@prisma/client");
import { migrateAllBreakpoints } from "./seeds/breakpoints";
import { migrateBreakpointsMin360 } from "./seeds/breakpoints-min-360";
import { migratePublishedBreakpoints } from "./seeds/published-breakpoints";

const prisma = new PrismaClient();

async function main() {
  await migrateAllBreakpoints();
  await migrateBreakpointsMin360();
  await migratePublishedBreakpoints();
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
