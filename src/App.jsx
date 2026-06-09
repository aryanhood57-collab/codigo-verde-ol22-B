import { useState, useEffect, useRef } from "react";

// ============================================================
// OPERACIÓN: CÓDIGO VERDE — VERSIÓN B
// Técnico Superior en Operaciones Logísticas
// Grupo OL-2-2 | EDA1001 | II Cuatrimestre 2026
// Equipos: BETA · DELTA
// Contraseña final: ALMACENAJE
// ============================================================

const CONTRASENA = "ALMACENAJE";
const VERSION = "B";
const EQUIPOS_VERSION = "BETA · DELTA";

const RETOS = [
  // ══════════════════════════════════════════════
  // BLOQUE 1: CALENTAMIENTO — 3 retos × 10 min
  // ══════════════════════════════════════════════
  {
    id: 1, bloque: "CALENTAMIENTO", bloqueColor: "#1B5E20", minutos: 10, letra: "A",
    titulo: "Calculando la Huella de Carbono del Transporte",
    contexto: "La empresa DistribuMax opera una flota de 5 camiones que recorren semanalmente una ruta de Panamá Ciudad a Chiriquí y regreso (540 km por viaje). Cada camión consume en promedio 35 litros de diésel por cada 100 km. El factor de emisión del diésel es 2.68 kg CO₂ por litro.",
    pregunta1: {
      enunciado: "Calcula la huella de carbono semanal total de la flota completa de DistribuMax. Muestra el procedimiento paso a paso.",
      tipo: "abierta",
      respuesta: "Paso 1 — Distancia por camión por semana: 540 km × 2 viajes = 1,080 km/camión/semana. Paso 2 — Combustible por camión: (1,080 km × 35 L) / 100 = 378 litros. Paso 3 — Emisiones por camión: 378 L × 2.68 kg CO₂/L = 1,012.9 kg CO₂. Paso 4 — Flota completa (5 camiones): 1,012.9 × 5 = 5,064.5 kg CO₂ ≈ 5.06 toneladas de CO₂ por semana."
    },
    pregunta2: {
      enunciado: "¿Cuál de los siguientes describe mejor un IMPACTO ambiental en operaciones de transporte logístico?",
      opciones: [
        "A) El consumo de diésel de los camiones de la flota",
        "B) La generación de residuos de embalaje en la bodega",
        "C) El deterioro de la calidad del aire por las emisiones de GEI",
        "D) El vertimiento de aguas de lavado de vehículos"
      ],
      correcta: "C",
      explicacion: "El impacto ambiental es la CONSECUENCIA. El consumo de diésel (A) es el aspecto (causa). Los residuos (B) son otro aspecto. El vertimiento (D) es otro aspecto. El deterioro de la calidad del aire (C) es el impacto real sobre el componente ambiental 'atmósfera'."
    }
  },
  {
    id: 2, bloque: "CALENTAMIENTO", bloqueColor: "#1B5E20", minutos: 10, letra: "L",
    titulo: "Normativa Ambiental Panameña para el Sector Logístico",
    contexto: "Una empresa de transporte de carga quiere expandir sus operaciones construyendo un nuevo centro de distribución de 5,000 m² en las afueras de la Ciudad de Panamá. El gerente consulta qué obligaciones ambientales legales debe cumplir antes de construir.",
    pregunta1: {
      enunciado: "Identifica y explica DOS obligaciones legales ambientales concretas que esta empresa debe cumplir según la legislación panameña (Ley 41/1998 y Decreto 57/2000) antes de iniciar la construcción.",
      tipo: "abierta",
      respuesta: "Obligación 1 — Evaluación de Impacto Ambiental: Según el Decreto Ejecutivo 57/2000, la construcción de un centro de distribución de ese tamaño probablemente requiere un EIA de Categoría II o III. La empresa debe contratar un consultor ambiental certificado por MiAMBIENTE para elaborar el estudio e incluir un Plan de Manejo Ambiental (PMA). Obligación 2 — Permiso ambiental de MiAMBIENTE: Conforme a la Ley 41/1998, toda actividad con potencial impacto ambiental significativo requiere aprobación de MiAMBIENTE antes de iniciar operaciones. Sin este permiso, la empresa se expone a sanciones, paralización de obras y multas administrativas."
    },
    pregunta2: {
      enunciado: "¿Qué establece MiAMBIENTE en Panamá respecto a las empresas con actividades de alto impacto ambiental?",
      opciones: [
        "A) Que solo deben reportar sus emisiones de forma voluntaria",
        "B) Que deben obtener un permiso ambiental y someterse a auditorías periódicas",
        "C) Que únicamente las empresas del sector industrial deben cumplir requisitos ambientales",
        "D) Que el cumplimiento ambiental es optativo si la empresa tiene ISO 9001"
      ],
      correcta: "B",
      explicacion: "MiAMBIENTE (antes ANAM) regula y fiscaliza el cumplimiento de la legislación ambiental. Las empresas con actividades de impacto significativo deben obtener el permiso ambiental correspondiente y someterse a auditorías de cumplimiento del PMA aprobado. No es voluntario ni sustituible por otras certificaciones."
    }
  },
  {
    id: 3, bloque: "CALENTAMIENTO", bloqueColor: "#1B5E20", minutos: 10, letra: "M",
    titulo: "ODS y la Cadena de Suministro Sostenible",
    contexto: "La empresa LogísticaVerde S.A. elabora su primer Reporte de Sostenibilidad. El equipo identifica que sus operaciones de bodega, transporte y distribución tienen conexión directa con varios ODS de la Agenda 2030.",
    pregunta1: {
      enunciado: "Selecciona TRES ODS de la Agenda 2030 y explica cómo cada uno se relaciona específicamente con las operaciones logísticas de una empresa de distribución en Panamá.",
      tipo: "abierta",
      respuesta: "ODS 9 — Industria, Innovación e Infraestructura: La modernización de flotas, almacenes inteligentes y digitalización de rutas contribuye a infraestructura resiliente y sostenible. ODS 12 — Producción y Consumo Responsables: La reducción de embalajes, gestión de devoluciones y minimización de residuos de empaque aplica directamente a la cadena logística. ODS 13 — Acción por el Clima: La reducción de emisiones de GEI en el transporte es la contribución más directa al ODS 13. Otros válidos: ODS 7 (eficiencia energética en bodegas), ODS 11 (distribución urbana sostenible), ODS 17 (alianzas con proveedores sostenibles)."
    },
    pregunta2: {
      enunciado: "La dimensión SOCIAL de la sostenibilidad en una empresa logística está mejor representada por:",
      opciones: [
        "A) La reducción de emisiones de CO₂ de la flota de camiones",
        "B) El análisis costo-beneficio del cambio a vehículos eléctricos",
        "C) El programa de salud y seguridad ocupacional para conductores y bodegueros",
        "D) La certificación ISO 14001 del sistema de gestión ambiental"
      ],
      correcta: "C",
      explicacion: "La dimensión social de la sostenibilidad se refiere al bienestar de las personas: trabajadores, comunidades, clientes. Un programa de SSO para conductores y bodegueros (quienes tienen altas tasas de accidentalidad y enfermedades ocupacionales) es la representación más directa. Las opciones A y D son dimensión ambiental; la B es dimensión económica."
    }
  },

  // ══════════════════════════════════════════════
  // BLOQUE 2: NÚCLEO TÉCNICO — 4 retos × 8 min
  // ══════════════════════════════════════════════
  {
    id: 4, bloque: "NÚCLEO TÉCNICO", bloqueColor: "#0D47A1", minutos: 8, letra: "A",
    titulo: "Matriz de Leopold: Evaluando el Centro de Distribución",
    contexto: "Deben aplicar la Matriz de Leopold para evaluar los impactos ambientales de la construcción de un nuevo centro de distribución en Panamá. Las actividades del proyecto incluyen: movimiento de tierra, construcción de la nave industrial, instalación de sistema de refrigeración, y operación de montacargas.",
    pregunta1: {
      enunciado: "Para la actividad 'instalación de sistema de refrigeración', identifica 3 aspectos ambientales y evalúa cada impacto indicando: componente afectado, signo (+/−), magnitud (1–10) e importancia (1–10).",
      tipo: "abierta",
      respuesta: "Aspecto 1: Uso de refrigerantes HFC (gases con alto potencial de calentamiento global) → Componente: Atmósfera / Clima → (−) Magnitud: 8 / Importancia: 9. Aspecto 2: Consumo eléctrico continuo del sistema de refrigeración → Componente: Recursos energéticos / Emisiones indirectas → (−) Magnitud: 7 / Importancia: 8. Aspecto 3: Generación de calor residual liberado al exterior → Componente: Microclima local → (−) Magnitud: 4 / Importancia: 5. Aspecto adicional válido: Posibles fugas de refrigerante durante instalación → Contaminación del suelo y aire → (−) Magnitud: 6 / Importancia: 7."
    },
    pregunta2: {
      enunciado: "En la Matriz de Leopold, la IMPORTANCIA de un impacto evalúa:",
      opciones: [
        "A) El costo económico de mitigar el impacto identificado",
        "B) El peso ecológico o social del componente ambiental afectado",
        "C) La duración en el tiempo del impacto generado",
        "D) El número de personas que perciben negativamente el impacto"
      ],
      correcta: "B",
      explicacion: "En la Matriz de Leopold, la importancia (eje vertical, escala 1–10) representa qué tan valioso o sensible es el componente ambiental que recibe el impacto. Un impacto sobre un humedal tiene mayor importancia que el mismo impacto sobre un terreno baldío, independientemente de su magnitud. No debe confundirse con costo ni con percepción social."
    }
  },
  {
    id: 5, bloque: "NÚCLEO TÉCNICO", bloqueColor: "#0D47A1", minutos: 8, letra: "C",
    titulo: "Residuos Logísticos y Economía Circular",
    contexto: "Una empresa de distribución genera mensualmente: 2,000 kg de cartón de embalaje, 800 kg de plástico stretch film, 300 kg de pallets de madera dañados y 150 kg de flejes metálicos. Actualmente dispone el 90% en vertedero. El costo de disposición es $0.12/kg.",
    pregunta1: {
      enunciado: "Diseña una estrategia de Economía Circular para estos residuos logísticos. Calcula además el ahorro mensual que obtendría la empresa si logra recuperar el 75% de los residuos actualmente enviados a vertedero.",
      tipo: "abierta",
      respuesta: "Estrategia Circular: Cartón (2,000 kg): convenio con empresa recicladora, separación en origen. Plástico stretch (800 kg): programa de recolección con proveedor para reciclaje industrial. Pallets dañados (300 kg): reparación de los que tienen reparación viable, venta de madera a empresa recuperadora. Flejes metálicos (150 kg): venta a chatarrero o empresa de reciclaje de metales. Total mensual: 3,250 kg. 90% va a vertedero = 2,925 kg. Ahorro al recuperar 75% de esos: 2,925 × 0.75 = 2,193.75 kg × $0.12 = $263.25/mes de ahorro solo en disposición (sin contar ingresos por venta de materiales recuperables)."
    },
    pregunta2: {
      enunciado: "¿Cuál de las 5R de la economía circular tiene mayor jerarquía en la gestión de residuos?",
      opciones: [
        "A) Reciclar, porque convierte los residuos en nuevos materiales",
        "B) Reducir, porque evita que el residuo se genere desde el origen",
        "C) Recuperar, porque extrae energía de los residuos no reciclables",
        "D) Reutilizar, porque extiende la vida útil del material original"
      ],
      correcta: "B",
      explicacion: "En la jerarquía de gestión de residuos (y de las 5R), REDUCIR tiene la mayor jerarquía porque previene la generación del residuo en la fuente, eliminando el impacto desde el origen. Es siempre preferible no generar el residuo que tener que gestionarlo después, sin importar qué tan eficiente sea el reciclaje o la recuperación."
    }
  },
  {
    id: 6, bloque: "NÚCLEO TÉCNICO", bloqueColor: "#0D47A1", minutos: 8, letra: "E",
    titulo: "ISO 14001: Implementando el SGA en LogisPanama",
    contexto: "LogisPanama S.A. ha decidido implementar ISO 14001:2015. En la etapa de diagnóstico inicial, el equipo identificó los siguientes problemas: (1) No existe registro de los aspectos ambientales significativos. (2) Los conductores no conocen los procedimientos de respuesta a emergencias ambientales. (3) No hay objetivos ambientales documentados. (4) El consumo de combustible no se monitorea sistemáticamente.",
    pregunta1: {
      enunciado: "Para cada uno de los 4 problemas identificados, indica a qué cláusula de ISO 14001:2015 corresponde y propón UNA acción concreta para resolverlo.",
      tipo: "abierta",
      respuesta: "Problema 1 (sin registro de aspectos significativos) → Cláusula 6.1.2 (Aspectos ambientales). Acción: elaborar el registro de aspectos e impactos ambientales con criterio de significancia. Problema 2 (conductores sin preparación ante emergencias) → Cláusula 8.2 (Preparación y respuesta ante emergencias). Acción: diseñar e impartir el plan de respuesta ante emergencias (derrame, accidente de tránsito, incendio de carga). Problema 3 (sin objetivos documentados) → Cláusula 6.2 (Objetivos ambientales). Acción: establecer objetivos SMART ambientales anuales firmados por la dirección. Problema 4 (sin monitoreo de combustible) → Cláusula 9.1 (Seguimiento, medición, análisis). Acción: implementar bitácora diaria de consumo de combustible por vehículo con reporte mensual."
    },
    pregunta2: {
      enunciado: "La 'revisión por la dirección' en ISO 14001:2015 tiene como propósito principal:",
      opciones: [
        "A) Auditar a los empleados para detectar incumplimientos operativos",
        "B) Evaluar la adecuación, conveniencia y eficacia continua del SGA al más alto nivel",
        "C) Reportar el desempeño ambiental a MiAMBIENTE de forma anual",
        "D) Verificar que los proveedores cumplan con los requisitos ambientales del contrato"
      ],
      correcta: "B",
      explicacion: "La revisión por la dirección (Cláusula 9.3) es una reunión formal de la alta dirección para evaluar si el SGA sigue siendo adecuado, conveniente y eficaz para lograr los objetivos ambientales. Incluye revisar resultados de auditorías, desempeño de KPIs, quejas, cambios en el contexto y oportunidades de mejora. No es una auditoría operativa ni un reporte regulatorio."
    }
  },
  {
    id: 7, bloque: "NÚCLEO TÉCNICO", bloqueColor: "#0D47A1", minutos: 8, letra: "N",
    titulo: "Huella Ecológica de las Operaciones Logísticas",
    contexto: "El equipo de sostenibilidad de FreightGreen debe calcular la huella ecológica de su bodega principal. Datos: La bodega ocupa 3,200 m² de terreno construido en suelo que era área verde. Consume 45,000 kWh/mes de electricidad. El factor de conversión eléctrico panameño es 0.264 kg CO₂eq/kWh. La biocapacidad de Panamá es 3.8 hag/persona/año.",
    pregunta1: {
      enunciado: "Explica qué mide la Huella Ecológica y cómo se interpreta el concepto de 'déficit ecológico' o 'reserva ecológica'. ¿Por qué es un indicador más completo que solo medir emisiones de CO₂?",
      tipo: "abierta",
      respuesta: "La Huella Ecológica mide la superficie de tierra y agua biológicamente productiva necesaria para producir los recursos que una actividad consume y absorber los residuos que genera (medida en hectáreas globales — hag). El déficit ecológico ocurre cuando la huella supera la biocapacidad disponible del territorio: significa que se consumen recursos más rápido de lo que la naturaleza puede regenerarlos. Es más completo que solo CO₂ porque integra múltiples dimensiones: el terreno ocupado, los alimentos consumidos por los trabajadores, la energía, el agua, los materiales, y la capacidad de absorción de residuos. Proporciona una visión sistémica del impacto total sobre la biosfera, no solo el climático."
    },
    pregunta2: {
      enunciado: "¿Cuál acción de logística verde tendría el mayor impacto en reducir la huella ecológica de una empresa de distribución?",
      opciones: [
        "A) Cambiar los uniformes del personal a telas orgánicas certificadas",
        "B) Optimizar rutas con inteligencia artificial para reducir km recorridos y combustible",
        "C) Instalar plantas decorativas en las oficinas administrativas",
        "D) Imprimir los documentos logísticos en papel reciclado"
      ],
      correcta: "B",
      explicacion: "La optimización de rutas con IA tiene el mayor impacto porque ataca directamente las dos fuentes principales de huella ecológica en logística: el consumo de combustible fósil (que genera CO₂ y requiere superficie de bosque para su compensación) y los km recorridos en vacío. Las demás opciones son válidas pero de impacto marginal comparado con la eficiencia operativa de la flota."
    }
  },

  // ══════════════════════════════════════════════
  // BLOQUE 3: SPRINT FINAL — 3 retos × 5 min
  // ══════════════════════════════════════════════
  {
    id: 8, bloque: "SPRINT FINAL", bloqueColor: "#B71C1C", minutos: 5, letra: "A",
    titulo: "KPIs Verdes: Diseñando el Tablero de Sostenibilidad",
    contexto: "La directora de operaciones de CargoSostenible S.A. te asigna diseñar el Sistema de Indicadores Ambientales de la empresa para presentar al consejo directivo.",
    pregunta1: {
      enunciado: "Diseña un TABLERO DE KPIs AMBIENTALES con al menos 5 indicadores para una empresa de logística y distribución. Para cada KPI indica: nombre, fórmula de cálculo, unidad de medida y frecuencia de medición.",
      tipo: "abierta",
      respuesta: "KPI 1: Intensidad de carbono del transporte = kg CO₂ / tonelada-km · Unidad: kg CO₂/t·km · Mensual. KPI 2: Eficiencia de combustible de flota = litros consumidos / 100 km por vehículo · Unidad: L/100km · Semanal. KPI 3: Tasa de reciclaje de embalajes = kg reciclados / kg total generado × 100 · Unidad: % · Mensual. KPI 4: Consumo eléctrico por área de almacenamiento = kWh / m² de bodega · Unidad: kWh/m²/mes · Mensual. KPI 5: Tasa de ocupación de vehículos = carga real transportada / capacidad máxima × 100 · Unidad: % · Semanal. KPI adicional válido: Número de derrames reportados / trimestre."
    },
    pregunta2: {
      enunciado: "¿Cuál es la diferencia entre un indicador LAGGING (rezagado) y uno LEADING (adelantado) en un sistema de gestión ambiental?",
      opciones: [
        "A) Los lagging miden procesos y los leading miden resultados finales",
        "B) Los leading anticipan el desempeño midiendo actividades preventivas; los lagging confirman resultados ya ocurridos",
        "C) Los lagging son más precisos porque usan datos históricos verificados",
        "D) No hay diferencia práctica; ambos miden el mismo fenómeno en distinto momento"
      ],
      correcta: "B",
      explicacion: "Los indicadores LEADING (adelantados) miden acciones preventivas que predicen el desempeño futuro (ej: % de conductores capacitados en eco-driving, días desde el último mantenimiento). Los LAGGING (rezagados) confirman lo que ya ocurrió (ej: emisiones de CO₂ del mes pasado, número de derrames del trimestre). Un SGA robusto usa ambos tipos: leading para prevenir, lagging para aprender."
    }
  },
  {
    id: 9, bloque: "SPRINT FINAL", bloqueColor: "#B71C1C", minutos: 5, letra: "J",
    titulo: "Rutas Sostenibles y Logística Multimodal",
    contexto: "La empresa PanaLogistics debe elegir cómo transportar 30 toneladas de mercancía desde el Puerto de Balboa hasta Chitré. Opción 1 — Camión diésel directo: 280 km, factor 0.09 kg CO₂/t·km. Opción 2 — Camión hasta la Estación de Ferrocarril (60 km, 0.09) + tren hasta Aguadulce (180 km, 0.025) + camión hasta Chitré (80 km, 0.09).",
    pregunta1: {
      enunciado: "Calcula las emisiones de CO₂ de ambas opciones y determina el porcentaje de reducción que ofrece la opción multimodal. ¿Qué otros factores no relacionados con el CO₂ debería considerar PanaLogistics para tomar la decisión final?",
      tipo: "abierta",
      respuesta: "Opción 1 — Camión directo: 30 t × 280 km × 0.09 = 756 kg CO₂. Opción 2 — Multimodal: Camión tramo 1: 30 × 60 × 0.09 = 162 kg. Tren: 30 × 180 × 0.025 = 135 kg. Camión tramo 2: 30 × 80 × 0.09 = 216 kg. Total: 513 kg CO₂. Reducción: (756−513)/756 × 100 = 32.1% menos emisiones. Otros factores: tiempo de tránsito total, confiabilidad de horarios del ferrocarril, costo total de flete, riesgo de daño en trasbordo, tipo de mercancía (perecederos no toleran tiempos más largos), disponibilidad de la infraestructura ferroviaria en Panamá."
    },
    pregunta2: {
      enunciado: "El principio de 'logística inversa' en el marco de la economía circular se aplica cuando:",
      opciones: [
        "A) Un camión regresa vacío a su punto de origen después de la entrega",
        "B) Se organizan rutas en reversa para optimizar el tiempo de entrega",
        "C) Se gestionan los flujos de devolución de productos, empaques y materiales para su reuso o reciclaje",
        "D) Se invierte el orden de carga en el camión para facilitar la descarga en destino"
      ],
      correcta: "C",
      explicacion: "La logística inversa gestiona el flujo de productos y materiales en dirección contraria al flujo tradicional (del consumidor hacia atrás en la cadena): devoluciones de clientes, recuperación de empaques, retiro de productos al final de su vida útil, reciclaje de materiales. Es un componente clave de la economía circular porque cierra el ciclo de materiales."
    }
  },
  {
    id: 10, bloque: "SPRINT FINAL", bloqueColor: "#B71C1C", minutos: 5, letra: "E",
    titulo: "El Plan de Mejora Ambiental Logístico",
    contexto: "La Directora de Sostenibilidad de CargaVerde S.A. te encarga elaborar el resumen ejecutivo del Plan de Gestión Ambiental (PGA) de la empresa, que debe ser presentado a MiAMBIENTE para renovación de su Permiso Ambiental.",
    pregunta1: {
      enunciado: "Describe los CINCO elementos mínimos que debe contener un Plan de Gestión Ambiental (PGA) sólido para una empresa logística, explicando para qué sirve cada uno.",
      tipo: "abierta",
      respuesta: "1. Diagnóstico ambiental inicial: identifica la situación actual, aspectos significativos y pasivos ambientales existentes — sirve como línea base. 2. Objetivos y metas ambientales SMART: define lo que la empresa se compromete a lograr en un plazo determinado — permiten medir el progreso. 3. Programas de gestión ambiental: describe las acciones, responsables y recursos para alcanzar cada objetivo — son el 'cómo'. 4. Indicadores y mecanismos de monitoreo: establece cómo se medirá el desempeño — asegura la verificabilidad del cumplimiento. 5. Plan de contingencias y respuesta a emergencias: define acciones ante derrames, accidentes o situaciones imprevistas — protege personas, ecosistemas y la continuidad operativa."
    },
    pregunta2: {
      enunciado: "¿Qué diferencia al concepto de 'producción más limpia' del de 'control al final del tubo'?",
      opciones: [
        "A) La producción más limpia es más costosa pero más eficiente a largo plazo",
        "B) El control al final del tubo trata la contaminación ya generada; la producción más limpia previene que se genere",
        "C) La producción más limpia aplica solo a industrias manufactureras, no a logística",
        "D) El control al final del tubo es el enfoque recomendado por ISO 14001"
      ],
      correcta: "B",
      explicacion: "El enfoque de 'control al final del tubo' (end-of-pipe) instala tecnologías para tratar la contaminación después de que se genera (filtros, tratamiento de aguas, scrubbers). La 'producción más limpia' (UNIDO/PNUMA) es preventiva: rediseña procesos, sustituye insumos y optimiza recursos para que la contaminación no se genere. En logística: instalar filtros en chimeneas de la bodega es end-of-pipe; cambiar a flota eléctrica es producción más limpia."
    }
  }
];

