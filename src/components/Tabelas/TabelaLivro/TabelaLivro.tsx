import { useEffect, useState } from 'react';
import { DataTable } from 'primereact/dataTable'
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import LivroRequests from '../../../fetch/LivroRequests';
function TabelaLivro() {
    const [livros, setLivro] = useState([]);

    const paginatorLeft = <Button type="button" icon="pi pi-refresh" text />;
    const paginatorRight = <Button type="button" icon="pi pi-download" text />;

    useEffect(() => {
        const fetchLivros = async () => {
            try {
                const listaDeLivros = await LivroRequests.listarLivro();
                setLivro(listaDeLivros);
            } catch (error) {
                console.error(`Erro ao buscar Emprestimos: ${error}`);
            }
        };
        fetchLivros();
    }, [livros]);


    return (
        <>
            <DataTable value={livros} paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]} tableStyle={{ minWidth: '50rem' }}
                paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
                currentPageReportTemplate="{first} to {last} of {totalRecords}" paginatorLeft={paginatorLeft} paginatorRight={paginatorRight}>
                
                <Column field="titulo" header="Id do aluno" style={{ width: '15%' }}></Column>
                <Column field="autor" header="Id do livro" style={{ width: '15%' }}></Column>
                <Column field="editora" header="Nome do Aluno" style={{ width: '20%' }}></Column>
                <Column field="ISBN" header="RA do Aluno" style={{ width: '15%' }}></Column>
                <Column field="valorAquisicao" header="Data de emprestimo" style={{ width: '25%' }}></Column>
            </DataTable>
        </>
    );
}
export default TabelaLivro;