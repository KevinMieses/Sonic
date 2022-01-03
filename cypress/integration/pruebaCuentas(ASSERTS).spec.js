describe('Cuentas',() => {
var a=1
it('Vamos a ver una igualdad',() =>{

expect (1==2,"Ambos terminos tienen que ser iguales y no lo son").to.equal(true)
})

it('Vamos a ver que no sea una igualdad',() => {

expect(1==2).to.equal(false)
})

it('Vamos a ver que una resta este bien', ()=> {

expect(1-5,"Aqui se espera un cero").to.equal(0)
})

it('Vamos a ver que una resta no este bien',()=>{

expect(1-1).to.not.equal(5)
})


it('Tiene que ser verdadero',()=>{

expect(2==2).to.be.true
})

it('Tiene que ser falso',()=>{

expect(2==3).to.be.false
})

it('La variable existe',()=>{

expect(a).to.exist

})

it('Es menor a 10',()=>{

    expect(a).to.be.lessThan(10)
})

it('Es mayor a 10',()=>{

  expect(25).to.be.greaterThan(10)
})

})