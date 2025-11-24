import React from 'react';
import { FileText, CheckCircle, Smartphone, Building2, CreditCard, User, Hash, MapPin, Globe, ChevronDown, Info, MousePointer } from 'lucide-react';
import { MOCK_FORM_DATA } from '../constants';

interface MockProps {
  type: 'pdf' | 'form' | 'success' | 'homepage';
  highlights?: string[];
}

export const MockPDF: React.FC = () => {
  return (
    <div className="bg-white p-4 md:p-6 rounded-lg shadow-xl border border-gray-200 w-full max-w-md mx-auto relative overflow-hidden text-xs text-gray-700 font-mono scale-95 md:scale-100 origin-center">
      <div className="absolute top-0 left-0 w-full h-2 bg-blue-500"></div>
      <div className="flex justify-between items-center mb-6 border-b pb-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center text-white font-bold">M</div>
          <span className="font-bold text-lg text-gray-800">Mercury</span>
        </div>
        <div className="text-right text-gray-500">
          <p>International Wire Details</p>
          <p className="text-[10px]">Page 2 of 3</p>
        </div>
      </div>

      <div className="space-y-4">
        <div className="bg-blue-50 p-3 rounded border border-blue-100">
          <h3 className="font-bold text-blue-800 mb-1 border-b border-blue-200 pb-1">Beneficiary</h3>
          <div className="grid grid-cols-1 gap-1 mt-2">
            <p><span className="text-gray-500">Name:</span> <span className="bg-yellow-200 px-1 font-bold">WAY OF LIFE LLC</span></p>
            <p><span className="text-gray-500">Address:</span> 2105 Vista Oeste Northwest</p>
            <p><span className="text-gray-500">City/State:</span> Albuquerque, NM</p>
            <p><span className="text-gray-500">Account Number:</span> 202270698409</p>
          </div>
        </div>

        <div className="bg-green-50 p-3 rounded border border-green-100">
          <h3 className="font-bold text-green-800 mb-1 border-b border-green-200 pb-1">Receiving Bank</h3>
          <div className="grid grid-cols-1 gap-1 mt-2">
            <p><span className="text-gray-500">Bank Name:</span> <span className="bg-yellow-200 px-1 font-bold">Choice Financial Group</span></p>
            <p><span className="text-gray-500">SWIFT Code:</span> <span className="bg-yellow-200 px-1 font-bold">CHFGUS44021</span></p>
            <p><span className="text-gray-500">Routing (ABA):</span> <span className="bg-yellow-200 px-1 font-bold">091311229</span></p>
          </div>
        </div>
      </div>
      
      <div className="mt-6 text-[10px] text-gray-400 text-center italic">
        * Use these details for international wires in USD.
      </div>
    </div>
  );
};

