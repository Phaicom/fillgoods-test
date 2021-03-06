import moment from 'moment'

export const state = () => ({
  results: [],
  search: {
    text: '',
    filter: 'All',
  },
})

export const mutations = {
  add(state, result) {
    state.results.push(result)
  },
  updateSearch(state, search) {
    state.search = search
  },
  clear(state) {
    state.results = []
  },
}

export const getters = {
  getSearchResults: (state) => {
    let filterResult = state.results.filter((result) => {
      return (
        result.name === state.search.filter || state.search.filter === 'All'
      )
    })

    return filterResult
      .filter((result) => {
        let boundary =
          result.result + ' ' + moment(result.date).format('DD/MM/YYYY')
        let text = state.search.text.split('/').join('\\/')
        let re = new RegExp(text, 'g')
        return boundary.match(re)
      })
      .reverse()
  },
}
