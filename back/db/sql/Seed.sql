
DO $$
DECLARE VChord int; 
DECLARE VUser int; 
DECLARE VSong int; 
BEGIN 
    INSERT INTO users (username, passwordDigest) VALUES ('user_one', '8675309'), ('user_two', '00100010A');

    INSERT INTO chords(note, aspect) VALUES ('A', 'm'), ('D', 'maj7'), ('C', NULL); 

    SELECT id from users into VUser;

    INSERT INTO books(title, userid, year) 
    VALUES ('Songbook 1', Vuser, 2018), ('Songbook 2', Vuser, 2020);

    INSERT INTO songs(title, userid, artist, text) 
    VALUES ('Row, Row, Row Your Boat', VUser, 'The Beetles', '...Gently Down The ...'),
    ('Brown Eyed Girl', VUser, 'Van Morrison', '...Sha La La La La...');

    SELECT id from chords into VChord;
    SELECT id from songs into VSong;

    INSERT INTO chords_songs (chordID, songID, line, character)
    VALUES (Vchord, Vsong, 1, 4), (Vchord, Vsong, 2, 10), (Vchord, Vsong, 3, 0);
END$$