
console.log("1")

/**
 * setTimeout fonksiyonunun kendisi asenkrondur ve her asenkron fonksiyon bir `Promise`
 * objesi dönderir.
 */
setTimeout(() => console.log("2"), 0)

console.log("3")
console.log("4")
console.log("5")
console.log("6")


function print_hello(name) {
    console.log(`hello ${name}`)
}

print_hello("gökhan")
print_hello("nutuya")
print_hello("aslan")


async function print_hello_2(name) {

    // Javascript'te (ve diğer birçok üst seviye dillerde) fonksiyonların bir diğer ismi
    // invoke edilebilir (çağırılabilir) değişkenlerdir.

    return new Promise((resolve, reject) => {
        // Bu fonksiyon içerisinde uzun sürecek herhangi bir iş yapılır.
        // Uzun sürecekten kasıt bir milisaniye de olabilir on dakika da olabilir hatta
        // daha uzun süreler de olabilir.

        // burada uzun süren işlemi yaptığımızı düşünelim.

        console.log(`hello, ${name}`)

        resolve({
            data: "işlem başarılı"
        })
    })
}

function test() {
    console.log('outer function')

    return () => {
        console.log('inner function')
    }
}

test()()




print_hello_2("test 1")
    .then((resolved_value) => {
        console.log('>> print hello 2 resolved value: ', resolved_value)
    })

console.log('Burasının önce ekrana yazılması gerekir.')


