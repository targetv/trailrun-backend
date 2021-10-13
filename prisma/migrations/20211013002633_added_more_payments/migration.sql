/*
  Warnings:

  - You are about to drop the column `payeremail` on the `Payment` table. All the data in the column will be lost.
  - You are about to drop the column `payername` on the `Payment` table. All the data in the column will be lost.
  - You are about to drop the column `payerpaypalid` on the `Payment` table. All the data in the column will be lost.
  - You are about to drop the column `paymentid` on the `Payment` table. All the data in the column will be lost.
  - You are about to drop the column `paymentorderlink` on the `Payment` table. All the data in the column will be lost.
  - You are about to drop the column `paymentrefundlink` on the `Payment` table. All the data in the column will be lost.
  - You are about to drop the column `paymentsuccess` on the `Payment` table. All the data in the column will be lost.
  - You are about to drop the column `paymenttime` on the `Payment` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[orderid]` on the table `Payment` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `name` to the `Payment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Payment" DROP COLUMN "payeremail",
DROP COLUMN "payername",
DROP COLUMN "payerpaypalid",
DROP COLUMN "paymentid",
DROP COLUMN "paymentorderlink",
DROP COLUMN "paymentrefundlink",
DROP COLUMN "paymentsuccess",
DROP COLUMN "paymenttime",
ADD COLUMN     "name" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Payment_orderid_key" ON "Payment"("orderid");
