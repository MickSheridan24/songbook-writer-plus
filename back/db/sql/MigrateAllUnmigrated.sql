DO $$
DECLARE
    stamp timestamp = clock_timestamp();

BEGIN 
    UPDATE migrations set status = true, migrationdate = stamp where status = false;
END
$$;