import assert from 'assert';
import formatPhoneNumber, {
  ALPHA_2,
  getAllData,
  getFullMasksByAlpha2,
  getShortMasksByAlpha2,
  getCountryCodeByAlpha2,
  getCountryDataByAlpha2,
  getE123Masks,
  removeNonDigitAndNonPlusChars,
} from '../src';

const runFormatMergedNumberTest = (inputNumber, expectedResult) => {
  const formattedNumber = formatPhoneNumber(inputNumber);
  assert.equal(formattedNumber, expectedResult);
};

const runFormatSeparatedNumberTest = (inputCountryCode, inputNumber, expectedResult) => {
  const formattedNumber = formatPhoneNumber(inputCountryCode, inputNumber);
  assert.equal(formattedNumber, expectedResult);
};

describe('response type', () => {
  it('getAllData response is array', () => {
    assert.equal(getAllData() instanceof Array, true);
  });
  it('getFullMasksByAlpha2 response is array', () => {
    assert.equal(getFullMasksByAlpha2(ALPHA_2.UA) instanceof Array, true);
  });
  it('getShortMasksByAlpha2 response is array', () => {
    assert.equal(getShortMasksByAlpha2(ALPHA_2.UA) instanceof Array, true);
  });
  it('getCountryDataByAlpha2 response is array', () => {
    assert.equal(typeof getCountryDataByAlpha2(ALPHA_2.UA), 'object');
  });
  it('getE123Masks response is array', () => {
    assert.equal(getE123Masks(ALPHA_2.UA) instanceof Array, true);
  });
});

describe('response getFullMasksByAlpha2', () => {
  it('getFullMasksByAlpha2 ALPHA_2.UA', () => {
    assert.deepEqual(getFullMasksByAlpha2(ALPHA_2.UA), ['+### (##) ###-##-##']);
  });
  it('getFullMasksByAlpha2 pr', () => {
    assert.deepEqual(getFullMasksByAlpha2('pr'), undefined);
  });
});

describe('response getShortMasksByAlpha2', () => {
  it('getShortMasksByAlpha2 ALPHA_2.UA', () => {
    assert.deepEqual(getShortMasksByAlpha2(ALPHA_2.UA), ['(##) ###-##-##']);
  });
  it('getShortMasksByAlpha2 pr', () => {
    assert.deepEqual(getShortMasksByAlpha2('pr'), undefined);
  });
});

describe('response getE123Masks', () => {
  it('getE123Masks +380', () => {
    assert.equal(getE123Masks('+380')[0], '+### ####');
  });
  it('getE123Masks +1787', () => {
    assert.equal(getE123Masks('+1787')[0], '+#### ####');
  });
});

