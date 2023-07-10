<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>個人情報確認画面</title>
</head>
<body>
    <h2>入力内容をご確認ください。</h2>
    <p>お名前：<?php echo $_POST['user_name'];
                        if(mb_strlen($_POST['user_name']) > 10) {
                            echo '文字数がオーバーしています。';
                        }
                        ?></p>
    <p>性別：<?php echo $_POST['user_gender'];?></p>
    <p>Eメールアドレス：<?php echo $_POST['user_email'];?></p>
</body>
</html>