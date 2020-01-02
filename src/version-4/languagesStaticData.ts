import { LanguageName, LanguageISO, Language } from './language'

export const getHumanReadableLanguageName = (languageIso: LanguageISO): string => {
  switch (languageIso) {
    case LanguageISO.ZHYUE:
      return 'Cantonese'
    case LanguageISO.ES:
      return 'Spanish (Castilian)'
    case LanguageISO.ESMX:
      return 'Spanish (Latin America)'
    case LanguageISO.PT:
      return 'Portuguese (Brazilian)'
    case LanguageISO.PTPT:
      return 'Portuguese (European)'
    case LanguageISO.ENGB:
      return 'English (British)'
    case LanguageISO.EN:
      return 'English (American)”'
    default:
      return languagesStaticData[languageIso].name
  }
}

export const languagesStaticData: { readonly [key: string]: Language } = {
  [LanguageISO.KO]: {
    iso: LanguageISO.KO,
    name: LanguageName.Korean,
    alphabet: '것하다있다수하다나없다않다사람우리그아니다보다거보다같다주다대하다가다년한말일이말하다위하다그러나오다알다씨그렇다크다일사회많다안좋다더받다그것집나오다그리고문제그런살다저못하다생각하다모르다속만들다데앞경우중어떤잘그녀먹다자신문화원생각어떻다명통하다그러다그러다소리다시다른이런여자개정도다좀싶다보이다가지다함께아이지나다많이시간너인간사실나다이렇다어머니눈뭐점의하다시대다음이러하다누구'.split(''),
    hasRomanAid: true,
    hasAlternativeTranslation: false,
    hasAlphabetTopic: true,
    availableAsLearning: true,
    availableAsDevice: true,
  } as Language,
  [LanguageISO.ES]: {
    iso: LanguageISO.ES,
    name: LanguageName.Spanish,
    alphabet: 'abcdefghijklmnopqrstuvwxyz'.split(''),
    hasRomanAid: false,
    hasAlternativeTranslation: false,
    hasAlphabetTopic: false,
    availableAsLearning: true,
    availableAsDevice: true,
  } as Language,
  [LanguageISO.JP]: {
    iso: LanguageISO.JP,
    name: LanguageName.Japanese,
    alphabet: 'あいうえおかきくけこさsしすせそたちつてとなにぬねのはひふへほまみむめもらりるれろわをんがぎぐげござじずぜぞだぢづでどばびぶべぼぱぴぷぺぽやゆよ'.split(''),
    alternativeAlphabet: 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン'.split(''),
    hasRomanAid: true,
    hasAlternativeTranslation: true,
    hasAlphabetTopic: true,
    availableAsLearning: true,
    availableAsDevice: true,
  } as Language,
  [LanguageISO.FR]: {
    iso: LanguageISO.FR,
    name: LanguageName.French,
    alphabet: 'abcdefghijklmnopqrstuvwxyz'.split(''),
    hasRomanAid: false,
    hasAlternativeTranslation: false,
    hasAlphabetTopic: false,
    availableAsLearning: true,
    availableAsDevice: true,
  } as Language,
  [LanguageISO.EN]: {
    iso: LanguageISO.EN,
    name: LanguageName.English,
    alphabet: 'abcdefghijklmnopqrstuvwxyz'.split(''),
    hasRomanAid: false,
    hasAlternativeTranslation: false,
    hasAlphabetTopic: true,
    availableAsLearning: true,
    availableAsDevice: true,
  } as Language,
  [LanguageISO.ZH]: {
    iso: LanguageISO.ZH,
    name: LanguageName.Chinese,
    alphabet: '的壹是不了人我在有他这中大来上国个到说们为子和你地出道也时年得就那要下以生会自着去之过家学对可她里后小么心多天而能好都然没日于起还发成事只作当想看文无'.split(''),
    alternativeAlphabet: '的壹是不了人我在有他這中大來上國個到說們為子和你地出道也時年得就那要下以生會自著去之過家學對可她里後小麼心多天而能好都然沒日於起還發成事只作當想看文無(開手十用主行方又如前所本見經頭面公同三已老從動兩長'.split(''),
    hasRomanAid: true,
    hasAlternativeTranslation: true,
    hasAlphabetTopic: true,
    availableAsLearning: true,
    availableAsDevice: true,
  } as Language,
  [LanguageISO.IT]: {
    iso: LanguageISO.IT,
    name: LanguageName.Italian,
    alphabet: 'abcdefghijklmnopqrstuvwxyz'.split(''),
    hasRomanAid: false,
    hasAlternativeTranslation: false,
    hasAlphabetTopic: false,
    availableAsLearning: true,
    availableAsDevice: true,
  } as Language,
  [LanguageISO.DE]: {
    iso: LanguageISO.DE,
    name: LanguageName.German,
    alphabet: 'abcdefghijklmnopqrstuvwxyz'.split(''),
    hasRomanAid: false,
    hasAlternativeTranslation: false,
    hasAlphabetTopic: false,
    availableAsLearning: true,
    availableAsDevice: true,
  } as Language,
  [LanguageISO.RU]: {
    iso: LanguageISO.RU,
    name: LanguageName.Russian,
    alphabet: 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя'.split(''),
    hasRomanAid: true,
    hasAlternativeTranslation: false,
    hasAlphabetTopic: true,
    availableAsLearning: true,
    availableAsDevice: true,
  } as Language,
  [LanguageISO.PT]: {
    iso: LanguageISO.PT,
    name: LanguageName.Portuguese,
    alphabet: 'abcdefghijklmnopqrstuvwxyz'.split(''),
    hasRomanAid: false,
    hasAlternativeTranslation: false,
    hasAlphabetTopic: false,
    availableAsLearning: true,
    availableAsDevice: true,
  } as Language,
  [LanguageISO.HE]: {
    iso: LanguageISO.HE,
    name: LanguageName.Hebrew,
    alphabet: 'א,בּ,ב,ג,ד,ה,ו‬,ז‬,ח‬,ט,י,ך‬‬,כּ,כ,ךּ,ל,מ,ם,נ‬,ן,‬ס,ע,פּ,פ‬,ף,צ‬,ץ,ק,שׂ‬,תּ‬,שׁ‬,ר,ת‬‬'.split(','),
    hasRomanAid: true,
    hasAlternativeTranslation: true,
    hasAlphabetTopic: true,
    availableAsLearning: true,
    availableAsDevice: true,
  } as Language,
  [LanguageISO.AR]: {
    iso: LanguageISO.AR,
    name: LanguageName.Arabic,
    alphabet: 'ا,ب,ت,ث,ج,ح,خ,د,ذ,ر,ز,س,ش,ص,ض,ط,ظ,ع,غ,ف,ق,ك,ل,م,ن,ه,و,ي'.split(','),
    hasRomanAid: true,
    hasAlternativeTranslation: false,
    hasAlphabetTopic: true,
    availableAsLearning: true,
    availableAsDevice: true,
  } as Language,
  [LanguageISO.TR]: {
    iso: LanguageISO.TR,
    name: LanguageName.Turkish,
    alphabet: 'abcçdefgğhıijklmnoöprsştuüvyz'.split(''),
    hasRomanAid: false,
    hasAlternativeTranslation: false,
    hasAlphabetTopic: false,
    availableAsLearning: true,
    availableAsDevice: true,
  } as Language,
  [LanguageISO.DA]: {
    iso: LanguageISO.DA,
    name: LanguageName.Danish,
    alphabet: 'abcdefghijklmnopqrstuvwxyzåæø'.split(''),
    hasRomanAid: false,
    hasAlternativeTranslation: false,
    hasAlphabetTopic: false,
    availableAsLearning: true,
    availableAsDevice: true,
  } as Language,
  [LanguageISO.SV]: {
    iso: LanguageISO.SV,
    name: LanguageName.Swedish,
    alphabet: 'abcdefghijklmnopqrstuvwxyzåäö'.split(''),
    hasRomanAid: false,
    hasAlternativeTranslation: false,
    hasAlphabetTopic: false,
    availableAsLearning: true,
    availableAsDevice: true,
  } as Language,
  [LanguageISO.NO]: {
    iso: LanguageISO.NO,
    name: LanguageName.Norwegian,
    alphabet: 'abcdefghijklmnopqrstuvwxyzæøå'.split(''),
    hasRomanAid: false,
    hasAlternativeTranslation: false,
    hasAlphabetTopic: false,
    availableAsLearning: true,
    availableAsDevice: true,
  } as Language,
  [LanguageISO.HI]: {
    iso: LanguageISO.HI,
    name: LanguageName.Hindi,
    alphabet: 'अ,आ,ए,ई,ऍ,ऎ,इ,ओ,ऑ,ऊ,औ,उ,ब,भ,च,छ,ड,फ,फ़,ग,घ,ग़,ह,झ,क,ख,ल,ळ,ऌ,ॡ,म,न,ङ,ञ,ण,ऩ,ॐ,क़,र,ऋ,ऱ,स,श,ष,ट,त,ठ,थ,ध,ड़,व,यज़'.split(','),
    hasRomanAid: true,
    hasAlternativeTranslation: false,
    hasAlphabetTopic: true,
    availableAsLearning: true,
    availableAsDevice: true,
  } as Language,
  [LanguageISO.TL]: {
    iso: LanguageISO.TL,
    name: LanguageName.Tagalog,
    alphabet: 'abcdefghijklmnñopqrstuvwxyz'.split(''),
    hasRomanAid: false,
    hasAlternativeTranslation: false,
    hasAlphabetTopic: false,
    availableAsLearning: true,
    availableAsDevice: true,
  } as Language,
  [LanguageISO.VI]: {
    iso: LanguageISO.VI,
    name: LanguageName.Vietnamese,
    alphabet: 'a,b,c,d,e,g,h,i,k,l,m,n,o,p,q,r,s,t,u,v,x,y,ô,ơ,â,ă,ê,ư,đ'.split(','),
    hasRomanAid: false,
    hasAlternativeTranslation: false,
    hasAlphabetTopic: false,
    availableAsLearning: true,
    availableAsDevice: true,
  } as Language,
  [LanguageISO.EO]: {
    iso: LanguageISO.EO,
    name: LanguageName.Esperanto,
    alphabet: 'abcdefghijklmnopqrstuvwxyz'.split(''),
    hasRomanAid: false,
    hasAlternativeTranslation: false,
    hasAlphabetTopic: false,
    availableAsLearning: true,
    availableAsDevice: true,
  } as Language,
  [LanguageISO.HU]: {
    iso: LanguageISO.HU,
    name: LanguageName.Hungarian,
    alphabet: 'abcdefghijklmnopqrstuvwxyz'.split(''),
    hasRomanAid: false,
    hasAlternativeTranslation: false,
    hasAlphabetTopic: false,
    availableAsLearning: true,
    availableAsDevice: true,
  } as Language,
  [LanguageISO.NL]: {
    iso: LanguageISO.NL,
    name: LanguageName.Dutch,
    alphabet: 'abcdefghijklmnopqrstuvwxyz'.split(''),
    hasRomanAid: false,
    hasAlternativeTranslation: false,
    hasAlphabetTopic: false,
    availableAsLearning: true,
    availableAsDevice: true,
  } as Language,
  [LanguageISO.IC]: {
    iso: LanguageISO.IC,
    name: LanguageName.Icelandic,
    alphabet: 'abcdefghijklmnopqrstuvwxyzáðéíóúýþæö'.split(''),
    hasRomanAid: false,
    hasAlternativeTranslation: false,
    hasAlphabetTopic: false,
    availableAsLearning: true,
    availableAsDevice: true,
  } as Language,
  [LanguageISO.ID]: {
    iso: LanguageISO.ID,
    name: LanguageName.Indonesian,
    alphabet: 'abcdefghijklmnopqrstuvwxyz'.split(''),
    hasRomanAid: false,
    hasAlternativeTranslation: false,
    hasAlphabetTopic: false,
    availableAsLearning: true,
    availableAsDevice: true,
  } as Language,
  [LanguageISO.ENGB]: {
    iso: LanguageISO.ENGB,
    name: LanguageName.EnglishBritish,
    alphabet: 'abcdefghijklmnopqrstuvwxyz'.split(''),
    hasRomanAid: false,
    hasAlternativeTranslation: false,
    hasAlphabetTopic: false,
    availableAsLearning: true,
    availableAsDevice: true,
  } as Language,
  [LanguageISO.ESMX]: {
    iso: LanguageISO.ESMX,
    name: LanguageName.SpanishLatin,
    alphabet: 'abcdefghijklmnopqrstuvwxyz'.split(''),
    hasRomanAid: false,
    hasAlternativeTranslation: false,
    hasAlphabetTopic: false,
    availableAsLearning: true,
    availableAsDevice: true,
  } as Language,
  [LanguageISO.PTPT]: {
    iso: LanguageISO.PTPT,
    name: LanguageName.PortugueseEuropean,
    alphabet: 'abcdefghijklmnopqrstuvwxyz'.split(''),
    hasRomanAid: false,
    hasAlternativeTranslation: false,
    hasAlphabetTopic: false,
    availableAsLearning: true,
    availableAsDevice: true,
  } as Language,
  [LanguageISO.ZHYUE]: {
    iso: LanguageISO.ZHYUE,
    name: LanguageName.ChineseCantonese,
    alphabet: '的壹是不了人我在有他这中大来上国个到说们为子和你地出道也时年得就那要下以生会自着去之过家学对可她里后小么心多天而能好都然没日于起还发成事只作当想看文无'.split(''),
    hasRomanAid: true,
    hasAlternativeTranslation: true,
    hasAlphabetTopic: false,
    availableAsLearning: true,
    availableAsDevice: true,
  } as Language,
  [LanguageISO.TH]: {
    iso: LanguageISO.TH,
    name: LanguageName.Thai,
    alphabet: 'ก,ข,ฃ,ค,ฅ,ฆ,ง,จ,ฉ,ช,ซ,ฌ,ญ,ฎ,ฏ,ฐ,ฑ,ฒ,ณ,ด,ต,ถ,ท,ธ,น,บ,ป,ผ,ฝ,พ,ฟ,ภ,ม,ย,ร,ล,ว,ศ,ษ,ส,ห,ฬ,อ,ฮ,'.split(','),
    hasRomanAid: true,
    hasAlternativeTranslation: false,
    hasAlphabetTopic: true,
    availableAsLearning: true,
    availableAsDevice: true,
  } as Language,
  [LanguageISO.PL]: {
    iso: LanguageISO.PL,
    name: LanguageName.Polish,
    alphabet: 'abcdefghijklmnopqrstuvwxyz'.split(''),
    hasRomanAid: false,
    hasAlternativeTranslation: false,
    hasAlphabetTopic: false,
    availableAsLearning: true,
    availableAsDevice: true,
  } as Language,
  [LanguageISO.HAW]: {
    iso: LanguageISO.HAW,
    name: LanguageName.Hawaiian,
    alphabet: 'abcdefghijklmnopqrstuvwxyz'.split(''),
    hasRomanAid: false,
    hasAlternativeTranslation: false,
    hasAlphabetTopic: false,
    availableAsLearning: true,
    availableAsDevice: false,
  } as Language,
  [LanguageISO.PA]: {
    iso: LanguageISO.PA,
    name: LanguageName.Punjabi,
    alphabet: ''.split(''),
    hasRomanAid: true,
    hasAlternativeTranslation: false,
    hasAlphabetTopic: false,
    availableAsLearning: false,
    availableAsDevice: false,
  } as Language,
  [LanguageISO.MI]: {
    iso: LanguageISO.MI,
    name: LanguageName.Maori,
    alphabet: 'a,e,h,i,k,m,n,ng,o,p,r,t,u,w,wh'.split(','),
    hasRomanAid: false,
    hasAlternativeTranslation: false,
    hasAlphabetTopic: false,
    availableAsLearning: true,
    availableAsDevice: false,
  } as Language,
  [LanguageISO.SM]: {
    iso: LanguageISO.SM,
    name: LanguageName.Samoan,
    alphabet: 'a,e,i,o,u,f,g,l,m,n,p,s,t,v'.split(','),
    hasRomanAid: false,
    hasAlternativeTranslation: false,
    hasAlphabetTopic: false,
    availableAsLearning: true,
    availableAsDevice: false,
  } as Language,
  [LanguageISO.EL]: {
    iso: LanguageISO.EL,
    name: LanguageName.Greek,
    alphabet: 'α,β,γ,δ,ε,ζ,η,θ,ι,κ,λ,μ,ν,ξ,ο,π,ρ,σ,τ,υ,φ,χ,ψ,ω'.split(','),
    hasRomanAid: true,
    hasAlternativeTranslation: false,
    hasAlphabetTopic: true,
    availableAsLearning: false,
    availableAsDevice: false,
  } as Language,
  [LanguageISO.FI]: {
    iso: LanguageISO.FI,
    name: LanguageName.Finnish,
    alphabet: 'abcdefghijklmnopqrstuvwxyz'.split(''),
    hasRomanAid: false,
    hasAlternativeTranslation: false,
    hasAlphabetTopic: false,
    availableAsLearning: false,
    availableAsDevice: false,
  } as Language,
  [LanguageISO.ASE]: {
    iso: LanguageISO.ASE,
    name: LanguageName.ASL,
    alphabet: 'abcdefghijklmnopqrstuvwxyz'.split(''),
    hasRomanAid: false,
    hasAlternativeTranslation: false,
    hasAlphabetTopic: true,
    availableAsLearning: true,
    availableAsDevice: false,
  } as Language,
  [LanguageISO.AIN]: {
    iso: LanguageISO.AIN,
    name: LanguageName.Ainu,
    alphabet: 'ㇰ,ㇱ,ㇲ,ㇳ,ㇴ,ㇵ,ㇶ,ㇷ,ㇸ,ㇹ,ㇺ,ㇻ,ㇼ,ㇽ,ㇾ,ㇿ'.split(','),
    hasRomanAid: true,
    hasAlternativeTranslation: false,
    hasAlphabetTopic: false,
    availableAsLearning: false,
    availableAsDevice: false,
  },
}
