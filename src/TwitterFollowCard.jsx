export function TwitterFollowCard({ userName, name, isFollowing }) {//la base de la reutilización de los componentes son los PARÁMETROS
    // export function TwitterFollowCard({ formatUserName, userName, name, isFollowing }) {//aqui mostramos la exportación del format username
    //<span className='tw-followCard-infoUserName'>{formatUserName(userName)}</span>

    console.log(isFollowing)

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
                <button className='tw-followCard-button'>
                    Seguir
                </button>
            </aside>
        </article>
    )
}


//Seguir (linea 24) es el children de button.