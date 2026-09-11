import { useEffect, useState } from "react";

export const LANGUAGES = [
  { code: "en", label: "English" },
  { code: "es", label: "Español" },
  { code: "de", label: "Deutsch" },
  { code: "fr", label: "Français" },
  { code: "pt", label: "Português" },
  { code: "zh", label: "中文" },
  { code: "ja", label: "日本語" },
] as const;

export type LangCode = (typeof LANGUAGES)[number]["code"];

type Dict = {
  nav_protocol: string;
  nav_questions: string;
  nav_how: string;
  nav_contact: string;
  official_site: string;
  hero_title: string;
  hero_desc: string;
  learn_how: string;
  how_it_works_link: string;
  mechanics_label: string;
  mechanics_title: string;
  mechanics_desc: string;
  reflexive_desc: string;
  prelaunch: string;
  breakdown_label: string;
  breakdown_title: string;
  breakdown_desc: string;
  step1_title: string;
  step1_body: string;
  step2_title: string;
  step2_body: string;
  step3_title: string;
  step3_body: string;
  whitepaper_cta: string;
  visit_site: string;
  mute_music: string;
  play_music: string;
};

export const translations: Record<LangCode, Dict> = {
  en: {
    nav_protocol: "Protocol",
    nav_questions: "Questions",
    nav_how: "How it works",
    nav_contact: "Contact",
    official_site: "Official site",
    hero_title: "A sovereign onchain central bank",
    hero_desc:
      "Information on how The Standard Reserve's Charter and Branch model ties $STANDARD issuance to real ETH flow.",
    learn_how: "Learn how it works",
    how_it_works_link: "How it works",
    mechanics_label: "Protocol mechanics",
    mechanics_title: "Charters, Branches, and Issuance.",
    mechanics_desc:
      "The Standard Reserve is inspired by Olympus DAO (OHM), but ties $STANDARD issuance to real ETH flow through Charters and Branches instead of artificial yield.",
    reflexive_desc:
      "The mechanism is reflexive by design: more ETH in expands issuance and builds reserves, more ETH out contracts it while the treasury buys back and burns $STANDARD to defend the peg.",
    prelaunch: "Currently pre-launch",
    breakdown_label: "The mechanics, broken down",
    breakdown_title: "From Charter to Branch to Reserve.",
    breakdown_desc:
      "Only 1,000 Founding Charters will ever exist at genesis. Each unlocks a Branch that earns $STANDARD for as long as it's open.",
    step1_title: "Charter",
    step1_body:
      "The first 1,000 Genesis Charters are free, soulbound licenses to operate in the network. Later Charters are won via daily Dutch auction.",
    step2_title: "Branch",
    step2_body:
      "Every Charter opens a Branch that earns $STANDARD daily. Expand to up to 10 Branches by auctioning for expansion licenses.",
    step3_title: "Reserve",
    step3_body:
      "Close a Branch to claim your $STANDARD, minus a dynamic exit fee: half burned, half shared with those who stay.",
    whitepaper_cta: "Want the full mechanics? Read the official whitepaper.",
    visit_site: "Visit official site",
    mute_music: "Mute music",
    play_music: "Play music",
  },
  es: {
    nav_protocol: "Protocolo",
    nav_questions: "Preguntas",
    nav_how: "Cómo funciona",
    nav_contact: "Contacto",
    official_site: "Sitio oficial",
    hero_title: "Un banco central soberano onchain",
    hero_desc:
      "Información sobre cómo el modelo de Cartas y Sucursales de The Standard Reserve vincula la emisión de $STANDARD al flujo real de ETH.",
    learn_how: "Descubre cómo funciona",
    how_it_works_link: "Cómo funciona",
    mechanics_label: "Mecánica del protocolo",
    mechanics_title: "Cartas, Sucursales y Emisión.",
    mechanics_desc:
      "The Standard Reserve se inspira en Olympus DAO (OHM), pero vincula la emisión de $STANDARD al flujo real de ETH mediante Cartas y Sucursales en lugar de un rendimiento artificial.",
    reflexive_desc:
      "El mecanismo es reflexivo por diseño: más ETH entrante expande la emisión y aumenta las reservas; más ETH saliente la contrae, mientras la tesorería recompra y quema $STANDARD para defender la paridad.",
    prelaunch: "Actualmente en fase previa al lanzamiento",
    breakdown_label: "La mecánica, explicada",
    breakdown_title: "De la Carta a la Sucursal a la Reserva.",
    breakdown_desc:
      "Solo existirán 1.000 Cartas Fundacionales en el génesis. Cada una desbloquea una Sucursal que genera $STANDARD mientras permanezca abierta.",
    step1_title: "Carta",
    step1_body:
      "Las primeras 1.000 Cartas Génesis son licencias gratuitas y no transferibles para operar en la red. Las Cartas posteriores se obtienen mediante subasta holandesa diaria.",
    step2_title: "Sucursal",
    step2_body:
      "Cada Carta abre una Sucursal que genera $STANDARD a diario. Amplía hasta 10 Sucursales subastando licencias de expansión.",
    step3_title: "Reserva",
    step3_body:
      "Cierra una Sucursal para reclamar tu $STANDARD, menos una comisión de salida dinámica: la mitad se quema y la otra mitad se comparte con quienes permanecen.",
    whitepaper_cta: "¿Quieres conocer toda la mecánica? Lee el whitepaper oficial.",
    visit_site: "Visitar sitio oficial",
    mute_music: "Silenciar música",
    play_music: "Reproducir música",
  },
  de: {
    nav_protocol: "Protokoll",
    nav_questions: "Fragen",
    nav_how: "So funktioniert es",
    nav_contact: "Kontakt",
    official_site: "Offizielle Seite",
    hero_title: "Eine souveräne Onchain-Zentralbank",
    hero_desc:
      "Informationen darüber, wie das Charter- und Branch-Modell von The Standard Reserve die $STANDARD-Emission an echten ETH-Fluss koppelt.",
    learn_how: "So funktioniert es",
    how_it_works_link: "So funktioniert es",
    mechanics_label: "Protokollmechanik",
    mechanics_title: "Charters, Branches und Emission.",
    mechanics_desc:
      "The Standard Reserve ist von Olympus DAO (OHM) inspiriert, koppelt die $STANDARD-Emission jedoch über Charters und Branches an echten ETH-Fluss statt an künstliche Renditen.",
    reflexive_desc:
      "Der Mechanismus ist bewusst reflexiv gestaltet: mehr eingehendes ETH erweitert die Emission und stärkt die Reserven, mehr ausgehendes ETH schrumpft sie, während die Treasury $STANDARD zurückkauft und verbrennt, um den Peg zu verteidigen.",
    prelaunch: "Derzeit vor dem Start",
    breakdown_label: "Die Mechanik im Detail",
    breakdown_title: "Von Charter über Branch zur Reserve.",
    breakdown_desc:
      "Zum Genesis werden nur 1.000 Founding Charters existieren. Jede schaltet eine Branch frei, die $STANDARD verdient, solange sie geöffnet ist.",
    step1_title: "Charter",
    step1_body:
      "Die ersten 1.000 Genesis Charters sind kostenlose, nicht übertragbare Lizenzen zum Betrieb im Netzwerk. Spätere Charters werden über eine tägliche Dutch Auction gewonnen.",
    step2_title: "Branch",
    step2_body:
      "Jede Charter eröffnet eine Branch, die täglich $STANDARD verdient. Erweitere auf bis zu 10 Branches durch Versteigerung von Erweiterungslizenzen.",
    step3_title: "Reserve",
    step3_body:
      "Schließe eine Branch, um dein $STANDARD zu erhalten, abzüglich einer dynamischen Austrittsgebühr: die Hälfte wird verbrannt, die andere Hälfte mit denen geteilt, die bleiben.",
    whitepaper_cta: "Du willst die komplette Mechanik verstehen? Lies das offizielle Whitepaper.",
    visit_site: "Offizielle Seite besuchen",
    mute_music: "Musik stumm schalten",
    play_music: "Musik abspielen",
  },
  fr: {
    nav_protocol: "Protocole",
    nav_questions: "Questions",
    nav_how: "Fonctionnement",
    nav_contact: "Contact",
    official_site: "Site officiel",
    hero_title: "Une banque centrale onchain souveraine",
    hero_desc:
      "Informations sur la manière dont le modèle de Chartes et de Branches de The Standard Reserve lie l'émission de $STANDARD à un flux réel d'ETH.",
    learn_how: "Découvrir le fonctionnement",
    how_it_works_link: "Fonctionnement",
    mechanics_label: "Mécanique du protocole",
    mechanics_title: "Chartes, Branches et Émission.",
    mechanics_desc:
      "The Standard Reserve s'inspire d'Olympus DAO (OHM), mais lie l'émission de $STANDARD à un flux réel d'ETH via des Chartes et des Branches plutôt qu'à un rendement artificiel.",
    reflexive_desc:
      "Le mécanisme est réflexif par conception : plus d'ETH entrant augmente l'émission et renforce les réserves, plus d'ETH sortant la contracte, tandis que la trésorerie rachète et brûle du $STANDARD pour défendre la parité.",
    prelaunch: "Actuellement en pré-lancement",
    breakdown_label: "La mécanique, en détail",
    breakdown_title: "De la Charte à la Branche à la Réserve.",
    breakdown_desc:
      "Seulement 1 000 Chartes Fondatrices existeront à la genèse. Chacune débloque une Branche qui génère du $STANDARD tant qu'elle reste ouverte.",
    step1_title: "Charte",
    step1_body:
      "Les 1 000 premières Chartes Genesis sont des licences gratuites et non transférables pour opérer sur le réseau. Les Chartes suivantes sont obtenues via une enchère hollandaise quotidienne.",
    step2_title: "Branche",
    step2_body:
      "Chaque Charte ouvre une Branche qui génère du $STANDARD chaque jour. Étendez jusqu'à 10 Branches en enchérissant pour des licences d'expansion.",
    step3_title: "Réserve",
    step3_body:
      "Fermez une Branche pour récupérer votre $STANDARD, moins des frais de sortie dynamiques : la moitié est brûlée, l'autre moitié partagée avec ceux qui restent.",
    whitepaper_cta: "Vous voulez toute la mécanique ? Lisez le livre blanc officiel.",
    visit_site: "Visiter le site officiel",
    mute_music: "Couper la musique",
    play_music: "Jouer la musique",
  },
  pt: {
    nav_protocol: "Protocolo",
    nav_questions: "Perguntas",
    nav_how: "Como funciona",
    nav_contact: "Contato",
    official_site: "Site oficial",
    hero_title: "Um banco central onchain soberano",
    hero_desc:
      "Informações sobre como o modelo de Cartas e Filiais da The Standard Reserve vincula a emissão de $STANDARD ao fluxo real de ETH.",
    learn_how: "Veja como funciona",
    how_it_works_link: "Como funciona",
    mechanics_label: "Mecânica do protocolo",
    mechanics_title: "Cartas, Filiais e Emissão.",
    mechanics_desc:
      "A Standard Reserve é inspirada na Olympus DAO (OHM), mas vincula a emissão de $STANDARD ao fluxo real de ETH por meio de Cartas e Filiais, em vez de rendimento artificial.",
    reflexive_desc:
      "O mecanismo é reflexivo por design: mais ETH entrando expande a emissão e fortalece as reservas; mais ETH saindo a contrai, enquanto a tesouraria recompra e queima $STANDARD para defender a paridade.",
    prelaunch: "Atualmente em pré-lançamento",
    breakdown_label: "A mecânica, em detalhes",
    breakdown_title: "Da Carta à Filial à Reserva.",
    breakdown_desc:
      "Apenas 1.000 Cartas Fundadoras existirão no gênesis. Cada uma desbloqueia uma Filial que gera $STANDARD enquanto estiver aberta.",
    step1_title: "Carta",
    step1_body:
      "As primeiras 1.000 Cartas Genesis são licenças gratuitas e intransferíveis para operar na rede. Cartas posteriores são obtidas por leilão holandês diário.",
    step2_title: "Filial",
    step2_body:
      "Cada Carta abre uma Filial que gera $STANDARD diariamente. Expanda para até 10 Filiais leiloando licenças de expansão.",
    step3_title: "Reserva",
    step3_body:
      "Encerre uma Filial para reclamar seu $STANDARD, menos uma taxa de saída dinâmica: metade é queimada, metade é compartilhada com quem permanece.",
    whitepaper_cta: "Quer conhecer toda a mecânica? Leia o whitepaper oficial.",
    visit_site: "Visitar site oficial",
    mute_music: "Silenciar música",
    play_music: "Reproduzir música",
  },
  zh: {
    nav_protocol: "协议",
    nav_questions: "常见问题",
    nav_how: "运作方式",
    nav_contact: "联系方式",
    official_site: "官方网站",
    hero_title: "主权链上央行",
    hero_desc:
      "了解 The Standard Reserve 的 Charter 与 Branch 模型如何将 $STANDARD 的发行与真实 ETH 流动挂钩。",
    learn_how: "了解运作方式",
    how_it_works_link: "运作方式",
    mechanics_label: "协议机制",
    mechanics_title: "Charter、Branch 与发行机制。",
    mechanics_desc:
      "The Standard Reserve 受 Olympus DAO(OHM)启发,但通过 Charter 与 Branch 将 $STANDARD 的发行与真实 ETH 流动挂钩,而非依赖人为收益。",
    reflexive_desc:
      "该机制在设计上具有反身性:ETH 流入越多,发行量越大、储备越充实;ETH 流出越多,发行量越收缩,同时国库会回购并销毁 $STANDARD 以维护挂钩。",
    prelaunch: "目前处于预启动阶段",
    breakdown_label: "机制详解",
    breakdown_title: "从 Charter 到 Branch 再到 Reserve。",
    breakdown_desc:
      "创世阶段仅存在 1,000 份创始 Charter。每份 Charter 可解锁一个 Branch,只要保持开放即可持续赚取 $STANDARD。",
    step1_title: "Charter",
    step1_body:
      "首批 1,000 份创世 Charter 为免费且不可转让的网络运营许可。之后的 Charter 需通过每日荷兰式拍卖获得。",
    step2_title: "Branch",
    step2_body:
      "每份 Charter 可开设一个每日赚取 $STANDARD 的 Branch。通过拍卖扩展许可,最多可扩展至 10 个 Branch。",
    step3_title: "Reserve",
    step3_body:
      "关闭 Branch 即可领取你的 $STANDARD,需扣除动态退出费:一半销毁,一半分享给留下的用户。",
    whitepaper_cta: "想了解完整机制?请阅读官方白皮书。",
    visit_site: "访问官方网站",
    mute_music: "静音音乐",
    play_music: "播放音乐",
  },
  ja: {
    nav_protocol: "プロトコル",
    nav_questions: "よくある質問",
    nav_how: "仕組み",
    nav_contact: "お問い合わせ",
    official_site: "公式サイト",
    hero_title: "主権を持つオンチェーン中央銀行",
    hero_desc:
      "The Standard Reserve の Charter と Branch モデルが $STANDARD の発行を実際の ETH フローに結びつける仕組みについての情報です。",
    learn_how: "仕組みを見る",
    how_it_works_link: "仕組み",
    mechanics_label: "プロトコルの仕組み",
    mechanics_title: "Charter、Branch、そして発行。",
    mechanics_desc:
      "The Standard Reserve は Olympus DAO(OHM)に着想を得ていますが、人為的な利回りではなく Charter と Branch を通じて $STANDARD の発行を実際の ETH フローに結びつけています。",
    reflexive_desc:
      "この仕組みは設計上リフレクシブです:ETH の流入が増えると発行量が拡大し準備金が増え、ETH の流出が増えると縮小します。その間、トレジャリーは $STANDARD を買い戻して焼却し、ペグを維持します。",
    prelaunch: "現在プレローンチ中",
    breakdown_label: "仕組みの詳細",
    breakdown_title: "Charter から Branch、そして Reserve へ。",
    breakdown_desc:
      "ジェネシス時に存在する創設 Charter はわずか1,000件です。各 Charter は、開いている限り $STANDARD を獲得できる Branch のロックを解除します。",
    step1_title: "Charter",
    step1_body:
      "最初の1,000件のジェネシス Charter は、ネットワークで運営するための無料かつ譲渡不可のライセンスです。以降の Charter は毎日のダッチオークションで獲得します。",
    step2_title: "Branch",
    step2_body:
      "各 Charter は毎日 $STANDARD を獲得する Branch を開設します。拡張ライセンスをオークションで獲得し、最大10の Branch まで拡張できます。",
    step3_title: "Reserve",
    step3_body:
      "Branch を閉じると $STANDARD を受け取れます(動的な退出手数料が差し引かれ、半分は焼却、半分は残留者に分配されます)。",
    whitepaper_cta: "仕組みをすべて知りたいですか?公式ホワイトペーパーをご覧ください。",
    visit_site: "公式サイトを見る",
    mute_music: "音楽をミュート",
    play_music: "音楽を再生",
  },
};

