class Animal{
    constructor(id, nombre, especie, color, peso){
        this.id = id
        this.nombre = nombre
        this.especie = especie
        this.color = color
        this.peso = peso
    }
}

const animal1 = new Animal(1, "Crespuculo", "Wolf", "Black", 60)
const animal2 = new Animal(2, "Bad Bunny BB", "Bunny", "Grey", 10)
const animal3 = new Animal(3, "Mota", "Beard", "Gris", 460)
const animal4 = new Animal(4, "Gominola", "Beard", "Brown", 360)

const animales = [animal1, animal2, animal3, animal4]

animales.forEach(animal => {
    console.table(animal)
})