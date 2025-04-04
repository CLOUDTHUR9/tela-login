import { SERVER_CFG } from '../appConfig';

class AlunoRequest {
    static listarAluno() {
        throw new Error('Method not implemented.');
    }

    private serverURL;
    private routeListaAluno;
    private routeCadastroAluno;
    private routeAtualizaAluno;
    private routeRemoveAluno;

    constructor() {

        this.serverURL = SERVER_CFG.SERVER_URL;
        this.routeListaAluno = '/lista/alunos'; //rota configuração da lista
        this.routeCadastroAluno = '/novo/aluno'; //rota configuração da cadastro
        this.routeAtualizaAluno = '/atualiza/aluno'; //rota configuração da atualizar
        this.routeRemoveAluno = '/remove/aluno'; //rota configuração da ramover
    }

    /*
        * Função que busca a lista de alunos na API
    */

    async listarAlunos() {
        try {
            const respostaAPI = await fetch(`${this.serverURL}${this.routeListaAluno}`);

            if (respostaAPI.ok) {
                const listarDeAluno = await respostaAPI.json();
                return listarDeAluno;
            }
        } catch (error) {
            console.log(`Erro ao fazer a consulta: ${error}`);
            return null
        }
    }


    async cadstroAluno() {
        try {
            const respostaAPI = await fetch(`${this.serverURL}${this.routeCadastroAluno}`);

            if (respostaAPI.ok) {
                const cadastroDeAluno = await respostaAPI.json();
                return cadastroDeAluno;
            }
        } catch (error) {
            console.log(`Erro ao fazer a consulta: ${error}`);
            return null
        }
    }

    async atualizaAluno() {
        try {
            const respostaAPI = await fetch(`${this.serverURL}${this.routeAtualizaAluno}`);

            if (respostaAPI.ok) {
                const atualizarDeAluno = await respostaAPI.json();
                return atualizarDeAluno;
            }
        } catch (error) {
            console.log(`Erro ao fazer a consulta: ${error}`);
            return null
        }
    }

    async removeAluno() {
        try {
            const respostaAPI = await fetch(`${this.serverURL}${this.routeRemoveAluno}`);

            if (respostaAPI.ok) {
                const removeDeAluno = await respostaAPI.json();
                return removeDeAluno;
            }
        } catch (error) {
            console.log(`Erro ao fazer a consulta: ${error}`);
            return null
        }
    }

}

export default new AlunoRequest;