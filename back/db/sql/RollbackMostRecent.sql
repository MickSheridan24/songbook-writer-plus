UPDATE migrations 
SET status = false, migrationDate = NULL 
WHERE migrationDate in (
    SELECT migrationDate FROM migrations
    ORDER BY migrationDate DESC
    LIMIT 1
);