import { Rocket } from 'lucide-react';

const Logo = ({ size }) => {
  return (
    <h1
      className={`font-mont flex gap-1 justify-center items-center ${size} italic text-[#272343] text-center font-medium tracking-wide`}
    >
      <Rocket className="text-[#272343]" size={28} />
      <span>zipKart</span>
    </h1>
  );
};
export default Logo;
