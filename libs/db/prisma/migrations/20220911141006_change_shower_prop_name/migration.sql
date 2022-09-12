/*
  Warnings:

  - You are about to drop the column `consumptionPerMinute` on the `ShowerModel` table. All the data in the column will be lost.
  - Added the required column `waterPerMinute` to the `ShowerModel` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ShowerModel" DROP COLUMN "consumptionPerMinute",
ADD COLUMN     "waterPerMinute" DOUBLE PRECISION NOT NULL;
