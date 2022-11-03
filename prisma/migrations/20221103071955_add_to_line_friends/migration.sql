/*
  Warnings:

  - A unique constraint covering the columns `[line_user_id]` on the table `line_friends` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `created_at` to the `line_friends` table without a default value. This is not possible if the table is not empty.
  - Added the required column `line_user_id` to the `line_friends` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `line_friends` ADD COLUMN `created_at` DATETIME(3) NOT NULL,
    ADD COLUMN `line_user_id` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `line_friends_line_user_id_key` ON `line_friends`(`line_user_id`);
