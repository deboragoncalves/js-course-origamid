class ValidateCpf {
    constructor(cpf) {
        this.cpf = cpf;
    }

    // Limpa e formata o cpf passado no construtor da classe
    
    cleanCpf() {
        if (!this.cpf) return;

        return this.cpf.replace(/[ .-]/g, "");
    }

    formatCpf() {
        if (!this.cpf) return;

        let cpfClean = this.cleanCpf(this.cpf);
        return cpfClean.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, "$1.$2.$3-$4");
    }

    validateCpf() {
        if (!this.cpf) return;

        /*
        
        - Match: método que recebe como argumento a regex
        - Regex do cpf já formatado:
        - 3 dígitos seguido de espaço \s, ponto ou -, sendo esses itens opcionais ?: 
        \d{3}[-.\s]?
        - Essa expressão será repetida três vezes. Especificar que não tem grupo de captura com ?:
        (?:\d{3}[-.\s]?){3}
        - Seguido de dois dígitos: \d{2}

        - O método match retorna um array, sendo que o primeiro elemento do array é o cpf
        que foi formatado com a regex e o segundo elemento são os números restantes, não formatados

        - Exemplo CPF: 11122233344123456
        - Retorno match: ["111.222.333-44", "123456"];

        - Exemplo CPF (menor que 11 dígitos): 111222
        - Retorno match: null

        - Se o CPF informado for igual ao primeiro elemento e != null, é valido
        
        */
        
        let matchCpf = this.cpf.match(/(?:\d{3}[-.\s]?){3}\d{2}/g);
        return matchCpf && matchCpf[0] == this.cpf;
    }
}

export default ValidateCpf;