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
                <div class="menu_open"><a href="#"><img src="./images/btn_menu.png" alt="open" /></a></div>
                <div class="gnb_open"><a href="#"><img src="./images/btn_menu.png" alt="close" class="wView" /><img src="./images/Mmenu.png" alt="close" class="mView" /></a></div>
            </div>
            <div class="gnb_bg" style="display: block;">
                <div class="gnb_wrap">
                    <!-- <div class="menuUlHeight"> -->
                    <a href="index1.php"><img src="./images/logo.png" alt="logo"></a>
                    <ul class="gnb">
                        <li>
                            <a href="#" onClick="return false;">회사소개</a>
                            <ul class="s_gnb">
                                <li><a href="greet.php">인사말</a></li>
                                <li><a href="history.php">회사연혁</a></li>
                                <!-- <li><a href="organization.php">조직도</a></li> -->
                                <li><a href="location.php">찾아오시는 길</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="#" onClick="return false;">제품소개</a>
                            <ul class="s_gnb">
                                <li><a href="gases.php">Gases</a></li>
                                <li><a href="chemicalSub1.php">Chemical</a></li>
                                <li><a href="gasket.php">Gasket</a></li>
                                <li><a href="bead.php">BEAD</a></li>
                                <li><a href="fdt_novec1.php">FDT</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="#" onClick="return false;">홍보센터</a>
                            <ul class="s_gnb">
                                 <li><a href="prRoom.php?page=1&currentFun=all">홍보자료실</a></li>
                                <li><a href="catalogue.php?page=1&currentFun=all">카탈로그</a></li>
                                <li><a href="msds.php?page=1&currentFun=all">MSDS</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="#" onClick="return false;">고객지원</a>
                            <ul class="s_gnb">
                               <li><a href="noticeList.php?page=1&currentFun=all">공지사항</a></li>
                                <li><a href="inquiry.php">온라인문의</a></li>
                            </ul>
                        </li>
                    </ul>
                <!-- </div> -->
                   <!--  <div class="sns">
                        <a href="#" onClick="return false;">개인정보처리방침</a><span>|</span>
                        <a href="#" onClick="return false;">회사소개</a><span>|</span>
                        <a href="#" onClick="return false;">문의하기</a>
                    </div> -->
                    <!-- <div> -->
                    <div class="terms_area">
                        <div class="sns">
                            <a href="#" onClick="return false;">개인정보처리방침</a><span>|</span>
                            <a href="#" onClick="return false;">회사소개</a><span>|</span>
                            <a href="#" onClick="return false;">문의하기</a>
                        </div>
                        <p>본사 : TEL 031-221-6782 <br class="mView">FAX 031-221-6783 </p>
                        <p>증평사업장 : TEL 043-838-9562 <br class="mView">FAX 043-838-9563</p>
                    </div>

                    <div class="company_info">
                         Copyright (c) <?php if (isset($_SESSION['userId'])) { ?><a href="logout.php">주식회사 퓨엠</a> <?php }else { ?><a href="login.php?status=">주식회사 퓨엠</a> <?php }?>All rights reserved
                    </div>
                <!-- </div> -->
                    <div class="gnb_wrap_close"><a href="#" onClick="return false;"><img src="./images/btn_gnb_close.png" alt="close" /></a></div>
                </div>
            </div>
        </div>
    </div>
</head>
<script type="text/javascript">
    $(document).ready(function() {
        $(".menu_open").hide();
    });
</script>
</body>
</html>