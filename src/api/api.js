import { toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'

export const Api = {
  baseUrl: 'https://backend-para-integrar-com-frontend.onrender.com/',

  personagem: {
    endpoint: function () {
      return Api.baseUrl + 'personagem'
    },
    readAll: function () {
      return this.endpoint() + '/'
    },
    create: function () {
      return this.endpoint() + '/'
    }
  },

  buildApiGetRequest: function (url) {
    return fetch(url, { method: 'GET' }).catch(function (error) {
      console.error('Erro ao carregar dados.' + url, error)
      toast.error('Erro ao carregar dados da API.')
    })
  },

  buildApiPostRequest: function (url, body) {
    return fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(body)
    })
      .catch(function (error) {
        console.error('Erro ao enviar dados.' + url, error)
        toast.error('Erro ao enviar dados.')
      })
  }
}