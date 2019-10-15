import React, { useState } from 'react';
import Template from '../Template';
import ImgSection from '../../assets/img/home/section-style.png';
import InputMask from 'react-input-mask';

import './styles.css';

export default function Livraria() {
  const [showModal, setShowModal] = useState(false);
  const [pedidos, setSetPedidos] = useState({});

  const livros = [
    {
      id: 1,
      title: 'Armado para o combate',
      autor: 'Rick Renner',
      img: `https://d26lpennugtm8s.cloudfront.net/stores/245/634/products/armado-para-o-combate1-481a9f157083fa05e815626828236408-1024-1024.jpg`,
    },
    {
      id: 2,
      title: 'Líder para voar',
      autor: 'Manassés Guerra',
      img: `https://d26lpennugtm8s.cloudfront.net/stores/245/634/products/lider-para-voar1-92e83997c856e17e3015639786708020-1024-1024.jpg`,
    },
    {
      id: 3,
      title: 'USHUAIA até os confis da terra',
      autor: 'Simon Potter',
      img: `https://d26lpennugtm8s.cloudfront.net/stores/245/634/products/ushuaia1-b6290a0d96faef780015626827603060-1024-1024.jpg`,
    },
    {
      id: 4,
      title: 'Plantando Igrejas 8 Princípios-chave para o sucesso',
      autor: 'Keith A. Butler',
      img: `https://d26lpennugtm8s.cloudfront.net/stores/245/634/products/plantando-igrejas1-f67c553d2520335caa15646642736943-1024-1024.jpg`,
    },
  ];
  function handlePedido(e) {
    if (e.target.id === 'name') {
      setSetPedidos({ ...pedidos, name: e.target.value });
    } else {
      setSetPedidos({ ...pedidos, telefone: e.target.value });
    }
  }
  function addItemPedido(livro, autor) {
    setShowModal(true);
    setSetPedidos({ ...pedidos, livro, autor });
  }
  function criarPedido() {
    if (document.getElementById('name').value === '') {
      return document.getElementById('name').focus();
    }
    if (document.getElementById('telefone').value === '') {
      return document.getElementById('telefone').focus();
    }
    alert(
      `Livro: ${pedidos.livro} Autor: ${pedidos.autor} - Cliente: ${
        pedidos.name
      } Telefone: ${pedidos.telefone}`,
    );
    setShowModal(false);
  }
  return (
    <Template>
      <section className="section-margin-livros bg-gray">
        <div className="container">
          <div className="section-intro text-center pb-98px">
            <h2 className="primary-text">Livraria</h2>
            <img src={ImgSection} alt="" />
          </div>
          <div className="row">
            {livros.map(l => (
              <div
                key={l.id}
                className="card card-livros col-lg-5 col-12 mb-5 ml-auto"
              >
                <img
                  src={l.img}
                  className="card-img-top img-livros"
                  alt={l.autor}
                />
                <div className="card-body">
                  <h6 className="card-text text-center font-title">
                    {l.title}
                  </h6>
                  <p className="card-text text-center font-autor">{l.autor}</p>
                </div>
                <button
                  type="button"
                  className="btn btn-primary btn-livros btn-block mb-3"
                  onClick={() => addItemPedido(l.title, l.autor)}
                >
                  Faça seu pedido
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {showModal ? (
        <>
          <div className={showModal ? 'modal fade show block-modal' : ''}>
            <div className="modal-dialog modal-lg" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLiveLabel">
                    Pedidos de Livros
                  </h5>
                  <button
                    onClick={() => setShowModal(false)}
                    type="button"
                    className="close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="modal-body">
                  <form>
                    <div id="phone" className="form-group">
                      <label htmlFor="name">Nome</label>
                      <input
                        id="name"
                        type="text"
                        onChange={handlePedido}
                        className="form-control"
                        required
                      />
                    </div>

                    <div id="phone" className="form-group">
                      <label htmlFor="telefone">Telefone</label>
                      <InputMask
                        id="telefone"
                        mask="87 \9 9999 9999"
                        maskChar=" "
                        className="form-control"
                        onChange={handlePedido}
                        required
                      />
                    </div>
                  </form>
                </div>
                <div className="modal-footer">
                  <button
                    onClick={criarPedido}
                    type="button"
                    className="btn btn-secondary"
                  >
                    Enviar <i className="far fa-paper-plane" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div
            className={
              showModal ? 'modal-backdrop fade show block-modal-background' : ''
            }
          />
        </>
      ) : (
        ''
      )}
    </Template>
  );
}
