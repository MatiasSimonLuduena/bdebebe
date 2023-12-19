/* eslint-disable react/prop-types */
const Modal = ({ setModal, clic, filters, setFilters }) => {
    return (
        <div className="modal-search">
            <div className="ms-top">
                <button onClick={() => setModal(false)}>⬅️ Volver</button>
                <h4>Filtros</h4>
            </div>
            <div className="ms-main">
                <div>
                    <input type="checkbox" id="nene"
                        checked={filters.nene}
                        onChange={() => setFilters({...filters, nene: !filters.nene, nena: filters.nene && false})}
                    />
                    <label htmlFor="nene">Nene</label>
                </div>
                <div>
                    <input type="checkbox" id="nena"
                        checked={filters.nena}
                        onChange={() => setFilters({...filters, nena: !filters.nena, nene: filters.nena && false})}
                    />
                    <label htmlFor="nena">Nena</label>
                </div>
                <br />
                <p>Talles</p>
                <div>
                    <label htmlFor="1">1</label>
                    <input type="checkbox" id="1"
                        checked={filters.talle[0]}
                        onChange={() => {
                            setFilters((prevFilters) => {
                                const newTalle = [!prevFilters.talle[0]];
                                return { ...prevFilters, talle: newTalle };
                            });
                        }}
                    />
                </div>
                <div>
                    <label htmlFor="1">2</label>
                    <input type="checkbox" id="2"
                        checked={filters.talle[1]}
                        onChange={() => {
                            setFilters((prevFilters) => {
                              const newTalle = [false, !prevFilters.talle[1]];
                              return { ...prevFilters, talle: newTalle };
                            });
                        }}
                    />
                </div>
                <div>
                    <label htmlFor="1">3</label>
                    <input type="checkbox" id="3"
                        checked={filters.talle[2]}
                        onChange={() => {
                            setFilters((prevFilters) => {
                              const newTalle = [false, false, !prevFilters.talle[2]];
                              return { ...prevFilters, talle: newTalle };
                            });
                        }}
                    />
                </div>
                <div>
                    <label htmlFor="1">4</label>
                    <input type="checkbox" id="4"
                        checked={filters.talle[3]}
                        onChange={() => {
                            setFilters((prevFilters) => {
                              const newTalle = [false, false, false, !prevFilters.talle[3]];
                              return { ...prevFilters, talle: newTalle };
                            });
                        }}
                    />
                </div>
                <div>
                    <label htmlFor="1">5</label>
                    <input type="checkbox" id="5"
                        checked={filters.talle[4]}
                        onChange={() => {
                            setFilters((prevFilters) => {
                              const newTalle = [false, false, false, false, !prevFilters.talle[4]];
                              return { ...prevFilters, talle: newTalle };
                            });
                        }}
                    />
                </div>
                <div>
                    <label htmlFor="1">6</label>
                    <input type="checkbox" id="6"
                        checked={filters.talle[5]}
                        onChange={() => {
                            setFilters((prevFilters) => {
                                const newTalle = [
                                    false, false, false, false, false, !prevFilters.talle[5]
                                ];
                                return { ...prevFilters, talle: newTalle };
                            });
                        }}
                    />
                </div>
                <br />
                <div>
                    <label htmlFor="abrigo">Abrigo</label>
                    <input type="checkbox" id="abrigo"
                        checked={filters.abrigo}
                        onChange={() => setFilters({...filters, abrigo: !filters.abrigo, verano: filters.abrigo && false})}
                    />
                </div>
                <div>
                    <label htmlFor="verano">Verano</label>
                    <input type="checkbox" id="verano"
                        checked={filters.verano}
                        onChange={() => setFilters({...filters, verano: !filters.verano, abrigo: filters.verano && false})}
                    />
                </div>
                <br />
                <div>
                    <label htmlFor="shorts">Shorts</label>
                    <input type="checkbox" id="shorts"
                        checked={filters.categoria[0]}
                        onChange={() => {
                            setFilters((prevFilters) => {
                              const newCategoria = [...prevFilters.categoria];
                              newCategoria[0] = !prevFilters.categoria[0];
                              return { ...prevFilters, categoria: newCategoria };
                            });
                        }}
                        disabled={filters.abrigo}
                    />
                </div>
                <div>
                    <label htmlFor="Bodies">Bodies y Enteritos</label>
                    <input type="checkbox" id="Bodies"
                        checked={filters.categoria[1]}
                        onChange={() => {
                            setFilters((prevFilters) => {
                              const newCategoria = [...prevFilters.categoria];
                              newCategoria[1] = !prevFilters.categoria[1];
                              return { ...prevFilters, categoria: newCategoria };
                            });
                        }}
                    />
                </div>
                <div>
                    <label htmlFor="remeras">Remeras</label>
                    <input type="checkbox" id="remeras"
                        checked={filters.categoria[2]}
                        onChange={() => {
                            setFilters((prevFilters) => {
                              const newCategoria = [...prevFilters.categoria];
                              newCategoria[2] = !prevFilters.categoria[2];
                              return { ...prevFilters, categoria: newCategoria };
                            });
                        }}
                    />
                </div>
                <div>
                    <label htmlFor="pantalones">Pantalones</label>
                    <input type="checkbox" id="pantalones"
                        checked={filters.categoria[3]}
                        onChange={() => {
                            setFilters((prevFilters) => {
                              const newCategoria = [...prevFilters.categoria];
                              newCategoria[3] = !prevFilters.categoria[3];
                              return { ...prevFilters, categoria: newCategoria };
                            });
                        }}
                        disabled={filters.verano}
                    />
                </div>
                <div>
                    <label htmlFor="buzos">Buzos y camperas</label>
                    <input type="checkbox" id="buzos"
                        checked={filters.categoria[4]}
                        onChange={() => {
                            setFilters((prevFilters) => {
                              const newCategoria = [...prevFilters.categoria];
                              newCategoria[4] = !prevFilters.categoria[4];
                              return { ...prevFilters, categoria: newCategoria };
                            });
                        }}
                        disabled={filters.verano}
                    />
                </div>
                <div>
                    <label htmlFor="conjuntos">Conjuntos</label>
                    <input type="checkbox" id="conjuntos"
                        checked={filters.categoria[5]}
                        onChange={() => {
                            setFilters((prevFilters) => {
                              const newCategoria = [...prevFilters.categoria];
                              newCategoria[5] = !prevFilters.categoria[5];
                              return { ...prevFilters, categoria: newCategoria };
                            });
                        }}
                    />
                </div>
            </div>
            <button onClick={() => {
                clic();
                setModal(false);
            }}>Aplicar filtros</button>
        </div>
    )
}

export default Modal