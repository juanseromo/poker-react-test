import axios from "axios";

const fetchTables = async () => {
    try {
        const response = await axios.get('https://storage.googleapis.com/replaypoker-dummy-api/tables/1.json')
        if (response.status === 200 ) {
            localStorage.setItem('tableData', JSON.stringify(response.data))
            return response.data
        }
    } catch (e) {
        console.log(e)
    }
}

const fetchTable = fetchTables().then(e => e)

export default fetchTable

/*export default {
  id: 1,
  state: 'open',
  game: 'holdem',
  blinds: {
    small: 10,
    big: 20,
  },
  seats: [
    { id: 0, state: 'available' },
    { id: 1, state: 'occupied', username: 'MCA', chips: 78450 },
    { id: 2, state: 'available' },
    { id: 3, state: 'occupied', username: 'Mike D', chips: 57465 },
    { id: 4, state: 'occupied', username: 'Ad-Rock', chips: 62860 },
    { id: 5, state: 'available' },
  ],
  currentHand: {
    id: 56829,
    communityCards: [],
    players: [
      { seatId: 1, cards: ['X', 'X'], bet: 0 },
      { seatId: 3, cards: ['X', 'X'], bet: 10 },
      { seatId: 4, cards: ['Ac', '9d'], bet: 20 },
    ],
    pots: [],
  },
}*/
