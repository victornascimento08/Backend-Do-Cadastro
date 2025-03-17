
import ClienteDAO from '../Persistences/ClienteDAO.js';

export default class Cliente {
    
    #nome;
    #email;
    #senha;

    constructor(nome, email, senha) {
        this.#nome = nome;
        this.#email = email;
        this.#senha = senha;
    }

    get nome() {
        return this.#nome;
    }

    set nome(novoNome) {
        this.#nome = novoNome;
    }

    get email() {
        return this.#email;
    }

    set email(novoEmail) {
        this.#email = novoEmail;
    }

    get senha() {
        return this.#senha;
    }

    set senha(novaSenha) {
        this.#senha = novaSenha;
    }

    // formato JSON de um objeto
    toJSON() {
        return {
            "nome": this.#nome,
            "email": this.#email,
            "senha": this.#senha
        }
    }

    async gravar() {
        const dao = new ClienteDAO();
        await dao.gravar(this);
    }

    async alterar() {
        const dao = new ClienteDAO();
        await dao.atualizar(this);
    }

    async excluir() {
        const dao = new ClienteDAO();
        await dao.excluir(this);
    }

    async consultar() {
        const dao = new ClienteDAO();
        return await dao.consultar(this);
    }

   
toJSON() {
    return {
        "nome": this.#nome,
        "email": this.#email,
        "senha": this.#senha
    }
}

}

toString()
    return `Cliente código: ${this.#codigo} -  nome: ${this.#nome}`;

