import { PrismaClient } from "@prisma/client";
interface Greeting {
  message: string;
}

async function Connect({ hostname, password, database, port, user }) {
  try {
    const client = new PrismaClient({
      datasources: {
        db: {
          url: `postgresql://${hostname}:${user}@${password}:${port}/${database}`,
        },
      },
    });
  } catch (e) {
    console.error("src/controller/db/db.ts Database Connection", e);
  }
}

export { Connect };
