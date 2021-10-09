/*
  Warnings:

  - Added the required column `address` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ageonraceday` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `clubmember` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dob` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `firstname` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `gender` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lastname` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `postcode` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `shirtsize` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `signature` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `telephonenumber` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "address" TEXT NOT NULL,
ADD COLUMN     "ageonraceday" INTEGER NOT NULL,
ADD COLUMN     "clubmember" BOOLEAN NOT NULL,
ADD COLUMN     "clubname" TEXT,
ADD COLUMN     "dob" TEXT NOT NULL,
ADD COLUMN     "firstname" TEXT NOT NULL,
ADD COLUMN     "gender" TEXT NOT NULL,
ADD COLUMN     "lastname" TEXT NOT NULL,
ADD COLUMN     "postcode" TEXT NOT NULL,
ADD COLUMN     "registernumber" INTEGER,
ADD COLUMN     "shirtsize" TEXT NOT NULL,
ADD COLUMN     "signature" TEXT NOT NULL,
ADD COLUMN     "telephonenumber" INTEGER NOT NULL;
