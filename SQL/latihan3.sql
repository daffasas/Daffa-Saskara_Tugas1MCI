SELECT 
    COUNT(*) AS Jumlah_Mhs
FROM
    data_fix
WHERE
    ipk >= 3.5 AND semester = 8;
