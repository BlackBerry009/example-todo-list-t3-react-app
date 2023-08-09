import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const listRouter = createTRPCRouter({
  add: publicProcedure
    .input(z.object({ name: z.string() }))
    .mutation(async ({ input, ctx }) => {
      await ctx.prisma.list.create({
        data: {
          name: input.name,
          createdAt: new Date(),
          finished: false,
        },
      });
      return {
        success: true,
      }
    }),
  update: publicProcedure
    .input(
      z.object({ id: z.number(), finished: z.boolean() })
    )
    .mutation(({ input, ctx }) => {
      return ctx.prisma.list.update({
        where: {
          id: input.id,
        },
        data: {
          finished: input.finished,
        },
      });
    }),
  delete: publicProcedure
    .input(z.object({ id: z.number() }))
    .mutation(({ input, ctx }) => {
      return ctx.prisma.list.delete({
        where: {
          id: input.id,
        },
      });
    }),
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.list.findMany();
  }),
});
