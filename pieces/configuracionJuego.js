import { initialGame } from '../config/initialGame.js';
import { piecesImages } from '../config/piecesImages.js';
import { piecesHandle } from '../services/piecesHandle.js';
export const configuracionJuego = {
    piecesEventListeners: {},
    //Metodo que inicializa el juego
    renderPieces() {
        const gameSetup = true ? initialGame : potentialGame

        this.placePieceBoxNumbers()
        //this.placeWhiteDownOrUp()
        this.placePiecesInPosition( gameSetup )
        this.addPiecesBoxListeners()
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
    // placeWhiteDownOrUp() {
    //     const flexWrap = false ? 'wrap' : 'wrap-reverse'
    //     document.querySelector( '.chess-table' ).style.flexWrap = flexWrap;
    // },
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
    addPiecesBoxListeners() {
        document.querySelectorAll('.piece-box').forEach( pieceBoxElement => {
            const pieceBoxPosition = pieceBoxElement.getAttribute( 'id' )
            const pieceElement = pieceBoxElement.querySelector('.piece' )
            const pieceType = pieceElement?.getAttribute( 'piece-type' ) ?? null

            const handleParams = {
                pieceBoxElement,
                pieceBoxPosition,
                pieceElement,
                pieceType
            }

            this.piecesEventListeners[ pieceBoxPosition ] = {
                'mouseenter': _ => {
                    piecesHandle.handlePieceMouseenter( handleParams )
                },
                'mouseleave': _ => {
                    piecesHandle.handlePieceMouseleave( handleParams )
                },
                'click': _ => {
                    piecesHandle.handlePieceClick( handleParams )
                },
            }

        //     pieceBoxElement.addEventListener( 'mouseenter', this.piecesEventListeners[ pieceBoxPosition ][ 'mouseenter' ])
        //     pieceBoxElement.addEventListener( 'mouseleave', this.piecesEventListeners[ pieceBoxPosition ][ 'mouseleave' ])
        //     pieceBoxElement.addEventListener( 'click', this.piecesEventListeners[ pieceBoxPosition ][ 'click' ])
        })
    },
}