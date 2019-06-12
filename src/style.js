import{ createGlobalStyle } from 'styled-components'


export const GlobalStyle = createGlobalStyle `
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
@font-face {font-family: "iconfont";
  src: url('./iconfont.eot?t=1558031633343'); /* IE9 */
  src: url('./iconfont.eot?t=1558031633343#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAUYAAsAAAAACZQAAATJAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDKgqGNIUzATYCJAMUCwwABCAFhG0HTxs+CFGULk6O7AtsG/ayjYSqgrayXFdn1CEAUIAPAAAA8WNjpCMggmK/394TXDoJr2LafkRsOqGSoBRKsdCpHj2R9aBNPYgxaB2pmEgysaxTpO32TKZqL7elOSuwm3AZKEAH9MxypdyVMyLnKv1DTa51TxwIJh5YBoFF2lYG0PwcHDNd+gaWZ7O5ZDRGA44GPKCIxPi2Af+D4g9jF5dxmgDKmHGBTN4+fwsGMW1SAHEcckcwYiriEnzApNKclRnk3HJYcuoXAZy5fx+f4BUYSEhS2szV3RtfmL4kr/1F8pcr2Ahj92cAsw6kQCeQgTjMNW2T/VAnEVxKVAQAJboBBX1FTF/7//+PUX6ctYgwLIK2/3goMYgimqgCYkfDGXhBTSopeDGlEuDFT6hM7A85N0WU2yvKgCoQAWJd0CRt7s8EMRm0F8MaCaRipiDDVhG0xrBierWKzLl+27p58/vWrZ87d/4EBZ3Hs+TRm9bt27/xe5+6NcphJ6fUhKawgdHG8zRy8GaisIg3w1cZFFQeIJQAOPwovvAyRX6+Aq4Iyd25FuTrCOUJSL1Gh4xubrh5E3meYVZuYK6E5wuMQBFKhOYZjuI0PbB0wGfJrix5MCTnaMSkA8niC3l87cVUu+3seHZvhtnjvydYWENRHFXPI8xKY4XAAckac7iFpJKj5DydwrIbhIS+Rklaw0iVyn4NM5x35I5xmQsrVN45l1NuUHRNhhFlZOx4+3b/+XfiWEB2f2Li2ZXn7hN//659Ot2mW7tWwebM8GQfrZzUtJwPN+q+oNhhVK1CAW5YrX7hjjr73rTUft9ZJgR88NaGoyz+mkPMtVqt/1XRt5vC0nPRqKrGsDvi32HdPacC3BFJpFu7Y16jZimRHBH0siy/54Ih5aNvI9svWzP/x49mh+7Poeywfv8R3yA6Ehym3/LnT2KvfnGWuGx/0xOT26YXxnUpaNIYfCv/tZqTKGHkFToo+PZNjJ7/2P/Q796tjgTRXnAxr1htkurjWqK6yMvPaZTrWu1rW1NYJMTKuyD2WifpBtaK2sy4huwM6RtUu3ZXkBzxi/WaQJHL7pbqTwT2QO+c3r27zaknSp6ai2XxwWqmQnvUuvo6v9d601zTP2uSoTwfwnwJG0VDMmY4dNgfTgj4v85mIlzif46KgG6LjsUjd1Fh9pGNgoubLXNm2iFfsfIb3HEnuqzrOv+PCuqzvxS2xP6k2DUbMpmrqfNMLDZZYnpunA4eTrYyOPApxajzuB9JY+1MAoYKISFjCimMDTLDukCO4ANFMOFQxln8+nL6usiQrBRoNwcAQscWQGk5AiI6LiHF2EcgQXsLUjohAlxe6O9IsItGK3qJzhp9qBqExmrKmKFdW172J/JN4iyjXJfwi8tV6AXP7t5k9A4zXPYxp7uPd3t6GNR1UQpx4DxMEoKOLorQWzcbetbzvnvPbt4bNavbU8ESbQk51pAPVDkAjTwkw+z2a1bq9z8hbiPhWJaUlGh/oaWVsHvgyY1HDeSdKKtVci79u21xXT3WGB5XZ4mkQBw0oEQPEdCRPyyCPGtNDS0Cc33uqFVdXVFzfEl6jdn/dFltcB5JpJFFHkWInXfMlrTe9B2kSEdtdcgNrTon474ThbZSEAAAAAA=') format('woff2'),
  url('./iconfont.woff?t=1558031633343') format('woff'),
  url('./iconfont.ttf?t=1558031633343') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('./iconfont.svg?t=1558031633343#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
`
;