import { useState } from "react" //use state es un ARRAY
import './App.css' //importamos los estilos de los elementos
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

const users = [
    {
        userName: 'Emma',
        name: 'Francisco Laso',
        isFollowing: true 
    },
    {
        userName: 'bjuanms',
        name: 'Peter Parker',
        isFollowing: false
    },
    {
        userName: 'Paris',
        name: 'Arnold Heik',
        isFollowing: true 
    },
]

//-----------------ESTA ES LA VERSION 1 QUE NO SE USA PERO ESTÁ BIEN PARA ENTENDER------------------
// export function App() {

//     const [name, setName] = useState('alfred')

//     console.log('render with name', name)
//     // console.log(isFollowing)
//     // const formatUserName = (userName) => `@${userName}`
//     const primaco = { userName: 'primaco22', name: 'Jesus Alberto' }
//     return (
//         // esto <> </> es lo mismo que poner react.fragment pero así se evita tanto texto. Si no introducimos los elementos en un-
//         //- fragment no se podrían repetir, daría error. Nosotros usamos section porque tendrá un estilo personalizado
//         <section className='users_colum'>
//             <TwitterFollowCard
//                 // formatUserName={formatUserName}
//                 userName={"rob"}
//                 name={"George Pumpling"}
//                 initialIsFollowing={true}
//                 // isFollowing  is following ya no hace falta para nada, pues es un componente interno de 
//             />
//             <TwitterFollowCard
//                 // formatUserName={formatUserName}
//                 userName={name} // para lo de cambiar el nombre. El primer valor es alfred. al pulsar el botn cambiará
//                 name={"Alfredo Carrascosa"}
//                 initialIsFollowing={false}
//             />
//             <TwitterFollowCard
//                 // formatUserName={formatUserName}
//                 userName={"jhon"}
//                 name={"Juan Martínez"}
//                 initialIsFollowing={true}isFollowing

//             />

//             <TwitterFollowCard {...primaco}
//             // también se puede hacer de esta forma. Creas una constante con los datos como json y con 3 puntos los pasas.
//             />

//             <button onClick={() => setName('Hijodeputa')}>
//                 Cambio de Nombre
//                  </button>


//         </section>
//     )
// }

export function App() {

    return (
        // esto <> </> es lo mismo que poner react.fragment pero así se evita tanto texto. Si no introducimos los elementos en un-
        //- fragment no se podrían repetir, daría error. Nosotros usamos section porque tendrá un estilo personalizado
        <section className='App'>
           {
            users.map(user => {
                const {userName, name, isFollowing } = user
{/*Map es una función que te permite transformar los elementos de una lista y que devuelve una nueva lista con los elementos transformados.*/}

                return (
                   <TwitterFollowCard 
                   key={userName} // la key debe ser algo que exista único y no se repita nunca
                   userName={userName}
                   initialIsFollowing={isFollowing}
                   name={name}
                   >
                    
                   </TwitterFollowCard>
                )

            })
           }
            
            
            
            {/* <button onClick={() => setName('Hijodeputa')}>
                Cambio de Nombre
                 </button> */}


        </section>
    )
}