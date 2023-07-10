<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>個人情報フォーム</title>
</head>
<body>
    <h2>個人情報入力フォーム</h2>
    <form action="confirmation.php" method="post">
        <table>
            <tr>
                <td>お名前</td>
                <td>
                    <input type="text" name="user_name" required>
                </td>
            </tr>
            <tr>
                <td>性別</td>
                <td>
                    <input type="radio" name="user_gender" value="男性">男性
                    <input type="radio" name="user_gender" value="女性">女性
                </td>
            </tr>
            <tr>
                <td>メールアドレス</td>
                <td>
                    <input type="text" name="user_email" required>
                </td>
            </tr>
        </table>
        <input type="submit" value="送信">
    </form>
</body>
</html>