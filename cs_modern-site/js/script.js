//---------------------------------
// loading
//---------------------------------
window.onload = function () {
	const spinner = document.getElementById("js-loading");

	// Add .loaded to .loading
	spinner.classList.add("loaded");
};

//---------------------------------
// cursor
//---------------------------------
$(function () {
	//カーソル要素
	const cursor = $("#js-cursor");
	//mousemoveイベントでカーソル要素を移動
	$(document).on("mousemove", function (e) {
		//マウス位置を取得するプロパティ
		const x = e.clientX;
		const y = e.clientY;
		//カーソル要素のcssを書き換え。重複しなければtransformを使うのがおすすめ
		cursor.css({
			opacity: "1",
			top: y + "px",
			left: x + "px",
		});
	});

	//aタグホバー
	$("a").on({
		mouseenter: function () {
			//activeクラス付与
			cursor.addClass("active");
		},
		mouseleave: function () {
			cursor.removeClass("active");
		},
	});
});
