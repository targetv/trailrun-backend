/*
  Warnings:

  - You are about to drop the column `paymentsuccess` on the `Payment` table. All the data in the column will be lost.
  - Added the required column `paymentstatus` to the `Payment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Payment" DROP COLUMN "paymentsuccess",
ADD COLUMN     "paymentstatus" TEXT NOT NULL;
