/*
  Warnings:

  - Added the required column `pertient` to the `PatientQuestion` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "PatientQuestion" ADD COLUMN     "pertient" BOOLEAN NOT NULL;
