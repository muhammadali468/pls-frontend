import ECommerce from "../../components/dashboard/Dashboard/E-commerce";
import { Metadata } from "next";
import DefaultLayout from "../../components/dashboard/Layouts/DefaultLayout";

export const metadata: Metadata = {
  title: "Prime Logic Solution | Admin Dashboard",
  description: "This is Next.js Home for TailAdmin Dashboard Template",
  icons: {
    icon: "/assets/images/fav-icon/icon.ico"
  }
};

export default function Home() {
  return (
    <>
      <DefaultLayout>
        <ECommerce />
      </DefaultLayout>
    </>
  );
}
