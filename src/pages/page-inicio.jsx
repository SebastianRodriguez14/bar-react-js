import { useRecoilState } from "recoil";
import { LandingPart1 } from "../components/inicio-component/landing-part1";
import { LandingPart2 } from "../components/inicio-component/landing-part2";
import { LandingPart3 } from "../components/inicio-component/landing-part3";
import { ClienteState } from "../storage/atom/cliente.atom";
import { UserState } from "../storage/atom/usuario.atom";

export const PageInicio = () => {
  


  return (
    <>
      <LandingPart1 />
      <LandingPart2 />
      <LandingPart3 />
    </>
  );
};
