import { lazy } from "react";

//auth
const Login = lazy(() => import("@/auth/login"));
const Register = lazy(() => import("@/auth/register"));
const Password = lazy(() => import("@/auth/password"));
const ProtectedRoutes = lazy(() => import("@/routing/protectedroutes"));



//page
const Home = lazy(() => import("@/pages/home"));
const About = lazy(() => import("@/pages/about"));


//ui
const Links = lazy(() => import("@/ui/components/anchor"))
const Button = lazy(() => import("@/ui/components/button"))
const ButtonLoader = lazy(() => import("@/ui/components/loader/buttonLoader"))
const Loader = lazy(() => import("@/ui/components/loader"))
const Input = lazy(() => import("@/ui/components/input"))
const PageNotFound = lazy(() => import("@/ui/pagenotfound/index"))


export {
    Home,
    About,
    Links,
    Button,
    Loader,
    Input,
    Login,
    Register,
    Password,
    ProtectedRoutes,
    ButtonLoader,
    PageNotFound,
}