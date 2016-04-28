$(document).on("ready", function () {
	makeMailLink();
});

function makeMailLink() {
	mailUser = "lockan";
	mailDomain = "lockan.net";
	email = mailUser + '/@' + mailDomain;
	document.getElementById("mail_link").innerHTML = "<a href=" + "mai" + "lto:" + mailUser + "@" + mailDomain + "><span class='glyphicon glyphicon-envelope gi2'></span> &nbsp;E-mail</a>";
}