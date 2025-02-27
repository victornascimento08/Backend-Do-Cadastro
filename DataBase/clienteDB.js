import conectar from "./conexao.js";
import Cliente from "../Model/cliente.js";

export default class ClienteDB {
  constructor() {
    this.init();
  }

  async init() {
    try {
      const conexao = await conectar();
      const sql = `CREATE TABLE IF NOT EXISTS cliente (
        nome VARCHAR(100) NOT NULL,
        email VARCHAR(100) NOT NULL,
        senha VARCHAR(100) NOT NULL
      )`;
      await conexao.execute(sql);
    } catch (erro) {
      console.log("Erro ao iniciar a tabela cliente: " + erro);
    }
  }

  async gravar(cliente) {
    if (cliente instanceof Cliente) {
      const conexao = await conectar();
      const sql = `INSERT INTO cliente (nome, email, senha)
                   VALUES ( ?, ?, ? )`;
      const parametros = [
        cliente.nome,
        cliente.email,
        cliente.senha
      ];

      await conexao.execute(sql, parametros);
      await conexao.release();
    }
  }

  async alterar(cliente) {
    if (cliente instanceof Cliente) {
      const conexao = await conectar();
      const sql = `UPDATE cliente SET 
                   nome = ?, email = ?, senha = ?`;
      const parametros = [
        cliente.nome,
        cliente.email,
        cliente.senha
      ];
      await conexao.execute(sql, parametros);
      await conexao.release();
    }
  }

  async excluir(cliente) {
    if (cliente instanceof Cliente) {
      const conexao = await conectar();
      const sql = `DELETE FROM cliente WHERE email = ?`; // Usando email como base para exclusão
      const parametros = [cliente.email];
      await conexao.execute(sql, parametros);
      await conexao.release();
    }
  }

  async consultar() {
    const conexao = await conectar();
    const sql = `SELECT * FROM cliente ORDER BY nome`;
    const [registros, campos] = await conexao.execute(sql);
    await conexao.release();
    let listaClientes = [];
    for (const registro of registros) {
      const cliente = new Cliente(
        registro.nome,
        registro.email,
        registro.senha
      );
      listaClientes.push(cliente);
    }
    return listaClientes;
  }
}


