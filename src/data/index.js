import * as ALPHA_2 from '../constants/alpha-2';

const NANP = '+# (###) ###-####';

const COUNTRY_DATA_WITH_MASKS = [
  { alpha2: ALPHA_2.US, countryCode: '+1', masks: [NANP] },
  { alpha2: ALPHA_2.CA, countryCode: '+1', masks: [NANP] },
  { alpha2: ALPHA_2.AG, countryCode: '+1268', masks: [NANP] },
  { alpha2: ALPHA_2.AI, countryCode: '+1264', masks: [NANP] },
  { alpha2: ALPHA_2.AS, countryCode: '+1684', masks: [NANP] },
  { alpha2: ALPHA_2.BB, countryCode: '+1246', masks: [NANP] },
  { alpha2: ALPHA_2.BM, countryCode: '+1441', masks: [NANP] },
  { alpha2: ALPHA_2.BS, countryCode: '+1242', masks: [NANP] },
  { alpha2: ALPHA_2.DM, countryCode: '+1767', masks: [NANP] },
  { alpha2: ALPHA_2.DO_1, countryCode: '+1809', masks: [NANP] },
  { alpha2: ALPHA_2.DO_2, countryCode: '+1829', masks: [NANP] },
  { alpha2: ALPHA_2.DO_3, countryCode: '+1849', masks: [NANP] },
  { alpha2: ALPHA_2.GD, countryCode: '+1473', masks: [NANP] },
  { alpha2: ALPHA_2.GU, countryCode: '+1671', masks: [NANP] },
  { alpha2: ALPHA_2.JM, countryCode: '+1876', masks: [NANP] },
  { alpha2: ALPHA_2.KN, countryCode: '+1869', masks: [NANP] },
  { alpha2: ALPHA_2.KY, countryCode: '+1345', masks: [NANP] },
  { alpha2: ALPHA_2.LC, countryCode: '+1758', masks: [NANP] },
  { alpha2: ALPHA_2.MP, countryCode: '+1670', masks: [NANP] },
  { alpha2: ALPHA_2.MS, countryCode: '+1664', masks: [NANP] },
  { alpha2: ALPHA_2.PR_1, countryCode: '+1787', masks: [NANP] },
  { alpha2: ALPHA_2.PR_2, countryCode: '+1939', masks: [NANP] },
  { alpha2: ALPHA_2.SX, countryCode: '+1721', masks: [NANP] },
  { alpha2: ALPHA_2.TC, countryCode: '+1649', masks: [NANP] },
  { alpha2: ALPHA_2.TT, countryCode: '+1868', masks: [NANP] },
  { alpha2: ALPHA_2.VC, countryCode: '+1784', masks: [NANP] },
  { alpha2: ALPHA_2.VG, countryCode: '+1284', masks: [NANP] },
  { alpha2: ALPHA_2.VI, countryCode: '+1340', masks: [NANP] },
  { alpha2: ALPHA_2.BE, countryCode: '+32', masks: ['+## ### ## ## ##'] },
  { alpha2: ALPHA_2.AT,
    countryCode: '+43',
    masks: [
      '+## ### ###',
      '+## ### ####',
      '+## ### #####',
      '+## ### ######',
      '+## ### #######',
      '+## ### ########',
      '+## ### #########',
      '+## ### ##########',
      '+## ### ###########',
      '+## ### ############',
    ],
  },
  { alpha2: ALPHA_2.GB, countryCode: '+44', masks: ['+## #### ######'] },
  { alpha2: ALPHA_2.CN, countryCode: '+86', masks: ['+## ###-####-####'] },
  { alpha2: ALPHA_2.FR, countryCode: '+33', masks: ['+## # ## ## ## ##'] },
  { alpha2: ALPHA_2.DE, countryCode: '+49', masks: ['+## ### ########'] },
  { alpha2: ALPHA_2.IN, countryCode: '+91', masks: ['+## ####-######'] },
  { alpha2: ALPHA_2.ID, countryCode: '+62', masks: ['+## ###-####-####'] },
  { alpha2: ALPHA_2.JP, countryCode: '+81', masks: ['+## ##-####-####'] },
  { alpha2: ALPHA_2.KR, countryCode: '+82', masks: ['+## ##-####-####'] },
  { alpha2: ALPHA_2.PL, countryCode: '+48', masks: ['+## ## ### ## ##'] },
  { alpha2: ALPHA_2.KZ, countryCode: '+7', masks: ['+# (###) ###-##-##'] },
  { alpha2: ALPHA_2.RU, countryCode: '+7', masks: ['+# (###) ###-##-##'] },
  { alpha2: ALPHA_2.ES, countryCode: '+34', masks: ['+## ### ### ###'] },
  { alpha2: ALPHA_2.UA, countryCode: '+380', masks: ['+### (##) ###-##-##'] },
];

