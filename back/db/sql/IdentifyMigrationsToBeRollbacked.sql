SELECT name FROM migrations
WHERE migrationDate IS NOT NULL 
AND migrationDate IN (
    SELECT migrationDate FROM migrations
    WHERE migrationDate IS NOT NULL
    ORDER BY migrationDate DESC
    LIMIT 1
);