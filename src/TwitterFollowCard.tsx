export function TwitterFollowCard({numPhoto, userName, name}: {numPhoto: string, userName: string, name: string}) {
    const imageSrc: string = `https://i.pravatar.cc/${numPhoto}`
    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img className='tw-followCard-avatar' alt="Avatar de ejemplo 1" src={imageSrc} />
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