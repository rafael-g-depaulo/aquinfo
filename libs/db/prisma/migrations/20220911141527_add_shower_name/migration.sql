/*
  Warnings:

  - Added the required column `name` to the `ShowerModel` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ShowerModel" ADD COLUMN     "name" TEXT NOT NULL;
