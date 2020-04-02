export enum AppType {
  int = 'int',
  local_hu = 'local_hu',
  local_ar = 'local_ar',
  lang_ru = 'lang_ru',
  lang_ar = 'lang_ar',
  lang_zh = 'lang_zh',
  lang_zhyue = 'lang_zhyue',
  lang_da = 'lang_da',
  lang_en = 'lang_en',
  lang_enus = 'lang_enus',
  lang_fr = 'lang_fr',
  lang_de = 'lang_de',
  lang_it = 'lang_it',
  lang_he = 'lang_he',
  lang_hu = 'lang_hu',
  lang_ja = 'lang_ja',
  lang_ko = 'lang_ko',
  lang_pt = 'lang_pt',
  lang_ptbr = 'lang_ptbr',
  lang_es = 'lang_es',
  lang_esmx = 'lang_esmx',
  lang_tl = 'lang_tl',
  lang_tr = 'lang_tr',
  lang_sv = 'lang_sv',
  lang_no = 'lang_no',
  lang_hi = 'lang_hi',
  lang_vi = 'lang_vi',
  lang_id = 'lang_id',
  lang_nl = 'lang_nl',
  lang_ic = 'lang_ic',
  lang_eo = 'lang_eo',
  lang_pl = 'lang_pl',
  lang_th = 'lang_th',
  scripts = 'scripts',
  local_zh = 'local_zh',
  global_eagle = 'global_eagle',
  lang_haw = 'lang_haw',
  lang_mi = 'lang_mi',
  lang_sm = 'lang_sm',
  lang_el = 'lang_el',
  lang_fi = 'lang_fi',
  droplets = 'droplets',
  upopoy = 'upopoy',
}

export namespace AppType {
  export const transformAppType = (input: string): AppType => {
    if (!Object.keys(AppType).includes(input)) { Error('AppType wasnt recognised: ' + input) }
    return input as any as AppType
  }

  export const all: AppType[] = Object.values(AppType).filter((v) => typeof v === 'string')
}
