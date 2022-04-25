function header() {
	let html = "";
	html += "<div class='header'>";
	html += "  <div class='header__logo'>";
	html += "    <h1 class='logo'>";
	html += "       <a href='.' class='logo__link'>";
	html += "           <img class='logo__img' src='img/logo.svg' alt=''>";
	html += "       </a>";
	html += "    </h1>";
	html += "  </div>";
	html += "  <nav class='global-nav'>";
	html += "    <ul class='global-nav__list'>";
	html += "       <li class='global-nav__item'>";
	html += "           <a class='global-nav__link' href='news.html'>news</a>";
	html += "       </li>";
	html += "       <li class='global-nav__item'>";
	html +=
		"           <a class='global-nav__link' href='service.html'>service</a>";
	html += "       </li>";
	html += "       <li class='global-nav__item'>";
	html += "           <a class='global-nav__link' href='works.html'>works</a>";
	html += "       </li>";
	html += "       <li class='global-nav__item'>";
	html +=
		"           <a class='global-nav__link' href='company.html'>company</a>";
	html += "       </li>";
	html += "       <li class='global-nav__item'>";
	html +=
		"           <a class='global-nav__link' href='recruit.html'>recruit</a>";
	html += "       </li>";
	html += "       <li class='global-nav__item'>";
	html +=
		"           <a class='global-nav__link' href='contact.html'>contact</a>";
	html += "       </li>";
	html += "    </ul>";
	html += "  </nav>";
	html += "  <button type='button' class='btn-menu'>";
	html += "    <span class='btn-menu__line'></span>";
	html += "  </button>";
	html += "</div>";
	document.write(html);
}
