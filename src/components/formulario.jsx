const Formulario = () => {
    return (
        <div className="col-md-8 mt-2">
            <form action="">
                <div className="card">
                    <div className="card-header">Formulario</div>
                    <div className="card-body">
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1">Num. Ine</span>
                            <input type="number" className="form-control" />
                        </div>

                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1">Nombre:</span>
                            <input type="text" className="form-control" />
                        </div>

                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1">Apellido:</span>
                            <input type="text" className="form-control" />
                        </div>

                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1">Teléfono:</span>
                            <input type="number" className="form-control" />
                        </div>

                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1">Correo:</span>
                            <input type="email" className="form-control" />
                        </div>

                        <div className="d-grid">
                            <input type="submit" className="btn btn-success"/>
                            <input type="reset" className="btn btn-info my-2"/>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Formulario;