const STORAGE_KEY = "sr-lang";

function detectLang(): LangCode {
  const stored = localStorage.getItem(STORAGE_KEY) as LangCode | null;
  if (stored && translations[stored]) return stored;
  const nav = navigator.language?.slice(0, 2) as LangCode;
  return translations[nav] ? nav : "en";
}

export function useLanguage() {
  const [lang, setLangState] = useState<LangCode>("en");

  useEffect(() => {
    setLangState(detectLang());
  }, []);

  const setLang = (next: LangCode) => {
    setLangState(next);
    localStorage.setItem(STORAGE_KEY, next);
  };

  return { lang, setLang };
}

// --- Signal Duo section ---

type SDVerdict = { signal: string; read: string; move: string; confidence: number };

export const SD_TOPIC_IDS = ["pricing", "supply", "talent", "demand"] as const;
export type SDTopicId = (typeof SD_TOPIC_IDS)[number];

type SDDict = {
  heading: string;
  title: string;
  subtitle: string;
  scoutName: string;
  scoutTag: string;
  sparkName: string;
  sparkTag: string;
  callIt: string;
  choose: string;
  empty: string;
  scanning: string;
  confidenceLabel: string;
  labelSignal: string;
  labelRead: string;
  labelMove: string;
  topics: Record<SDTopicId, string>;
  verdicts: Record<SDTopicId, SDVerdict>;
};

