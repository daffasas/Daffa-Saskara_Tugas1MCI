SELECT 
    nama, semester, ipk
FROM
    data_fix
WHERE
    ipk IN (SELECT 
            MAX(ipk)
        FROM
            data_fix
        GROUP BY semester)
        
ORDER BY semester ASC , nama ASC , ipk DESC;
