import estilo from './Welcome.module.css';

function Welcome() {
    return(
        <main className={estilo.principal}>
            <p>Seja Bem-Vindo(a) à biblioteca</p>
            <p>Para ter uma melhor experiência, faça o login no site</p>
        </main>
    );
}

export default Welcome;