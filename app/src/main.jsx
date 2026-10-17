import React, {StrictMode} from "react";
import {BaseProvider, LightTheme} from "baseui";
import {Provider as StyletronProvider} from "styletron-react";
import {Client as Styletron} from "styletron-engine-atomic";
import "./index.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App.jsx";
import {createRoot} from "react-dom/client";

const engine = new Styletron();
createRoot(document.getElementById('root')).render(
  <StyletronProvider value={engine}>
    <BaseProvider theme={LightTheme}>
      <App />
    </BaseProvider>
  </StyletronProvider>
);

// createRoot(document.getElementById('root')).render(
//     <StrictMode>
//         <StyletronProvider value={engine}>
//             <BaseProvider theme={LightTheme}>
//                 <App/>
//             </BaseProvider>
//         </StyletronProvider>,
//     </StrictMode>,
// )

