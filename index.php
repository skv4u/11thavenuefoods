<?php
$page = (isset($_GET['q']) && !empty($_GET['q'])) ? $_GET['q'] : 'home';
if (!file_exists('view/' . $page . '.php'))
{

    $page = 'home';
}
$BASE_URL = "https://11thavenuefoods.com/demo5/";
$meta = array(
    "home" => array(
        "title" => "Wholesale Organic Juice Pulps &amp; Rice | 11th Avenue Foods",
        "desc" => "Food manufacturers who work with us, directly support farmers! Our products are built on sustainable farming practices consistently providing quality food!",
        "url" => $BASE_URL,
        "image" => $BASE_URL . "img/logo.png",
        "image_type" => "image/png"
    ),
    "aboutus" => array(
        "title" => "Rice Wholesale Suppliers | 11th Avenue Foods",
        "desc" => "Our values are built on the hard work of sustainable farmers growing the best product available at competitive prices aligning with memorable customer service!",
        "url" => $BASE_URL . $page,
        "image" => $BASE_URL . "img/farming.png",
        "image_type" => "image/png"
    ),
    "rice" => array(
        "title" => "Wholesale Rice Full Description | 11th Avenue Foods",
        "desc" => "Rice is a staple in any kitchen, &amp; with so many different types, it lends itself to a limitless number of recipes. Find an ideal rice selection at 11th Avenue!",
        "url" => $BASE_URL . $page,
        "image" => $BASE_URL . "img/ricebg.png",
        "image_type" => "image/png"
    ),
    "mango" => array(
        "title" => "Wholesale Mango Farming Methods | 11th Avenue Foods",
        "desc" => "Worldwide, there are several hundred cultivars of mango. Depending on the variety, mango fruit varies in size, shape, sweetness, and color. Learn more!",
        "url" => $BASE_URL . $page,
        "image" => $BASE_URL . "img/fruits.png",
        "image_type" => "image/png"
    ),
    "coconut" => array(
        "title" => "Coconut Global Production | 11th Avenue Foods",
        "desc" => "Humans have used Coconuts for thousands of years &amp; may have spread to their present range tanks to Pacific island settlers. Learn more about the tree of life!",
        "url" => $BASE_URL . $page,
        "image" => $BASE_URL . "img/coconut.png",
        "image_type" => "image/png"
    ),
    "coconut" => array(
        "title" => "Pineapple Historic Production | 11th Avenue Foods",
        "desc" => "Pineapple is a tropical plant with nutritious fruit. It&#039;s a significant powerhouse, learn about the global history of pineapple! Order yours at 11th Avenue!",
        "url" => $BASE_URL . $page,
        "image" => $BASE_URL . "img/pine-apple.png",
        "image_type" => "image/png"
    ),
    "serices" => array(
        "title" => "Wholesale Rice &amp; Fruit Services | 11th Avenue Foods",
        "desc" => "Our firm has been built on nearly a half-century of experience in working with world-class industrial food manufactures to source rice, fruit juices, &amp; purees!",
        "url" => $BASE_URL . $page,
        "image" => $BASE_URL . "img/service-banner.png",
        "image_type" => "image/png"
    ),
    "contact" => array(
        "title" => "Connect With Your Rice &amp; Fruit Supplier | 11th Avenue Foods",
        "desc" => "11th Avenue Foods 13 Deborah Dr, Somerset NJ 08873| +17327986726 | business@11thavenuefoods.com | www.11thavenufood.com",
        "url" => $BASE_URL . $page,
        "image" => $BASE_URL . "img/service-banner.png",
        "image_type" => "image/png"
    )
);



include ('view/header.php');
include ('view/' . $page . '.php');
include ('view/footer.php');

?>
