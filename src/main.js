
const alunos = [
    { nome: "Pedro", nota:  8 },
    { nome: "João", nota: 6 },
    { nome: "Maria", nota: 9 },
    { nome: "Eduardo", nota: 2 },
    { nome: "Jorge", nota: 6 },
];


function alunosAprovados(arrayDeAlunos) {
    return arrayDeAlunos.filter(aluno => aluno.nota >= 6);
}


const alunosAprovadosArray = alunosAprovados(alunos);
console.log(alunosAprovadosArray);
