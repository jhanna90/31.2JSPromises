// 1.
// let deck_url = `https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`


// axios.get(deck_url)
//     .then(res => {
//         let deck_id = res.data.deck_id
//         return axios.get(`https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=1`)
//     })
//     .then(res => {
//         console.log(`${res.data.cards[0].value} ` + 'of' + ` ${res.data.cards[0].suit}`)
//     })
//     .catch(err => console.log(err))

// 2.
// let deck_url = `https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`


// axios.get(deck_url)
//     .then(res => {
//         let deck_id = res.data.deck_id;
//         return axios.get(`https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=1`)
//     })
//     .then(res => {
//         console.log(`${res.data.cards[0].value} ` + 'of' + ` ${res.data.cards[0].suit}`)
//         let deck_id = res.data.deck_id;
//         return axios.get(`https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=1`)
//     })
//     .then(res => {
//         console.log(`${res.data.cards[0].value} ` + 'of' + ` ${res.data.cards[0].suit}`)
//     })
//     .catch(err => console.log(err))


// 3.
// let deck_id = null

// axios.get(`https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`)

//     .then(res => {
//         deck_id = res.data.deck_id;
//         console.log('deck_id: ', deck_id)

//     })

//     .catch(err => console.log(err));


// $('#draw-card').on("click", function () {


//     axios.get(`https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=1`)

//         .then(res => {
//             if (res.data.remaining > 0) {
//                 $('.card-container').empty()
//                 console.log(`${res.data.cards[0].value} ` + 'of' + ` ${res.data.cards[0].suit}`)
//                 // create div to hold card
//                 let div = document.createElement('div')
//                 div.classList.add('card-container')
//                 // create image and set src to card image
//                 let img = document.createElement('img');
//                 img.src = res.data.cards[0].image;

//                 document.body.append(div)
//                 //append img to div
//                 div.append(img)

//             } else {
//                 let btn = document.getElementById('draw-card');
//                 btn.style.display = "none";
//             }
//         })

//         .catch(err => console.log(err));

// })