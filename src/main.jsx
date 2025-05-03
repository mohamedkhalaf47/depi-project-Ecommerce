import { createRoot } from "react-dom/client";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { store } from "./store/store.js";
import ShopContextProvider from "./Context/ShopContext.jsx";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")).render(
	<Provider store={store}>
		<BrowserRouter>
			<ShopContextProvider>
				<App />
			</ShopContextProvider>
		</BrowserRouter>
	</Provider>
);
