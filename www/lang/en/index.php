<!DOCTYPE html>
<html <?php include("include/lang.php"); ?>>
<head>
	<meta charset="utf-8"/>

	<!-- Google Analytics -->
	<?php include("../../include/analytics.php"); ?>

	<title>Aerochimps - We make apps fly!</title>

	<!--[if lte IE 8]>
	<script src="bower_components/html5shiv/dist/html5shiv.js"></script>
	<![endif]-->

	<!-- Metas -->
	<meta name='viewport' content='width=device-width, initial-scale=1.0' />
	<meta name="author" content="Aerochimps" />
	<meta name="rating" content="general" />
	<meta name="dcterms.rights" content="Aerochimps" />
	<meta name="dcterms.dateCopyrighted" content="2014" />
	<meta name="revisit-after" content="1 month" />
	<link rel="canonical" href="https://aerochimps.com/" />

	<!-- Meta related to language -->
	<?php include("include/metatags.php"); ?>

	<!-- File links -->
	<?php include("../../include/fileLinks.php"); ?>

	<!-- Icon Lins -->
	<?php include("../../include/iconLinks.php"); ?>

	<!-- Facebook -->
	<meta property="og:type" content="website"/>
	<meta property="og:image" content="https://aerochimps.com/img/deviceIcons/aerochimps-facebook-icon.png"/>
	<!-- Meta related to language -->
	<?php include("include/metatagsFacebook.php"); ?>
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
			<!-- Did you try konami code? -->
		</div><!-- End .surprise -->
	</div>
	<!-- Scripts -->
	<?php include("../../include/scripts.php"); ?>
	<?php include("include/locatedScripts.php"); ?>
</body>
</html>