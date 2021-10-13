/*
  Warnings:

  - You are about to drop the column `name` on the `Payment` table. All the data in the column will be lost.
  - Added the required column `payeremail` to the `Payment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `payername` to the `Payment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `payerpaypalid` to the `Payment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `paymentid` to the `Payment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `paymentorderlink` to the `Payment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `paymentrefundlink` to the `Payment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `paymentsuccess` to the `Payment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `paymenttime` to the `Payment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Payment" DROP COLUMN "name",
ADD COLUMN     "payeremail" TEXT NOT NULL,
ADD COLUMN     "payername" TEXT NOT NULL,
ADD COLUMN     "payerpaypalid" TEXT NOT NULL,
ADD COLUMN     "paymentid" TEXT NOT NULL,
ADD COLUMN     "paymentorderlink" TEXT NOT NULL,
ADD COLUMN     "paymentrefundlink" TEXT NOT NULL,
ADD COLUMN     "paymentsuccess" BOOLEAN NOT NULL,
ADD COLUMN     "paymenttime" TEXT NOT NULL;