export const MockHomepage: React.FC = () => {
    return (
        <div className="w-full max-w-lg mx-auto bg-transparent relative flex flex-col items-center">
            {/* Main Calculator Interface */}
            <div className="w-full bg-white rounded-[2rem] shadow-2xl overflow-hidden border border-gray-100 relative z-10">
                {/* Navbar mimic */}
                <div className="px-6 py-4 flex justify-between items-center border-b border-gray-50">
                    <span className="text-[#5d2cff] font-bold tracking-widest text-lg">PAYSEND</span>
                    <div className="w-8 h-8 rounded-full bg-[#5d2cff] text-white flex items-center justify-center text-xs">Log</div>
                </div>

                <div className="p-6 md:p-8 bg-gradient-to-br from-white to-violet-50/50">
                    <div className="flex flex-col gap-6">
                        {/* Heading */}
                        <div className="text-center md:text-left mb-2">
                            <h2 className="text-2xl font-extrabold text-gray-900 leading-tight mb-2">Enviar dinero a EE. UU.</h2>
                            <p className="text-xs text-gray-500">Transfiere dinero en línea a cuentas bancarias.</p>
                        </div>

                        {/* Calculator Card */}
                        <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-1 relative">
                            {/* You Send */}
                            <div className="p-4 border-b border-gray-100 hover:bg-gray-50 transition-colors rounded-t-lg group cursor-pointer relative overflow-hidden">
                                <div className="absolute left-0 top-0 w-1 h-full bg-[#5d2cff] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <div className="flex justify-between items-center mb-1">
                                    <span className="text-xs text-gray-500 font-medium">Tú envías</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-2xl font-bold text-gray-800">500,00</span>
                                    <div className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 px-2 py-1 rounded-lg transition-colors">
                                        <span className="text-xl">🇪🇸</span>
                                        <span className="font-bold text-gray-700">EUR</span>
                                        <ChevronDown size={14} className="text-gray-400" />
                                    </div>
                                </div>
                            </div>

                            {/* Recipient Gets */}
                            <div className="p-4 hover:bg-gray-50 transition-colors rounded-b-lg group cursor-pointer relative overflow-hidden">
                                <div className="absolute left-0 top-0 w-1 h-full bg-[#5d2cff] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <div className="flex justify-between items-center mb-1">
                                    <span className="text-xs text-gray-500 font-medium">El beneficiario recibe</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-2xl font-bold text-gray-800">568,42</span>
                                    <div className="flex items-center gap-2 bg-violet-100 hover:bg-violet-200 px-2 py-1 rounded-lg transition-colors border border-violet-200 cursor-pointer">
                                        <span className="text-xl">🇺🇸</span>
                                        <span className="font-bold text-[#5d2cff]">USD</span>
                                        <ChevronDown size={14} className="text-[#5d2cff]" />
                                    </div>
                                </div>
                            </div>
                        </div>

                         {/* CTA Button */}
                        <button className="w-full bg-[#5d2cff] text-white py-4 rounded-full font-bold shadow-lg shadow-violet-200 hover:shadow-violet-300 hover:scale-[1.02] transition-all duration-300 mt-2">
                            Iniciar transferencia
                        </button>
                    </div>
                </div>
            </div>

            {/* Country Dropdown Helper - Floating Element */}
            <div className="absolute -bottom-16 md:-right-24 md:bottom-20 z-20 w-48 bg-white rounded-xl shadow-2xl border border-gray-200 p-0 overflow-hidden transform md:translate-x-0 translate-y-10 md:translate-y-0 animate-slideUpFade">
                 <div className="bg-gray-50 px-3 py-2 border-b border-gray-100 text-[10px] text-gray-500 uppercase font-bold tracking-wider text-center">
                    Lista de Países
                 </div>
                 <div className="max-h-40 overflow-hidden relative">
                    {/* List Items */}
                    <div className="px-4 py-2 flex items-center justify-between opacity-50">
                        <div className="flex items-center gap-2"><span className="text-lg">🇦🇪</span> <span className="text-sm text-gray-600">EAU</span></div>
                    </div>
                    <div className="px-4 py-2 flex items-center justify-between opacity-50">
                        <div className="flex items-center gap-2"><span className="text-lg">🇪🇨</span> <span className="text-sm text-gray-600">Ecuador</span></div>
                    </div>
                    {/* Highlighted EE.UU */}
                    <div className="px-4 py-2 flex items-center justify-between bg-violet-50 border-l-4 border-[#5d2cff]">
                        <div className="flex items-center gap-2"><span className="text-lg">🇺🇸</span> <span className="text-sm font-bold text-gray-900">EE.UU</span></div>
                        <span className="text-[10px] text-gray-400">USD</span>
                    </div>
                    <div className="px-4 py-2 flex items-center justify-between opacity-50">
                        <div className="flex items-center gap-2"><span className="text-lg">🇪🇬</span> <span className="text-sm text-gray-600">Egipto</span></div>
                    </div>
                    
                    {/* Pointer */}
                    <div className="absolute top-1/2 right-2 text-[#5d2cff] animate-pulse">
                        <MousePointer size={16} fill="#5d2cff" />
                    </div>
                 </div>
                 <div className="bg-yellow-50 p-2 text-[10px] text-yellow-800 text-center font-medium border-t border-yellow-100">
                    💡 Truco: Busca en la "E"
                 </div>
            </div>
            
        </div>
    );
};

