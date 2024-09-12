import './App.css'
import {DappProvider} from "@multiversx/sdk-dapp/wrappers";
import {EnvironmentsEnum} from "@multiversx/sdk-dapp/types";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {Layout} from "./Layout/Layout.tsx";
import {SignTransactionsModals, TransactionsToastList} from "@multiversx/sdk-dapp/UI";
import {routes} from "./routes";

function App() {

    return (
        <Router>
            <DappProvider
                environment={EnvironmentsEnum.devnet}
                customNetworkConfig={{
                    name: 'myDappConfig',
                }}
                dappConfig={{
                    logoutRoute: '/tradeform'
                }}
            >
                <Layout>
                    <TransactionsToastList/>
                    <SignTransactionsModals/>
                    <Routes>
                        {routes.map((route) => (
                            <Route
                                path={route.path}
                                key={`route-key-'${route.path}`}
                                element={<route.component/>}
                            />
                        ))}
                    </Routes>
                </Layout>
            </DappProvider>
        </Router>

    )


}

export default App
