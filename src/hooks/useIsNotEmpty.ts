import { State } from "../store/userSlice";

export const useIsNotEmpty = (user:State,path:string) =>{
   
        
  let IsNotEmpty : undefined | string ;
   switch (path) {
    case "plans":
      IsNotEmpty = user.email_address && user.name && user.phone_number;
      break;
    case "addOns":
      IsNotEmpty = user.plans_type && user.plans_price && user.plans_subscription;
      break;
    default :
      IsNotEmpty = user.add_ons_type && user.add_ons_price;
      break;
  }
    

    return IsNotEmpty
} 