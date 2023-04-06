import { useState } from "react"
import { Button } from "react-bootstrap"

export default function LoopFunctionsPage() {
    const [names, setNames] = useState([
        'Nutuya',
        'Ahmet Berkay',
        'Ayşe',
        'Fadime',
        'Gökhan'
    ])

    console.log('>> NAMES', names)

    return (
        <div>

            <Button
                variant="success"
                onClick={e => {
                    // ÖDEV: Aşağıdaki iki `setNames` fonksiyon kullanımının arasındaki farkı araştırın.
                    // Bu birinci yöntem
                    //setNames(names.reverse())

                    let arr1 = [1, 2, 3, 4]
                    let arr2 = arr1

                    arr2.push(5)
                    console.log(arr1)

                    setNames((currentState) => {
                        return [...currentState.reverse()]
                    })
                }}
            >
                Reverse
            </Button>



        </div>
    )
}