describe('mask defined, number clean', () => {
  describe('format Austrian number (code + 3)', () => {
    const countryCode = getCountryCodeByAlpha2(ALPHA_2.AT);
    const number = '650111';
    const expectedResult = `${countryCode} 650 111`;
    it('merged ', () => runFormatMergedNumberTest(`${countryCode}${number}`, expectedResult));
    it('separated', () => runFormatSeparatedNumberTest(countryCode, number, expectedResult));
  });

  describe('format Austrian number (code + 4)', () => {
    const countryCode = getCountryCodeByAlpha2(ALPHA_2.AT);
    const number = '6501111';
    const expectedResult = `${countryCode} 650 1111`;
    it('merged ', () => runFormatMergedNumberTest(`${countryCode}${number}`, expectedResult));
    it('separated', () => runFormatSeparatedNumberTest(countryCode, number, expectedResult));
  });

  describe('format Belgian number', () => {
    const countryCode = getCountryCodeByAlpha2(ALPHA_2.BE);
    const number = '471234567';
    const expectedResult = `${countryCode} 471 23 45 67`;
    it('merged ', () => runFormatMergedNumberTest(`${countryCode}${number}`, expectedResult));
    it('separated', () => runFormatSeparatedNumberTest(countryCode, number, expectedResult));
  });

  describe('format British number', () => {
    const countryCode = getCountryCodeByAlpha2(ALPHA_2.GB);
    const number = '7078546543';
    const expectedResult = `${countryCode} 7078 546543`;
    it('merged ', () => runFormatMergedNumberTest(`${countryCode}${number}`, expectedResult));
    it('separated', () => runFormatSeparatedNumberTest(countryCode, number, expectedResult));
  });

  describe('format Canadian & US number', () => {
    const countryCode = getCountryCodeByAlpha2(ALPHA_2.US);
    const number = '2342355678';
    const expectedResult = `${countryCode} (234) 235-5678`;
    it('merged ', () => runFormatMergedNumberTest(`${countryCode}${number}`, expectedResult));
    it('separated', () => runFormatSeparatedNumberTest(countryCode, number, expectedResult));
  });

  describe('format Chinese number', () => {
    const countryCode = getCountryCodeByAlpha2(ALPHA_2.CN);
    const number = '13077889900';
    const expectedResult = `${countryCode} 130-7788-9900`;
    it('merged ', () => runFormatMergedNumberTest(`${countryCode}${number}`, expectedResult));
    it('separated', () => runFormatSeparatedNumberTest(countryCode, number, expectedResult));
  });

  describe('format Franch number', () => {
    const countryCode = getCountryCodeByAlpha2(ALPHA_2.FR);
    const number = '633162923';
    const expectedResult = `${countryCode} 6 33 16 29 23`;
    it('merged ', () => runFormatMergedNumberTest(`${countryCode}${number}`, expectedResult));
    it('separated', () => runFormatSeparatedNumberTest(countryCode, number, expectedResult));
  });

  describe('format German number', () => {
    const countryCode = getCountryCodeByAlpha2(ALPHA_2.DE);
    const number = '17620036229';
    const expectedResult = `${countryCode} 176 20036229`;
    it('merged ', () => runFormatMergedNumberTest(`${countryCode}${number}`, expectedResult));
    it('separated', () => runFormatSeparatedNumberTest(countryCode, number, expectedResult));
  });

  describe('format Indian number', () => {
    const countryCode = getCountryCodeByAlpha2(ALPHA_2.IN);
    const number = '1234567890';
    const expectedResult = `${countryCode} 1234-567890`;
    it('merged ', () => runFormatMergedNumberTest(`${countryCode}${number}`, expectedResult));
    it('separated', () => runFormatSeparatedNumberTest(countryCode, number, expectedResult));
  });

  describe('format Indonesian number', () => {
    const countryCode = getCountryCodeByAlpha2(ALPHA_2.ID);
    const number = '82292834234';
    const expectedResult = `${countryCode} 822-9283-4234`;
    it('merged ', () => runFormatMergedNumberTest(`${countryCode}${number}`, expectedResult));
    it('separated', () => runFormatSeparatedNumberTest(countryCode, number, expectedResult));
  });

  describe('format Japanese number', () => {
    const countryCode = getCountryCodeByAlpha2(ALPHA_2.JP);
    const number = '8027186677';
    const expectedResult = `${countryCode} 80-2718-6677`;
    it('merged ', () => runFormatMergedNumberTest(`${countryCode}${number}`, expectedResult));
    it('separated', () => runFormatSeparatedNumberTest(countryCode, number, expectedResult));
  });

  describe('format Korean number', () => {
    const countryCode = getCountryCodeByAlpha2(ALPHA_2.KR);
    const number = '1073873791';
    const expectedResult = `${countryCode} 10-7387-3791`;
    it('merged ', () => runFormatMergedNumberTest(`${countryCode}${number}`, expectedResult));
    it('separated', () => runFormatSeparatedNumberTest(countryCode, number, expectedResult));
  });

  describe('format Polish number', () => {
    const countryCode = getCountryCodeByAlpha2(ALPHA_2.PL);
    const number = '601789123';
    const expectedResult = `${countryCode} 60 178 91 23`;
    it('merged ', () => runFormatMergedNumberTest(`${countryCode}${number}`, expectedResult));
    it('separated', () => runFormatSeparatedNumberTest(countryCode, number, expectedResult));
  });

  describe('format Russian number', () => {
    const countryCode = getCountryCodeByAlpha2(ALPHA_2.RU);
    const number = '4955768754';
    const expectedResult = `${countryCode} (495) 576-87-54`;
    it('merged ', () => runFormatMergedNumberTest(`${countryCode}${number}`, expectedResult));
    it('separated', () => runFormatSeparatedNumberTest(countryCode, number, expectedResult));
  });

  describe('format Spanish number', () => {
    const countryCode = getCountryCodeByAlpha2(ALPHA_2.ES);
    const number = '176200362';
    const expectedResult = `${countryCode} 176 200 362`;
    it('merged ', () => runFormatMergedNumberTest(`${countryCode}${number}`, expectedResult));
    it('separated', () => runFormatSeparatedNumberTest(countryCode, number, expectedResult));
  });

  describe('format Ukrainian number', () => {
    const countryCode = getCountryCodeByAlpha2(ALPHA_2.UA);
    const number = '671700636';
    const expectedResult = `${countryCode} (67) 170-06-36`;
    it('merged ', () => runFormatMergedNumberTest(`${countryCode}${number}`, expectedResult));
    it('separated', () => runFormatSeparatedNumberTest(countryCode, number, expectedResult));
  });
});