// ─── Paleta de colores — diseño para móvil, alta legibilidad ───
const COLORS = {
  bg: "#0A1628",
  card: "#112240",
  cardBorder: "#1E3A5F",
  accent: "#FF9F1C",
  accentDark: "#E08A00",
  text: "#E8F4F8",
  textMuted: "#8BA7C0",
  gold: "#FFD700",
  correct: "#00E676",
  incorrect: "#FF5252",
  timerWarning: "#FF9800",
  timerDanger: "#F44336",
};

export default function CodigoVerdeB() {
  const [pantalla, setPantalla] = useState("intro");
  const [equipoSeleccionado, setEquipoSeleccionado] = useState(null);
  const [retoActual, setRetoActual] = useState(0);
  const [respuesta1, setRespuesta1] = useState("");
  const [opcionSeleccionada, setOpcionSeleccionada] = useState(null);
  const [mostrarFeedback, setMostrarFeedback] = useState(false);
  const [contrasenaArmada, setContrasenaArmada] = useState([]);
  const [timerReto, setTimerReto] = useState(0);
  const [timerGlobal, setTimerGlobal] = useState(90 * 60);
  const [timerActivo, setTimerActivo] = useState(false);
  const [puntaje, setPuntaje] = useState(0);
  const intervalRef = useRef(null);
  const globalRef = useRef(null);

  const equipos = ["BETA", "DELTA"];
  const coloresEquipo = { BETA: "#FF9F1C", DELTA: "#FFA500" };

  useEffect(() => {
    if (pantalla === "reto" && timerActivo) {
      intervalRef.current = setInterval(() => {
        setTimerReto(t => { if (t <= 1) { clearInterval(intervalRef.current); return 0; } return t - 1; });
      }, 1000);
    }
    return () => clearInterval(intervalRef.current);
  }, [pantalla, timerActivo, retoActual]);

  useEffect(() => {
    if (timerActivo) {
      globalRef.current = setInterval(() => {
        setTimerGlobal(t => { if (t <= 1) { clearInterval(globalRef.current); return 0; } return t - 1; });
      }, 1000);
    }
    return () => clearInterval(globalRef.current);
  }, [timerActivo]);

  const iniciarReto = (idx) => {
    setRetoActual(idx);
    setTimerReto(RETOS[idx].minutos * 60);
    setRespuesta1("");
    setOpcionSeleccionada(null);
    setMostrarFeedback(false);
    setPantalla("reto");
    if (!timerActivo) setTimerActivo(true);
  };

  const confirmarRespuesta = () => {
    if (!opcionSeleccionada) return;
    const esCorrecta = opcionSeleccionada === RETOS[retoActual].pregunta2.correcta;
    if (esCorrecta) setPuntaje(p => p + 1);
    setContrasenaArmada(prev => [...prev, { letra: RETOS[retoActual].letra, correcta: esCorrecta }]);
    setMostrarFeedback(true);
  };

  const siguienteReto = () => {
    if (retoActual + 1 >= RETOS.length) { setPantalla("victoria"); setTimerActivo(false); clearInterval(intervalRef.current); clearInterval(globalRef.current); }
    else iniciarReto(retoActual + 1);
  };

  const fmt = (s) => `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;
  const colorTimer = (s, max) => s < 60 ? COLORS.timerDanger : s < max * 0.3 ? COLORS.timerWarning : COLORS.accent;
  const colorGlobal = timerGlobal < 300 ? COLORS.timerDanger : timerGlobal < 1200 ? COLORS.timerWarning : COLORS.accent;

  const estilosBase = { minHeight: "100vh", background: `linear-gradient(135deg, ${COLORS.bg} 0%, #0D2137 100%)`, color: COLORS.text, fontFamily: "'Segoe UI', Arial, sans-serif", padding: "12px", boxSizing: "border-box" };

  if (pantalla === "intro") return (
    <div style={estilosBase}>
      <div style={{ maxWidth: 480, margin: "0 auto", textAlign: "center" }}>
        <div style={{ fontSize: 56, marginBottom: 8 }}>📦</div>
        <div style={{ fontSize: 11, color: COLORS.textMuted, letterSpacing: 4, marginBottom: 4 }}>ITSE · EDA1001 · II CUATRIMESTRE 2026</div>
        <h1 style={{ fontSize: 28, color: COLORS.accent, margin: "8px 0 4px", fontWeight: 900, letterSpacing: 2 }}>OPERACIÓN</h1>
        <h1 style={{ fontSize: 36, color: "#FFFFFF", margin: "0 0 8px", fontWeight: 900, letterSpacing: 3 }}>CÓDIGO VERDE</h1>
        <div style={{ fontSize: 12, color: COLORS.gold, letterSpacing: 2, marginBottom: 20 }}>VERSIÓN B · {EQUIPOS_VERSION}</div>

        <div style={{ background: COLORS.card, border: `1px solid ${COLORS.cardBorder}`, borderRadius: 12, padding: 16, marginBottom: 20, textAlign: "left" }}>
          <p style={{ fontSize: 13, lineHeight: 1.7, color: COLORS.textMuted, margin: 0 }}>⚠️ Alerta de Nivel Crítico. La cadena de suministro panameña está en riesgo. Un cargamento de datos ambientales clasificados ha sido interceptado. Solo equipos con conocimiento técnico logístico pueden desencriptar el código.</p>
          <p style={{ fontSize: 13, lineHeight: 1.7, color: COLORS.text, margin: "12px 0 0" }}>🎯 <strong>Misión:</strong> Completar 10 retos en <strong>90 minutos</strong>. Cada respuesta correcta revela una letra. Ensambla la contraseña de 10 letras y envía el código de evacuación.</p>
        </div>

        <div style={{ background: "rgba(255,159,28,0.08)", border: `1px solid ${COLORS.accent}`, borderRadius: 10, padding: 12, marginBottom: 20, fontSize: 12, color: COLORS.textMuted }}>
          <div style={{ color: COLORS.accent, fontWeight: 700, marginBottom: 6 }}>⏱ ESTRUCTURA DE LA MISIÓN</div>
          <div>🟢 Calentamiento: Retos 1–3 · 10 min c/u</div>
          <div>🔵 Núcleo Técnico: Retos 4–7 · 8 min c/u</div>
          <div>🔴 Sprint Final: Retos 8–10 · 5 min c/u</div>
        </div>

        <div style={{ marginBottom: 20 }}>
          <div style={{ fontSize: 13, color: COLORS.textMuted, marginBottom: 10 }}>Selecciona tu equipo:</div>
          {equipos.map(eq => (
            <button key={eq} onClick={() => setEquipoSeleccionado(eq)}
              style={{ display: "block", width: "100%", padding: "14px", marginBottom: 8, borderRadius: 10, border: `2px solid ${equipoSeleccionado === eq ? coloresEquipo[eq] : COLORS.cardBorder}`, background: equipoSeleccionado === eq ? `${coloresEquipo[eq]}22` : COLORS.card, color: equipoSeleccionado === eq ? coloresEquipo[eq] : COLORS.text, fontSize: 16, fontWeight: 700, cursor: "pointer", letterSpacing: 2 }}>
              EQUIPO {eq}
            </button>
          ))}
        </div>

        {equipoSeleccionado && (
          <button onClick={() => iniciarReto(0)}
            style={{ width: "100%", padding: "16px", borderRadius: 12, border: "none", background: `linear-gradient(90deg, ${COLORS.accent}, ${COLORS.accentDark})`, color: "#000", fontSize: 16, fontWeight: 900, cursor: "pointer", letterSpacing: 2, boxShadow: `0 4px 20px ${COLORS.accent}66` }}>
            🚀 INICIAR MISIÓN — EQUIPO {equipoSeleccionado}
          </button>
        )}
      </div>
    </div>
  );

  if (pantalla === "reto") {
    const reto = RETOS[retoActual];
    const maxSeg = reto.minutos * 60;
    return (
      <div style={estilosBase}>
        <div style={{ maxWidth: 480, margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: 9, color: COLORS.textMuted, letterSpacing: 2 }}>EQUIPO</div>
              <div style={{ fontSize: 13, color: coloresEquipo[equipoSeleccionado], fontWeight: 800 }}>{equipoSeleccionado}</div>
            </div>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: 9, color: COLORS.textMuted, letterSpacing: 2 }}>RETO</div>
              <div style={{ fontSize: 22, color: colorTimer(timerReto, maxSeg), fontWeight: 900, fontFamily: "monospace" }}>{fmt(timerReto)}</div>
            </div>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: 9, color: COLORS.textMuted, letterSpacing: 2 }}>MISIÓN</div>
              <div style={{ fontSize: 13, color: colorGlobal, fontWeight: 800, fontFamily: "monospace" }}>{fmt(timerGlobal)}</div>
            </div>
          </div>

          <div style={{ background: COLORS.card, border: `1px solid ${COLORS.cardBorder}`, borderRadius: 8, padding: "8px 12px", marginBottom: 10, display: "flex", gap: 6, justifyContent: "center", flexWrap: "wrap" }}>
            {CONTRASENA.split("").map((letra, i) => {
              const ob = contrasenaArmada[i];
              return <div key={i} style={{ width: 28, height: 32, borderRadius: 4, border: `1px solid ${ob ? (ob.correcta ? COLORS.correct : COLORS.incorrect) : COLORS.cardBorder}`, background: ob ? (ob.correcta ? "#00E67622" : "#FF525222") : "transparent", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, fontWeight: 900, color: ob ? (ob.correcta ? COLORS.correct : COLORS.incorrect) : COLORS.textMuted, fontFamily: "monospace" }}>{ob ? ob.letra : "·"}</div>;
            })}
          </div>

          <div style={{ background: reto.bloqueColor, borderRadius: "8px 8px 0 0", padding: "8px 12px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: 2 }}>{reto.bloque}</span>
            <span style={{ fontSize: 10, fontWeight: 700 }}>RETO {reto.id}/10 · {reto.minutos} MIN</span>
          </div>
          <div style={{ background: COLORS.card, border: `1px solid ${COLORS.cardBorder}`, borderTop: "none", borderRadius: "0 0 8px 8px", padding: 14, marginBottom: 12 }}>
            <div style={{ fontSize: 15, fontWeight: 800, color: COLORS.accent, marginBottom: 8 }}>🔒 {reto.titulo}</div>
            <div style={{ fontSize: 12, color: COLORS.textMuted, lineHeight: 1.6, marginBottom: 10, padding: "8px 10px", background: "rgba(255,255,255,0.04)", borderRadius: 6, borderLeft: `3px solid ${reto.bloqueColor}` }}>{reto.contexto}</div>

            {!mostrarFeedback && (
              <div style={{ marginBottom: 12 }}>
                <div style={{ fontSize: 11, color: COLORS.gold, fontWeight: 700, marginBottom: 6, letterSpacing: 1 }}>▶ PREGUNTA 1 — ANÁLISIS TÉCNICO</div>
                <div style={{ fontSize: 13, color: COLORS.text, lineHeight: 1.6, marginBottom: 8 }}>{reto.pregunta1.enunciado}</div>
                <textarea value={respuesta1} onChange={e => setRespuesta1(e.target.value)} placeholder="Desarrolla tu respuesta aquí..."
                  style={{ width: "100%", minHeight: 80, background: "rgba(255,255,255,0.06)", border: `1px solid ${COLORS.cardBorder}`, borderRadius: 6, color: COLORS.text, fontSize: 12, padding: 8, resize: "vertical", boxSizing: "border-box" }} />
              </div>
            )}

            {!mostrarFeedback && (
              <div>
                <div style={{ fontSize: 11, color: COLORS.gold, fontWeight: 700, marginBottom: 6, letterSpacing: 1 }}>▶ PREGUNTA 2 — SELECCIÓN MÚLTIPLE · 🔑 LETRA {reto.letra}</div>
                <div style={{ fontSize: 13, color: COLORS.text, lineHeight: 1.6, marginBottom: 10 }}>{reto.pregunta2.enunciado}</div>
                {reto.pregunta2.opciones.map((op, i) => (
                  <button key={i} onClick={() => setOpcionSeleccionada(op[0])}
                    style={{ display: "block", width: "100%", textAlign: "left", padding: "10px 12px", marginBottom: 6, borderRadius: 8, border: `1px solid ${opcionSeleccionada === op[0] ? COLORS.accent : COLORS.cardBorder}`, background: opcionSeleccionada === op[0] ? `${COLORS.accent}22` : "rgba(255,255,255,0.03)", color: opcionSeleccionada === op[0] ? COLORS.accent : COLORS.text, fontSize: 12, cursor: "pointer", lineHeight: 1.5 }}>
                    {op}
                  </button>
                ))}
                <button onClick={confirmarRespuesta} disabled={!opcionSeleccionada}
                  style={{ width: "100%", padding: "12px", borderRadius: 8, border: "none", background: opcionSeleccionada ? `linear-gradient(90deg, ${COLORS.accent}, ${COLORS.accentDark})` : COLORS.cardBorder, color: opcionSeleccionada ? "#000" : COLORS.textMuted, fontSize: 13, fontWeight: 700, cursor: opcionSeleccionada ? "pointer" : "default", marginTop: 4 }}>
                  CONFIRMAR RESPUESTA
                </button>
              </div>
            )}

            {mostrarFeedback && (
              <div>
                <div style={{ background: opcionSeleccionada === reto.pregunta2.correcta ? "#00E67618" : "#FF525218", border: `1px solid ${opcionSeleccionada === reto.pregunta2.correcta ? COLORS.correct : COLORS.incorrect}`, borderRadius: 8, padding: 12, marginBottom: 10 }}>
                  <div style={{ fontSize: 16, fontWeight: 900, color: opcionSeleccionada === reto.pregunta2.correcta ? COLORS.correct : COLORS.incorrect, marginBottom: 4 }}>{opcionSeleccionada === reto.pregunta2.correcta ? "✅ ¡CORRECTO!" : "❌ INCORRECTO"}</div>
                  <div style={{ fontSize: 12, color: COLORS.text, lineHeight: 1.6, marginBottom: 8 }}><strong>Respuesta correcta: {reto.pregunta2.correcta}</strong></div>
                  <div style={{ fontSize: 11, color: COLORS.textMuted, lineHeight: 1.6, fontStyle: "italic" }}>{reto.pregunta2.explicacion}</div>
                </div>
                <div style={{ background: "rgba(255,159,28,0.06)", border: `1px solid ${COLORS.accent}44`, borderRadius: 8, padding: 10, marginBottom: 10 }}>
                  <div style={{ fontSize: 10, color: COLORS.accent, fontWeight: 700, marginBottom: 4 }}>💡 RESPUESTA DE REFERENCIA — PREGUNTA 1</div>
                  <div style={{ fontSize: 11, color: COLORS.textMuted, lineHeight: 1.6 }}>{reto.pregunta1.respuesta}</div>
                </div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, marginBottom: 10 }}>
                  <div style={{ fontSize: 13, color: COLORS.textMuted }}>Letra desbloqueada:</div>
                  <div style={{ fontSize: 28, fontWeight: 900, color: opcionSeleccionada === reto.pregunta2.correcta ? COLORS.correct : COLORS.incorrect, fontFamily: "monospace" }}>{reto.letra}</div>
                </div>
                <button onClick={siguienteReto}
                  style={{ width: "100%", padding: "14px", borderRadius: 8, border: "none", background: `linear-gradient(90deg, ${COLORS.accent}, ${COLORS.accentDark})`, color: "#000", fontSize: 14, fontWeight: 900, cursor: "pointer" }}>
                  {retoActual + 1 >= RETOS.length ? "🏁 FINALIZAR MISIÓN" : `SIGUIENTE RETO → ${retoActual + 2}/10`}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  if (pantalla === "victoria") {
    const correctas = contrasenaArmada.filter(c => c.correcta).length;
    const contrasenaFinal = contrasenaArmada.map(c => c.letra).join("");
    return (
      <div style={{ ...estilosBase, textAlign: "center" }}>
        <div style={{ maxWidth: 480, margin: "0 auto" }}>
          <div style={{ fontSize: 64, marginBottom: 8 }}>🏆</div>
          <h1 style={{ fontSize: 26, color: COLORS.accent, fontWeight: 900, marginBottom: 4 }}>¡MISIÓN COMPLETADA!</h1>
          <div style={{ fontSize: 14, color: COLORS.textMuted, marginBottom: 20 }}>EQUIPO {equipoSeleccionado} · VERSIÓN B</div>
          <div style={{ background: COLORS.card, border: `2px solid ${COLORS.accent}`, borderRadius: 12, padding: 16, marginBottom: 16 }}>
            <div style={{ fontSize: 11, color: COLORS.textMuted, letterSpacing: 2, marginBottom: 8 }}>CONTRASEÑA ENSAMBLADA</div>
            <div style={{ display: "flex", gap: 6, justifyContent: "center", flexWrap: "wrap", marginBottom: 8 }}>
              {contrasenaArmada.map((c, i) => (
                <div key={i} style={{ width: 32, height: 36, borderRadius: 4, border: `2px solid ${c.correcta ? COLORS.correct : COLORS.incorrect}`, background: c.correcta ? "#00E67622" : "#FF525222", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, fontWeight: 900, color: c.correcta ? COLORS.correct : COLORS.incorrect, fontFamily: "monospace" }}>{c.letra}</div>
              ))}
            </div>
            <div style={{ fontSize: 22, fontWeight: 900, color: COLORS.gold, letterSpacing: 4, fontFamily: "monospace" }}>{contrasenaFinal}</div>
          </div>
          <div style={{ background: COLORS.card, border: `1px solid ${COLORS.cardBorder}`, borderRadius: 10, padding: 14, marginBottom: 16 }}>
            <div style={{ fontSize: 28, fontWeight: 900, color: COLORS.accent }}>{correctas}/10</div>
            <div style={{ fontSize: 12, color: COLORS.textMuted }}>Respuestas correctas en selección múltiple</div>
          </div>
          <a href="https://teams.microsoft.com" target="_blank" rel="noopener noreferrer"
            style={{ display: "block", width: "100%", padding: "14px", borderRadius: 10, background: "linear-gradient(90deg, #6264A7, #8B8CC7)", color: "#FFF", fontSize: 14, fontWeight: 700, cursor: "pointer", textDecoration: "none", boxSizing: "border-box", marginBottom: 8 }}>
            📤 ENVIAR CÓDIGO POR MICROSOFT TEAMS
          </a>
          <div style={{ fontSize: 11, color: COLORS.textMuted, marginTop: 12, lineHeight: 1.6 }}>
            Informa a la Directora Operativa: Equipo {equipoSeleccionado} · Contraseña: <strong>{contrasenaFinal}</strong> · Puntaje: {correctas}/10
          </div>
        </div>
      </div>
    );
  }
  return null;
}
