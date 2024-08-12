import { useEffect } from "react";
import { useNavigate, Outlet, Navigate } from "react-router-dom";
import SideBar from "@/ui/sidebar";
import Header from "@/ui/header";

export default function ProtectedRoutes() {
    const navigate = useNavigate();
    const token = localStorage.getItem("token");


    useEffect(() => {
        if (!token) {
            navigate("/login");
        }
    }, [token, navigate]);

    return (
        <>
            {
                token ?
                    <div className="flex">
                        <div><SideBar /></div>
                        <div className="w-full">
                            <Header/>
                            <Outlet />
                        </div>
                    </div>
                    : <Navigate to="/login" replace />
            }
        </>
    )
}
