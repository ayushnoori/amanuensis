/*
  Warnings:

  - You are about to drop the column `prompt` on the `WorkflowPrompt` table. All the data in the column will be lost.
  - Added the required column `promptAWdwa` to the `WorkflowPrompt` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "WorkflowPrompt" DROP COLUMN "prompt",
ADD COLUMN     "promptAWdwa" TEXT NOT NULL;
