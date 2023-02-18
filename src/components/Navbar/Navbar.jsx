import s from './Navbar.module.scss';
import { Link } from "react-router-dom";

import profileImg from '../../assets/img/navbar/user.svg';
import referenceImg from '../../assets/img/navbar/information.svg';
import newsImg from '../../assets/img/navbar/megaphone.svg';
import documentsImg from '../../assets/img/navbar/google-docs.svg';
import paymentsImg from '../../assets/img/navbar/ruble.svg';
import lessonsImg from '../../assets/img/navbar/check-mark.svg';
import exitImg from '../../assets/img/navbar/power-button.svg';
import { useState } from 'react';

const Navbar = ({ isOpen }) => {
    const [count, setCount] = useState(1);
    return (
        <nav className={s.nav}>
            <ul className={isOpen ? s.list : `${s.list} ${s.open}`}>
                <li className={s.list__item}>
                    <Link className={s.list__link} to='/profile'>Профиль</Link>
                </li>
                <li className={s.list__item}>
                    <Link className={s.list__link} to='/reference'>Справка</Link>
                </li>
                <li className={`${s.list__item} ${s.list__news}`}>
                    <Link className={s.list__link} to='/news'>Новости
                        <span className={s.newsCount}>{count}</span>
                    </Link>
                </li>
                <li className={s.list__item}>
                    <Link className={s.list__link} to='/documents'>Документы</Link>
                </li>
                <li className={s.list__item}>
                    <Link className={s.list__link} to='/payments'>Оплаты</Link>
                </li>
                <li className={s.list__item}>
                    <Link className={s.list__link} to='/lessons'>Занятия</Link>
                </li>
                <li className={s.list__item}>
                    <Link className={s.list__link} to='/exit'>Выход</Link>
                </li>
            </ul>

            <div className={s.listMobile}>
                <Link className={s.listMobile__link} to='/profile'><img src={profileImg} alt="profile" /></Link>
                <Link className={s.listMobile__link} to='/reference'><img src={referenceImg} alt="reference" /></Link>
                <Link className={`${s.listMobile__link} ${s.listMobile__news}`} to='/news'>
                    <img src={newsImg} alt="news" />
                    <span className={s.newsCount}>{count}</span>
                </Link>
                <Link className={s.listMobile__link} to='/documents'><img src={documentsImg} alt="documents" /></Link>
                <Link className={s.listMobile__link} to='/payments'><img src={paymentsImg} alt="payments" /></Link>
                <Link className={s.listMobile__link} to='/lessons'><img src={lessonsImg} alt="lessons" /></Link>
                <Link className={s.listMobile__link} to='/exit'><img src={exitImg} alt="exit" /></Link>
            </div>
        </nav>
    );
};

export default Navbar;