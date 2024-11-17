import { Timer, ShieldCheck, Recycle } from 'lucide-react';

const iconMap = {
  Timer: <Timer />,
  ShieldCheck: <ShieldCheck />,
  Recycle: <Recycle />
};

const ProductPolicy = ({ icon, label, text }) => (
  <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg shadow-sm border border-gray-200">
    <div className="text-primary">{iconMap[icon]}</div>
    <div>
      <p className="font-semibold text-gray-800">{label}</p>
      <p className="text-sm text-gray-600">{text}</p>
    </div>
  </div>
);

export default ProductPolicy;
