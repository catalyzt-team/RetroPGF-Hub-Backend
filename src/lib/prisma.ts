import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const User = prisma.user;
export const Project = prisma.project;
export const Comment = prisma.comment;