import React from 'react';
import { Icon,Pager,PagerList,PaginationItem, PaginationLink,  } from 'design-react-kit';
import 'bootstrap-italia/dist/css/bootstrap-italia.min.css';
import 'bootstrap-italia/dist/svg/sprite.svg';
import './UserManagment.css'
function TestPage() {
    return (
        <div   >
            <nav className="it-nav-wrapper " aria-label="Esempio di navigazione con ellissi/more"
                     style={{paddingTop:"80px "}}>
                <ul className="pagination ">
                    <li className="page-item ">
                    <a className="page-link" href="#">
                        <span className="sr-only">Pagina precedente</span>
                        <Icon
                            className='icon'
                            color=""
                            icon="it-chevron-left  "
                            padding={false}
                            size=""
                        />
                    </a>
                    </li>
                    <li className="page-item "><a className="page-link" href="#">1</a></li>
                    <li className="page-item">
                    <span className="page-link">...</span>
                    </li>
                    <li className="page-item"><a className="page-link" href="#">24</a></li>
                    <li className="page-item rome-page-item"><a className="page-link rome-page-item" href="#">25</a></li>
                    <li className="page-item active  rome-Backround ">
                    <a className="page-link" xlinkHref="#" aria-current="page">
                        <span className="d-inline-block d-sm-none">Pagina </span>26
                    </a>
                    </li>
                    <li className="page-item"><a class="page-link" href="#">27</a></li>
                    <li className="page-item"><a class="page-link" href="#">28</a></li>
                    <li className="page-item">
                    <span className="page-link">...</span>
                    </li>
                    <li className="page-item"><a className="page-link" href="#">50</a></li>
                    <li className="page-item">
                    <a className="page-link" href="#">
                        <span className="sr-only">Pagina successiva</span>
                        <Icon
                            className='icon'
                            color=""
                            icon="it-chevron-right  "
                            padding={false}
                            size=""
                        />
                    </a>
                    </li>
                </ul>
                </nav>
        </div>

    );
}
export default TestPage;