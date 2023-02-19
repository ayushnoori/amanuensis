/*
  Warnings:

  - You are about to drop the `WorkflowPrompts` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "WorkflowPrompts";

-- CreateTable
CREATE TABLE "WorkflowPrompt" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "prompt" TEXT NOT NULL,

    CONSTRAINT "WorkflowPrompt_pkey" PRIMARY KEY ("id")
);
