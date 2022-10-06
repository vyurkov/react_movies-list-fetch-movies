(this["webpackJsonpreact_movies-list-fetch-movies"]=this["webpackJsonpreact_movies-list-fetch-movies"]||[]).push([[0],{16:function(e,t,i){},17:function(e,t,i){},18:function(e,t,i){},21:function(e,t,i){},22:function(e,t,i){"use strict";i.r(t);var c=i(7),a=i.n(c),s=(i(15),i(2)),n=i(1),r=(i(16),i(17),i(18),i(0)),o=function(e){var t=e.movie;return Object(r.jsxs)("div",{className:"card","data-cy":"movieCard",children:[Object(r.jsx)("div",{className:"card-image",children:Object(r.jsx)("figure",{className:"image is-4by3",children:Object(r.jsx)("img",{"data-cy":"moviePoster",src:t.imgUrl,alt:"Film logo"})})}),Object(r.jsxs)("div",{className:"card-content",children:[Object(r.jsxs)("div",{className:"media",children:[Object(r.jsx)("div",{className:"media-left",children:Object(r.jsx)("figure",{className:"image is-48x48",children:Object(r.jsx)("img",{src:"images/imdb-logo.jpeg",alt:"imdb"})})}),Object(r.jsx)("div",{className:"media-content",children:Object(r.jsx)("p",{className:"title is-8","data-cy":"movieTitle",children:t.title})})]}),Object(r.jsxs)("div",{className:"content","data-cy":"movieDescription",children:[t.description,Object(r.jsx)("br",{}),Object(r.jsx)("a",{href:t.imdbUrl,"data-cy":"movieURL",children:"IMDB"})]})]})]})},d=function(e){var t=e.movies;return Object(r.jsx)("div",{className:"movies",children:t.map((function(e){return Object(r.jsx)(o,{movie:e},e.imdbId)}))})},l=i(10),j=i(8),m=i(6),b=i.n(m),v=(i(21),i(9)),u=i.n(v);var h=function(e){var t=e.movies,i=e.onMoviesChange,c=Object(n.useState)(""),a=Object(s.a)(c,2),d=a[0],m=a[1],v=Object(n.useState)(!1),h=Object(s.a)(v,2),O=h[0],x=h[1],p=Object(n.useState)(!1),f=Object(s.a)(p,2),g=f[0],N=f[1],y=Object(n.useState)(),w=Object(s.a)(y,2),I=w[0],C=w[1];var P=function(){var e=Object(j.a)(b.a.mark((function e(t){var i,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),x(!0),e.prev=2,e.next=5,n=d,fetch("".concat("https://www.omdbapi.com/?apikey=4c586442","&t=").concat(n)).then((function(e){return e.json()})).catch((function(){return{Response:"False",Error:"unexpected error"}}));case 5:i=e.sent,void 0!==(s=i)&&"Poster"in s&&"Title"in s&&"Plot"in s&&"imdbID"in s?(c={title:(a=i).Title,description:a.Plot,imgUrl:"N/A"===a.Poster?"https://via.placeholder.com/360x270.png?text=no%20preview":a.Poster,imdbUrl:"https://www.imdb.com/title/".concat(a.imdbID),imdbId:a.imdbID},C(c)):N(!0),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),N(!0);case 12:return e.prev=12,x(!1),e.finish(12);case 15:case"end":return e.stop()}var a,s,n}),e,null,[[2,9,12,15]])})));return function(t){return e.apply(this,arguments)}}();return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("form",{className:"find-movie",onSubmit:P,children:[Object(r.jsxs)("div",{className:"field",children:[Object(r.jsx)("label",{className:"label",htmlFor:"movie-title",children:"Movie title"}),Object(r.jsx)("div",{className:"control",children:Object(r.jsx)("input",{"data-cy":"titleField",type:"text",id:"movie-title",placeholder:"Enter a title to search",className:"input is-dander",value:d,onChange:function(e){m(e.target.value),N(!1)}})}),g&&Object(r.jsx)("p",{className:"help is-danger","data-cy":"errorMessage",children:"Can't find a movie with such a title"})]}),Object(r.jsxs)("div",{className:"field is-grouped",children:[Object(r.jsx)("div",{className:"control",children:Object(r.jsx)("button",{"data-cy":"searchButton",type:"submit",className:u()("button","is-light",{"is-loading":O}),disabled:""===d,children:I?"Serach again":"Find a movie"})}),I&&Object(r.jsx)("div",{className:"control",children:Object(r.jsx)("button",{"data-cy":"addButton",type:"button",className:"button is-primary",onClick:function(){void 0!==I&&void 0===t.find((function(e){return e.imdbId===I.imdbId}))&&i([].concat(Object(l.a)(t),[I])),m(""),C(void 0),x(!1),N(!1)},children:"Add to the list"})})]})]}),I&&Object(r.jsxs)("div",{className:"container","data-cy":"previewContainer",children:[Object(r.jsx)("h2",{className:"title",children:"Preview"}),Object(r.jsx)(o,{movie:I})]})]})},O=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),i=t[0],c=t[1];return Object(r.jsxs)("div",{className:"page",children:[Object(r.jsx)("div",{className:"page-content",children:Object(r.jsx)(d,{movies:i})}),Object(r.jsx)("div",{className:"sidebar",children:Object(r.jsx)(h,{movies:i,onMoviesChange:c})})]})};a.a.render(Object(r.jsx)(O,{}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.5d655a53.chunk.js.map