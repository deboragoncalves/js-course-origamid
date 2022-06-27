class ValidateCpf {
    constructor(cpf) {
        this.cpf = cpf;
    }

    cleanCpf() {
        if (!this.cpf) return;
        
        return this.cpf.replace(/[ .-]/g, "");
    }

    formatCpf() {
        if (!this.cpf) return;

        let cpfClean = this.cleanCpf(this.cpf);
        return cpfClean.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, "$1.$2.$3-$4");
    }
}

export default ValidateCpf;