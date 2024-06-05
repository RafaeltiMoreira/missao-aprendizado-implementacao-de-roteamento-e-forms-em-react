export default function Create() {
  return (
    <div>
      <h1>Criar DevMon</h1>
      <div className="flex">
        <form>
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