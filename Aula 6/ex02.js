const aluno = {
    nome: "Kalini Martins",
    idade: 22,
    curso: "ADS",
    hobbies: ["Ler" , " Ver série" ," Correr",],
    contato: {
        email: "kalinemartinskm3@gmail.com"
    },

    resumo () {
    return `Olá, meu nome é ${this.nome} e estou cursando ${this.curso}`
}

};

console.log(aluno.resumo())