describe('mask defined, number dirty', () => {
  describe('format Ukrainian number', () => {
    const countryCode = getCountryCodeByAlpha2(ALPHA_2.UA);
    const number = '(67)170-06-36';
    const expectedResult = `${countryCode} (67) 170-06-36`;
    it('merged ', () => runFormatMergedNumberTest(`${countryCode}${number}`, expectedResult));
    it('separated', () => runFormatSeparatedNumberTest(countryCode, number, expectedResult));
  });
});

describe('no mask defined', () => {
  describe('format Egyptian number', () => {
    const countryCode = getCountryCodeByAlpha2(ALPHA_2.EG);
    const number = '671700636';
    const expectedResult = `${countryCode} 671700636`;
    it('merged ', () => runFormatMergedNumberTest(`${countryCode}${number}`, expectedResult));
    it('separated', () => runFormatSeparatedNumberTest(countryCode, number, expectedResult));
  });

  describe('format Sudan number', () => {
    const countryCode = getCountryCodeByAlpha2(ALPHA_2.SS);
    const number = '671700636';
    const expectedResult = `${countryCode} 671700636`;
    it('merged ', () => runFormatMergedNumberTest(`${countryCode}${number}`, expectedResult));
    it('separated', () => runFormatSeparatedNumberTest(countryCode, number, expectedResult));
  });
});

describe('removeNonDigitAndNonPlusChars', () => {
  it('replace non digits', () => {
    assert.equal(removeNonDigitAndNonPlusChars('(32)4 42234 - 534(53) 564342-422'), '3244223453453564342422');
  });
  it('replace non first plus signs', () => {
    assert.equal(removeNonDigitAndNonPlusChars('3+24 422+34+  534+53 564342 42+2'), '3244223453453564342422');
  });
  it('replace all except first plus sign', () => {
    assert.equal(removeNonDigitAndNonPlusChars('++324 4+2234+  53453 56434+2 422'), '+3244223453453564342422');
  });
});

describe('data', () => {
  it('all data countries are in alpha2', () => {
    const countiesData = getAllData();
    const isAllCountriesDataDefined = countiesData
      .map(c => c.alpha2)
      .reduce((acc, value) => acc && value !== undefined, true);
    assert.equal(isAllCountriesDataDefined, true);
  });
  it('all alpha2 in data countries', () => {
    const countiesData = getAllData().map(c => c.alpha2);
    const isAllCountriesDataDefined = Object.keys(ALPHA_2)
      .reduce((acc, key) => {
        const isCountryDefined = countiesData.indexOf(ALPHA_2[key]) !== -1;
        if (isCountryDefined === false) {
          console.warn('Country not defined:', key);
        }
        return acc && isCountryDefined;
      }, true);
    assert.equal(isAllCountriesDataDefined, true);
  });
});
