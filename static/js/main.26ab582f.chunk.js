(this.webpackJsonpmovie_review_app=this.webpackJsonpmovie_review_app||[]).push([[0],{32:function(e,t,c){},40:function(e,t,c){},69:function(e,t,c){},70:function(e,t,c){},71:function(e,t,c){},72:function(e,t,c){},73:function(e,t,c){},74:function(e,t,c){},75:function(e,t,c){"use strict";c.r(t);var s=c(1),i=c.n(s),n=c(33),a=c.n(n),r=c(8),o=c(2),j=(c(40),c(0));var l=function(e){return console.log(e),Object(j.jsx)("div",{className:"about__container",children:Object(j.jsx)("span",{children:"\ub0b4\uac00 \ubcf8 \uc601\ud654\uc5d0 \ub300\ud574 \uc790\uc720\ub86d\uac8c \ub9ac\ubdf0\ud560 \uc218 \uc788\ub294 \uacf5\uac04\uc785\ub2c8\ub2e4."})})},d=c(19),v=c(14),h=c.n(v),b=c(16),m=c(10),u=c(11),x=c(12),O=c(13),p=c(18),g=c.n(p),_=(c(32),function(e){var t=e.id,c=e.year,s=e.title,i=e.summary,n=e.medium_cover_image,a=e.genres;return Object(j.jsx)(r.b,{to:{pathname:"/movie/".concat(t),state:{year:c,title:s,summary:i,genres:a,medium_cover_image:n}},style:{textDecoration:"none",color:"inherit"},children:Object(j.jsxs)("div",{className:"movie",children:[Object(j.jsx)("img",{src:n,alt:s,title:s}),Object(j.jsxs)("div",{className:"movie__data",children:[Object(j.jsx)("h3",{className:"movie__title",children:s}),Object(j.jsx)("h5",{className:"movie__year",children:c}),Object(j.jsx)("ul",{className:"movie__genres",children:a.map((function(e,t){return Object(j.jsx)("li",{className:"genres__genre",children:e},t)}))}),Object(j.jsxs)("p",{className:"movie__summary",children:[i.slice(0,140),"..."]})]})]})})}),f=(c(69),c(70),function(e){Object(x.a)(c,e);var t=Object(O.a)(c);function c(){var e;Object(m.a)(this,c);for(var s=arguments.length,i=new Array(s),n=0;n<s;n++)i[n]=arguments[n];return(e=t.call.apply(t,[this].concat(i))).state={isLoading:!0,movies:[]},e.getMovies=Object(b.a)(h.a.mark((function t(){var c,s;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g.a.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");case 2:c=t.sent,s=c.data.data.movies,e.setState({movies:s,isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(u.a)(c,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,c=e.movies;return Object(j.jsx)("section",{className:"container",children:t?Object(j.jsxs)("div",{className:"loader",children:[Object(j.jsx)("div",{className:"loadingio-spinner-spin-8vfsm2ltrnr",children:Object(j.jsxs)("div",{className:"ldio-5mhk44i8zo3",children:[Object(j.jsx)("div",{children:Object(j.jsx)("div",{})}),Object(j.jsx)("div",{children:Object(j.jsx)("div",{})}),Object(j.jsx)("div",{children:Object(j.jsx)("div",{})}),Object(j.jsx)("div",{children:Object(j.jsx)("div",{})}),Object(j.jsx)("div",{children:Object(j.jsx)("div",{})}),Object(j.jsx)("div",{children:Object(j.jsx)("div",{})}),Object(j.jsx)("div",{children:Object(j.jsx)("div",{})}),Object(j.jsx)("div",{children:Object(j.jsx)("div",{})})]})}),Object(j.jsx)("div",{className:"loader_text",children:"Loading..."})]}):Object(j.jsxs)("div",{className:"home",children:[Object(j.jsx)("h1",{id:"head",children:"Movies"}),Object(j.jsx)("div",{className:"movies",children:c.map((function(e){return Object(j.jsx)(_,Object(d.a)({},e),e.id)}))})]})})}}]),c}(i.a.Component)),N=function(e){var t=e.movieSeq,c=e.prodYear,s=e.title,i=e.plots,n=e.posters,a=e.genre;return Object(j.jsx)(r.b,{to:{pathname:"/movie/".concat(t),state:{prodYear:c,title:s,plots:i,posters:n,genre:a}},style:{textDecoration:"none",color:"inherit"},children:Object(j.jsxs)("div",{className:"movie",children:[Object(j.jsx)("img",{src:n.split("|")[0],onError:function(e){console.log("error!"),e.target.src="/images/no-image-icon-0.jpg",e.target.onError=null},alt:s,title:s}),Object(j.jsxs)("div",{className:"movie__data",children:[Object(j.jsx)("h3",{className:"movie__title",children:s}),Object(j.jsx)("h5",{className:"movie__year",children:c}),Object(j.jsx)("div",{className:"movie__genres",children:a}),Object(j.jsxs)("p",{className:"movie__summary",children:[i.plot[0].plotText.slice(0,140),"..."]})]})]})})},y=(c(71),function(e){Object(x.a)(c,e);var t=Object(O.a)(c);function c(){var e;Object(m.a)(this,c);for(var s=arguments.length,i=new Array(s),n=0;n<s;n++)i[n]=arguments[n];return(e=t.call.apply(t,[this].concat(i))).state={isLoading:!0,movies:[],value:""},e.getSearchMovie=Object(b.a)(h.a.mark((function t(){var c,s,i,n,a;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(c="N971848DE614S7CF3946",s=e.state.value,t.prev=2,""!==s){t.next=7;break}e.setState({movies:[],isLoading:!1}),t.next=13;break;case 7:return t.next=9,g.a.get("http://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_json2.jsp",{params:{collection:"kmdb_new2",ServiceKey:c,query:s}});case 9:i=t.sent,n=i.data.Data,a=n[0].Result,e.setState({movies:a,isLoading:!1});case 13:t.next=18;break;case 15:t.prev=15,t.t0=t.catch(2),console.log(t.t0);case 18:case"end":return t.stop()}}),t,null,[[2,15]])}))),e.handleChange=function(t){e.setState({value:t.target.value})},e.handleSubmit=function(t){t.preventDefault(),e.getSearchMovie()},e}return Object(u.a)(c,[{key:"componentDidMount",value:function(){this.getSearchMovie()}},{key:"render",value:function(){var e=this.state,t=e.movies,c=e.isLoading;return Object(j.jsx)("section",{className:"container",children:c?Object(j.jsxs)("div",{className:"loader",children:[Object(j.jsx)("div",{className:"loadingio-spinner-spin-8vfsm2ltrnr",children:Object(j.jsxs)("div",{className:"ldio-5mhk44i8zo3",children:[Object(j.jsx)("div",{children:Object(j.jsx)("div",{})}),Object(j.jsx)("div",{children:Object(j.jsx)("div",{})}),Object(j.jsx)("div",{children:Object(j.jsx)("div",{})}),Object(j.jsx)("div",{children:Object(j.jsx)("div",{})}),Object(j.jsx)("div",{children:Object(j.jsx)("div",{})}),Object(j.jsx)("div",{children:Object(j.jsx)("div",{})}),Object(j.jsx)("div",{children:Object(j.jsx)("div",{})}),Object(j.jsx)("div",{children:Object(j.jsx)("div",{})})]})}),Object(j.jsx)("div",{className:"loader_text",children:"Loading..."})]}):Object(j.jsx)("form",{onSubmit:this.handleSubmit,children:Object(j.jsxs)("div",{children:[Object(j.jsxs)("div",{className:"input_div",children:[Object(j.jsx)("h1",{children:"\uc601\ud654 \uac80\uc0c9"}),Object(j.jsx)("img",{src:"/images/no-image-icon-0.jpg",alt:"test"}),Object(j.jsx)("input",{className:"input_search",type:"text",value:this.state.value,onChange:this.handleChange,placeholder:"\uc601\ud654 \uac80\uc0c9"})]}),Object(j.jsx)("div",{className:"movies",children:t.map((function(e,t){return Object(j.jsx)(N,Object(d.a)({},e),e.movieSeq)}))})]})})})}}]),c}(i.a.Component)),k=(c(72),function(e){Object(x.a)(c,e);var t=Object(O.a)(c);function c(){return Object(m.a)(this,c),t.apply(this,arguments)}return Object(u.a)(c,[{key:"componentDidMount",value:function(){console.log(this.props);var e=this.props,t=e.location,c=e.history;void 0===t.state&&c.push("/")}},{key:"render",value:function(){var e=this.props.location;if(e.state){var t=e.state,c=t.title,s=t.year,i=t.summary,n=t.genres,a=t.medium_cover_image;return Object(j.jsxs)("div",{className:"detail",children:[Object(j.jsx)("img",{src:a,alt:c,title:c}),Object(j.jsxs)("div",{className:"detail__data",children:[Object(j.jsx)("h1",{className:"detail__title",children:c}),Object(j.jsx)("h5",{className:"detail__year",children:s}),Object(j.jsx)("div",{className:"detail__genres",children:n.reduce((function(e,t){return e+", "+t}))}),Object(j.jsx)("p",{className:"detail__summary",children:i})]})]})}return null}}]),c}(i.a.Component));c(73);var S=function(){return Object(j.jsxs)("div",{className:"nav",children:[Object(j.jsx)(r.b,{to:"/",children:"Home"}),Object(j.jsx)(r.b,{to:"/about",children:"About"}),Object(j.jsx)(r.b,{to:"/search",children:"Search"})]})},w=(c(74),function(){return Object(j.jsxs)(r.a,{children:[Object(j.jsx)(S,{}),Object(j.jsx)(o.a,{exact:!0,path:"/",component:f}),Object(j.jsx)(o.a,{path:"/about",component:l}),Object(j.jsx)(o.a,{exact:!0,path:"/search",component:y}),Object(j.jsx)(o.a,{path:"/movie/:id",component:k})]})});a.a.render(Object(j.jsx)(i.a.StrictMode,{children:Object(j.jsx)(w,{})}),document.getElementById("root"))}},[[75,1,2]]]);
//# sourceMappingURL=main.26ab582f.chunk.js.map