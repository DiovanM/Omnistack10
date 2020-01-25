import React from 'react';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

function App() {
  return(
    <div id="app">
      <aside>
      <strong>Cadastrar</strong>
      <form>

        <div class="input-block">
        <label htmlFor="github_username">Usuário do GitHub</label>
        <input name="github_username" id="github_username" required></input>
        </div>

        <div className="input-block">
        <label htmlFor="techs">Tecnologias</label>
        <input name="techs" id="techs" required></input>
        </div>

        <div className="input-group">
          <div class="input-block">
          <label htmlFor="latitude">Latitude</label>
          <input name="latitude" id="latitude" required></input>
          </div>
          <div class="input-block">
          <label htmlFor="longitude">Longitude</label>
          <input name="longitude" id="longitude" required></input>
          </div>
        </div>

        <button type="submit">Salvar</button>

      </form>
      </aside>
      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/22122763?s=400&v=4" alt="Github Profile"/>
              <div className="user-info">
                <strong>Diovan Marques</strong>
                <span>C#, Unity</span>
              </div>
            </header>
            <p>Diovan Marques maneiro</p>
            <a href="https://github.com/DiovanM">Acessar perfil no GitHub</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/22122763?s=400&v=4" alt="Github Profile"/>
              <div className="user-info">
                <strong>Diovan Marques</strong>
                <span>C#, Unity</span>
              </div>
            </header>
            <p>Diovan Marques maneiro</p>
            <a href="https://github.com/DiovanM">Acessar perfil no GitHub</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/22122763?s=400&v=4" alt="Github Profile"/>
              <div className="user-info">
                <strong>Diovan Marques</strong>
                <span>C#, Unity</span>
              </div>
            </header>
            <p>Diovan Marques maneiro</p>
            <a href="https://github.com/DiovanM">Acessar perfil no GitHub</a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
