import { toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
import { Api } from "../api/api"
import { useNavigate } from "react-router-dom"

export default function Create() {
  const navigate = useNavigate()
  
  async function handleSubmit(event) {
    event.preventDefault()

    const devmon = {
      nome: event.target.nome.value,
      imagem: event.target.imagem.value,
      evoluiPara: event.target.evoluiPara.value
    }

    const apiUrl = Api.personagem.create()

    const response = await Api.buildApiPostRequest(apiUrl, devmon)

    if (response.ok) {
      toast.success("DevMon criado com sucesso!")
      navigate('/')
    } else {
      const body = await response.json()
      toast.error('Erro ao criar DevMon: ' + body.error)
    }
  }

  return (
    <div>
      <h1>Criar DevMon</h1>
      <div className="flex">
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="nome">Nome:</label>
            <input type="text" id="nome" name="nome" placeholder="Insira o nome" required />
          </div>

          <div>
            <label htmlFor="imagem">Imagem (URL):</label>
            <input type="text" id="imagem" name="imagem" placeholder="Insira a URL da imagem" required />
          </div>

          <div>
            <label htmlFor="evoluiPara">Evolui Para (opcional):</label>
            <input type="text" id="evoluiPara" name="evoluiPara" placeholder="Insira o nome da evolução" />
          </div>

          <div className="btn">
            <button type="submit">Criar</button>
            <button type="reset">Reiniciar</button>
          </div>
        </form>
      </div>
    </div>
  )
}