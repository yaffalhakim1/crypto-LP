import { Link } from "react-router";
import BetterImage from "../../../Common/BetterImage";

const Logo: React.FC = () => {
  return (
    <Link to="/">
      <BetterImage
        src="/images/logo/logo.svg"
        alt="Crypto LP Logo"
        width={135}
        height={32}
        priority={true}
        loading="eager"
        quality={95}
      />
    </Link>
  );
};

export default Logo;
