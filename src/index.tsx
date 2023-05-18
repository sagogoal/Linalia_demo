import {SimpleButton} from './Test'
import { render } from "react-dom";

const rootElement = document.getElementById("root");
render(<SimpleButton label={"Simple Button"} />, rootElement);