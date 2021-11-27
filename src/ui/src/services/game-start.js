import {axios} from './axios'

export default {

  async setupGame() {
    console.log('calling backend setup...')

    return axios.get('setup')
    .then(({data}) => {
        console.log('response: ' + data)
            return Promise.resolve(data)

    })
    .catch((err) => {
        return Promise.reject(err)
    })
  }
}
