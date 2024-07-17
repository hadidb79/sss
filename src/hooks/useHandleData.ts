import { defineLocale } from "jalali-moment";
import { State, addUser } from "../store/userSlice";
import { useDispatch } from "react-redux";

function useHandleData(user: State, type: string) {
  const dispatch = useDispatch();
  function handleData(e: any) {
    if (type === "plans") {
      const plans =
        e.target.id === "1"
          ? "archive"
          : e.target.id === "2"
          ? "advanced"
          : e.target.id === "3"
          ? "pro"
          : "";

      const price =
        e.target.id === "1"
          ? "$9/mo"
          : e.target.id === "2"
          ? "$12/mo"
          : e.target.id === "3"
          ? "$15/mo"
          : "";
      price &&
        plans &&
        dispatch(
          addUser({
            ...user,
            plans_type: plans,
            plans_price: price,
          })
        );
      if (user.plans_type && user.plans_price) {
        localStorage.setItem("user", JSON.stringify(user));
      }
    }
    if (type === "addons") {
      const plans =
        e.target.id === "1"
          ? "Online service"
          : e.target.id === "2"
          ? "Larger storage"
          : e.target.id === "3"
          ? "Customizable profile"
          : "";

      const price =
        e.target.id === "1"
          ? "+$1/mo"
          : e.target.id === "2"
          ? "+$2/mo"
          : e.target.id === "3"
          ? "+$3/mo"
          : "";

      price &&
        plans &&
        dispatch(
          addUser({
            ...user,
            add_ons_type: plans,
            add_ons_price: price,
          })
        );
    }
  }
  return handleData;
}
export default useHandleData;
