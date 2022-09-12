/*
  Warnings:

  - Added the required column `name` to the `FlushSystem` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "FlushSystem" ADD COLUMN     "name" TEXT NOT NULL;
