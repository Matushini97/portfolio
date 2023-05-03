import {TypedUseSelectorHook, useSelector} from "react-redux";
import {RootState} from "../../store/";

// eslint-disable-next-line react-hooks/rules-of-hooks
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector