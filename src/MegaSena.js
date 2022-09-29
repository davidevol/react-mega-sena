import React from "react"
export class MegaSena extends React.Component {
  
  state = {
    n1: null,
    n2: null,
    n3: null,
    n4: null,
    n5: null,
    n6: null,
    mostrarComponente: false,
  }

  geraJogo = () => {
    const min = 1
    const max = 60

    this.setState({
      n1: Math.round(min + Math.random() * (max - min)),
      n2: Math.round(min + Math.random() * (max - min)),
      n3: Math.round(min + Math.random() * (max - min)),
      n4: Math.round(min + Math.random() * (max - min)),
      n5: Math.round(min + Math.random() * (max - min)),
      n6: Math.round(min + Math.random() * (max - min)),
      mostrarComponente: true,
    })
  }

  render() {
    return (
      <div className="card">
        <div className="card-body p-5 text-center">
          <div
            className="d-flex align-items-center justify-content-center mb-2"
            style={{ height: "6rem" }}
          >
            <img src="/logo-mega.png" width="32" height="32" alt="mega-sena-logo" />
            <p className="ms-3 mt-3 mb-3 text-center fs-1 text-success">Mega-Sena</p>
          </div>
          {
          this.state.mostrarComponente && (
            <div className="flex-fill align-items-center mb-3">
              <ul className="list-group list-group-horizontal justify-content-center">
                <li className="list-group-item list-group-item-success fs-3">
                  {this.state.n1}
                </li>
                <li className="list-group-item list-group-item-success fs-3">
                  {this.state.n2}
                </li>
                <li className="list-group-item list-group-item-success fs-3">
                  {this.state.n3}
                </li>
                <li className="list-group-item list-group-item-success fs-3">
                  {this.state.n4}
                </li>
                <li className="list-group-item list-group-item-success fs-3">
                  {this.state.n5}
                </li>
                <li className="list-group-item list-group-item-success fs-3">
                  {this.state.n6}
                </li>
              </ul>
            </div>
          )}
          <button
            onClick={this.geraJogo}
            className="btn btn-outline-primary fs-4 btn-outline-success "
          >
            Gerar Jogo
          </button>
        </div>
      </div>
    )
  }
}
