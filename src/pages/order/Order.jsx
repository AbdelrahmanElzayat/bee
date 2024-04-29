import { useEffect } from "react";
import MainLayout from "../../components/mainLayout/MainLayout";
import OrderContact from "../../components/orderComponents/OrderContact";

const Order = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <MainLayout>
      <OrderContact />
    </MainLayout>
  );
};

export default Order;
