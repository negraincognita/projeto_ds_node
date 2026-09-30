const db = require("../config/database");

const criarUsuario = async(
    nome,
    Login,
    senha,
) => {
    const sql =`INSERT INTO
                 usuario(nome, login, senha)
                 Values (?,?,?)`;
const [resultado] = await db.execute(sql, [nome, Login, senha]);
return resultado;
}
