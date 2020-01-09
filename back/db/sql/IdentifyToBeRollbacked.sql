SELECT name FROM migrations
WHERE migrationDate in (
    SELECT migrationDate FROM migrations
    ORDER BY migrationDate DESC
    LIMIT 1; 
);