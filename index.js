class Cliente {
    constructor(nome, email, senha) {
        this.nome = nome;
        this.email = email;
        this.senha = senha;
    }

    gravar() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log("Gravando cliente...");
                resolve();
            }, 1000);
        });
    }

    alterar() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log("Alterando cliente...");
                resolve();
            }, 1000);
        });
    }
}

var cliente = new Cliente("Victor Nascimento", "victor@example.com", "123456");

cliente.gravar()
    .then(() => {
        console.log("Cliente gravado com sucesso");
    })
    .catch((erro) => {
        console.log("Erro ao gravar o cliente: " + erro);
    });

cliente.alterar()  