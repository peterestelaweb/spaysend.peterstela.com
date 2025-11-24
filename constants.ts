import { SlideContent } from './types';

export const PAYSEND_PURPLE = '#5d2cff';
export const PAYSEND_DARK_PURPLE = '#3a0ca3';

export const SLIDES: SlideContent[] = [
  {
    id: 'intro',
    title: 'Cómo Enviar Dinero a una LLC (Mercury) desde España',
    subtitle: 'Guía Práctica paso a paso usando Paysend. Caso de Éxito: Way of Life LLC',
    content: [
      'Aprende a navegar el sistema bancario internacional.',
      'Logra "colar" el pago con tarjeta a una LLC con éxito.',
      'Sigue esta guía visual para evitar rechazos y bloqueos.',
    ],
    type: 'intro',
    mockupType: 'none',
  },
  {
    id: 'step-1',
    title: 'La Fuente de la Verdad (Datos Bancarios)',
    subtitle: 'Paso 1: Identificación de datos',
    content: [
      'Para enviar dinero desde España pagando con tarjeta, **NO** usamos los datos domésticos.',
      'Debemos ir estrictamente a la **Página 2** del documento de Mercury ("International Wire Details USD").',
      '**El secreto:** El banco real no es "Mercury", es **Choice Financial Group**.',
      'Beneficiario: **WAY OF LIFE LLC**',
      'SWIFT: **CHFGUS44021**',
      'ABA (Routing): **091311229**'
    ],
    type: 'step',
    mockupType: 'pdf',
  },
  {
    id: 'step-start',
    title: 'Paso 2: Inicio en Paysend',
    subtitle: 'Configuración inicial en la Web',
    content: [
      'Accede a <a href="https://paysend.com" target="_blank" class="text-[#5d2cff] underline font-bold hover:text-[#4b1fd6] text-xl">paysend.com</a> para comenzar.',
      'Configura el envío de **EUR (Euros)** a **USD (Dólares)**.',
      '**¡OJO CON EL PAÍS!** Para encontrar Estados Unidos en la lista:',
      'No busques por "U" de USA.',
      'Busca por la letra **"E"** de **EE.UU** (justo debajo de Ecuador).',
      'Mira el recuadro flotante en la imagen para ver el ejemplo.',
      'Pulsa "Iniciar transferencia" para continuar.'
    ],
    type: 'step',
    mockupType: 'homepage',
  },
  {
    id: 'step-2',
    title: 'Paso 3: Conexión SWIFT',
    subtitle: 'Configurando la tubería correcta',
    content: [
      'Ya dentro del formulario, asegúrate de que el país de destino es **Estados Unidos**.',
      'En la casilla SWIFT/BIC, introducimos el código del banco socio (Partner Bank): **CHFGUS44021**.',
      'Tipo de Cuenta: Seleccionar **"Company"**.',
      'Aviso Importante: Seleccionar siempre **"I pay all fees"** (OUR).',
      '¿Por qué? Para asegurar que lleguen los dólares exactos a la cuenta de la LLC sin recortes.',
    ],
    highlight: ['swift', 'accountType', 'feeOption'],
    type: 'step',
    mockupType: 'form',
  },
  {
    id: 'step-3',
    title: 'Paso 4: Datos de la LLC (Beneficiario)',
    subtitle: 'Dirección física y cuenta',
    content: [
      'Copiamos los datos tal cual aparecen en la sección "Beneficiary" del documento bancario.',
      'Nombre: **WAY OF LIFE LLC**',
      'Cuenta: **202270698409** (Sin espacios)',
      'Dirección: **2105 Vista Oeste Northwest, Suite E 1098**',
      'Ciudad/Estado: **Albuquerque, NM**',
      'Código Postal: **87120**'
    ],
    highlight: ['recipientName', 'accountNumber', 'address', 'city', 'state', 'zip'],
    type: 'step',
    mockupType: 'form',
  },
  {
    id: 'step-4',
    title: 'Paso 5: Enrutamiento y Referencia',
    subtitle: 'Validación y Compliance',
    content: [
      '**La Clave del Éxito (ABA):** El campo más crítico es el Routing Number.',
      'Código usado: **091311229**. Este número dirige el dinero específicamente a Choice Financial Group.',
      '**Justificación (Compliance):** En el campo Referencia, debemos ser profesionales.',
      'Texto usado: **"Professional Services"**.',
      'Esto valida la operación como un pago comercial legítimo.',
    ],
    highlight: ['routingNumber', 'reference'],
    type: 'step',
    mockupType: 'form',
  },
  {
    id: 'step-5',
    title: 'Resultado Final: ¡Éxito!',
    subtitle: 'Transacción Procesada',
    content: [
      'Tras la verificación de seguridad (SMS/3DS del banco español), la plataforma confirma el envío.',
      '**Estatus:** Transfer pending -> Payment received -> Payment processed.',
      '**Tiempos:** El proceso de salida es inmediato. El dinero suele reflejarse en Mercury en 1 o 2 días hábiles.'
    ],
    type: 'success',
    mockupType: 'success',
  },
];

export const MOCK_FORM_DATA = {
  recipientName: 'WAY OF LIFE LLC',
  swift: 'CHFGUS44021',
  accountNumber: '202270698409',
  routingNumber: '091311229',
  city: 'ALBUQUERQUE',
  state: 'NEW MEXICO',
  zip: '87120',
  address: '2105 Vista Oeste Northwest, Suite E 1098',
  reference: 'Professional Services',
  feeOption: 'I pay all fees',
  accountType: 'Company'
};