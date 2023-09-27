"use strict";

function twiceAsOld(dadYearsOld, sonYearsOld) {
  return dadYearsOld>sonYearsOld*2 ? dadYearsOld-sonYearsOld*2 : sonYearsOld*2-dadYearsOld
}
console.log(twiceAsOld(54, 20));
