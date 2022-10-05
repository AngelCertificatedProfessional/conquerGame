import { initialGame } from '../config/initialGame.js'
import { piecesImages } from '../config/piecesImages.js'
export const configuracionJuego = {
    
    //Metodo que inicializa el juego
    renderPieces() {
        const gameSetup = true ? initialGame : potentialGame

        this.placePieceBoxNumbers()
        this.placeWhiteDownOrUp()
        this.placePiecesInPosition( gameSetup )
        // this.addPiecesBoxListeners()
        //this.piecesDetermine()
    },
    placePieceBoxNumbers() {
        
        //console.log([ ...document.querySelectorAll( '.piece-box' ) ]);
        ([ ...document.querySelectorAll( '.piece-box' ) ] ).map( pieceBoxElement => {
            const spanElement = document.createElement( 'span' )
            spanElement.classList.add( 'piece-box-text' )
            spanElement.innerHTML = pieceBoxElement.getAttribute( 'id' )    
            pieceBoxElement.append( spanElement )
        })
    },
    placeWhiteDownOrUp() {
        const flexWrap = false ? 'wrap' : 'wrap-reverse'
        document.querySelector( '.chess-table' ).style.flexWrap = flexWrap;
    },
    placePiecesInPosition( gameSetup ) {
        for ( const piecePosition in gameSetup ) {
            const pieceType = gameSetup[ piecePosition ]
            const pieceImageLocation = piecesImages[ pieceType ]

            const imgElement = document.createElement( 'img' )
            imgElement.classList.add( 'piece' )
            imgElement.setAttribute( 'piece-type', pieceType )
            imgElement.src = `${ pieceImageLocation }`

            document.querySelector(`#${ piecePosition }` ).append( imgElement )
        }
    },
}