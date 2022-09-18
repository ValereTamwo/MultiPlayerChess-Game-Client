import { createContext , useCallback , useState} from "react";

export const ColorContext = createContext({
    didRedirect: false,
    playerDidRedirect: () => {}, 
    playerDidNotRedirect: () => {}
});
