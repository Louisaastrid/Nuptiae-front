import React from 'react'

export default function carView(props) {
    const{data, Card} = props
    return (
        <div>
            <h1>Titre</h1>
            <p>description</p>
            <p>Prix</p>
            <button>Ajouter à ma wishList</button>
            <button>Réserver</button>

        </div>
    )
}
