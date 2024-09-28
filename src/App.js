import Pagina from "./componentes/layouts/Pagina";
import TelaCadastroProduto from "./componentes/Telas/TelaCadastroProduto";
import TelaCadastroCategoria from "./componentes/Telas/TelaCadastroCategoria";
import TelaCadastroCliente from "./componentes/Telas/TelaCadastroCliente";
import TelaCadastroFornecedores from "./componentes/Telas/TelaCadastroFornecedor";
import TelaCadastroEntregadores from "./componentes/Telas/TelaCadastroEntregador";
import TelaCadastroUsuarios from "./componentes/Telas/TelaCadastroUsuario";
import TelaMenu from "./componentes/Telas/TelaMenu";
import Tela404 from "./componentes/Telas/Tela404";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        { //A ordem das rotas é importante 
        }
        <Routes>
        <Route path="/produto" element={<TelaCadastroProduto />} />
          <Route path="/categoria" element={<TelaCadastroCategoria />} />
          <Route path="/fornecedor" element={<TelaCadastroFornecedores />}/>
          <Route path="/entregador" element={<TelaCadastroEntregadores />}/>
          <Route path="/cliente" element={<TelaCadastroCliente/>}/>
          <Route path="/usuario" element={<TelaCadastroUsuarios />}/>
          <Route path="/" element={<TelaMenu />} />
          <Route path="*" element={<Tela404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
