import { Alert } from "react-bootstrap";
import FormCadEntregadores from "./Formularios/FormCadEntregador";
import Pagina from "../layouts/Pagina";
import { useState } from "react";
import TabelaEntregadores from "./Tabelas/TabelaEntregadores";
import {entregadores} from "../../dados/mockEntregadores";

export default function TelaCadastroEntregador(props) {
    const [exibirTabela, setExibirTabela] = useState(true);
    const [listaDeEntregadores, setListaDeEntregadores] = useState(entregadores);
    const [modoEdicao, setModoEdicao] = useState(false);
    const [entregadorSelecionado, setEntregadorSelecionado] = useState(entregadores);

    return (
        <div>
            <Pagina>
                |<Alert className="mt-02 mb-02 success text-center" variant="success">
                    <h2>
                        Cadastro de Produto
                    </h2>
                </Alert>
                {
                    exibirTabela ?
                    <TabelaEntregadores
                    listaDeEntregadores={listaDeEntregadores}
                    setListaDeEntregadores={setListaDeEntregadores}
                    setModoEdicao={setModoEdicao}
                    setEntregadorSelecionado={setEntregadorSelecionado}
                    setExibirTabela={setExibirTabela}
                /> :
                <FormCadEntregadores
                    listaDeEntregadores={listaDeEntregadores}
                    setListaDeEntregadores={setListaDeEntregadores}
                    setModoEdicao={setModoEdicao}
                    setEntregadorSelecionado={setEntregadorSelecionado}
                    setExibirTabela={setExibirTabela}
                    modoEdicao={modoEdicao}
                    entregadorSelecionado={entregadorSelecionado}
                />
                }
            </Pagina>
        </div>
    );
}