export const sdTranslations: Record<LangCode, SDDict> = {
  en: {
    heading: "The signal desk",
    title: "Meet Scout and Spark.",
    subtitle:
      "Scout reads the noise. Spark calls the move. Pick a signal below and watch them work a real shift end to end.",
    scoutName: "Scout",
    scoutTag: "Reads the noise",
    sparkName: "Spark",
    sparkTag: "Calls the move",
    callIt: "Call it",
    choose: "Choose a signal to trace",
    empty:
      "Nothing on the desk yet. Pick a signal and Scout will start scanning your ecosystem for deviations.",
    scanning: "Scout is separating movement from noise…",
    confidenceLabel: "Confidence",
    labelSignal: "Signal",
    labelRead: "Read",
    labelMove: "Move",
    topics: { pricing: "Pricing", supply: "Supply", talent: "Talent", demand: "Demand" },
    verdicts: {
      pricing: {
        signal: "Two rivals trimmed list price within 36 hours of each other.",
        read: "This is a coordinated floor test, not a promo cycle.",
        move: "Hold your price and lead with contract length instead.",
        confidence: 88,
      },
      supply: {
        signal: "Lead times on your second-tier suppliers slipped 9 days.",
        read: "Upstream capacity is tightening before it shows in quotes.",
        move: "Pre-book Q3 volume this week, before rates reprice.",
        confidence: 92,
      },
      talent: {
        signal: "Senior hiring in your category jumped 24% month over month.",
        read: "A competitor is staffing for a launch, not for churn.",
        move: "Lock your top 5 engineers now with retention offers.",
        confidence: 76,
      },
      demand: {
        signal: "Search intent rose in three regions you barely serve.",
        read: "Demand is forming ahead of your distribution footprint.",
        move: "Open a lightweight channel test in the strongest region.",
        confidence: 84,
      },
    },
  },
  es: {
    heading: "El escritorio de señales",
    title: "Conoce a Scout y Spark.",
    subtitle:
      "Scout interpreta el ruido. Spark decide la jugada. Elige una señal abajo y observa cómo trabajan un turno real de principio a fin.",
    scoutName: "Scout",
    scoutTag: "Interpreta el ruido",
    sparkName: "Spark",
    sparkTag: "Decide la jugada",
    callIt: "Jugada lista",
    choose: "Elige una señal para rastrear",
    empty:
      "Aún no hay nada en el escritorio. Elige una señal y Scout comenzará a rastrear tu ecosistema en busca de desviaciones.",
    scanning: "Scout está separando el movimiento real del ruido…",
    confidenceLabel: "Confianza",
    labelSignal: "Señal",
    labelRead: "Lectura",
    labelMove: "Jugada",
    topics: { pricing: "Precios", supply: "Suministro", talent: "Talento", demand: "Demanda" },
    verdicts: {
      pricing: {
        signal: "Dos rivales redujeron su precio de lista con solo 36 horas de diferencia.",
        read: "Esto es una prueba de piso coordinada, no un ciclo promocional.",
        move: "Mantén tu precio y destaca la duración del contrato en su lugar.",
        confidence: 88,
      },
      supply: {
        signal: "Los plazos de entrega de tus proveedores de segundo nivel se retrasaron 9 días.",
        read: "La capacidad upstream se está ajustando antes de que aparezca en las cotizaciones.",
        move: "Reserva el volumen del tercer trimestre esta semana, antes de que suban las tarifas.",
        confidence: 92,
      },
      talent: {
        signal: "La contratación senior en tu categoría subió un 24% mensual.",
        read: "Un competidor está formando equipo para un lanzamiento, no por rotación.",
        move: "Asegura ahora a tus 5 mejores ingenieros con ofertas de retención.",
        confidence: 76,
      },
      demand: {
        signal: "La intención de búsqueda aumentó en tres regiones que apenas atiendes.",
        read: "La demanda se está formando antes de que llegue tu red de distribución.",
        move: "Abre una prueba de canal ligera en la región más fuerte.",
        confidence: 84,
      },
    },
  },
  de: {
    heading: "Der Signal-Desk",
    title: "Lerne Scout und Spark kennen.",
    subtitle:
      "Scout liest das Rauschen. Spark entscheidet den Zug. Wähle unten ein Signal und sieh, wie beide eine echte Schicht von Anfang bis Ende durchziehen.",
    scoutName: "Scout",
    scoutTag: "Liest das Rauschen",
    sparkName: "Spark",
    sparkTag: "Entscheidet den Zug",
    callIt: "Zug steht",
    choose: "Wähle ein Signal zum Verfolgen",
    empty:
      "Noch nichts auf dem Desk. Wähle ein Signal, und Scout beginnt, dein Ökosystem nach Abweichungen zu durchsuchen.",
    scanning: "Scout trennt gerade echte Bewegung vom Rauschen…",
    confidenceLabel: "Konfidenz",
    labelSignal: "Signal",
    labelRead: "Einschätzung",
    labelMove: "Zug",
    topics: { pricing: "Preise", supply: "Lieferkette", talent: "Talent", demand: "Nachfrage" },
    verdicts: {
      pricing: {
        signal: "Zwei Konkurrenten senkten ihren Listenpreis innerhalb von 36 Stunden.",
        read: "Das ist ein koordinierter Preistest, kein Aktionszyklus.",
        move: "Halte deinen Preis und stelle stattdessen die Vertragslaufzeit in den Vordergrund.",
        confidence: 88,
      },
      supply: {
        signal: "Die Lieferzeiten deiner Zulieferer zweiter Stufe haben sich um 9 Tage verlängert.",
        read: "Die Kapazität vorgelagerter Stufen verknappt sich, bevor es sich in Angeboten zeigt.",
        move: "Buche das Q3-Volumen diese Woche vor, bevor sich die Preise ändern.",
        confidence: 92,
      },
      talent: {
        signal: "Die Senior-Einstellungen in deiner Kategorie stiegen 24% im Monatsvergleich.",
        read: "Ein Wettbewerber baut Personal für einen Launch auf, nicht wegen Fluktuation.",
        move: "Sichere dir jetzt deine Top-5-Ingenieure mit Bindungsangeboten.",
        confidence: 76,
      },
      demand: {
        signal: "Das Suchinteresse stieg in drei Regionen, die du kaum bedienst.",
        read: "Die Nachfrage bildet sich, bevor deine Vertriebspräsenz dort ankommt.",
        move: "Starte einen schlanken Kanaltest in der stärksten Region.",
        confidence: 84,
      },
    },
  },
  fr: {
    heading: "Le bureau des signaux",
    title: "Découvrez Scout et Spark.",
    subtitle:
      "Scout lit le bruit. Spark décide du coup à jouer. Choisissez un signal ci-dessous et regardez-les travailler un vrai quart de bout en bout.",
    scoutName: "Scout",
    scoutTag: "Lit le bruit",
    sparkName: "Spark",
    sparkTag: "Décide du coup",
    callIt: "Coup décidé",
    choose: "Choisissez un signal à suivre",
    empty:
      "Rien sur le bureau pour l'instant. Choisissez un signal et Scout commencera à scanner votre écosystème à la recherche d'écarts.",
    scanning: "Scout sépare le vrai mouvement du bruit…",
    confidenceLabel: "Confiance",
    labelSignal: "Signal",
    labelRead: "Lecture",
    labelMove: "Coup",
    topics: { pricing: "Tarification", supply: "Approvisionnement", talent: "Talent", demand: "Demande" },
    verdicts: {
      pricing: {
        signal: "Deux concurrents ont réduit leur prix catalogue à 36 heures d'intervalle.",
        read: "C'est un test de plancher coordonné, pas un cycle promotionnel.",
        move: "Maintenez votre prix et misez plutôt sur la durée du contrat.",
        confidence: 88,
      },
      supply: {
        signal: "Les délais de vos fournisseurs de second rang ont glissé de 9 jours.",
        read: "La capacité amont se resserre avant même d'apparaître dans les devis.",
        move: "Réservez le volume du T3 cette semaine, avant que les tarifs ne changent.",
        confidence: 92,
      },
      talent: {
        signal: "Le recrutement senior dans votre catégorie a bondi de 24% sur un mois.",
        read: "Un concurrent recrute pour un lancement, pas pour compenser du turnover.",
        move: "Sécurisez dès maintenant vos 5 meilleurs ingénieurs avec des offres de rétention.",
        confidence: 76,
      },
      demand: {
        signal: "L'intention de recherche a augmenté dans trois régions que vous desservez à peine.",
        read: "La demande se forme avant même votre présence de distribution.",
        move: "Lancez un test de canal léger dans la région la plus forte.",
        confidence: 84,
      },
    },
  },
  pt: {
    heading: "A mesa de sinais",
    title: "Conheça Scout e Spark.",
    subtitle:
      "Scout interpreta o ruído. Spark decide a jogada. Escolha um sinal abaixo e veja os dois trabalharem um turno real do início ao fim.",
    scoutName: "Scout",
    scoutTag: "Interpreta o ruído",
    sparkName: "Spark",
    sparkTag: "Decide a jogada",
    callIt: "Jogada definida",
    choose: "Escolha um sinal para rastrear",
    empty:
      "Ainda não há nada na mesa. Escolha um sinal e o Scout começará a rastrear seu ecossistema em busca de desvios.",
    scanning: "Scout está separando o movimento real do ruído…",
    confidenceLabel: "Confiança",
    labelSignal: "Sinal",
    labelRead: "Leitura",
    labelMove: "Jogada",
    topics: { pricing: "Preços", supply: "Suprimento", talent: "Talento", demand: "Demanda" },
    verdicts: {
      pricing: {
        signal: "Dois concorrentes reduziram o preço de tabela com 36 horas de diferença.",
        read: "Isso é um teste de piso coordenado, não um ciclo promocional.",
        move: "Mantenha seu preço e destaque a duração do contrato.",
        confidence: 88,
      },
      supply: {
        signal: "Os prazos de entrega dos seus fornecedores de segunda linha aumentaram 9 dias.",
        read: "A capacidade upstream está se apertando antes de aparecer nas cotações.",
        move: "Reserve o volume do terceiro trimestre esta semana, antes do reajuste das taxas.",
        confidence: 92,
      },
      talent: {
        signal: "A contratação sênior na sua categoria subiu 24% no mês.",
        read: "Um concorrente está montando equipe para um lançamento, não por rotatividade.",
        move: "Garanta agora seus 5 melhores engenheiros com ofertas de retenção.",
        confidence: 76,
      },
      demand: {
        signal: "A intenção de busca cresceu em três regiões que você quase não atende.",
        read: "A demanda está se formando antes da sua presença de distribuição.",
        move: "Abra um teste de canal leve na região mais forte.",
        confidence: 84,
      },
    },
  },
  zh: {
    heading: "信号台",
    title: "认识 Scout 和 Spark。",
    subtitle: "Scout 解读噪音,Spark 拍板行动。选择下方的信号,看他们完整地完成一次真实的工作流程。",
    scoutName: "Scout",
    scoutTag: "解读噪音",
    sparkName: "Spark",
    sparkTag: "拍板行动",
    callIt: "已定案",
    choose: "选择要追踪的信号",
    empty: "台面上暂时还没有内容。选择一个信号,Scout 就会开始扫描你的生态系统以寻找异常。",
    scanning: "Scout 正在从噪音中分辨真实动向……",
    confidenceLabel: "置信度",
    labelSignal: "信号",
    labelRead: "解读",
    labelMove: "行动",
    topics: { pricing: "定价", supply: "供应", talent: "人才", demand: "需求" },
    verdicts: {
      pricing: {
        signal: "两家竞争对手在 36 小时内先后下调了标价。",
        read: "这是一次协同的价格底线测试,而不是促销周期。",
        move: "维持你的价格,转而强调合同期限。",
        confidence: 88,
      },
      supply: {
        signal: "你二级供应商的交货周期延长了 9 天。",
        read: "上游产能正在收紧,只是尚未体现在报价上。",
        move: "本周就预订第三季度的用量,以免价格上调。",
        confidence: 92,
      },
      talent: {
        signal: "你所在品类的高级职位招聘环比增长了 24%。",
        read: "竞争对手是在为新产品发布储备人才,而不是因为人员流失。",
        move: "现在就用留任激励锁定你最优秀的 5 名工程师。",
        confidence: 76,
      },
      demand: {
        signal: "你几乎未布局的三个地区的搜索意向上升了。",
        read: "需求正在你的分销网络到达之前形成。",
        move: "在需求最强的地区开展一次轻量级渠道测试。",
        confidence: 84,
      },
    },
  },
  ja: {
    heading: "シグナルデスク",
    title: "Scout と Spark を紹介します。",
    subtitle:
      "Scout がノイズを読み取り、Spark が次の一手を決めます。下から信号を選び、二人が実際の業務を最初から最後までこなす様子を見てください。",
    scoutName: "Scout",
    scoutTag: "ノイズを読み取る",
    sparkName: "Spark",
    sparkTag: "次の一手を決める",
    callIt: "決定",
    choose: "追跡する信号を選択",
    empty:
      "デスクにはまだ何もありません。信号を選ぶと、Scout があなたのエコシステムの異常をスキャンし始めます。",
    scanning: "Scout が本当の動きとノイズを見分けています…",
    confidenceLabel: "信頼度",
    labelSignal: "信号",
    labelRead: "解釈",
    labelMove: "次の一手",
    topics: { pricing: "価格", supply: "サプライ", talent: "人材", demand: "需要" },
    verdicts: {
      pricing: {
        signal: "2社の競合が36時間以内に相次いで定価を下げました。",
        read: "これは連携した価格底値テストであり、通常のセールサイクルではありません。",
        move: "価格を維持し、契約期間の長さを前面に出しましょう。",
        confidence: 88,
      },
      supply: {
        signal: "二次サプライヤーのリードタイムが9日延びました。",
        read: "上流の生産能力が、見積もりに反映される前に引き締まっています。",
        move: "価格改定前の今週中に第3四半期分の量を予約しましょう。",
        confidence: 92,
      },
      talent: {
        signal: "あなたのカテゴリーでのシニア採用が前月比24%増加しました。",
        read: "競合は離職対策ではなく、新規ローンチのために人員を確保しています。",
        move: "リテンションオファーで上位5人のエンジニアを今すぐ確保しましょう。",
        confidence: 76,
      },
      demand: {
        signal: "ほとんど展開していない3地域で検索意欲が上昇しました。",
        read: "需要は、あなたの販売網が届く前から形成されています。",
        move: "最も強い地域で軽量なチャネルテストを開始しましょう。",
        confidence: 84,
      },
    },
  },
};