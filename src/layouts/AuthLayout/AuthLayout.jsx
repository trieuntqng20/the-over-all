import cls from "classnames";
import { Link, Outlet, useLocation, useMatch, useParams } from "react-router-dom";
import { Auth, Banner, Main } from "./AuthLayoutStyled";
import logoAuth from "@src/assets/images/logo-auth.png";

import { PATHS } from "@src/constants";

const AuthLayout = ({ children, className, headingBanner }) => {
    const { pathname } = useLocation();
    return (
        <Auth className={cls("main-auth", className)}>
            <Banner>
                <img srcSet={`${logoAuth} 2x`} alt="Logo" />
                <div className="desc">
                    {pathname === PATHS.REGISTER && (
                        <h2>
                            Buy & Sell Each Digital
                            <br />
                            Cryptocurrency and Arts
                        </h2>
                    )}
                    {pathname === PATHS.LOGIN && (
                        <h2>
                            Exchange, Sell & Buy
                            <br />
                            Cryptocurrency and Digital Arts
                        </h2>
                    )}
                    {(pathname === PATHS.LOGIN || pathname === PATHS.REGISTER) && (
                        <p>
                            Easily buy Bitcoin and other cryptocurrencies using a<br />
                            wide range of payment options. Discover exclusive
                            <br />
                            digital collectibles using InCrypto today
                        </p>
                    )}
                </div>
            </Banner>
            <Main>
                <Outlet />
            </Main>
        </Auth>
    );
};

export default AuthLayout;
