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
        const cliDB = new ClienteDB();
        cliDB.gravar(this);
    }

    async alterar() {
        const cliDB = new ClienteDB();
        cliDB.alterar(this);
    }

    async excluir() {
        const cliDB = new ClienteDB();
        cliDB.excluir(this);
    }

    async consultar() {
        const cliDB = new ClienteDB();
        return await cliDB.consultar(this);
    }
}