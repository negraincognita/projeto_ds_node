const db = require("../config/database");

const criarUsuario = async(
    nome,
    email,
    telefone,
    cep,
    endereco,
    numero,
    complemento,
    bairro,
    cidade,
    estado,
    Login,
    senha
) => {
    const sql = `
    INSERT INTO usuarios
    (
        nome,
        email,
        telefone,
        cep,
        endereco,
        numero,
        complemento,
        bairro,
        cidade,
        estado,
        login,
        senha
    )
     Values (?,?,?)
`;
    
const [resultado] = await db.execute(sql, [nome, Login, senha]);
return resultado;
}
