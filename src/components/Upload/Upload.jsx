import React from 'react';
import { Icon,InputIconButtonExample  } from 'design-react-kit';

import 'bootstrap-italia/dist/css/bootstrap-italia.min.css';
import 'bootstrap-italia/dist/svg/sprite.svg';



function Upload() {
    return (
        <div style={{marginLeft:'40%  ',paddingTop:'50px'}}>
            <form method="post" action="" enctype="multipart/form-data">
                <input type="file" name="upload2" id="upload2" className="upload" multiple="multiple"  style={{color:"red"}}/>
                <label for="upload2">
                    <svg className="icon icon-sm" aria-hidden="true"><use href="/bootstrap-italia/dist/svg/sprite.svg#it-upload"></use></svg>
                    <span>Upload</span>
                </label>
                <ul className="upload-file-list upload-file-list-image">
                    <li className="upload-file success">
                        <div className="upload-image">
                            <img src="https://picsum.photos/40/40?image=1055" alt="imagealt" />
                        </div>
                        <p>
                            <span className="sr-only">Immagine caricata:</span>
                            nome-file-01.jpg <span className="upload-file-weight">68 MB</span>
                        </p>
                        <button disabled > 
                            <span className="sr-only">Caricamento ultimato</span>
                            <svg className="icon" aria-hidden="true"><use href="/bootstrap-italia/dist/svg/sprite.svg#it-check"></use></svg>
                        </button>
                    </li>
                    <li className="upload-file success">
                        <div className="upload-image">
                            <img src="https://picsum.photos/80/40?image=1056" alt="imagealt" />
                        </div>
                        <p>
                            <span className="sr-only">Immagine caricata:</span>
                            nome-file-02-nome-file-lungo-per-ellissi.jpg <span className="upload-file-weight">68 MB</span>
                        </p>
                        <button disabled>
                            <span className="sr-only">Caricamento ultimato</span>
                            <svg className="icon" aria-hidden="true"><use href="/bootstrap-italia/dist/svg/sprite.svg#it-check"></use></svg>
                        </button>
                    </li>
                    <li className="upload-file uploading">
                        <div className="upload-image">
                            <img src="https://picsum.photos/40/40?image=1057" alt="imagealt" />
                        </div>
                        <p>
                            <span className="sr-only">Caricamento immagine:</span>
                            nome-file-03.jpg <span className="upload-file-weight"></span>
                        </p>
                        <button>
                            <span className="sr-only">Annulla caricamento immagine nome-file-03.jpg</span>
                            <svg className="icon" aria-hidden="true"><use href="/bootstrap-italia/dist/svg/sprite.svg#it-close"></use></svg>
                        </button>
                        <div className="progress progress-image">
                            <div className="progress-bar" role="progressbar" style={{width: "33%" , ariaValuenow:"33", ariaValuemin:"0", ariaValuemax:"100"}}></div>
                        </div>
                    </li>
                    <li className="upload-file error">
                        <div className="upload-image">
                            <img src="https://picsum.photos/120/200?image=1058" alt="imagealt" />
                        </div>
                        <p>
                            <span className="sr-only">Errore caricamento immagine:</span>
                            nome-file-04.jpg <span className="upload-file-weight"></span>
                        </p>
                        <button>
                            <span className="sr-only">Elimina immagine caricata nome-file-04.jpg </span>
                            <svg className="icon" aria-hidden="true"><use href="/bootstrap-italia/dist/svg/sprite.svg#it-close"></use></svg>
                        </button>
                    </li>
                </ul>
            </form>

       </div>
    );
}
export default Upload;

