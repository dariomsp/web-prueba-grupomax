import "./index.css";
import { AppUI } from "./AppUI";
import { Provider } from "../Context";

function App() {
    return (
        <Provider>
            <AppUI />
        </Provider>
    );
}

export { App };
