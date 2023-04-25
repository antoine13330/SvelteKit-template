/*
  Warnings:

  - A unique constraint covering the columns `[username]` on the table `auth_user` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email]` on the table `auth_user` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `email` to the `auth_user` table without a default value. This is not possible if the table is not empty.
  - Added the required column `username` to the `auth_user` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `auth_user` ADD COLUMN `email` VARCHAR(191) NOT NULL,
    ADD COLUMN `username` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `auth_user_username_key` ON `auth_user`(`username`);

-- CreateIndex
CREATE UNIQUE INDEX `auth_user_email_key` ON `auth_user`(`email`);
