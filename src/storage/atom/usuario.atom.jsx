import { atom } from "recoil";
import { localStorageEffects } from "./effects";

export const UserState = atom({
  key: "userState",
  default: {
    correo: "",
    contrasena: "",
    rol: {
      codigo: 0,
      nombre: ""
    }
},
  effects: [localStorageEffects("usuario_bar")],
});
