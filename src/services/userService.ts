import type {PrismaClient, User} from '@prisma/client';

type UpsertUser = {
  prisma: PrismaClient;
  user: User | null;
};

export const upsertUser = async ({prisma, user}: UpsertUser): Promise<null> => {
  return null;
};
