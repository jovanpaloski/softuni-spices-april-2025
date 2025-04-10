// import { useEffect } from "react";
import { useContext, useEffect } from "react";
import request from "../utils/request.js"
import { UserContext } from "../contexts/useContext.js";

const baseUrl = 'http://localhost:3030/users';

export const useLogin = () => {
    // const abortRef = useRef(new AbortController);

    const login = async (email, password) => {
        const result = await request.post(
            `${baseUrl}/login`,
            { email, password },
            // { signal: abortRef.current.signal }
        );

        return result;
    }

    // useEffect(() => {
    //     const abortController = abortRef.current;

    //     return () => abortController.abort();
    // }, []);

    return {
        login,
    }
};

export const useRegister = () => {
    const register = (email, password) =>
        request.post(`${baseUrl}/register`, { email, password });

    return {
        register,
    }
};

export const useLogout = () => {
    const { accessToken, userLogoutHandler } = useContext(UserContext);

    useEffect(() => {
        if (!accessToken) {
            return;
        }

        const options = {
            headers: {
                'X-Authorization': accessToken
            }
        };

        request.get(`${baseUrl}/logout`, null, options)
            .then(userLogoutHandler);
    }, [accessToken, userLogoutHandler]);

    return {
        isLoggedOut: !!accessToken,
    };
};