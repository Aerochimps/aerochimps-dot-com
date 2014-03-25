<!DOCTYPE html>
<html lang="pt-br">
<head>
	<meta charset="utf-8"/>
	<title>Aerochimps - We make apps fly!</title>

	<!--[if lte IE 8]>
	<script src="bower_components/html5shiv/dist/html5shiv.js"></script>
	<![endif]-->

	<!-- Metas -->
	<meta name="viewport" content="width=device-width, initial-scale=1"/>
	<meta name="description" content=""/>
	<meta name="author" content="Aerochimps"/>
	<meta name="rating" content="general"/>
	<meta name="revisit-after" content="1 month"/>

	<!-- CSS -->
	<link rel="stylesheet" media="screen" href="css/app.css"/>

	<!-- Web Fonts -->
	<link href='http://fonts.googleapis.com/css?family=Roboto:400,100,100italic,300,300italic,400italic,500,500italic,700,700italic,900,900italic' rel='stylesheet' type='text/css'>
	<link href='http://fonts.googleapis.com/css?family=Roboto+Condensed:400,300,300italic,400italic,700,700italic' rel='stylesheet' type='text/css'>

	<!-- Standart Favicon -->
	<link rel="shortcut icon" type="image/png" href="img/deviceIcons/favicon@2x.png"/>
	<!-- For iPad with high-resolution Retina display running iOS ≥ 7: -->
	<link rel="apple-touch-icon-precomposed" sizes="152x152" href="img/deviceIcons/apple-touch-icon-152x152-precomposed.png">
	<!-- For iPad with high-resolution Retina display running iOS ≤ 6: -->
	<link rel="apple-touch-icon-precomposed" sizes="144x144" href="img/deviceIcons/apple-touch-icon-144x144-precomposed.png">
	<!-- For iPhone with high-resolution Retina display running iOS ≥ 7: -->
	<link rel="apple-touch-icon-precomposed" sizes="120x120" href="img/deviceIcons/apple-touch-icon-120x120-precomposed.png">
	<!-- For iPhone with high-resolution Retina display running iOS ≤ 6: -->
	<link rel="apple-touch-icon-precomposed" sizes="114x114" href="img/deviceIcons/apple-touch-icon-114x114-precomposed.png">
	<!-- For the iPad mini and the first- and second-generation iPad on iOS ≥ 7: -->
	<link rel="apple-touch-icon-precomposed" sizes="76x76" href="img/deviceIcons/apple-touch-icon-76x76-precomposed.png">
	<!-- For the iPad mini and the first- and second-generation iPad on iOS ≤ 6: -->
	<link rel="apple-touch-icon-precomposed" sizes="72x72" href="img/deviceIcons/apple-touch-icon-72x72-precomposed.png">
	<!-- For non-Retina iPhone, iPod Touch, and Android 2.1+ devices: -->
	<link rel="apple-touch-icon-precomposed" href="img/deviceIcons/apple-touch-icon-precomposed.png">

	<!-- Facebook -->
	<meta property="og:site_name" content=""/>
	<meta property="og:url" content="http://"/>
	<meta property="og:title" content=""/>
	<meta property="og:description" content=""/>
	<meta property="og:type" content="website"/>
	<meta property="og:image" content="http://"/>

	<!-- Google Analytics -->
	<script type="text/javascript">
		var _gaq = _gaq || [];
		_gaq.push(['_setAccount', 'UA-XXXXXXXXX-X']);
		_gaq.push(['_setDomainName', 'aerochimps.com']);
		_gaq.push(['_trackPageview']);

		(function() {
		var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
		ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
		var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
		})();
	</script>
</head>
<body>

	<section class="main">
		<?php include("include/mainHeader.php"); ?>
		<section class="content">
			<?php include("include/chimps.php"); ?>
			<?php include("include/team.php"); ?>
			<?php include("include/projects.php"); ?>
			<?php include("include/clients.php"); ?>
			<?php include("include/contact.php"); ?>
		</section> <!-- End .content -->
		<?php include("include/mainFooter.php"); ?>
	</section> <!-- End .main -->

	<!-- Scripts -->
	<script src="js/cssua.min.js"></script>
	<script src="bower_components/jquery/dist/jquery.min.js"></script>
	<script src="bower_components/animatescroll/animatescroll.js"></script>
	<script src="js/jquery.parallax.js"></script>
	<script src="bower_components/jquery.expander/jquery.expander.min.js"></script>
	<script src="bower_components/jquery-validation/jquery.validate.js"></script>
	<script src="js/frontend.js"></script>
	<script src="js/contact.js"></script>
	<script src="js/facebook.js"></script>
	<script src="js/scroll.js"></script>
</body>
</html>