import conectar from "./Conexao.js"; 
import Cliente from "../Modelos/Cliente.js";


export default class ClienteDAO {
    async gravar(cliente) {
        if (cliente instanceof Cliente) {
            const conexao = await conectar();
            const sql = `INSERT INTO cliente (nome, senha, email) 
                         VALUES (?, ?, ?)`;
            const parametros = [
                cliente.nome,
                cliente.senha,
                cliente.email
            ];
            const [resultados] = await conexao.execute(sql, parametros);
          
            cliente.id = resultados.insertId; 
        }
    }

    async atualizar(cliente) {
        if (cliente instanceof Cliente) {
            const conexao = await conectar();
            const sql = `UPDATE cliente SET nome = ?, email = ?, senha = ? WHERE id = ?`;
            const parametros = [
                cliente.nome,
                cliente.email,
                cliente.senha,
                cliente.codigo
            ];
    
            await conexao.execute(sql, parametros);
        }
    }
    
    async excluir(cliente) {
        if (cliente instanceof Cliente) {
            const conexao = await conectar();
            const sql = `DELETE FROM cliente WHERE id = ?`;
            const parametros = [cliente.codigo];
            await conexao.execute(sql, parametros);
        }
    }
    
   
    async consultar(termoDePesquisa) {
        if (termoDePesquisa === undefined) {
            termoDePesquisa = "";
        }
    
        let sql = "";
        if (isNaN(parseInt(termoDePesquisa))) { 
            sql = `SELECT * FROM cliente WHERE nome LIKE ?`;
            termoDePesquisa = '%' + termoDePesquisa + '%'; 
        } else {
            sql = `SELECT * FROM cliente WHERE id = ?`;
        }
    
        const conexao = await conectar();
        const [registros] = await conexao.execute(sql, [termoDePesquisa]);
    
        let listaClientes = [];
        for (const registro of registros) {
            const cliente = new Cliente(
                registro.id,
                registro.nome,
                registro.email,
                registro.senha
            );
            listaClientes.push(cliente);
        }
        return listaClientes;
    }
}


    