const COUNTRY_DATA_WITH_NO_MASKS = [
  { alpha2: ALPHA_2.EG, countryCode: '+20' },
  { alpha2: ALPHA_2.SS, countryCode: '+211' },
  { alpha2: ALPHA_2.MA, countryCode: '+212' },
  { alpha2: ALPHA_2.DZ, countryCode: '+213' },
  { alpha2: ALPHA_2.TN, countryCode: '+216' },
  { alpha2: ALPHA_2.LY, countryCode: '+218' },
  { alpha2: ALPHA_2.GM, countryCode: '+220' },
  { alpha2: ALPHA_2.SN, countryCode: '+221' },
  { alpha2: ALPHA_2.MR, countryCode: '+222' },
  { alpha2: ALPHA_2.ML, countryCode: '+223' },
  { alpha2: ALPHA_2.GN, countryCode: '+224' },
  { alpha2: ALPHA_2.CI, countryCode: '+225' },
  { alpha2: ALPHA_2.BF, countryCode: '+226' },
  { alpha2: ALPHA_2.NE, countryCode: '+227' },
  { alpha2: ALPHA_2.TG, countryCode: '+228' },
  { alpha2: ALPHA_2.BJ, countryCode: '+229' },
  { alpha2: ALPHA_2.MU, countryCode: '+230' },
  { alpha2: ALPHA_2.LR, countryCode: '+231' },
  { alpha2: ALPHA_2.SL, countryCode: '+232' },
  { alpha2: ALPHA_2.GH, countryCode: '+233' },
  { alpha2: ALPHA_2.NG, countryCode: '+234' },
  { alpha2: ALPHA_2.TD, countryCode: '+235' },
  { alpha2: ALPHA_2.CF, countryCode: '+236' },
  { alpha2: ALPHA_2.CM, countryCode: '+237' },
  { alpha2: ALPHA_2.CV, countryCode: '+238' },
  { alpha2: ALPHA_2.ST, countryCode: '+239' },
  { alpha2: ALPHA_2.GQ, countryCode: '+240' },
  { alpha2: ALPHA_2.GA, countryCode: '+241' },
  { alpha2: ALPHA_2.CG, countryCode: '+242' },
  { alpha2: ALPHA_2.CD, countryCode: '+243' },
  { alpha2: ALPHA_2.AO, countryCode: '+244' },
  { alpha2: ALPHA_2.GW, countryCode: '+245' },
  { alpha2: ALPHA_2.IO, countryCode: '+246' },
  { alpha2: ALPHA_2.AC, countryCode: '+247' },
  { alpha2: ALPHA_2.SC, countryCode: '+248' },
  { alpha2: ALPHA_2.SD, countryCode: '+249' },
  { alpha2: ALPHA_2.RW, countryCode: '+250' },
  { alpha2: ALPHA_2.ET, countryCode: '+251' },
  { alpha2: ALPHA_2.SO, countryCode: '+252' },
  { alpha2: ALPHA_2.DJ, countryCode: '+253' },
  { alpha2: ALPHA_2.KE, countryCode: '+254' },
  { alpha2: ALPHA_2.TZ, countryCode: '+255' },
  { alpha2: ALPHA_2.UG, countryCode: '+256' },
  { alpha2: ALPHA_2.BI, countryCode: '+257' },
  { alpha2: ALPHA_2.MZ, countryCode: '+258' },
  { alpha2: ALPHA_2.ZM, countryCode: '+260' },
  { alpha2: ALPHA_2.MG, countryCode: '+261' },
  { alpha2: ALPHA_2.RE, countryCode: '+262' },
  { alpha2: ALPHA_2.YT, countryCode: '+262' },
  { alpha2: ALPHA_2.TF, countryCode: '+262' },
  { alpha2: ALPHA_2.ZW, countryCode: '+263' },
  { alpha2: ALPHA_2.NA, countryCode: '+264' },
  { alpha2: ALPHA_2.MW, countryCode: '+265' },
  { alpha2: ALPHA_2.LS, countryCode: '+266' },
  { alpha2: ALPHA_2.BW, countryCode: '+267' },
  { alpha2: ALPHA_2.SZ, countryCode: '+268' },
  { alpha2: ALPHA_2.KM, countryCode: '+269' },
  { alpha2: ALPHA_2.ZA, countryCode: '+27' },
  { alpha2: ALPHA_2.SH, countryCode: '+290' },
  { alpha2: ALPHA_2.TA, countryCode: '+290' },
  { alpha2: ALPHA_2.ER, countryCode: '+291' },
  { alpha2: ALPHA_2.AW, countryCode: '+297' },
  { alpha2: ALPHA_2.FO, countryCode: '+298' },
  { alpha2: ALPHA_2.GL, countryCode: '+299' },
  { alpha2: ALPHA_2.GR, countryCode: '+30' },
  { alpha2: ALPHA_2.NL, countryCode: '+31' },
  { alpha2: ALPHA_2.GI, countryCode: '+350' },
  { alpha2: ALPHA_2.PT, countryCode: '+351' },
  { alpha2: ALPHA_2.LU, countryCode: '+352' },
  { alpha2: ALPHA_2.IE, countryCode: '+353' },
  { alpha2: ALPHA_2.IS, countryCode: '+354' },
  { alpha2: ALPHA_2.AL, countryCode: '+355' },
  { alpha2: ALPHA_2.MT, countryCode: '+356' },
  { alpha2: ALPHA_2.CY, countryCode: '+357' },
  { alpha2: ALPHA_2.FI, countryCode: '+358' },
  { alpha2: ALPHA_2.AX, countryCode: '+358' },
  { alpha2: ALPHA_2.BG, countryCode: '+359' },
  { alpha2: ALPHA_2.HU, countryCode: '+36' },
  { alpha2: ALPHA_2.LT, countryCode: '+370' },
  { alpha2: ALPHA_2.LV, countryCode: '+371' },
  { alpha2: ALPHA_2.EE, countryCode: '+372' },
  { alpha2: ALPHA_2.MD, countryCode: '+373' },
  { alpha2: ALPHA_2.AM, countryCode: '+374' },
  { alpha2: ALPHA_2.QN, countryCode: '+374' },
  { alpha2: ALPHA_2.BY, countryCode: '+375' },
  { alpha2: ALPHA_2.AD, countryCode: '+376' },
  { alpha2: ALPHA_2.MC, countryCode: '+377' },
  { alpha2: ALPHA_2.SM, countryCode: '+378' },
  { alpha2: ALPHA_2.VA_1, countryCode: '+379' },
  { alpha2: ALPHA_2.RS, countryCode: '+381' },
  { alpha2: ALPHA_2.ME, countryCode: '+382' },
  { alpha2: ALPHA_2.XK, countryCode: '+383' },
  { alpha2: ALPHA_2.HR, countryCode: '+385' },
  { alpha2: ALPHA_2.SI, countryCode: '+386' },
  { alpha2: ALPHA_2.BA, countryCode: '+387' },
  { alpha2: ALPHA_2.MK, countryCode: '+389' },
  { alpha2: ALPHA_2.IT, countryCode: '+39' },
  { alpha2: ALPHA_2.VA_2, countryCode: '+39' },
  { alpha2: ALPHA_2.RO, countryCode: '+40' },
  { alpha2: ALPHA_2.CH, countryCode: '+41' },
  { alpha2: ALPHA_2.CZ, countryCode: '+420' },
  { alpha2: ALPHA_2.SK, countryCode: '+421' },
  { alpha2: ALPHA_2.LI, countryCode: '+423' },
  { alpha2: ALPHA_2.GG, countryCode: '+44' },
  { alpha2: ALPHA_2.IM, countryCode: '+44' },
  { alpha2: ALPHA_2.JE, countryCode: '+44' },
  { alpha2: ALPHA_2.DK, countryCode: '+45' },
  { alpha2: ALPHA_2.SE, countryCode: '+46' },
  { alpha2: ALPHA_2.NO, countryCode: '+47' },
  { alpha2: ALPHA_2.SJ, countryCode: '+47' },
  { alpha2: ALPHA_2.FK, countryCode: '+500' },
  { alpha2: ALPHA_2.GS, countryCode: '+500' },
  { alpha2: ALPHA_2.BZ, countryCode: '+501' },
  { alpha2: ALPHA_2.GT, countryCode: '+502' },
  { alpha2: ALPHA_2.SV, countryCode: '+503' },
  { alpha2: ALPHA_2.HN, countryCode: '+504' },
  { alpha2: ALPHA_2.NI, countryCode: '+505' },
  { alpha2: ALPHA_2.CR, countryCode: '+506' },
  { alpha2: ALPHA_2.PA, countryCode: '+507' },
  { alpha2: ALPHA_2.PM, countryCode: '+508' },
  { alpha2: ALPHA_2.HT, countryCode: '+509' },
  { alpha2: ALPHA_2.PE, countryCode: '+51' },
  { alpha2: ALPHA_2.MX, countryCode: '+52' },
  { alpha2: ALPHA_2.CU, countryCode: '+53' },
  { alpha2: ALPHA_2.AR, countryCode: '+54' },
  { alpha2: ALPHA_2.BR, countryCode: '+55' },
  { alpha2: ALPHA_2.CL, countryCode: '+56' },
  { alpha2: ALPHA_2.CO, countryCode: '+57' },
  { alpha2: ALPHA_2.VE, countryCode: '+58' },
  { alpha2: ALPHA_2.GP, countryCode: '+590' },
  { alpha2: ALPHA_2.BL, countryCode: '+590' },
  { alpha2: ALPHA_2.MF, countryCode: '+590' },
  { alpha2: ALPHA_2.BO, countryCode: '+591' },
  { alpha2: ALPHA_2.GY, countryCode: '+592' },
  { alpha2: ALPHA_2.EC, countryCode: '+593' },
  { alpha2: ALPHA_2.GF, countryCode: '+594' },
  { alpha2: ALPHA_2.PY, countryCode: '+595' },
  { alpha2: ALPHA_2.MQ, countryCode: '+596' },
  { alpha2: ALPHA_2.SR, countryCode: '+597' },
  { alpha2: ALPHA_2.UY, countryCode: '+598' },
  { alpha2: ALPHA_2.BQ, countryCode: '+599' },
  { alpha2: ALPHA_2.CW, countryCode: '+599' },
  { alpha2: ALPHA_2.MY, countryCode: '+60' },
  { alpha2: ALPHA_2.AU, countryCode: '+61' },
  { alpha2: ALPHA_2.CX, countryCode: '+61' },
  { alpha2: ALPHA_2.CC, countryCode: '+61' },
  { alpha2: ALPHA_2.PH, countryCode: '+63' },
  { alpha2: ALPHA_2.NZ, countryCode: '+64' },
  { alpha2: ALPHA_2.PN, countryCode: '+64' },
  { alpha2: ALPHA_2.SG, countryCode: '+65' },
  { alpha2: ALPHA_2.TH, countryCode: '+66' },
  { alpha2: ALPHA_2.TL, countryCode: '+670' },
  { alpha2: ALPHA_2.NF, countryCode: '+672' },
  { alpha2: ALPHA_2.AQ, countryCode: '+672' },
  { alpha2: ALPHA_2.BN, countryCode: '+673' },
  { alpha2: ALPHA_2.NR, countryCode: '+674' },
  { alpha2: ALPHA_2.PG, countryCode: '+675' },
  { alpha2: ALPHA_2.TO, countryCode: '+676' },
  { alpha2: ALPHA_2.SB, countryCode: '+677' },
  { alpha2: ALPHA_2.VU, countryCode: '+678' },
  { alpha2: ALPHA_2.FJ, countryCode: '+679' },
  { alpha2: ALPHA_2.PW, countryCode: '+680' },
  { alpha2: ALPHA_2.WF, countryCode: '+681' },
  { alpha2: ALPHA_2.CK, countryCode: '+682' },
  { alpha2: ALPHA_2.NU, countryCode: '+683' },
  { alpha2: ALPHA_2.WS, countryCode: '+685' },
  { alpha2: ALPHA_2.XT, countryCode: '+800' },
  { alpha2: ALPHA_2.XS, countryCode: '+808' },
  { alpha2: ALPHA_2.VN, countryCode: '+84' },
  { alpha2: ALPHA_2.KP, countryCode: '+850' },
  { alpha2: ALPHA_2.HK, countryCode: '+852' },
  { alpha2: ALPHA_2.MO, countryCode: '+853' },
  { alpha2: ALPHA_2.KH, countryCode: '+854' },
  { alpha2: ALPHA_2.LA, countryCode: '+856' },
  { alpha2: ALPHA_2.XN, countryCode: '+870' },
  { alpha2: ALPHA_2.XP, countryCode: '+878' },
  { alpha2: ALPHA_2.BD, countryCode: '+880' },
  { alpha2: ALPHA_2.XG, countryCode: '+881' },
  { alpha2: ALPHA_2.XV_1, countryCode: '+882' },
  { alpha2: ALPHA_2.XV_2, countryCode: '+883' },
  { alpha2: ALPHA_2.TW, countryCode: '+886' },
  { alpha2: ALPHA_2.XD, countryCode: '+888' },
  { alpha2: ALPHA_2.TR, countryCode: '+90' },
  { alpha2: ALPHA_2.CT, countryCode: '+90' },
  { alpha2: ALPHA_2.PK, countryCode: '+92' },
  { alpha2: ALPHA_2.AF, countryCode: '+93' },
  { alpha2: ALPHA_2.LK, countryCode: '+94' },
  { alpha2: ALPHA_2.MM, countryCode: '+95' },
  { alpha2: ALPHA_2.MV, countryCode: '+960' },
  { alpha2: ALPHA_2.LB, countryCode: '+961' },
  { alpha2: ALPHA_2.JO, countryCode: '+962' },
  { alpha2: ALPHA_2.SY, countryCode: '+963' },
  { alpha2: ALPHA_2.IQ, countryCode: '+964' },
  { alpha2: ALPHA_2.KW, countryCode: '+965' },
  { alpha2: ALPHA_2.SA, countryCode: '+966' },
  { alpha2: ALPHA_2.YE, countryCode: '+967' },
  { alpha2: ALPHA_2.OM, countryCode: '+968' },
  { alpha2: ALPHA_2.PS, countryCode: '+970' },
  { alpha2: ALPHA_2.AE, countryCode: '+971' },
  { alpha2: ALPHA_2.IL, countryCode: '+972' },
  { alpha2: ALPHA_2.BH, countryCode: '+973' },
  { alpha2: ALPHA_2.QA, countryCode: '+974' },
  { alpha2: ALPHA_2.BT, countryCode: '+975' },
  { alpha2: ALPHA_2.MN, countryCode: '+976' },
  { alpha2: ALPHA_2.NP, countryCode: '+977' },
  { alpha2: ALPHA_2.IR, countryCode: '+98' },
  { alpha2: ALPHA_2.TJ, countryCode: '+992' },
  { alpha2: ALPHA_2.TM, countryCode: '+993' },
  { alpha2: ALPHA_2.AZ, countryCode: '+994' },
  { alpha2: ALPHA_2.GE, countryCode: '+995' },
  { alpha2: ALPHA_2.KG, countryCode: '+996' },
  { alpha2: ALPHA_2.UZ, countryCode: '+998' },
];

export default [
  ...COUNTRY_DATA_WITH_MASKS,
  ...COUNTRY_DATA_WITH_NO_MASKS,
];