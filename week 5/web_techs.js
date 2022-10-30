const webTechs = ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node', 'MongoDB']
console.log(webTechs.length)


let index = webTechs.indexOf('Sass')
index === -1? console.log('Webtechs does not exist') :
console.log("Webtechs does exist")

const Techs = ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node', 'MongoDB']
Techs.push('Sass')
console.log(Techs)

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
const fullstack = [frontEnd, backEnd]
console.log(fullstack)







/*In the following shopping cart add, remove, edit items
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
add 'Meat' in the beginning of your shopping cart if it has not been already added
add Sugar at the end of you shopping cart if it has not been already added
remove 'Honey' if you are allergic to honey
modify Tea to 'Green Tea'*/

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
shoppingCart.unshift('Meat')
console.log(shoppingCart)

shoppingCart.push('Sugar')
console.log(shoppingCart)

const shoppingCart1 = ['Milk', 'Coffee', 'Green Tea', 'Honey']
shoppingCart1.pop()
console.log(shoppingCart1)


