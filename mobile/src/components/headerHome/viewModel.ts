import { useState } from "react";
import { IHeaderHomeModel } from "./model";

export const useHeaderHomeViewModel = (): IHeaderHomeModel => {
    const [isPress, setIsPress] = useState<boolean>(true);

    const open = () => {
        if (isPress) {
            setIsPress(false);
        } else {
            setIsPress(true);
        }
    }

    return { isPress, setIsPress, open }
}