<!DOCTYPE html><html><head><meta charset="utf-8"><title>Appetit.md</title><style></style></head><body id="preview">
<h1 class="code-line" data-line-start=0 data-line-end=1><a id="Appetit_0"></a>Appetit</h1>
<p class="has-line-data" data-line-start="2" data-line-end="3">Aplicação Front end de uma padaria</p>
<h1 class="code-line" data-line-start=4 data-line-end=5><a id="SETUP_4"></a>SETUP</h1>
<ul>
<li class="has-line-data" data-line-start="5" data-line-end="6">Para logar basta informar qualquer email e senha, não foi feita autenticação de login</li>
<li class="has-line-data" data-line-start="6" data-line-end="6">A pasta \src\pages contem todas as rotas do projeto</li>
<li class="has-line-data" data-line-start="7" data-line-end="7">A pasta \src\services contem o arquivo da API com axios</li>
<li class="has-line-data" data-line-start="8" data-line-end="8">Na raiz do seu projeto crie um arquivo chamado “.env” e adicione o caminho da url principal de sua API na pasta .env a variavel “REACT_APP_API_URL=http://link-da-sua-api”</li>
<li class="has-line-data" data-line-start="9" data-line-end="17">Chamando a API em uma pagina<br>
state = {<br>
orders: []<br>
}<br>
async componentDidMount() {<br>
const response = await api.get(‘caminho-da-api’); //Este caminho da api seria algo como “/produtos”<br>
this.setState({ orders: response.data });<br>
}</li>
</ul>
</body></html>