export const MockForm: React.FC<{ highlights?: string[] }> = ({ highlights = [] }) => {
  const isHighlighted = (key: string) => highlights.includes(key);

  const InputField = ({ label, value, icon: Icon, fieldKey }: { label: string; value: string; icon: any; fieldKey: string }) => (
    <div className={`mb-3 transition-all duration-500 ${isHighlighted(fieldKey) ? 'opacity-100 scale-105' : 'opacity-60 grayscale'}`}>
      <label className="block text-[10px] font-medium text-gray-500 mb-1 uppercase tracking-wide">{label}</label>
      <div className={`flex items-center bg-white border rounded-md px-3 py-2 ${isHighlighted(fieldKey) ? 'border-[#5d2cff] ring-2 ring-[#5d2cff]/20 shadow-lg' : 'border-gray-200'}`}>
        <Icon size={14} className="text-gray-400 mr-2" />
        <span className="text-sm font-semibold text-gray-800 truncate w-full">{value}</span>
      </div>
      {isHighlighted(fieldKey) && (
        <div className="text-[10px] text-[#5d2cff] mt-1 font-medium animate-pulse">
           ✨ Dato crítico verificado
        </div>
      )}
    </div>
  );

  return (
    <div className="bg-gray-50 rounded-[2rem] border-4 border-gray-800 w-full max-w-[300px] md:max-w-[320px] mx-auto h-[550px] md:h-[600px] overflow-hidden relative shadow-2xl flex flex-col transition-all duration-300">
      {/* Phone Header */}
      <div className="bg-[#5d2cff] p-4 pt-8 text-white">
        <div className="flex justify-between items-center">
          <div className="text-xs opacity-80">9:41</div>
          <div className="font-bold text-sm">Enviar a EE.UU.</div>
          <div className="text-xs opacity-80">5G</div>
        </div>
      </div>

      {/* Form Content */}
      <div className="flex-1 overflow-y-auto p-4 space-y-1 scrollbar-hide">
        <h2 className="text-lg font-bold text-gray-800 mb-4">Detalles del Destinatario</h2>
        
        <InputField label="Nombre de Empresa" value={MOCK_FORM_DATA.recipientName} icon={User} fieldKey="recipientName" />
        <InputField label="Código SWIFT / BIC" value={MOCK_FORM_DATA.swift} icon={Globe} fieldKey="swift" />
        <InputField label="Tipo de Cuenta" value={MOCK_FORM_DATA.accountType} icon={Building2} fieldKey="accountType" />
        
        <div className="my-4 border-t border-gray-200"></div>
        
        <InputField label="Número de Cuenta" value={MOCK_FORM_DATA.accountNumber} icon={Hash} fieldKey="accountNumber" />
        <InputField label="Routing (ABA)" value={MOCK_FORM_DATA.routingNumber} icon={Hash} fieldKey="routingNumber" />
        
        <div className="my-4 border-t border-gray-200"></div>

        <InputField label="Dirección" value={MOCK_FORM_DATA.address} icon={MapPin} fieldKey="address" />
        <div className="grid grid-cols-2 gap-2">
            <InputField label="Ciudad" value={MOCK_FORM_DATA.city} icon={MapPin} fieldKey="city" />
            <InputField label="Estado" value={MOCK_FORM_DATA.state} icon={MapPin} fieldKey="state" />
        </div>
        <InputField label="Código Postal" value={MOCK_FORM_DATA.zip} icon={Hash} fieldKey="zip" />
        
        <div className="my-4 border-t border-gray-200"></div>

        <InputField label="Referencia" value={MOCK_FORM_DATA.reference} icon={FileText} fieldKey="reference" />
        
        <div className={`mt-4 p-3 bg-violet-50 rounded-lg border border-violet-100 transition-all duration-300 ${isHighlighted('feeOption') ? 'ring-2 ring-violet-500 scale-105' : 'opacity-70'}`}>
            <div className="flex justify-between items-center">
                <span className="text-xs font-medium text-gray-700">Comisiones SWIFT</span>
                <span className="text-xs font-bold text-violet-700">{MOCK_FORM_DATA.feeOption}</span>
            </div>
        </div>
      </div>

      {/* Footer */}
      <div className="p-4 bg-white border-t border-gray-100">
        <button className="w-full bg-[#5d2cff] text-white py-3 rounded-full font-bold shadow-lg shadow-violet-200 text-sm">
          Continuar
        </button>
      </div>
    </div>
  );
};

export const MockSuccess: React.FC = () => {
  return (
    <div className="bg-gray-50 rounded-[2rem] border-4 border-gray-800 w-full max-w-[300px] md:max-w-[320px] mx-auto h-[550px] md:h-[600px] overflow-hidden relative shadow-2xl flex flex-col items-center justify-center p-6 text-center transition-all duration-300">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6 animate-[bounce_1s_ease-in-out_infinite]">
            <CheckCircle size={40} className="text-green-600" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">¡Envío Exitoso!</h2>
        <p className="text-gray-500 text-sm mb-8">Tu dinero está en camino a<br/>Way of Life LLC</p>

        <div className="w-full bg-white rounded-xl p-4 shadow-sm border border-gray-100 text-left space-y-4">
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    <span className="text-xs font-bold text-gray-700">Payment Processed</span>
                </div>
                <span className="text-xs text-gray-400">Ahora</span>
            </div>
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    <span className="text-xs font-bold text-gray-700">Payment Received</span>
                </div>
                <span className="text-xs text-gray-400">21:42</span>
            </div>
             <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    <span className="text-xs font-bold text-gray-700">Transfer Pending</span>
                </div>
                <span className="text-xs text-gray-400">21:41</span>
            </div>
        </div>
        
        <div className="mt-8 text-xs text-gray-400">
            Referencia de Transacción: #PS-882910
        </div>
    </div>
  );
};

export const MockupContainer: React.FC<MockProps> = ({ type, highlights }) => {
    return (
        <div className="w-full h-full flex items-center justify-center p-4">
            {type === 'pdf' && <MockPDF />}
            {type === 'homepage' && <MockHomepage />}
            {type === 'form' && <MockForm highlights={highlights} />}
            {type === 'success' && <MockSuccess />}
        </div>
    );
};