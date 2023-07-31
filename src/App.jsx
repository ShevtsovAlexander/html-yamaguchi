import './App.css';

function App() {
  return (
    <>
      <div className="container">
        <div className="container-wrapper">
          <div className="text-wrapper">
            <div>
              <p className="header-wrapper">Yamaguchi Voice Control</p>
            </div>
            <div>
              <p className="main-wrapper">
                Вы можете управлять программами массажа или самим креслом с помощью голосовых команд, приведённых ниже.
                Коснитесь кратковременно кнопки голосового управления, расположенной на левом подлокотнике, для запуска
                сеанса голосового управления.{' '}
                <p>
                  Произнесите одну из доступных команд. Если произнесённая команда распознана, вы услышите ответ и
                  кресло приступит к выполнению запроса.{' '}
                </p>
              </p>
            </div>
          </div>
          <div className="overlap">
            <div className="element-wrapper">
              <div className="element-wrapper-1"></div>
              <div className="element-wrapper-2"></div>
            </div>
            <div className="image">
              <div className="element-interface"></div>
            </div>
          </div>
          <div className="text-wrapper">
            <div>
              <h1 className="footer-wrapper">
                <span className={'first'}>СКАЖИ</span>
                <span className="first-1">:</span>{' '}
                <div className="okay_yamguchi">
                  <p className={'second'}>
                    <span className="first-2">«</span>ОКЕЙ<span className="first-2">,</span>
                  </p>{' '}
                  <p className={'third'}>
                    ЯМАГУЧИ<span className="first-2">»</span>
                  </p>
                </div>
              </h1>
            </div>
          </div>{' '}
        </div>
        <div className="overlap-desktop">
          <div className="element-wrapper">
            <div className="element-wrapper-1"></div>
            <div className="element-wrapper-2"></div>
          </div>
          <div className="image">
            <div className="element-interface"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
