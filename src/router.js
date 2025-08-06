import { ROUTER } from "./utils/router";
import HomePage from "./pages/users/homePage";
import { Route, Routes } from "react-router-dom";
import MasterLayout from "./pages/users/theme/masterLayout";
import ProductPage from "./pages/users/productPage";
import CategoryPage from "./pages/users/categoryPage";
import NotFoundPage from "./pages/NotFoundPage";
import DashBoard from "./pages/admin/dashboard";

const renderUserRouter = () => {
    const userRouters = [
        {
            path: ROUTER.USER.HOME,
            component: <HomePage />,
        },
        {
            path: ROUTER.USER.PRODUCT,
            component: <ProductPage />,
        },
        {
            path: ROUTER.USER.PRODUCT_CATEGORY,
            component: <CategoryPage />,
        },
        {
            path: ROUTER.USER.RECIPE,
            component: <HomePage />,
        },
        {
            path: ROUTER.USER.BLOG,
            component: <ProductPage />,
        },
        {
            path: ROUTER.USER.CONTACT,
            component: <ProductPage />,
        },
    ];

    const adminRouters = [
        {
            path: ROUTER.ADMIN.DASHBOARD,
            component: <DashBoard />,
        },
    ];

    return (
        <Routes>
            {
                userRouters.map((item, key) => (
                    <Route key={key} path={item.path} element={<MasterLayout>{item.component}</MasterLayout>} />
                ))
            }
            
            {
                adminRouters.map((item, key) => (
                    <Route key={key} path={item.path} element={item.component} />
                ))
            }

            <Route path={'*'} element={<NotFoundPage />} />
        </Routes>
    )
};

const RouterCustom = () => {
  return renderUserRouter();
};

export default RouterCustom;