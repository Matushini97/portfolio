import s from './Stack.module.scss';
import {useSelector} from "react-redux";
import {RootState} from "store/store";
import {StackType} from "../../../store/stackSlice";

const Stack = () => {

    const stack = useSelector<RootState, StackType[]>(state => state.stack.stack)

    return (
        <div className={s.stackWrapper}>
            {stack.map(el => {
                return (
                  <div className={s.stackElWrapper} key={el.title}>
                    <img src={el.icon} alt={el.title} />
                  </div>
                );
            })}
        </div>
    );
};

export default Stack;