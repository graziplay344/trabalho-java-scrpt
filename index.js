<doctype.js!>
// dados para a tabela
const data =[









//funçao para criar a tabela
funtion createtable (data){
//criar um elemento<table>
const table =
document.createElement("table");

//itera sobre as linhas de dadosS
data.forEach((rowdata,index)=>
{
//criar uma linha <tr> para cada conjunto de dados
const cell
document.createElement(index === 0 ? "th"  :  "td");
cell.textcontent = celldata;
row.appendchild(cell);
});

// adicionar a tabela ao corpo do documento
document.body.appendchild(table);

// chama a fuçao para criar a tabela
createtable(data);


<button  kype="button" id="add -btm" onclick="adicionar"()">
</button>

<table id="tabela">
<thead>
<th>tablela</th>
<tr>
<thead>
tablela
</t body>
<table>
