// primeira etapa: iniciar o npm
// npm init
// git init
// npm install express
// npm install -g nodemon
// npm install ejs
// npm install pg
// npm install express-session

const app = require('./config/server')

const db = require('./config/dbConnection')

// rota home
app.get('/', function(req, res){
    db.query('SELECT * FROM tarefas ORDER BY id_tarefa DESC', 
    function(error, result){
        console.log(result.rows)
        // o EJS disponibiliza o metodo render para usar das respostas das requisições
        res.render('home/index', {tarefas: result.rows})
    })
})

// rota responsável por salvar a tarefa
app.post('/admin/salvar-tarefa', function(req, res){
    let {tarefa} = req.body
    db.query('INSERT INTO tarefas(tarefa) VALUES($1)', [tarefa],
    function(error, result){
        res.redirect('/')
    })
})

// rota responsável por excluir a tarefa
app.get("/del/:id",async (req,res) =>{
    const id = req.params.id
    db.query('DELETE FROM tarefas WHERE id_tarefa = $1',[id])
    res.redirect("/")
})


app.listen(process.env.port || 3000, () => {
    console.log("Server it's working")
})