const cardsContainer = document.getElementById('cards-container');

const fetchBooks = () => {


    fetch("https://striveschool-api.herokuapp.com/books")
        .then((obj) => {
            console.log("oggetto trovato! --->", obj)

            if (obj.ok) {
                

                return obj.json()
            }
            else {
                throw new Error("Errore nel reperimento dei dati")
            }
        }
        )
        .then( books => {
            console.log("teoricamente i miei libri -------->", books)
            const arrayBooks = books
            console.log("titolo del primo libro --------->",arrayBooks[0].title)

            arrayBooks.forEach(book => {
                
                const cardContainer = document.createElement('div')
                cardContainer.classList.add('card')

                const cardBody = document.createElement('div')
                cardBody.classList.add('card-body')

                const cardImage = document.createElement('img')
                cardImage.classList.add('card-img-top')
                /* cardImage.href(book.img) */
                /* cardImage.alt('copertina del libro') */

                const cardTitle = document.createElement('h5')
                cardTitle.classList.add('card-title')
                cardTitle.innerText = book.title

                const cardText = document.createElement('p')
                cardText.classList.add('card-text')
                cardText.innerText = "prezzo del libro" , book.price

                const cardAnchor = document.createElement('a')
                cardAnchor.classList.add('btn', 'btn-danger')
                /* cardAnchor.id('removeBook') */
                /* cardAnchor.href(book.img) */


                cardsContainer.appendChild(cardContainer)
                cardContainer.appendChild(cardBody)
                cardContainer.appendChild(cardImage)
                cardBody.appendChild(cardTitle)
                cardBody.appendChild(cardText)
                cardBody.appendChild(cardAnchor)


                

            });

    

        })

        .catch((err) => console.log(err))

}


window.addEventListener("DOMContentLoaded", () => {

    // avvio della fetch al caricamento della pagina
    fetchBooks();

})