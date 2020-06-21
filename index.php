<?php
$page = (isset($_GET['q']) && !empty($_GET['q'])) ? $_GET['q'] : 'home';
if (!file_exists('view/' . $page . '.php'))
{

    $page = 'home';
}

$meta = array(
    "home" => array(
        "title" => "Wholesale Organic Juice Pulps &amp; Rice | 11th Avenue Foods",
        "desc" => "Food manufacturers who work with us, directly support farmers! Our products are built on sustainable farming practices consistently providing quality food!"
    )
);

$BASE_URL = "https://11thavenuefoods.com/demo5/";

include ('view/header.php');
include ('view/' . $page . '.php');
include ('view/footer.php');

?>
