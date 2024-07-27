import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from './routes';
import DefaultLayout from './Components/Layout/DefaulLayout';
import ScrollToTop from './Components/ScrollToTopButton/ScrollToTop';
import { MyContextControllerProvider } from './store';

function App() {
    return (
        <MyContextControllerProvider>
            <Router>
                <ScrollToTop />
                <div className="App">
                    <Routes>
                        {publicRoutes.map((route, index) => {
                            const Page = route.component;
                            let Layout = DefaultLayout;
                            let Children = null;
                            let isChild = false;
                            if (route.layout) {
                                Layout = route.layout;
                            } else if (route.layout === null) {
                                Layout = Fragment;
                            }
                            if (route.Children) {
                                Children = route.Children;
                                isChild = true;
                                console.log('gia tri children: ', route.Children);
                            }

                            if (!isChild) {
                                return <Route key={index} path={route.path} element={<Layout>{<Page />}</Layout>} />;
                            }
                            return (
                                <Route key={index} path={route.path} element={<Page />} >
                                    {route.Children.map((item, index) => {
                                        return <Route index={index} path={item.path} element={<item.layout>{<item.component />}</item.layout>} />
                                    })}
                                </Route>
                            );
                        })}
                    </Routes>
                </div>
            </Router>
        </MyContextControllerProvider>
    );
}

export default App;
