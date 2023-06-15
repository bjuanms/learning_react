import { useState } from "react" //use state es un ARRAY

export function TwitterFollowCard({ userName, name, initialIsFollowing}) {//la base de la reutilización de los componentes son los PARÁMETROS
    // export function TwitterFollowCard({ formatUserName, userName, name, isFollowing }) {//aqui mostramos la exportación del format username
    //<span className='tw-followCard-infoUserName'>{formatUserName(userName)}</span>
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing) //primera posición tiene el valor y el segundo la forma de actualizar
    // const isFollowing = state[0]
    // const setIsFollowing = state[1]

    console.log('twitter follow card - render whith username', userName)
    const text = isFollowing ? 'Siguiendo' : 'Seguir' //esto es la estructura de un if pero reducido, lo mismo es if(isFollowing){text = 'siguiendo}else{text='SEguir'}
    const buttonClassName = isFollowing  //aquí tenemos otra función. Si está siguiendo tiene un estilo y si no, tiene el estilo normal.
    ? 'tw-followCard-button is-following'
    : 'tw-followCard-button'

    const handleClick = () => {  //esta función le da la vuelta al valor isFollowing. Si es true lo convierte en false y viceversa.
        setIsFollowing(!isFollowing) 
    }

    return (
        //utilizamos className, no id(pues no sería reutilizable) Class es una palabra reservada en React y no puede usarse
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img
                    className='tw-followCard-avatar'
                    alt="Avatar" //El valor del atributo "alt" se muestra si la imagen no se puede cargar correctamente o si el usuario está utilizando un lector de pantalla.
                    src={`https://unavatar.io/${userName}`}> 
                </img>
                <div className='tw-followCard-info'>
                    <strong>{name}</strong>
                    <span className='tw-followCard-infoUserName'>@{userName}</span>
                </div>
            </header>

            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    <span className="tw-followCard-text">{text}</span>
                    <span className="tw-followCard-stopFollow">Dejar de seguir</span>
                </button>
            </aside>
        </article>
    )
}


//{text{}} es el children de button.