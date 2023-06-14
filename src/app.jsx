 import './App.css' //importamos los estilos de los elementos
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

export function App() {

    // console.log(isFollowing)
    // const formatUserName = (userName) => `@${userName}`
    const primaco = { userName: 'primaco22', isFollowing: false, name: 'Jesus Alberto' }
    return (
        // esto <> </> es lo mismo que poner react.fragment pero así se evita tanto texto. Si no introducimos los elementos en un-
        //- fragment no se podrían repetir, daría error. Nosotros usamos section porque tendrá un estilo personalizado
        <section className='users_colum'>
            <TwitterFollowCard
                // formatUserName={formatUserName}
                userName={"rob"}
                name={"George Pumpling"}
                isFollowing
            />
            <TwitterFollowCard
                // formatUserName={formatUserName}
                userName={"alfred"}
                name={"Alfredo Carrascosa"}
                isFollowing={false}
            />
            <TwitterFollowCard
                // formatUserName={formatUserName}
                userName={"jhon"}
                name={"Juan Martínez"}
                isFollowing

            />

            <TwitterFollowCard {...primaco}
            // también se puede hacer de esta forma. Creas una constante con los datos como json y con 3 puntos los pasas.
            />


        </section>
    )
}