# Bölüm 1: ES? Şuan & Sonrası

Derinlere dalmadan önce, Javascript'in şuanda genel olarak kullanılan ES5 sürümü ile ilgili net bilgilere sahib olmanız gerekiyor. Burada, *ES6* ile birlikte gelen özelliklerden bahsediyor olacağız.

ES6, alışması zaman alacak yeni yazım biçimleri, API, veri tipleri gibi özellekler eklenmiştir. 

ES6 bu dildeki radikal bir ileri sıçrayış. ES5 bildiğibizi düşünseniz bile, ES6 tamamen farklıdır.

## Versiyonlama (Versioning)

Javascript resmi olarak "ECMAScript" (kısaca "ES") olarak da kullanılabilir, son zamanalara kadar sıralı bir numarayla gitmiştir (Örneğin; "5" için "5. sürüm").

İlk versiyonlarda, ES1 ve ES2 çok bilinmiyor ve entegre edilmemişti. ES3 ilk javascript'in geniş çaplı kullanılan sürümüdür.

2009'da ES5 resmi olarak tamamlandı (daha sonra 2011'de ES5.1), JS'in geniş bir standardı olarak Firefox, Chrome, Opera, Safari ve diğer tarayıcılarda yaygın olarak kullanıldı.

Sonraki sürüm ise 2015 yılında çıkan ES6 olmuştur, gelecek sürümlerde yıl bazlı olarak ilerlenmesi tartışılsada; sürekli kendini güncel tutan tarayıcılarında yaygınlaşmasıyla bu fikirden vazgeçilmiş. Javascript yaşayan bir standart olarak ürün bazlı anılması gerektiği üzerine durulmuştur. 

## Dönüştürme (Transpiling)

Özelliklerin hızlı bir şekilde gelişmesiyle, yeni özellikleri kullanmak ve geliştirilen uygulama/site için eski tarayıcı desteği vermek zorunda olan geliştiricileri zor bir duruma sokmuş oldu.

ES5 çıktığında geniş bir rol oynadı, tipik düşünce şekli ES5 tamamen kullanılmaya başlamadan önce; tarayıcıların ES5 öncesi için desteklerini kaldırıp yeni özellikleri desteklemelerini beklemekti.

Js ekosisteminin geleceği için oldukça zararlı olan bekleme ve takip etme şeklindeki bu yaklaşım yıllarca devam etti.

Öyleyse bu çelişkili durumu nasıl çözeriz? Cevap ise araçlardır, özellikle dönüştürme (dönüşüm ve derleme) olarak bilinen teknik. Kabaca, ES6 ile yazılan kodların kodların, ES5'e dönüştürülmesidir.

Örneğin, property tanımlamanın kısa yolunu ele alalım. (Bölüm 2'deki "Object Literal Extensions"). Aşağıda ES6'daki şekli verilmiştir:

```js
var foo = [1,2,3];

var obj = {
	foo		// yani `foo: foo`
};

obj.foo;	// [1,2,3]
```

Aşağı yukarı aşağıdaki şekle dönüştürülür:

```js
var foo = [1,2,3];

var obj = {
	foo: foo
};

obj.foo;	// [1,2,3]
```

Bu kısa sevimli dönüşüm bize `foo: foo` gibi bir tanımlamanın kısa yolunu sunar ve sadece `foo` yazmamız yeterli olur, bunun için key/value isimlerinin aynı olaması gerekir.

Dönüştürücüler bizim için kodu eski tarayıcılara uyumlu bir biçime dönüştürür.

### Shims/Polyfills

Tüm yeni ES6 özellikleri dönüştürücüye ihtiyaç duymaz. Bu durumda Polyfills (aka shims) devreye girer ve bu özellikleri desteklemeyen tarayıcılar için kullanım olanağı sunar. Yazım biçimleri için pollyfill'leme yapılamasa da çoğu API'lar için uygulanabilen bir yöntemdir.

For example, `Object.is(..)` is a new utility for checking strict equality of two values but without the nuanced exceptions that `===` has for `NaN` and `-0` values. The polyfill for `Object.is(..)` is pretty easy:

Örneğin, `Object.is(..)` iki değerin eşit olma durumunu kontrol etmek için kullanılır, Üç eşit `===` ile kontrol eder, `NaN` ve `-0` gibi değerleri de kapsayacak şekilde bu kontrolleri yapar. `Object.is(..)` için olan pollyfill aşağıdaki gibi oldukça basittir.

```js
if (!Object.is) {
	Object.is = function(v1, v2) {
		// `-0` için kontrol
		if (v1 === 0 && v2 === 0) {
			return 1 / v1 === 1 / v2;
		}
		// `NaN` için kontrol
		if (v1 !== v1) {
			return v2 !== v2;
		}
		// diğer herşey
		return v1 === v2;
	};
}
```

**Not:** En dışdaki `if` koşuluna dikkat ediniz, bu önemli bir detaydır. Zaten bu özellik var ise bu tanımlama gerçleşmeyecektir, sadece `Object.is(..)` olmadığı durumlarda `if` içerisindeki tanımlama yapılacağı için eski tarayıcılarda bu özelliği kullanmamızı sağlayacaktır. 

JS devamlı gelişeceği varsayılmaktadır, tarayıcılar özellikleri tek bir seferde getirmekten ziyade birer birer ekleyeceklerdir. Yeni özellikleri kullanmak için en iyi strateji kodlarımıza ekleyeceğimiz pollyfill'ler ve dönüştürücüleri şimdiden kullanmaya başlamak olacaktır.

Eğer tarayıcıların tüm özellekleri desteklemesini beklemeye karar verirsek her zaman geride kalırız. Üzücü bir biçimde Javascript'i daha etkili, verimli ve güçlü yazmamızı sağlayacak inovasyonları kaçırırız.
