/*
  Warnings:

  - Added the required column `img` to the `StartUp` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "StartUp" ADD COLUMN     "img" TEXT NOT NULL;
