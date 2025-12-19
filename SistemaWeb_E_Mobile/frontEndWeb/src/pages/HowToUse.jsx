import React from 'react';
import { useNavigate } from 'react-router-dom';

const HowToUse = () => {
    const navigate = useNavigate();

    return (
        <main>
            <section className="howto-section">
                <h1>Como usar o sistema</h1>
                <div className="howto-block">
                    <h2>Acesso e Login</h2>
                    <ol>
                        <li>Informe seu usuário e senha na tela de Login.</li>
                        <li>Usuario: <strong>liedson</strong> | Senha: <strong>1</strong> para logar como funcionário.</li>
                        <li>Usuario: <strong>jessica</strong> | Senha: <strong>1</strong> para logar como administrador.</li>
                        <li>Usuario: <strong>elisa</strong> | Senha: <strong>1</strong> para logar como técnico.</li>
                        <li>Clique em <strong>Entrar</strong>. Em caso de erro, verifique as credenciais.</li>
                        <li>Se esqueceu a senha, use a opção <strong>Esqueceu a senha?</strong> e contate o administrador.</li>
                    </ol>
                </div>

                <div className="howto-block">
                    <h2>Criar um chamado</h2>
                    <ol>
                        <li>Acesse a opção <strong>Criar chamado</strong> na página inicial.</li>
                        <li>Preencha os campos obrigatórios (título, descrição, categoria, impacto).</li>
                        <li>Clique em <strong>Enviar</strong>. Você verá uma confirmação e poderá visualizar o chamado.</li>
                    </ol>
                </div>

                <div className="howto-block">
                    <h2>Acompanhar status</h2>
                    <ol>
                        <li>Navegue até <strong>Chamados</strong> para ver listas por status: Pendentes, Em andamento, Resolvidos.</li>
                        <li>Clique em um chamado para ver os detalhes e o histórico.</li>
                        <li>Observe os indicadores de prioridade e progresso para entender o andamento.</li>
                    </ol>
                </div>

                <div className="howto-block">
                    <h2>Responder solicitações</h2>
                    <ol>
                        <li>Quando o suporte solicitar informações, acesse <strong>Responder chamado</strong> (Estando logado como técnico).</li>
                        <li>Insira a resposta de forma clara e objetiva e confirme.</li>
                    </ol>
                </div>

                <div className="howto-block">
                    <h2>Relatórios</h2>
                    <ol>
                        <li>No menu <strong>Relatórios</strong>, selecione intervalo de datas (Estando logado como técnico ou administrador).</li>
                        <li>Visualize os gráficos e listas para acompanhar volume, status e tempos.</li>
                    </ol>
                </div>

                <div className="howto-block">
                    <h2>Administração</h2>
                    <ol>
                        <li>Em <strong>Gerenciar usuários</strong>, crie, edite ou desative usuários conforme as políticas.</li>
                        <li>Em <strong>Gerenciar chamados</strong>, ajuste conteúdo quando necessário e acompanhe prioridades.</li>
                    </ol>
                </div>

                <div className="howto-block">
                    <h2>Dicas rápidas</h2>
                    <ul>
                        <li>Mantenha descrições dos chamados completas.</li>
                        <li>Use categorias e impacto corretamente para melhor priorização.</li>
                        <li>Consulte o <strong>FAQ</strong> para dúvidas comuns.</li>
                    </ul>
                </div>
            </section>

            <div className="box-button-back-howto">
                <button
                    className="button-back-howto"
                    onClick={() => navigate('/')}
                >
                    Voltar
                </button>
            </div>
        </main>
    );
};

export default HowToUse;