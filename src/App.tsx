import {Route, Routes} from "react-router-dom";
import { AboutPage } from "./pages/AboutPage";
import {ProductsPage} from "./pages/ProductsPage";
import {Navigation} from "./components/Navigation";
import {CartState} from "./context/useShoppingCart";





function App() {
    return (
        <CartState>
            <Navigation />
            <Routes>
                <Route path='/' element={ <ProductsPage /> } />
                <Route path='/about' element={ <AboutPage /> } />
            </Routes>
        </CartState>
    )
}

export default App;