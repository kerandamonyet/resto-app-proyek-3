(()=>{"use strict";var n,A={205:(n,A,r)=>{r.d(A,{Z:()=>o});var t=r(319),e=r.n(t),a=r(988),i=r.n(a)()(e());i.push([n.id,"@import url(https://fonts.googleapis.com/css?family=Open+Sans);"]),i.push([n.id,"* {\n  box-sizing: border-box;\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n}\n\nhtml, body, main{\n  padding: 0;\n  margin: 0;\n  width: 100%;\n  scroll-behavior: smooth;\n}\n\n/** \n  skip to content\n**/\n.skip-link {\n  position: absolute;\n  top: -40px;\n  left: 0;\n  padding: 8px;\n  background-color: #bf1722;\n  color: white;\n  z-index: 100;\n}\n\n.skip-link:focus {\n  top: 0;\n}\n/** \n  header \n**/\nheader {\n  display: grid;\n  color: white;\n  background-color: #053B50;\n  text-align: center;\n  border-bottom: 1px solid white;\n}\n\nheader #hamburgerButton {\n  color: white;\n  background-color: transparent;\n  text-decoration: none;\n  display: none;\n  padding: 15px;\n  min-width: 44px;\n  min-height: 44px;\n  font-weight: 700;\n  border: none;\n}\n\n\n\n/** \n  nav  \n**/\nnav {\n  background-color: #176B87;\n}\n\nnav ul {\n  padding: 1rem;\n  margin: 0 auto;\n  text-align: center;\n}\nnav ul li {\n  display: inline-block;\n  list-style-type: none;\n  text-align: baseline;\n  padding: 0 1rem;\n  justify-content: space-around;\n  align-items: baseline;\n}\n\nnav ul li a {\n  padding: 15px;\n  text-decoration: none;\n  color: white;\n  cursor: pointer;\n  box-sizing: border-box;\n  min-width: 44px;\n  min-height: 44px;\n}\n\n.open {\n  -webkit-transform: translate(0, 0);\n  transform: translate(0, 0);\n}\n\nnav ul li a:hover {\n  font-weight: bolder;\n}\n\n/** \nmain content \n**/\n\nmain .content {\n  margin: 3rem 5rem;\n  \n}\n\n/** \n  jumbotron\n**/\n\nmain .jumbotron{\n  width: 1000px;\n  background-size: cover;\n  margin: 3rem auto 2rem ;\n  display: grid;\n  grid-template-columns: auto auto;\n  column-gap: 5rem;\n  background-color: lightblue;\n  border-top-left-radius: 99px;\n  border-bottom-right-radius: 99px;\n}\n\nmain .jumbotron img {\n  width: 100%;\n  border-bottom-right-radius: 99px;\n}\n\nmain .jumbotron h2 {\n  padding-top: 15vh;\n  color: white;\n  padding-left: 2rem;\n  font-size: 2rem;\n  font-weight: 900;\n}\n\n/* search bar */\nmain .search-bar .wrap{\n  display: grid;\n  grid-template-columns: auto auto;\n  width: 100%;\n  justify-content: center;\n  align-items: center;\n  margin: 0 auto;\n}\n\nmain .search-bar .wrap h3 {\n  text-align: center;\n  color: black;\n  font-size: 2rem;\n  padding: 1rem 0;\n  font-weight: 700;\n}\n\nmain .search-bar .wrap h3 span {\n  border-bottom: 3px solid black; \n  padding: 5px;\n  \n}\n\n/* \n  Search bar item \n*/\n/* main .search {\n  width: 100%;\n  position: relative;\n  justify-content: end;\n  display: flex;\n}\n\nmain .content .searchTerm {\n  width: 100%;\n  border: 3px solid #00B4CC;\n  border-right: none;\n  padding: 5px;\n  border-radius: 5px 0 0 5px;\n  outline: none;\n  color: #9DBFAF;\n}\n\nmain .content .searchTerm:focus{\n  color: black;\n} \n\nmain .content .searchButton {\n  width: 40px;\n  height: 36px;\n  border: 1px solid #00B4CC;\n  background: #00B4CC;\n  text-align: center;\n  color: #fff;\n  border-radius: 0 5px 5px 0;\n  cursor: pointer;\n  font-size: 20px;\n} */\n\n/* \n  main content \n*/\nmain {\n  padding: 32px;\n}\n \n.content {\n  margin: 0 auto 5rem;\n  min-height: 100%;\n}\n\nmain .content h2 {\n  text-align: center;\n  color: black;\n  font-size: 2rem;\n  padding: 1rem 0;\n  font-weight: 700;\n}\n\nmain .content h2 span {\n  border-bottom: 3px solid black; \n  padding: 5px;\n}\n\n/* \n  Restaurants \n*/\n.restaurants {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 16px;\n  margin: 32px 0;\n}\n\n/* \n  Restaurant item \n*/\n\n.restaurant-item {\n  width: 100%;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  border-radius: 8px;\n  overflow: hidden;\n}\n\n.restaurant-item__header {\n  position: relative;\n}\n \n.restaurant-item .restaurant-item__header .restaurant-item__header__poster {\n  width: 100%;\n  height: 20rem;\n}\n \n.restaurant-item .restaurant-item__header .restaurant-item__header__city {\n  position: absolute;\n  margin: 0;\n  bottom: 20px;\n  left: 0;\n  display: inline-block;\n  background-color: #00B4CC;\n  color: white;\n  border-top-right-radius: 10px;\n  border-bottom-right-radius: 10px;\n}\n \n.restaurant-item .restaurant-item__header .restaurant-item__header__city p {\nmargin: 10px;\n}\n \n.restaurant-item .restaurant-item__content {\n  padding: 16px;\n}\n \n.restaurant-item .restaurant-item__content h3 {\n  margin: 0 0 10px 0;\n  color: #00B4CC;\n}\n \n.restaurant-item .restaurant-item__content h3 a {\n  text-decoration: none;\n}\n \n.restaurant-item .restaurant-item__content p {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 4; /* number of lines to show */\n  -webkit-box-orient: vertical;\n}\n\n.restaurant-item .restaurant-item__footer {\n  margin: 0.5rem auto 2.5rem;\n  text-align: center;\n  justify-content: center;\n  align-items: center;\n}\n.restaurant-item .restaurant-item__footer span  {\n  background-color: #00B4CC;\n  margin: 0 auto;\n  padding: 0.8rem 1rem;\n  border-radius: 10px;\n}\n\n.restaurant-item .restaurant-item__footer a {\n  text-decoration: none;\n  text-align: center;\n  color: white;\n  font-weight: 500;\n  padding: 1rem;\n  cursor: pointer;\n  min-width: 44px;\n  min-height: 44px;\n}\n\n.restaurant-item .restaurant-item__footer a:hover {\n  font-weight: 700;\n}\n\n/* \n  restaurant \n*/\n\n.restaurant {\n  margin: 0 auto;\n  width: 100%;\n  max-width: 800px;\n\n}\n \n.restaurant .restaurant__poster {\n  width: 100%;\n  max-width: 400px;\n}\n \n.restaurant .restaurant__info h4 {\n  margin: 8px 0;\n}\n \n/*  \n   restaurant-detail \n*/\n.restaurant-detail {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 10px;\n}\n\n.restaurant-detail p {\n  font-size: 16px;\n}\n\n.restaurant-detail h4 {\n  font-size: 18px;\n}\n\n.restaurant-detail span.border-bottom{\n  border-bottom: 1px solid black;\n}\n\n.restaurant-detail__content__review__item span.text-date {\n  color: #176B87;\n  opacity: 0.8;\n  font-size: 16px;\n}\n\n/* \n  pagination \n*/\n.restaurant-detail__pagination {  \n  margin: 0 0 1rem;\n  padding: 10px;\n  grid-column-start: 1;\n  grid-column-end: 3;\n}\n\n.restaurant-detail__pagination a {  \n  text-decoration: none;\n  padding: 14px ;\n  font-size: 1rem;\n  font-weight: 500;\n  cursor: pointer;\n  min-width: 44px;\n  min-height: 44px;\n}\n\n.restaurant-detail__pagination span {\n  padding: 0;\n  margin: 0;\n  font-size: 1rem;\n  font-weight: 500;\n}\n \n.left-side {\n  grid-column-start: 1;\n  grid-column-end: 2;\n  padding: 0;\n  margin: 0;\n}\n\n.left-side img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n\n.right-side {\n  grid-column-start: 2;\n  grid-column-end: 3;\n  padding: 0 16px;\n  justify-items: center;\n  align-items: center;\n}\n\n.right-side h2 span  {\n  border-radius: 20px;\n  background-color: #176B87;\n  color: white;\n  padding: 10px;\n}\n\n.right-side p span.text-bold {\n  font-weight: 500;\n}\n\n.bottom-side {\n  grid-column-start: 1;\n  grid-column-end: 3;\n}\n\n.bottom-side h2 {\n  font-size: 2rem;\n  padding: 1rem 0;\n  text-align: center;\n  font-weight: 700;\n  margin: 0;\n}\n\n.bottom-side h2 span{\n  border-bottom: 3px solid black; \n  padding: 5px;\n}\n\n.bottom-side h3 span{\n  border-radius: 20px;\n  background-color: #00B4CC;\n  color: white;\n  padding: 10px;\n}\n\n.bottom-side p > span.text-bold {\n  font-weight: 500;\n\n}\n\n.restaurant-detail__content__wrapper {\n  margin-bottom: 2rem;\n}\n\n.restaurant-detail__content__review__item {\n  box-shadow: -1px 9px 20px 0px rgba(111,111,111,0.75);\n  -webkit-box-shadow: -1px 9px 20px 0px rgba(111,111,111,0.75);\n  -moz-box-shadow: -1px 9px 20px 0px rgba(111,111,111,0.75);  \n  margin: 1rem 0;\n}\n\n.restaurant-detail__content__review p {\n  padding: 10px;\n}\n/*\n  Like\n*/\n\n.like {\n  width: 55px;\n  height: 55px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #00B4CC;\n  \n  position: fixed;\n  bottom: 16px;\n  right: 16px;\n  border-radius: 50%;\n  border: 0;\n  \n  font-size: 18px;\n  color: white;\n  cursor: pointer;\n}\n\n/* \nFavorite \n*/\n\n.content h2 span {\n  border-bottom: 3px solid black; \n  padding: 5px;\n}\n\n/* \n  form-review \n*/\n\n#formReview {\n  padding: 16px;\n}\n\n#formReview h3 span{\n  border-radius: 20px;\n  background-color: #00B4CC;\n  color: white;\n  padding: 10px;\n}\n\n.reviews-form {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 1rem;\n  padding-bottom: 32px;\n}\n\n.reviews-form-field {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n\n.reviews-form-label {\n  color: #176B87;\n  font-size: 16px;\n}\n\n.reviews-form-input {\n  display: inline-block;\n  border-radius: 0.25rem;\n  border: 1px solid #176B87;\n  padding: 16px;\n  font-size: 14px;\n  color: #176B87;\n  min-width: 44px;\n}\n\n\n.reviews-form-input:focus {\n  outline: 2px solid #00B4CC;\n}\n\n.reviews-form-submit {\n  width: 100%;\n  border-radius: 4px;\n  border: 1px solid #00B4CC;\n  padding: 16px;\n  font-size: 16px;\n  color: white;\n  background-color: #176B87;\n  cursor: pointer;\n  min-width: 44px;\n}\n\n.reviews-form-submit:focus {\n  outline: 2px solid #176B87;\n}\n\n\n/*\n  Footer\n*/\n \nfooter {\n  padding: 16px;\n  background-color: #00B4CC;\n}\n \nfooter h4 {\n  text-align: center;\n  color: white;\n  opacity: 0.8;\n}\n ","",{version:3,sources:["webpack://./src/styles/main.css"],names:[],mappings:"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",sourcesContent:["@import url(https://fonts.googleapis.com/css?family=Open+Sans);\n\n* {\n  box-sizing: border-box;\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n}\n\nhtml, body, main{\n  padding: 0;\n  margin: 0;\n  width: 100%;\n  scroll-behavior: smooth;\n}\n\n/** \n  skip to content\n**/\n.skip-link {\n  position: absolute;\n  top: -40px;\n  left: 0;\n  padding: 8px;\n  background-color: #bf1722;\n  color: white;\n  z-index: 100;\n}\n\n.skip-link:focus {\n  top: 0;\n}\n/** \n  header \n**/\nheader {\n  display: grid;\n  color: white;\n  background-color: #053B50;\n  text-align: center;\n  border-bottom: 1px solid white;\n}\n\nheader #hamburgerButton {\n  color: white;\n  background-color: transparent;\n  text-decoration: none;\n  display: none;\n  padding: 15px;\n  min-width: 44px;\n  min-height: 44px;\n  font-weight: 700;\n  border: none;\n}\n\n\n\n/** \n  nav  \n**/\nnav {\n  background-color: #176B87;\n}\n\nnav ul {\n  padding: 1rem;\n  margin: 0 auto;\n  text-align: center;\n}\nnav ul li {\n  display: inline-block;\n  list-style-type: none;\n  text-align: baseline;\n  padding: 0 1rem;\n  justify-content: space-around;\n  align-items: baseline;\n}\n\nnav ul li a {\n  padding: 15px;\n  text-decoration: none;\n  color: white;\n  cursor: pointer;\n  box-sizing: border-box;\n  min-width: 44px;\n  min-height: 44px;\n}\n\n.open {\n  -webkit-transform: translate(0, 0);\n  transform: translate(0, 0);\n}\n\nnav ul li a:hover {\n  font-weight: bolder;\n}\n\n/** \nmain content \n**/\n\nmain .content {\n  margin: 3rem 5rem;\n  \n}\n\n/** \n  jumbotron\n**/\n\nmain .jumbotron{\n  width: 1000px;\n  background-size: cover;\n  margin: 3rem auto 2rem ;\n  display: grid;\n  grid-template-columns: auto auto;\n  column-gap: 5rem;\n  background-color: lightblue;\n  border-top-left-radius: 99px;\n  border-bottom-right-radius: 99px;\n}\n\nmain .jumbotron img {\n  width: 100%;\n  border-bottom-right-radius: 99px;\n}\n\nmain .jumbotron h2 {\n  padding-top: 15vh;\n  color: white;\n  padding-left: 2rem;\n  font-size: 2rem;\n  font-weight: 900;\n}\n\n/* search bar */\nmain .search-bar .wrap{\n  display: grid;\n  grid-template-columns: auto auto;\n  width: 100%;\n  justify-content: center;\n  align-items: center;\n  margin: 0 auto;\n}\n\nmain .search-bar .wrap h3 {\n  text-align: center;\n  color: black;\n  font-size: 2rem;\n  padding: 1rem 0;\n  font-weight: 700;\n}\n\nmain .search-bar .wrap h3 span {\n  border-bottom: 3px solid black; \n  padding: 5px;\n  \n}\n\n/* \n  Search bar item \n*/\n/* main .search {\n  width: 100%;\n  position: relative;\n  justify-content: end;\n  display: flex;\n}\n\nmain .content .searchTerm {\n  width: 100%;\n  border: 3px solid #00B4CC;\n  border-right: none;\n  padding: 5px;\n  border-radius: 5px 0 0 5px;\n  outline: none;\n  color: #9DBFAF;\n}\n\nmain .content .searchTerm:focus{\n  color: black;\n} \n\nmain .content .searchButton {\n  width: 40px;\n  height: 36px;\n  border: 1px solid #00B4CC;\n  background: #00B4CC;\n  text-align: center;\n  color: #fff;\n  border-radius: 0 5px 5px 0;\n  cursor: pointer;\n  font-size: 20px;\n} */\n\n/* \n  main content \n*/\nmain {\n  padding: 32px;\n}\n \n.content {\n  margin: 0 auto 5rem;\n  min-height: 100%;\n}\n\nmain .content h2 {\n  text-align: center;\n  color: black;\n  font-size: 2rem;\n  padding: 1rem 0;\n  font-weight: 700;\n}\n\nmain .content h2 span {\n  border-bottom: 3px solid black; \n  padding: 5px;\n}\n\n/* \n  Restaurants \n*/\n.restaurants {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 16px;\n  margin: 32px 0;\n}\n\n/* \n  Restaurant item \n*/\n\n.restaurant-item {\n  width: 100%;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  border-radius: 8px;\n  overflow: hidden;\n}\n\n.restaurant-item__header {\n  position: relative;\n}\n \n.restaurant-item .restaurant-item__header .restaurant-item__header__poster {\n  width: 100%;\n  height: 20rem;\n}\n \n.restaurant-item .restaurant-item__header .restaurant-item__header__city {\n  position: absolute;\n  margin: 0;\n  bottom: 20px;\n  left: 0;\n  display: inline-block;\n  background-color: #00B4CC;\n  color: white;\n  border-top-right-radius: 10px;\n  border-bottom-right-radius: 10px;\n}\n \n.restaurant-item .restaurant-item__header .restaurant-item__header__city p {\nmargin: 10px;\n}\n \n.restaurant-item .restaurant-item__content {\n  padding: 16px;\n}\n \n.restaurant-item .restaurant-item__content h3 {\n  margin: 0 0 10px 0;\n  color: #00B4CC;\n}\n \n.restaurant-item .restaurant-item__content h3 a {\n  text-decoration: none;\n}\n \n.restaurant-item .restaurant-item__content p {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 4; /* number of lines to show */\n  -webkit-box-orient: vertical;\n}\n\n.restaurant-item .restaurant-item__footer {\n  margin: 0.5rem auto 2.5rem;\n  text-align: center;\n  justify-content: center;\n  align-items: center;\n}\n.restaurant-item .restaurant-item__footer span  {\n  background-color: #00B4CC;\n  margin: 0 auto;\n  padding: 0.8rem 1rem;\n  border-radius: 10px;\n}\n\n.restaurant-item .restaurant-item__footer a {\n  text-decoration: none;\n  text-align: center;\n  color: white;\n  font-weight: 500;\n  padding: 1rem;\n  cursor: pointer;\n  min-width: 44px;\n  min-height: 44px;\n}\n\n.restaurant-item .restaurant-item__footer a:hover {\n  font-weight: 700;\n}\n\n/* \n  restaurant \n*/\n\n.restaurant {\n  margin: 0 auto;\n  width: 100%;\n  max-width: 800px;\n\n}\n \n.restaurant .restaurant__poster {\n  width: 100%;\n  max-width: 400px;\n}\n \n.restaurant .restaurant__info h4 {\n  margin: 8px 0;\n}\n \n/*  \n   restaurant-detail \n*/\n.restaurant-detail {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 10px;\n}\n\n.restaurant-detail p {\n  font-size: 16px;\n}\n\n.restaurant-detail h4 {\n  font-size: 18px;\n}\n\n.restaurant-detail span.border-bottom{\n  border-bottom: 1px solid black;\n}\n\n.restaurant-detail__content__review__item span.text-date {\n  color: #176B87;\n  opacity: 0.8;\n  font-size: 16px;\n}\n\n/* \n  pagination \n*/\n.restaurant-detail__pagination {  \n  margin: 0 0 1rem;\n  padding: 10px;\n  grid-column-start: 1;\n  grid-column-end: 3;\n}\n\n.restaurant-detail__pagination a {  \n  text-decoration: none;\n  padding: 14px ;\n  font-size: 1rem;\n  font-weight: 500;\n  cursor: pointer;\n  min-width: 44px;\n  min-height: 44px;\n}\n\n.restaurant-detail__pagination span {\n  padding: 0;\n  margin: 0;\n  font-size: 1rem;\n  font-weight: 500;\n}\n \n.left-side {\n  grid-column-start: 1;\n  grid-column-end: 2;\n  padding: 0;\n  margin: 0;\n}\n\n.left-side img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n\n.right-side {\n  grid-column-start: 2;\n  grid-column-end: 3;\n  padding: 0 16px;\n  justify-items: center;\n  align-items: center;\n}\n\n.right-side h2 span  {\n  border-radius: 20px;\n  background-color: #176B87;\n  color: white;\n  padding: 10px;\n}\n\n.right-side p span.text-bold {\n  font-weight: 500;\n}\n\n.bottom-side {\n  grid-column-start: 1;\n  grid-column-end: 3;\n}\n\n.bottom-side h2 {\n  font-size: 2rem;\n  padding: 1rem 0;\n  text-align: center;\n  font-weight: 700;\n  margin: 0;\n}\n\n.bottom-side h2 span{\n  border-bottom: 3px solid black; \n  padding: 5px;\n}\n\n.bottom-side h3 span{\n  border-radius: 20px;\n  background-color: #00B4CC;\n  color: white;\n  padding: 10px;\n}\n\n.bottom-side p > span.text-bold {\n  font-weight: 500;\n\n}\n\n.restaurant-detail__content__wrapper {\n  margin-bottom: 2rem;\n}\n\n.restaurant-detail__content__review__item {\n  box-shadow: -1px 9px 20px 0px rgba(111,111,111,0.75);\n  -webkit-box-shadow: -1px 9px 20px 0px rgba(111,111,111,0.75);\n  -moz-box-shadow: -1px 9px 20px 0px rgba(111,111,111,0.75);  \n  margin: 1rem 0;\n}\n\n.restaurant-detail__content__review p {\n  padding: 10px;\n}\n/*\n  Like\n*/\n\n.like {\n  width: 55px;\n  height: 55px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #00B4CC;\n  \n  position: fixed;\n  bottom: 16px;\n  right: 16px;\n  border-radius: 50%;\n  border: 0;\n  \n  font-size: 18px;\n  color: white;\n  cursor: pointer;\n}\n\n/* \nFavorite \n*/\n\n.content h2 span {\n  border-bottom: 3px solid black; \n  padding: 5px;\n}\n\n/* \n  form-review \n*/\n\n#formReview {\n  padding: 16px;\n}\n\n#formReview h3 span{\n  border-radius: 20px;\n  background-color: #00B4CC;\n  color: white;\n  padding: 10px;\n}\n\n.reviews-form {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 1rem;\n  padding-bottom: 32px;\n}\n\n.reviews-form-field {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n\n.reviews-form-label {\n  color: #176B87;\n  font-size: 16px;\n}\n\n.reviews-form-input {\n  display: inline-block;\n  border-radius: 0.25rem;\n  border: 1px solid #176B87;\n  padding: 16px;\n  font-size: 14px;\n  color: #176B87;\n  min-width: 44px;\n}\n\n\n.reviews-form-input:focus {\n  outline: 2px solid #00B4CC;\n}\n\n.reviews-form-submit {\n  width: 100%;\n  border-radius: 4px;\n  border: 1px solid #00B4CC;\n  padding: 16px;\n  font-size: 16px;\n  color: white;\n  background-color: #176B87;\n  cursor: pointer;\n  min-width: 44px;\n}\n\n.reviews-form-submit:focus {\n  outline: 2px solid #176B87;\n}\n\n\n/*\n  Footer\n*/\n \nfooter {\n  padding: 16px;\n  background-color: #00B4CC;\n}\n \nfooter h4 {\n  text-align: center;\n  color: white;\n  opacity: 0.8;\n}\n "],sourceRoot:""}]);const o=i},392:(n,A,r)=>{r.d(A,{Z:()=>o});var t=r(319),e=r.n(t),a=r(988),i=r.n(a)()(e());i.push([n.id,"/* \n  tablet\n*/\n@media (min-width: 768px) and (max-width: 920px) {\n  main {\n    padding: 0;\n  }\n    main .jumbotron {\n      width: 100%;\n      height: auto;\n      display: grid;\n      grid-template-columns: auto;\n      border-radius: 0;\n      gap: 0;\n      margin: 0;\n  \n    }\n    \n    main .jumbotron img {\n      grid-row-start: 1;\n      border-radius: 0;\n      border-bottom: 5px solid black;\n    }\n  \n    main .jumbotron h2 {\n      border: 5px solid black;\n      padding: 10px;\n      margin: 0 auto;\n      width: max-content;\n      font-size: 1.5rem;\n      z-index: 2;\n      transform: translate(0, -5vh);\n      background-color: rgba(23, 107, 135, 1);\n      border-radius: 10px;\n  \n    }\n\n    main .content h2.content__heading span{\n      font-size: 1.5rem;\n    }\n\n    main #restaurants {\n      display: grid;\n      grid-template-columns: repeat(2, 1fr);\n      gap: 20px;\n      margin: 32px 0;\n    }\n\n  }\n  \n  /* \n    Mobile  \n  */\n  @media screen and (max-width: 768px) {\n    header #hamburgerButton {\n      display: block;\n    }\n  \n    nav#drawer {\n      display: block;\n      opacity: 1;\n      z-index: 1;\n      background-color: #176B87;\n      position: absolute;\n      width: 100%;\n      height: fit-content;\n      -webkit-transform: translate(0, 300%);\n      transform: translate(0, -300%);\n    }\n    nav#drawer.open {\n      transform: translate(0,68%)\n    }\n  \n    nav ul li {\n      display: block;\n      padding: 1rem;    \n    }\n  \n    main {\n      margin: 0;\n      padding: 0;\n    }\n\n    main .jumbotron {\n      margin: 1rem 0;\n      width: 100%;\n      height: auto;\n      display: grid;\n      grid-template-columns: auto;\n      border-radius: 0;\n      gap: 0;\n  \n    }\n  \n    main .jumbotron img {\n      grid-row-start: 1;\n      border-radius: 0;\n      border-bottom: 5px solid black;\n    }\n  \n    main .jumbotron h2 {\n      border: 5px solid black;\n      padding: 10px;\n      margin: 0 auto;\n      width: max-content;\n      font-size: 1.5rem;\n      z-index: 2;\n      transform: translate(0, -8vh);\n      background-color: rgba(23, 107, 135, 1);\n      border-radius: 10px;\n  \n    }\n\n    main .content {\n      margin: 0;\n      padding: 20px;\n    }\n    main .content h2.content__heading span{\n      font-size: 20px;\n    }\n\n    main #restaurants {\n      display: grid;\n      grid-template-columns: auto;\n      gap: 20px;\n      margin: 32px 0;\n    }\n    \n    main .restaurant-detail {\n      display: grid;\n      grid-template-columns: auto;\n      gap: 0;\n      padding: 10px;\n    }\n\n    main .restaurant-detail p {\n      font-size: 15px;\n    }\n\n    main .restaurant-detail__pagination {\n      margin: 0;\n    }\n    \n    main .restaurant-detail__pagination a {\n      font-size: 14px;\n\n    }\n    main .restaurant-detail .left-side {\n      grid-column-start: 1;\n      grid-column-end: 3;\n      margin: 0;\n      padding: 0;\n    }\n\n    main .restaurant-detail .right-side {\n      grid-column-start: 1;\n      grid-column-end: 3;\n      margin-bottom: 0;\n    }\n\n    main .restaurant-detail .bottom-side {\n      margin-top: 0;\n    }\n}","",{version:3,sources:["webpack://./src/styles/responsive.css"],names:[],mappings:"AAAA;;CAEC;AACD;EACE;IACE,UAAU;EACZ;IACE;MACE,WAAW;MACX,YAAY;MACZ,aAAa;MACb,2BAA2B;MAC3B,gBAAgB;MAChB,MAAM;MACN,SAAS;;IAEX;;IAEA;MACE,iBAAiB;MACjB,gBAAgB;MAChB,8BAA8B;IAChC;;IAEA;MACE,uBAAuB;MACvB,aAAa;MACb,cAAc;MACd,kBAAkB;MAClB,iBAAiB;MACjB,UAAU;MACV,6BAA6B;MAC7B,uCAAuC;MACvC,mBAAmB;;IAErB;;IAEA;MACE,iBAAiB;IACnB;;IAEA;MACE,aAAa;MACb,qCAAqC;MACrC,SAAS;MACT,cAAc;IAChB;;EAEF;;EAEA;;GAEC;EACD;IACE;MACE,cAAc;IAChB;;IAEA;MACE,cAAc;MACd,UAAU;MACV,UAAU;MACV,yBAAyB;MACzB,kBAAkB;MAClB,WAAW;MACX,mBAAmB;MACnB,qCAAqC;MACrC,8BAA8B;IAChC;IACA;MACE;IACF;;IAEA;MACE,cAAc;MACd,aAAa;IACf;;IAEA;MACE,SAAS;MACT,UAAU;IACZ;;IAEA;MACE,cAAc;MACd,WAAW;MACX,YAAY;MACZ,aAAa;MACb,2BAA2B;MAC3B,gBAAgB;MAChB,MAAM;;IAER;;IAEA;MACE,iBAAiB;MACjB,gBAAgB;MAChB,8BAA8B;IAChC;;IAEA;MACE,uBAAuB;MACvB,aAAa;MACb,cAAc;MACd,kBAAkB;MAClB,iBAAiB;MACjB,UAAU;MACV,6BAA6B;MAC7B,uCAAuC;MACvC,mBAAmB;;IAErB;;IAEA;MACE,SAAS;MACT,aAAa;IACf;IACA;MACE,eAAe;IACjB;;IAEA;MACE,aAAa;MACb,2BAA2B;MAC3B,SAAS;MACT,cAAc;IAChB;;IAEA;MACE,aAAa;MACb,2BAA2B;MAC3B,MAAM;MACN,aAAa;IACf;;IAEA;MACE,eAAe;IACjB;;IAEA;MACE,SAAS;IACX;;IAEA;MACE,eAAe;;IAEjB;IACA;MACE,oBAAoB;MACpB,kBAAkB;MAClB,SAAS;MACT,UAAU;IACZ;;IAEA;MACE,oBAAoB;MACpB,kBAAkB;MAClB,gBAAgB;IAClB;;IAEA;MACE,aAAa;IACf;AACJ",sourcesContent:["/* \r\n  tablet\r\n*/\r\n@media (min-width: 768px) and (max-width: 920px) {\r\n  main {\r\n    padding: 0;\r\n  }\r\n    main .jumbotron {\r\n      width: 100%;\r\n      height: auto;\r\n      display: grid;\r\n      grid-template-columns: auto;\r\n      border-radius: 0;\r\n      gap: 0;\r\n      margin: 0;\r\n  \r\n    }\r\n    \r\n    main .jumbotron img {\r\n      grid-row-start: 1;\r\n      border-radius: 0;\r\n      border-bottom: 5px solid black;\r\n    }\r\n  \r\n    main .jumbotron h2 {\r\n      border: 5px solid black;\r\n      padding: 10px;\r\n      margin: 0 auto;\r\n      width: max-content;\r\n      font-size: 1.5rem;\r\n      z-index: 2;\r\n      transform: translate(0, -5vh);\r\n      background-color: rgba(23, 107, 135, 1);\r\n      border-radius: 10px;\r\n  \r\n    }\r\n\r\n    main .content h2.content__heading span{\r\n      font-size: 1.5rem;\r\n    }\r\n\r\n    main #restaurants {\r\n      display: grid;\r\n      grid-template-columns: repeat(2, 1fr);\r\n      gap: 20px;\r\n      margin: 32px 0;\r\n    }\r\n\r\n  }\r\n  \r\n  /* \r\n    Mobile  \r\n  */\r\n  @media screen and (max-width: 768px) {\r\n    header #hamburgerButton {\r\n      display: block;\r\n    }\r\n  \r\n    nav#drawer {\r\n      display: block;\r\n      opacity: 1;\r\n      z-index: 1;\r\n      background-color: #176B87;\r\n      position: absolute;\r\n      width: 100%;\r\n      height: fit-content;\r\n      -webkit-transform: translate(0, 300%);\r\n      transform: translate(0, -300%);\r\n    }\r\n    nav#drawer.open {\r\n      transform: translate(0,68%)\r\n    }\r\n  \r\n    nav ul li {\r\n      display: block;\r\n      padding: 1rem;    \r\n    }\r\n  \r\n    main {\r\n      margin: 0;\r\n      padding: 0;\r\n    }\r\n\r\n    main .jumbotron {\r\n      margin: 1rem 0;\r\n      width: 100%;\r\n      height: auto;\r\n      display: grid;\r\n      grid-template-columns: auto;\r\n      border-radius: 0;\r\n      gap: 0;\r\n  \r\n    }\r\n  \r\n    main .jumbotron img {\r\n      grid-row-start: 1;\r\n      border-radius: 0;\r\n      border-bottom: 5px solid black;\r\n    }\r\n  \r\n    main .jumbotron h2 {\r\n      border: 5px solid black;\r\n      padding: 10px;\r\n      margin: 0 auto;\r\n      width: max-content;\r\n      font-size: 1.5rem;\r\n      z-index: 2;\r\n      transform: translate(0, -8vh);\r\n      background-color: rgba(23, 107, 135, 1);\r\n      border-radius: 10px;\r\n  \r\n    }\r\n\r\n    main .content {\r\n      margin: 0;\r\n      padding: 20px;\r\n    }\r\n    main .content h2.content__heading span{\r\n      font-size: 20px;\r\n    }\r\n\r\n    main #restaurants {\r\n      display: grid;\r\n      grid-template-columns: auto;\r\n      gap: 20px;\r\n      margin: 32px 0;\r\n    }\r\n    \r\n    main .restaurant-detail {\r\n      display: grid;\r\n      grid-template-columns: auto;\r\n      gap: 0;\r\n      padding: 10px;\r\n    }\r\n\r\n    main .restaurant-detail p {\r\n      font-size: 15px;\r\n    }\r\n\r\n    main .restaurant-detail__pagination {\r\n      margin: 0;\r\n    }\r\n    \r\n    main .restaurant-detail__pagination a {\r\n      font-size: 14px;\r\n\r\n    }\r\n    main .restaurant-detail .left-side {\r\n      grid-column-start: 1;\r\n      grid-column-end: 3;\r\n      margin: 0;\r\n      padding: 0;\r\n    }\r\n\r\n    main .restaurant-detail .right-side {\r\n      grid-column-start: 1;\r\n      grid-column-end: 3;\r\n      margin-bottom: 0;\r\n    }\r\n\r\n    main .restaurant-detail .bottom-side {\r\n      margin-top: 0;\r\n    }\r\n}"],sourceRoot:""}]);const o=i},968:(n,A,r)=>{var t=r(8),e=r.n(t),a=r(312),i=r.n(a),o=r(172),d=r.n(o),s=r(800),p=r.n(s),m=r(11),C=r.n(m),l=r(360),B=r.n(l),E=r(205),g={};g.styleTagTransform=B(),g.setAttributes=p(),g.insert=d().bind(null,"head"),g.domAPI=i(),g.insertStyleElement=C(),e()(E.Z,g),E.Z&&E.Z.locals&&E.Z.locals},677:(n,A,r)=>{var t=r(8),e=r.n(t),a=r(312),i=r.n(a),o=r(172),d=r.n(o),s=r(800),p=r.n(s),m=r(11),C=r.n(m),l=r(360),B=r.n(l),E=r(392),g={};g.styleTagTransform=B(),g.setAttributes=p(),g.insert=d().bind(null,"head"),g.domAPI=i(),g.insertStyleElement=C(),e()(E.Z,g),E.Z&&E.Z.locals&&E.Z.locals}},r={};function t(n){var e=r[n];if(void 0!==e)return e.exports;var a=r[n]={id:n,exports:{}};return A[n](a,a.exports,t),a.exports}t.m=A,n=[],t.O=(A,r,e,a)=>{if(!r){var i=1/0;for(p=0;p<n.length;p++){for(var[r,e,a]=n[p],o=!0,d=0;d<r.length;d++)(!1&a||i>=a)&&Object.keys(t.O).every((n=>t.O[n](r[d])))?r.splice(d--,1):(o=!1,a<i&&(i=a));if(o){n.splice(p--,1);var s=e();void 0!==s&&(A=s)}}return A}a=a||0;for(var p=n.length;p>0&&n[p-1][2]>a;p--)n[p]=n[p-1];n[p]=[r,e,a]},t.n=n=>{var A=n&&n.__esModule?()=>n.default:()=>n;return t.d(A,{a:A}),A},t.d=(n,A)=>{for(var r in A)t.o(A,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:A[r]})},t.o=(n,A)=>Object.prototype.hasOwnProperty.call(n,A),(()=>{var n={855:0};t.O.j=A=>0===n[A];var A=(A,r)=>{var e,a,[i,o,d]=r,s=0;if(i.some((A=>0!==n[A]))){for(e in o)t.o(o,e)&&(t.m[e]=o[e]);if(d)var p=d(t)}for(A&&A(r);s<i.length;s++)a=i[s],t.o(n,a)&&n[a]&&n[a][0](),n[a]=0;return t.O(p)},r=self.webpackChunkrestaurant_apps=self.webpackChunkrestaurant_apps||[];r.forEach(A.bind(null,0)),r.push=A.bind(null,r.push.bind(r))})(),t.nc=void 0;var e=t.O(void 0,[912,745,420,743],(()=>t(681)));e=t.O(e)})();
//# sourceMappingURL=app~3c3d65f0.bundle.js.map