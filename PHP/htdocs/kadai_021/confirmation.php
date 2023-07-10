<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>個人情報確認画面</title>
</head>
<body>
    <h2>入力内容をご確認ください。</h2>
    <p>お名前：<?php 
                        if(mb_strlen($_POST['user_name']) > 10) {
                            echo '文字数がオーバーしています。';
                        } else {
                            echo $_POST['user_name'];
                        }
                        ?></p>
    <p>性別：<?php echo $_POST['user_gender'];?></p>
    <p>Eメールアドレス：<?php
                            $emailcheck = $_POST['user_email'];
                            if(preg_match_all('/[a-zA-Z0-9.][^!^?]+@[a-zA-Z0-9.]+/', $emailcheck)) { //[^!^?]は無効だった。
                                echo $_POST['user_email'];
                            } else {
                                echo '入力できない記号が含まれています。';
                            }
                            ?></p>
</body>
</html>