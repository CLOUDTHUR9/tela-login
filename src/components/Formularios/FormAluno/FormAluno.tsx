import { useState } from "react";

function FormAluno() {
    const [formData, setFormData] = useState({
        nome: '',
        sobrenome: '',
        dataNascimento: '',
        endereco: '',
        email: '',
        celular: ''
    });

    const handleChange = (nome: string, valor: string) =>{
        setFormData({ ...formData, [nome]: valor });
    }

    return (
        <section>
            <form action="" onSubmit={() => console.log('enviando formulário')}>
                <label htmlFor="">
                    Nome
                    <input
                        type="text"
                        name="nome"
                        id="nome-aluno"
                        minLength={3} 
                        onChange={(e) => handleChange("nome", e.target.value)}
                    />
                </label>

                <label htmlFor="">
                    Sobrenome
                    <input
                        type="text"
                        name="Sobrenome"
                        id="Sobrenome"
                        minLength={3}
                        onChange={(e) => handleChange("sobrenome", e.target.value)}
                    />
                </label>

                <label htmlFor="">
                    Data Nascimento
                    <input
                        type="date"
                        name="dataNascimento"
                        id="dataNascimento"
                        onChange={(e) => handleChange("dataNascimento", e.target.value)}
                    />
                </label>

                <label htmlFor="">
                    Endereço
                    <input
                        type="text"
                        name="endereco"
                        id="endereco"
                        minLength={6}
                        onChange={(e) => handleChange("endereco", e.target.value)}
                    />
                </label>

                <label htmlFor="">
                    Email
                    <input
                        type="email"
                        name="email"
                        id="email"
                        minLength={11}
                        onChange={(e) => handleChange("email", e.target.value)}
                    />
                </label>

                <label htmlFor="">
                    Celular
                    <input
                        type="number"
                        name="celular"
                        id="celular"
                        minLength={10}
                        maxLength={13}
                        onChange={(e) => handleChange("celular", e.target.value)}
                    />
                </label>
                <input type="submit" value="CADASTRAR ALUNO" />
            </form>
        </section>
    );
}

export default FormAluno;