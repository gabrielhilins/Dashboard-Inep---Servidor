// importar bibliotecas
const express = require('express')
const bibliotecapg = require('pg')
// conexão do objeto com o servidor
const client = new bibliotecapg.Client({connectionString: "postgres://cncgklju:VztvmF2Cy4KC6fFhgnLTxHiSQCGSSvh6@isabelle.db.elephantsql.com/cncgklju"})
const app = express()
const port = 3000

// consultas no banco de dados:

const basico = `
select sum(qt_mat_bas) as qt_basico
from restante
group by no_regiao;
`
const inf = `
select sum(qt_mat_inf) as qt_infantil
from "bd alunos"
group by no_regiao;
` 
const fund = `
select sum(qt_mat_fund) as qt_fundamental
from "bd alunos"
group by no_regiao;
`
const medio = `
select sum(qt_mat_med) as qt_medio
from "bd alunos"
group by no_regiao;
`

const idade03 = `
select sum(qt_mat_bas_0_3) as qt_idade_0_3
from "bd alunos"
group by no_regiao;
`
const idade45 = `
select sum(qt_mat_bas_4_5) as qt_idade_4_5
from "bd alunos"
group by no_regiao;
`

const idade610 = `
select sum(qt_mat_bas_6_10) as qt_idade_6_10
from "bd alunos"
group by no_regiao;
`

const idade1114 = `
select sum(qt_mat_bas_11_14) as qt_idade_11_14
from "bd alunos"
group by no_regiao;
`
const idade1517 = `
select sum(qt_mat_bas_15_17) as qt_idade_115_17
from restante
group by no_regiao;
`

const idade18mais = `
select sum(qt_mat_bas_18_mais) as qt_idade_18_mais
from restante
group by no_regiao;
`

const masc = `
select sum(qt_mat_bas_masc) as qt_masculino
from "bd alunos"
group by no_regiao;
`

const fem = `
select sum(qt_mat_bas_fem) as qt_feminino
from "bd alunos"
group by no_regiao;
`

const yellow = `
select sum(qt_mat_bas_amarela) as qt_amarelo
from "bd alunos"
group by no_regiao;
`

const white = `
select sum(qt_mat_bas_branca) as qt_amarelo
from "bd alunos"
group by no_regiao;
`

const brown = `
select sum(qt_mat_bas_parda) as qt_pardo
from "bd alunos"
group by no_regiao;
`

const black = `
select sum(qt_mat_bas_preta) as qt_preto
from "bd alunos"
group by no_regiao;
`

const ind = `
select sum(qt_mat_bas_indigena) as qt_indigena
from "bd alunos"
group by no_regiao;
`

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/basico', (requisicao, resposta) => {

    client.connect((err) => {
        client.query(basico, (err, res) => {
            resposta.send(JSON.stringify(res.rows))
            console.log(err ? err.stack : res) 
        })
    })

})

app.get('/inf', (requisicao, resposta) => {

    client.connect((err) => {
        client.query(inf, (err, res) => {
            resposta.send(JSON.stringify(res.rows))
            console.log(err ? err.stack : res) 
        })
    })
})

app.get('/fund', (requisicao, resposta) => {

    client.connect((err) => {
        client.query(fund, (err, res) => {
            resposta.send(JSON.stringify(res.rows))
            console.log(err ? err.stack : res) 
        })
    })
})

app.get('/medio', (requisicao, resposta) => {

    client.connect((err) => {
        client.query(medio, (err, res) => {
            resposta.send(JSON.stringify(res.rows))
            console.log(err ? err.stack : res) 
        })
    })
})

app.get('/idade03', (requisicao, resposta) => {

    client.connect((err) => {
        client.query(idade03, (err, res) => {
            resposta.send(JSON.stringify(res.rows))
            console.log(err ? err.stack : res) 
        })
    })
})

app.get('/idade45', (requisicao, resposta) => {

    client.connect((err) => {
        client.query(idade45, (err, res) => {
            resposta.send(JSON.stringify(res.rows))
            console.log(err ? err.stack : res) 
        })
    })
})

app.get('/idade610', (requisicao, resposta) => {

    client.connect((err) => {
        client.query(idade610, (err, res) => {
            resposta.send(JSON.stringify(res.rows))
            console.log(err ? err.stack : res)
        })
    })
})

app.get('/idade1114', (requisicao, resposta) => {

    client.connect((err) => {
        client.query(idade1114, (err, res) => {
            resposta.send(JSON.stringify(res.rows))
            console.log(err ? err.stack : res)
        })
    })
})

app.get('/idade1517', (requisicao, resposta) => {

    client.connect((err) => {
        client.query(idade1517, (err, res) => {
            resposta.send(JSON.stringify(res.rows))
            console.log(err ? err.stack : res)
        })
    })
})

app.get('/idade18mais', (requisicao, resposta) => {

    client.connect((err) => {
        client.query(idade18mais, (err, res) => {
            resposta.send(JSON.stringify(res.rows))
            console.log(err ? err.stack : res)
        })
    })
})

app.get('/masc', (requisicao, resposta) => {

    client.connect((err) => {
        client.query(masc, (err, res) => {
            resposta.send(JSON.stringify(res.rows))
            console.log(err ? err.stack : res)
        })
    })
})

app.get('/fem', (requisicao, resposta) => {

    client.connect((err) => {
        client.query(fem, (err, res) => {
            resposta.send(JSON.stringify(res.rows))
            console.log(err ? err.stack : res)
        })
    })
})

app.get('/yellow', (requisicao, resposta) => {

    client.connect((err) => {
        client.query(yellow, (err, res) => {
            resposta.send(JSON.stringify(res.rows))
            console.log(err ? err.stack : res)
        })
    })
})

app.get('/white', (requisicao, resposta) => {

    client.connect((err) => {
        client.query(white, (err, res) => {
            resposta.send(JSON.stringify(res.rows))
            console.log(err ? err.stack : res)
        })
    })
})

app.get('/brown', (requisicao, resposta) => {

    client.connect((err) => {
        client.query(brown, (err, res) => {
            resposta.send(JSON.stringify(res.rows))
            console.log(err ? err.stack : res)
        })
    })
})

app.get('/black', (requisicao, resposta) => {

    client.connect((err) => {
        client.query(black, (err, res) => {
            resposta.send(JSON.stringify(res.rows))
            console.log(err ? err.stack : res)
        })
    })
})

app.get('/ind', (requisicao, resposta) => {

    client.connect((err) => {
        client.query(ind, (err, res) => {
            resposta.send(JSON.stringify(res.rows))
            console.log(err ? err.stack : res)
        })
    })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
  