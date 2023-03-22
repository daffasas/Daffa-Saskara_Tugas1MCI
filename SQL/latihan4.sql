SELECT 
    nama,
    ukt,
    CASE
        WHEN ukt <= 1000000 THEN 'A'
        WHEN ukt > 1000000 AND ukt <= 2000000 THEN 'B'
        WHEN ukt > 2000000 THEN 'C'
    END AS golongan
FROM
    data_fix;
