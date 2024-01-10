



const createIncome = async (infoIncome, email) => {
    const {quantity, description, is_monthly} = infoIncome

    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.createIncome,[quantity, description, is_monthly, email])
        result = data.rowCount
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
}