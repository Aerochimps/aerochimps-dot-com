<!DOCTYPE html>
<html lang="pt-br">
<head>
	<meta charset="utf-8"/>
	<title>Aerochimps - We make apps fly!</title>

	<!--[if lte IE 8]>
	<script src="bower_components/html5shiv/dist/html5shiv.js"></script>
	<![endif]-->

	<!-- Metas -->
	<meta content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' name='viewport' />
	<meta name="language" content="pt-br, en-us" />
	<meta name="description" content="Desenvolvemos aplicativos web e mobile, com soluções criativas e inovadoras, adequadas às necessidades do cliente e focadas no usuário." />
	<meta name="keywords" content="web development, desenvolvimento web floripa, desenvolvimento de aplicativos floripa, web development brazil, mobile brazil, ux floripa, ux florianópolis, consultoria ux"/>
	<meta name="author" content="Aerochimps" /> 
	<meta name="classification" content="Internet" /> 
	<meta name="rating" content="general" /> 
	<meta name="copyright" content="Aerochimps" /> 
	<meta name="revisit-after" content="1 month" />	 
	<link rel="canonical" href="http://aerochimps.com/" /> 	

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
	<meta property="og:site_name" content="Aerochimps - We make apps fly!"/>
	<meta property="og:url" content="http://aerochimps.com/"/>
	<meta property="og:title" content="Aerochimps - We make apps fly!"/>
	<meta property="og:description" content="Empresa de desenvolvimento de aplicativos web e mobile localizada em Florianópolis, Brasil. Soluções criativas e inovadoras para clientes e usuários."/>
	<meta property="og:type" content="website"/>
	<meta property="og:image" content="http://aerochimps.com/img/deviceIcons/aerochimps-facebook-icon.png"/>

	<!-- Google Analytics -->
	<script type="text/javascript">
		var _gaq = _gaq || [];
		_gaq.push(['_setAccount', 'UA-28698569-1']); //Please, be carefull and remove our Analytics ID if you use this code :)
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
	<div class="overlay">
		<div class="surprise">
			<!-- Do you try konami code? -->
		</div><!-- End .surprise -->
	</div>
	<!-- Scripts -->
	<script src="js/cssua.min.js"></script>
	<script src="bower_components/jquery/dist/jquery.min.js"></script>
	<script src="bower_components/animatescroll/animatescroll.js"></script>
	<script src="bower_components/jquery.expander/jquery.expander.min.js"></script>
	<script src="bower_components/jquery-validation/jquery.validate.js"></script>
	<script src="js/frontend.js"></script>
	<script src="js/contact.js"></script>
	<script src="js/scroll.js"></script>
	<script src="js/facebook.js"></script>

</body>
</html>