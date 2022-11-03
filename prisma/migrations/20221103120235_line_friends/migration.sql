-- CreateTable
CREATE TABLE `line_friends` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `line_user_id` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `line_friends_line_user_id_key`(`line_user_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
