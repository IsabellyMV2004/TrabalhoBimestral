import { Button } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import { useState, useEffect } from 'react';

export default function FormCadEntregador(props) {
    const [entregador, setEntregador] = useState(props.entregadorSelecionado);

    const [formValidado, setFormValidado] = useState(false);
    function manipularSubmissao(evento){
        const form = evento.currentTarget;
        if(form.checkValidity()){
            if (!props.modoEdicao){
                props.setListaDeEntregadores([...props.listaDeEntregadores, entregador]);
                props.setExibirTabela(true);
                
            }
            else{
                props.setListaDeEntregadores([...props.listaDeEntregadores.filter(
                    (item) => {
                            return item.codigo !== entregador.codigo;
                    }
                ),entregador]);

                // não altera a ordem dos registros
                props.setListaDeEntregadores(props.listaDeEntregadores.map((item) => {
                    if(item.codigo !== entregador.codigo)
                        return item
                    else
                        return entregador
                }));

                //voltar para o modo 
                props.setModoEdicao(false);
                props.setEntregadorSelecionado({
                    codigo:0,
                    nome:"",
                    CPF:"",
                    foto:"",
                    endereco:"",
                    email:"",
                    telefone:"",
                    veiculo:"",
                    CNH:""
                })
                props.setExibirTabela(true);
            }            
        }
        else{
            setFormValidado(true);
        }
        evento.preventDefault();
        evento.stopPropagation();
    }

    function manipularMudanca(evento){
        const elemento = evento.target.name;
        const valor = evento.target.value;
                // ... operador de espalhamento
        setEntregador({...entregador, [elemento]:valor});
    }

    return (
        <Form noValidate validated={formValidado} onSubmit={manipularSubmissao}>
            <Row className="mb-4">
                <Form.Group as={Col} md="4">
                    <Form.Label>Código</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        id="codigo"
                        name="codigo"
                        value={entregador.codigo}
                        disabled={props.modoEdicao}
                        onChange={manipularMudanca}
                    />
                    <Form.Control.Feedback type='invalid'>Por favor, informe o código do entregador!</Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Row className="mb-4">
                <Form.Group as={Col} md="12">
                    <Form.Label>Nome</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        id="nome"
                        name="nome"
                        value={entregador.nome}
                        onChange={manipularMudanca}
                    />
                    <Form.Control.Feedback type="invalid">Por favor, informe o nome do entregador!</Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Row className="mb-4">
                <Form.Group as={Col} md="12">
                    <Form.Label>CPF</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        id="CPF"
                        name="CPF"
                        value={entregador.CPF}
                        onChange={manipularMudanca}
                    />
                    <Form.Control.Feedback type="invalid">Por favor, informe o CPF do entregador!</Form.Control.Feedback>
                </Form.Group>
            </Row>
            
            <Row className="mb-4">
                <Form.Group as={Col} md="12">
                    <Form.Label>Foto:</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        id="foto"
                        name="foto"
                        value={entregador.foto}
                        onChange={manipularMudanca}
                    />
                    <Form.Control.Feedback type="invalid">Por favor, informe a foto do entregador!</Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Row className="mb-4">
                <Form.Group as={Col} md="12">
                    <Form.Label>Endereço</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        id="endereco"
                        name="endereco"
                        value={entregador.endereco}
                        onChange={manipularMudanca}
                    />
                    <Form.Control.Feedback type="invalid">Por favor, informe o endereco do entregador!</Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Row className="mb-4">
                <Form.Group as={Col} md="12">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        id="email"
                        name="email"
                        value={entregador.email}
                        onChange={manipularMudanca}
                    />
                    <Form.Control.Feedback type="invalid">Por favor, informe o email do entregador!</Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Row className="mb-4">
                <Form.Group as={Col} md="12">
                    <Form.Label>Telefone</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        id="telefone"
                        name="telefone"
                        value={entregador.telefone}
                        onChange={manipularMudanca}
                    />
                    <Form.Control.Feedback type="invalid">Por favor, informe o telefone do entregador!</Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Row className="mb-4">
                <Form.Group as={Col} md="12">
                    <Form.Label>Veiculo</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        id="veiculo"
                        name="veiculo"
                        value={entregador.veiculo}
                        onChange={manipularMudanca}
                    />
                    <Form.Control.Feedback type="invalid">Por favor, informe o veiculo do entregador!</Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Row className="mb-4">
                <Form.Group as={Col} md="12">
                    <Form.Label>CNH</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        id="CNH"
                        name="CNH"
                        value={entregador.CNH}
                        onChange={manipularMudanca}
                    />
                    <Form.Control.Feedback type="invalid">Por favor, informe a CNH do entregador!</Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Row className='mt-2 mb-2'>
                <Col md={1}>
                <Button type="submit">{props.modoEdicao ? "Alterar":"Confirmar"}</Button>
                </Col>
                <Col md={{offset:1}} >
                    <Button onClick={() => {
                        props.setExibirTabela(true);
                    }}>Voltar</Button>
                </Col>
            </Row>
        </Form>
    );
}