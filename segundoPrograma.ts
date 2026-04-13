interface Usuario{
    nombre : string,
    contrasenia: string,
    edad : number
}


let usuarios : Usuario[]=[]

usuarios.push({"nombre":"Juan","contrasenia":"123","edad":20})
usuarios.push({"nombre":"MARIA","contrasenia":"123","edad":30})
usuarios.push({"nombre":"rosa","contrasenia":"123","edad":25})
usuarios.push({"nombre":"pepito","contrasenia":"123","edad":28})
console.log(usuarios)
usuarios.pop()
console.log(usuarios)
export{}