import { useContext } from "react";
import { ShoppingCarToggleContext } from "./ShoppingCarToggle.context.";
import { ShoppingCarContext } from "./ShoppingCar.context";

export const useShoppingCarToggleContext = () => useContext(ShoppingCarToggleContext)

export const useShoppingCarContext = () => useContext(ShoppingCarContext)
