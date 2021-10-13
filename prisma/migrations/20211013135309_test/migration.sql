/*
  Warnings:

  - Made the column `email` on table `User` required. This step will fail if there are existing NULL values in that column.
  - Made the column `address` on table `User` required. This step will fail if there are existing NULL values in that column.
  - Made the column `ageonraceday` on table `User` required. This step will fail if there are existing NULL values in that column.
  - Made the column `clubname` on table `User` required. This step will fail if there are existing NULL values in that column.
  - Made the column `dob` on table `User` required. This step will fail if there are existing NULL values in that column.
  - Made the column `firstname` on table `User` required. This step will fail if there are existing NULL values in that column.
  - Made the column `gender` on table `User` required. This step will fail if there are existing NULL values in that column.
  - Made the column `lastname` on table `User` required. This step will fail if there are existing NULL values in that column.
  - Made the column `postcode` on table `User` required. This step will fail if there are existing NULL values in that column.
  - Made the column `registernumber` on table `User` required. This step will fail if there are existing NULL values in that column.
  - Made the column `shirtsize` on table `User` required. This step will fail if there are existing NULL values in that column.
  - Made the column `telephonenumber` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "User" ALTER COLUMN "email" SET NOT NULL,
ALTER COLUMN "address" SET NOT NULL,
ALTER COLUMN "ageonraceday" SET NOT NULL,
ALTER COLUMN "clubname" SET NOT NULL,
ALTER COLUMN "dob" SET NOT NULL,
ALTER COLUMN "firstname" SET NOT NULL,
ALTER COLUMN "gender" SET NOT NULL,
ALTER COLUMN "lastname" SET NOT NULL,
ALTER COLUMN "postcode" SET NOT NULL,
ALTER COLUMN "registernumber" SET NOT NULL,
ALTER COLUMN "shirtsize" SET NOT NULL,
ALTER COLUMN "telephonenumber" SET NOT NULL;
