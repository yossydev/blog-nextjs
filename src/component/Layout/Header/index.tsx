import { FC } from "react";
import { BsGithub } from "react-icons/bs";
import { FaSquareXTwitter } from "react-icons/fa6";
import { LINK } from "@/constant/link";
import { AppLink } from "@/component/Core";
import { container, wrapper, title, iconsContainer, icon } from "./styles.css";

export const Header: FC = () => {
  return (
    <div className={container}>
      <div className={wrapper}>
        <AppLink href={"/"} className={title}>
          Yuto Blog
        </AppLink>

        <div className={iconsContainer}>
          <AppLink href={LINK.TWITTER} target={"_blank"} className={icon}>
            <FaSquareXTwitter size={24} color="white" />
          </AppLink>
          <AppLink href={LINK.GITHUB} target={"_blank"} className={icon}>
            <BsGithub size={24} color="white" />
          </AppLink>
        </div>
      </div>
    </div>
  );
};
