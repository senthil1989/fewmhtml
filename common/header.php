<?php
$basename = basename($_SERVER['REQUEST_URI']);
$headerBg="";
if($basename=="index1.php") {
    $headerBg="background: rgba(255, 255, 255, 0.35);";
}else {
    $headerBg="background: #ffff;";
}
?>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" lang="ko" xml:lang="ko">
<head>
    <title>FEWM</title>
    <meta name="viewport" content="width=device-width, user-scalable=0, initial-scale=1, minimum-scale=1, maximum-scale=1" />
    <link rel="stylesheet" href="./css/common.css"/>
    <script type="text/javascript" src="./js/jquery-1.8.3.min.js"></script>
    <script type="text/javascript" src="./js/jquery.flexslider-min.js"></script>
    <script type="text/javascript" src="./js/common.js"></script>
  </head>
  <body>
    <div id="wrap">
        <div>
            

            <div class="main_top clfx">  
              <div class="wView">
           <div class="mview menu_open" id="ham"><a href="#"><img src="./images/btn_menu.png" alt="open" /></a></div>
           </div>
                <div class="gnb_open"><a href="#"><img src="./images/btn_menu.png" alt="close" class="wView" /><img src="./images/Mmenu.png" alt="close" class="mView" /></a></div>
            </div>
            <div class="gnb_bg" style="<?php echo $headerBg; ?>">
                <div class="gnb_wrap">
                    <div class="flag">
                        <a href="../index.php"><img src="./images/flag1.png"></a>
                        <a href="index.php"><img src="./images/flag2.png"></a>
                    </div>
                    <div class="MmenuHeight">
                    <a href="index.php"><img src="./images/logo.png" alt="logo"></a>
                    <ul class="gnb">
                        <li>
                            <a href="#" onClick="return false;">About the Company</a>
                            <ul class="s_gnb">
                                <li><a href="greet.php">Message from CEO</a></li>
                                <li><a href="history.php">History</a></li>
                                <!-- <li><a href="organization.php">Organizational chart</a></li> -->
                                <li><a href="location.php">Location</a></li>  
                            </ul>
                        </li>
                        <li>
                            <a href="#" onClick="return false;">Product</a>
                            <ul class="s_gnb">
                                <li><a href="gases.php">Gases</a></li>
                                <li><a href="chemicalSub1.php">Chemical</a></li>
                                <li><a href="gasket.php">Gasket</a></li>
                                <li><a href="bead.php">BEAD</a></li>
                                <li><a href="fdt_novec1.php">FDT</a></li>
                                <li><a href="avs.php">Shutter Valve</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="#" onClick="return false;">Employment</a>
                            <ul class="s_gnb">
                                <li><a href="recruit1.php?page=1">Employment</a></li>
                                <li><a href="recruit2.php">Apply</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="#" onClick="return false;">Customer Support</a>
                            <ul class="s_gnb">
                                <li><a href="noticeList.php?page=1&currentFun=all">Notice</a></li>
                                <li><a href="catalogue.php?page=1&currentFun=all">Catalogue</a></li>
                                <li><a href="msds.php?page=1&currentFun=all">MSDS</a></li>
                                <li><a href="prRoom.php?page=1&currentFun=all">Promotion Center</a></li>
                                <li><a href="inquiry.php">Inquiry</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
                   <!--  <div class="sns">  
                        <a href="#" onClick="return false;">개인정보처리방침</a><span>|</span>
                        <a href="#" onClick="return false;">회사소개</a><span>|</span>
                        <a href="#" onClick="return false;">문의하기</a>
                    </div> -->
                    <div class="mMar">
                    <div class="terms_area">
                        <div class="sns">
                            <a href="privatepolicy.php">Privacy policy</a><span>|</span>
                            <a href="greet.php">About the company</a><span>|</span>
                            <a href="legal.php">Legal Notices</a>
                        </div>
                        <p>Head office : TEL 031-221-6782 <br class="mView eView">FAX 031-221-6783 </p>
                        <p>Jeunggpyeong : TEL 043-838-9562 <br class="mView eView">FAX 043-838-9563</p>
                    </div>

                    <div class="company_info">
                        Copyright (c) <?php if (isset($_SESSION['userId'])) { ?><a href="logout.php">주식회사 퓨엠</a> <?php }else { ?><a href="login.php?status=">주식회사 퓨엠</a> <?php }?><br class="eView"/>All rights reserved
                    </div>
                </div>
                    <div class="gnb_wrap_close"><a href="#" onClick="return false;"><img src="./images/btn_gnb_close.png" alt="close" /></a></div>
                </div>
            </div>
        </div>
    </div>
</head>
<script>
$(document).ready(function(){
  $(".wrapper").click(function(){
    $(".gnb_bg").hide();
    $("#ham").show();
    $(".s_gnb").slideUp();
  });
});
</script>
</body>
</html>